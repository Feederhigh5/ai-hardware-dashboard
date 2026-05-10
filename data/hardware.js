/* Hardware catalogue — edit this file to add or fact-check entries.
 * All numbers reflect the LF=0.6 baseline. Controls in the dashboard
 * recompute monthly cost based on user inputs.
 *
 * Per-entry review fields:
 *   sources  : array of URLs/citations backing the numbers ([] until filled in)
 *   verified : ISO date "YYYY-MM-DD" when last cross-checked, else null
 *   notes    : array of free-text caveats (e.g. unit conversions)
 */

const HARDWARE = [
  {
    id: 'server-4r9700',
    name: 'Server · EPYC 9135 + 4× R9700',
    short: 'Server 4× R9700',
    category: 'Multi-GPU Cluster',
    vram: 128,
    tflops: 382,
    bandwidth: 2560,
    powerKI: 650,
    powerIdle: 270,
    powerMax: 1450,
    price: 9500,
    resaleFactor: 0.45,
    composition: 'Basis 250 W + 4× GPU (~100 W/Karte Inferenz-Last)',
    color: '#8a7ff5',
    bestFor: 'Multi-GPU Hosting, große Modelle bis 128 GB VRAM',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'ws-2r9700',
    name: 'Workstation · 2× Radeon R9700',
    short: 'WS 2× R9700',
    category: 'Dual-GPU Workstation',
    vram: 64,
    tflops: 191,
    bandwidth: 1280,
    powerKI: 460,
    powerIdle: 160,
    powerMax: 760,
    price: 4600,
    resaleFactor: 0.50,
    composition: 'PC 100 W + 2× GPU (~180 W/Karte)',
    color: '#5fb3d4',
    bestFor: 'Dichte 64-GB-Modelle mit hohem Durchsatz',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'dgx-spark',
    name: 'NVIDIA DGX Spark',
    short: 'DGX Spark',
    category: 'Unified Memory · CUDA',
    vram: 128,
    tflops: 100,
    bandwidth: 273,
    powerKI: 160,
    powerIdle: 40,
    powerMax: 240,
    price: 4700,
    resaleFactor: 0.50,
    composition: 'Idle 40 W → Peak 240 W · LF 0,6 = 160 W',
    color: '#7aa2ff',
    bestFor: 'Stabile CUDA-Umgebung, Prototyping',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'mbp-m5max',
    name: 'Apple MacBook Pro · M5 Max',
    short: 'M5 Max',
    category: 'Unified Memory · Apple Silicon',
    vram: 128,
    tflops: 70,
    bandwidth: 614,
    powerKI: 55,
    powerIdle: 12,
    powerMax: 90,
    price: 5100,
    resaleFactor: 0.65,
    composition: 'Hocheffizient · Last 60–90 W gemittelt',
    color: '#d4b550',
    bestFor: 'Mobil, niedrigste Stromkosten, hoher Wiederverkauf',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'gmktec-evo-x2',
    name: 'GMKtec EVO-X2 · AI Max+ 395',
    short: 'EVO-X2',
    category: 'Unified Memory · AMD APU',
    vram: 128,
    tflops: 63,
    bandwidth: 256,
    powerKI: 80,
    powerIdle: 20,
    powerMax: 120,
    price: 3000,
    resaleFactor: 0.45,
    composition: 'TDP 120 W · KI-Last ca. 80 W',
    color: '#d18158',
    bestFor: 'Günstigster Einstieg in 128 GB Unified Memory',
    sources: [],
    verified: null,
    notes: ['126 TOPS AI ≈ 63 TFLOPS FP16-Äquivalent']
  },
  {
    id: 'ws-w7900',
    name: 'Workstation · 1× Radeon W7900',
    short: 'WS W7900',
    category: 'Single-GPU Workstation',
    vram: 48,
    tflops: 61,
    bandwidth: 864,
    powerKI: 220,
    powerIdle: 80,
    powerMax: 420,
    price: 5500,
    resaleFactor: 0.35,
    composition: 'PC 100 W + 1× GPU (~120 W)',
    color: '#4dd081',
    bestFor: 'Dichte Modelle bis 48 GB, hohe Bandbreite/€',
    sources: [],
    verified: null,
    notes: []
  }
];

window.HARDWARE_CATALOGUE = HARDWARE;
