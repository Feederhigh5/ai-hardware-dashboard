# KI-Hosting · Hardware-Dashboard 2026

Interactive dark-mode dashboard for evaluating AI hardware against modern large language models. Visualizes VRAM requirements, inference throughput, and Total Cost of Ownership across 6 hardware systems and 9 AI models.

![Dashboard preview](https://raw.githubusercontent.com/feederhigh5/ai-hardware-dashboard/main/preview.png)

## What it does

Four live sliders (electricity price, hours/day, load factor, TCO horizon) control every computed value in real time across five sections:

| Section | Description |
|---------|-------------|
| **01 · Kompatibilitäts-Matrix** | 6×9 grid — each cell shows token generation rate and 32k prefill time, color-coded Ideal / Brauchbar / Zu langsam / OOM. Click any cell for a 3-column bottleneck detail panel. |
| **02 · Design-Space** | Log-log SVG scatter of VRAM vs. memory bandwidth. Hardware zone rectangles show the achievable solution space; model bubbles are sized by compute need. |
| **03 · TCO Analysis** | Stacked bar chart (CAPEX + electricity over the chosen horizon) with residual-value markers and a sortable ranking table. |
| **04 · Hardware-Profile** | Six spec cards with 9-pip model-coverage strips. |
| **05 · Methodik** | Formula reference for VRAM, prefill compute, throughput, electricity cost, and net TCO. |

## Hardware covered

| System | VRAM | Compute | Bandwidth |
|--------|------|---------|-----------|
| Server · EPYC 9135 + 4× R9700 | 128 GB | 382 TFLOPS | 2 560 GB/s |
| Workstation · 2× Radeon R9700 | 64 GB | 191 TFLOPS | 1 280 GB/s |
| NVIDIA DGX Spark | 128 GB | 100 TFLOPS | 273 GB/s |
| Apple MacBook Pro · M5 Max | 128 GB | 70 TFLOPS | 614 GB/s |
| GMKtec EVO-X2 · AI Max+ 395 | 128 GB | 63 TFLOPS | 256 GB/s |
| Workstation · 1× Radeon W7900 | 48 GB | 61 TFLOPS | 864 GB/s |

## Models covered

DeepSeek V4 Pro · Kimi K2.6 · GLM 5.1 Reasoning · DeepSeek V4 Flash · Qwen 3.6 (235B) · Qwen 3.6 (35B) · GLM 4.7 Flash · Gemma 4 (31B) · Qwen 3.6 (27B)

The dashboard ships with a **Model Catalogue** panel: search across the
catalogue, multi-select which models drive the matrix/scatter/cards on
the fly, and import additional models live from the OpenRouter
`/api/v1/models` endpoint. Selection persists across reloads via
`localStorage`.

## Adding or fact-checking entries

Hardware specs live in [`data/hardware.js`](data/hardware.js); model
specs in [`data/models.js`](data/models.js). Each entry has three review
fields:

- `sources`: array of URLs/citations backing the numbers
- `verified`: ISO date (`"2026-05-10"`) when last cross-checked, else `null`
- `notes`: free-text caveats (e.g. unit conversions)

To add a new entry, append an object with the same keys as existing
ones and reload the page — no build step.

### Importing from OpenRouter

The "+ OpenRouter" button in the Modell-Katalog panel fetches the live
list of models from `https://openrouter.ai/api/v1/models`. OpenRouter
exposes `id`, `name`, `context_length`, and a description, but **not**
parameter counts, VRAM, compute or bandwidth requirements — so imported
entries land with empty math fields and an inline editor where you can
fill in `total` / `active` (in billions). Once filled, the matrix
populates using the formulas in the Methodology section below.

The fetch needs a same-origin or CORS-allowed context: import works
when serving via Docker or `python3 -m http.server`, but is blocked by
the browser when opening `index.html` over `file://`.

## Tech stack

- **React 18.3.1** + **Babel 7.29.0** via CDN (integrity-hashed) — no build step
- Single self-contained `index.html` — all JS inlined, works as `file://` or served over HTTP
- IBM Plex Sans + IBM Plex Mono (Google Fonts)

## Run with Docker

```bash
docker build -t ki-dashboard .
docker run -p 8080:80 ki-dashboard
# Open http://localhost:8080
```

## Run locally (no install)

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

Or just open `index.html` directly in a browser — all resources are either inlined or loaded from CDN.

## Methodology

| Metric | Formula |
|--------|---------|
| VRAM | `Total Params × 0.5 GB (Q4) + KV-Cache (TurboQuant)` |
| Prefill (32k tokens) | `2 × Total Params × 32 000 / target_seconds` |
| Throughput | `Active Params × 0.5 B (Q4) × target_TPS` |
| Monthly electricity | `P_KI × h/day × 30 / 1000 × €/kWh` |
| Net TCO | `CAPEX + Electricity − Residual value` |

Status thresholds: **Ideal** ≥ 30 t/s + prefill ≤ 10 s · **Brauchbar** ≥ 15 t/s · **Zu langsam** < 15 t/s · **OOM** insufficient VRAM.

---

*Sources: AMD, Apple, NVIDIA, Skywork, TechPowerUp · Q4 2026*
