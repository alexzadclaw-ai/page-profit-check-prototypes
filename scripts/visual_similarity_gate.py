#!/usr/bin/env python3
import json
import math
import os
import sys
from PIL import Image, ImageChops, ImageFilter, ImageStat


def open_crop(path, max_height=1700):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    return im.crop((0, 0, w, min(h, max_height)))


def fit(im, width=360):
    w, h = im.size
    if w <= 0 or h <= 0:
        raise ValueError('empty image')
    nh = max(1, int(h * width / w))
    return im.resize((width, nh), Image.Resampling.LANCZOS)


def hist_similarity(a, b):
    a = fit(a, 220)
    b = fit(b, 220).resize(a.size, Image.Resampling.LANCZOS)
    ha = a.histogram()
    hb = b.histogram()
    # Histogram intersection, normalized to 0..1.
    inter = sum(min(x, y) for x, y in zip(ha, hb))
    total = max(1, sum(ha))
    return inter / total


def pixel_similarity(a, b):
    a = fit(a, 300)
    b = fit(b, 300).resize(a.size, Image.Resampling.LANCZOS)
    diff = ImageChops.difference(a, b)
    stat = ImageStat.Stat(diff)
    rms = math.sqrt(sum(v * v for v in stat.rms) / len(stat.rms))
    return max(0.0, 1.0 - (rms / 255.0))


def edge_similarity(a, b):
    a = fit(a.convert('L'), 260).filter(ImageFilter.FIND_EDGES)
    b = fit(b.convert('L'), 260).resize(a.size, Image.Resampling.LANCZOS).filter(ImageFilter.FIND_EDGES)
    diff = ImageChops.difference(a, b)
    rms = ImageStat.Stat(diff).rms[0]
    return max(0.0, 1.0 - (rms / 255.0))


def dhash(im, size=8):
    im = im.convert('L').resize((size + 1, size), Image.Resampling.LANCZOS)
    px = list(im.getdata())
    bits = []
    for y in range(size):
        row = px[y * (size + 1):(y + 1) * (size + 1)]
        for x in range(size):
            bits.append(1 if row[x] > row[x + 1] else 0)
    return bits


def hash_similarity(a, b):
    ha = dhash(a)
    hb = dhash(b)
    dist = sum(1 for x, y in zip(ha, hb) if x != y)
    return 1.0 - (dist / len(ha))


def compare(target_path, prototype_path):
    target = open_crop(target_path)
    proto = open_crop(prototype_path)
    metrics = {
        'colorHistogramSimilarity': round(hist_similarity(target, proto), 4),
        'pixelSimilarity': round(pixel_similarity(target, proto), 4),
        'edgeLayoutSimilarity': round(edge_similarity(target, proto), 4),
        'perceptualHashSimilarity': round(hash_similarity(target, proto), 4),
    }
    metrics['weightedSimilarity'] = round(
        metrics['colorHistogramSimilarity'] * 0.25 +
        metrics['pixelSimilarity'] * 0.35 +
        metrics['edgeLayoutSimilarity'] * 0.25 +
        metrics['perceptualHashSimilarity'] * 0.15,
        4
    )
    return metrics


def main():
    if len(sys.argv) < 3:
        print('Usage: visual_similarity_gate.py target.png prototype.png', file=sys.stderr)
        return 2
    try:
        print(json.dumps(compare(sys.argv[1], sys.argv[2]), indent=2))
        return 0
    except Exception as e:
        print(json.dumps({'error': str(e)}))
        return 3


if __name__ == '__main__':
    raise SystemExit(main())
