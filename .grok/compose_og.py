#!/usr/bin/env python3
"""Editorial academic OG card: cream paper, navy serif lockup, CAN-bus motif."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 2400, 1260  # 2× 1200×630
CREAM = (244, 239, 230)  # #F4EFE6
NAVY = (30, 58, 95)  # #1E3A5F
INK = (28, 25, 21)  # #1C1915

SERIF_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
SERIF_ITA = "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"

OUT = Path("/workspace/.grok/og-raw.png")


def paper_field() -> Image.Image:
    rng = np.random.RandomState(7)
    base = np.full((H, W, 3), CREAM, dtype=np.int16)
    grain = rng.randint(-8, 9, (H, W, 1), dtype=np.int16)
    laid = np.zeros((H, W, 1), dtype=np.int16)
    for y in range(0, H, 5):
        laid[y, :, 0] = -4
    arr = np.clip(base + grain + laid, 0, 255).astype(np.uint8)
    return Image.fromarray(arr, "RGB")


def text_span(draw: ImageDraw.ImageDraw, text: str, font, tracking: float = 0) -> float:
    width = 0.0
    for i, ch in enumerate(text):
        width += draw.textlength(ch, font=font)
        if i < len(text) - 1:
            width += tracking
    return width


def draw_centered(
    draw: ImageDraw.ImageDraw,
    text: str,
    font,
    cx: float,
    cy: float,
    fill,
    tracking: float = 0,
) -> float:
    if tracking == 0:
        draw.text((cx, cy), text, font=font, fill=fill, anchor="mm")
        return draw.textlength(text, font=font)
    total = text_span(draw, text, font, tracking)
    x = cx - total / 2
    for i, ch in enumerate(text):
        draw.text((x, cy), ch, font=font, fill=fill, anchor="lm")
        x += draw.textlength(ch, font=font) + tracking
    return total


def draw_c_node(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float, color, stroke: int):
    """Geometric C opening to the right, with a bus node at the gap."""
    bbox = [cx - r, cy - r, cx + r, cy + r]
    draw.arc(bbox, start=48, end=312, fill=color, width=stroke)
    nr = max(4, int(stroke * 0.85))
    nx = cx + r + nr * 0.15
    ny = cy
    draw.ellipse([nx - nr, ny - nr, nx + nr, ny + nr], fill=color)
    stub = r * 0.55
    draw.line([(nx, ny), (nx + stub, ny)], fill=color, width=max(2, stroke // 2))


def draw_square_wave(draw: ImageDraw.ImageDraw, x: float, y: float, color, stroke: int):
    """Axis-aligned CAN-like square wave; no diagonals."""
    amp = 50
    half = 42
    pts = [(x, y), (x, y - amp)]
    pulses = 4
    for i in range(pulses):
        x += half
        pts.append((x, y - amp))
        pts.append((x, y + amp))
        x += half
        pts.append((x, y + amp))
        if i < pulses - 1:
            pts.append((x, y - amp))
        else:
            pts.append((x, y))
    pts.append((x + 64, y))
    draw.line(pts, fill=color, width=stroke)


def draw_bus_motif(draw: ImageDraw.ImageDraw, cy: float, color):
    """Restrained CAN-bus: three nodes on a trace, then a square-wave packet."""
    stroke = 8
    x0, x1 = 500, 1400
    draw.line([(x0, cy), (x1, cy)], fill=color, width=stroke)

    nodes = [x0 + 150, x0 + 450, x0 + 750]
    r = 28
    cream = CREAM + (255,)
    for i, nx in enumerate(nodes):
        draw.ellipse(
            [nx - r, cy - r, nx + r, cy + r],
            outline=color,
            width=6,
            fill=cream,
        )
        ir = 10 if i == 1 else 5
        draw.ellipse([nx - ir, cy - ir, nx + ir, cy + ir], fill=color)
        draw.line([(nx, cy + r), (nx, cy + r + 34)], fill=color, width=6)
        pad = 12
        py = cy + r + 34
        draw.rectangle([nx - pad, py, nx + pad, py + 16], outline=color, width=4)

    tr = 9
    draw.ellipse([x1 - tr, cy - tr, x1 + tr, cy + tr], fill=color)
    draw_square_wave(draw, x1 + 52, cy, color, stroke)


def main() -> None:
    img = paper_field()
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    m_outer = 72
    m_inner = 92
    navy = NAVY + (255,)
    ink = INK + (255,)

    draw.rectangle([m_outer, m_outer, W - m_outer, H - m_outer], outline=navy, width=4)
    draw.rectangle([m_inner, m_inner, W - m_inner, H - m_inner], outline=navy, width=2)

    draw_c_node(draw, W / 2, 268, 42, navy, 8)

    title1 = ImageFont.truetype(SERIF_BOLD, 118)
    title2 = ImageFont.truetype(SERIF_BOLD, 82)
    sub = ImageFont.truetype(SERIF_ITA, 36)

    line1 = "CAN Interface"
    line2 = "for Dyno Bench Automation"
    subtitle = "Master's Thesis  ·  Michele Imbarrato  ·  SRA Lab"

    w1 = draw_centered(draw, line1, title1, W / 2, 500, navy)
    w2 = draw_centered(draw, line2, title2, W / 2, 622, navy)

    rule_w = max(w1, w2) * 0.36
    ry = 698
    draw.line([(W / 2 - rule_w / 2, ry), (W / 2 + rule_w / 2, ry)], fill=navy, width=3)

    draw_centered(draw, subtitle, sub, W / 2, 762, ink, tracking=2.4)

    draw_bus_motif(draw, 1028, navy)

    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG")
    print(f"wrote {OUT} {img.size}")


if __name__ == "__main__":
    main()
