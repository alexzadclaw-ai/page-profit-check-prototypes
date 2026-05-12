#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const batch = process.argv[2];
const shouldPublish = process.argv.includes('--publish');
const shouldPush = process.argv.includes('--push');
if (!batch) {
  console.error('Usage: node scripts/finalize-nightly-batch.js <batch> [--publish] [--push]');
  process.exit(1);
}

function run(label, command, args, options = {}) {
  console.log(`\n== ${label} ==`);
  console.log([command, ...args].join(' '));
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    stdio: 'pipe',
    ...options
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) {
    const err = new Error(`${label} failed with exit ${result.status}`);
    err.status = result.status;
    throw err;
  }
  return result;
}

function assertContains(file, needle, label) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) throw new Error(`${label} missing: ${file}`);
  const text = fs.readFileSync(full, 'utf8');
  if (!text.includes(needle)) throw new Error(`${label} does not reference fresh batch ${needle}: ${file}`);
}

function writeJson(rel, value) {
  const full = path.join(root, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, JSON.stringify(value, null, 2) + '\n');
}

function runJson(label, command, args) {
  console.log(`\n== ${label} ==`);
  console.log([command, ...args].join(' '));
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    stdio: 'pipe'
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  let parsed = {};
  try {
    parsed = JSON.parse(result.stdout || '{}');
  } catch (err) {
    const parseErr = new Error(`${label} did not return valid JSON`);
    parseErr.status = result.status || 1;
    throw parseErr;
  }
  return { result, parsed };
}

try {
  const { parsed: packageQa } = runJson('package completeness gate', process.execPath, ['scripts/check-batch-package.js', batch, '--json']);
  writeJson(`state/${batch}-package-qa.json`, packageQa);

  const { result: fidelityResult, parsed: fidelityQa } = runJson('hard visual-fidelity gate', process.execPath, ['scripts/check-nightly-fidelity-gate.js', batch, '--json']);
  writeJson(`state/${batch}-fidelity-qa.json`, fidelityQa);

  if (packageQa.incompleteCount) {
    throw new Error(`package QA failed: ${packageQa.incompleteCount} incomplete item(s)`);
  }
  if (fidelityResult.status !== 0 || fidelityQa.failedCount) {
    throw new Error(`fidelity gate failed: ${fidelityQa.failedCount} item(s)`);
  }

  if (shouldPublish) {
    run('dashboard rebuild', process.execPath, ['scripts/build-dashboard.js']);
    assertContains('index.html', batch, 'dashboard freshness check');
    run('git status before publish', 'git', ['status', '--short']);
    run('git add batch artifacts', 'git', ['add', 'index.html', 'opportunities', 'offers', 'prototypes', 'screenshots', 'state', 'assets', 'reports', 'scripts/nightly_worker.js', 'scripts/finalize-nightly-batch.js']);
    const commit = spawnSync('git', ['commit', '-m', `Publish nightly Page Profit Check batch ${batch}`], {
      cwd: root,
      encoding: 'utf8',
      stdio: 'pipe'
    });
    if (commit.stdout) process.stdout.write(commit.stdout);
    if (commit.stderr) process.stderr.write(commit.stderr);
    if (commit.status !== 0 && !/nothing to commit/i.test(`${commit.stdout}\n${commit.stderr}`)) {
      throw new Error(`git commit failed with exit ${commit.status}`);
    }
    if (shouldPush) run('git push', 'git', ['push']);
  }

  console.log(`\nFINALIZE OK ${batch}`);
} catch (err) {
  console.error(`\nFINALIZE FAILED ${batch}: ${err.message}`);
  console.error('Do not publish or summarize this batch as complete until the failing gate is fixed.');
  process.exit(err.status || 1);
}
