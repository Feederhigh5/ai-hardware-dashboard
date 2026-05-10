/* Model catalogue — edit this file to add or fact-check entries.
 *
 * Field reference:
 *   id            : kebab-case identifier (matrix column key)
 *   name          : display name shown in headers and tooltips
 *   total         : total parameter count, in billions
 *   active        : active params per token (= total for dense models), in billions
 *   dense         : true for dense, false for MoE
 *   vram          : required VRAM in GB at Q4 + TurboQuant KV cache
 *   computeNeed   : TFLOPS to prefill 32k tokens within 10 s
 *   bandwidthNeed : memory bandwidth GB/s for 30 t/s generation
 *   context       : maximum context length in tokens
 *   useCase       : short positioning string
 *
 * Per-entry review fields:
 *   sources  : array of URLs/citations backing the numbers ([] until filled in)
 *   verified : ISO date "YYYY-MM-DD" when last cross-checked, else null
 *   notes    : array of free-text caveats
 *
 * Derivation hints (see README "Methodology"):
 *   vram          ≈ total * 0.5 + KV cache (TurboQuant ≈ 7% overhead)
 *   computeNeed   = 2 * total * 32_000 / 10  (TFLOPS for 32k prefill in 10 s)
 *   bandwidthNeed = active * 0.5 * 30        (GB/s for 30 t/s, Q4)
 */

const MODELS = [
  {
    id: 'ds-v4-pro',
    name: 'DeepSeek V4 Pro',
    total: 1600, active: 49, dense: false,
    vram: 850, computeNeed: 10240, bandwidthNeed: 735,
    context: 1000000, useCase: 'High-End Reasoning',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'kimi-k26',
    name: 'Kimi K2.6',
    total: 1100, active: 32, dense: false,
    vram: 640, computeNeed: 7040, bandwidthNeed: 480,
    context: 262144, useCase: 'SOTA Agentic Coding',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'glm-51-r',
    name: 'GLM 5.1 Reasoning',
    total: 754, active: 40, dense: false,
    vram: 430, computeNeed: 4825, bandwidthNeed: 600,
    context: 200000, useCase: 'Long-Horizon Agent',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'ds-v4-flash',
    name: 'DeepSeek V4 Flash',
    total: 284, active: 13, dense: false,
    vram: 175, computeNeed: 1817, bandwidthNeed: 195,
    context: 1000000, useCase: 'Fast Agentic Reasoning',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'qwen-36-235',
    name: 'Qwen 3.6 (235B)',
    total: 235, active: 22, dense: false,
    vram: 150, computeNeed: 1504, bandwidthNeed: 330,
    context: 1000000, useCase: 'Heavy Coding',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'qwen-36-35',
    name: 'Qwen 3.6 (35B)',
    total: 35, active: 3.6, dense: false,
    vram: 26, computeNeed: 224, bandwidthNeed: 54,
    context: 262144, useCase: 'Effizienter Desktop-Agent',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'glm-47-flash',
    name: 'GLM 4.7 Flash',
    total: 30, active: 3, dense: false,
    vram: 22, computeNeed: 192, bandwidthNeed: 45,
    context: 200000, useCase: 'Local Coding Assistant',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'gemma-4',
    name: 'Gemma 4 (31B)',
    total: 31, active: 31, dense: true,
    vram: 24, computeNeed: 198, bandwidthNeed: 465,
    context: 256000, useCase: 'Qualität / Research',
    sources: [],
    verified: null,
    notes: []
  },
  {
    id: 'qwen-36-27',
    name: 'Qwen 3.6 (27B)',
    total: 27, active: 27, dense: true,
    vram: 20, computeNeed: 172, bandwidthNeed: 405,
    context: 262144, useCase: 'SOTA Coding (Dense)',
    sources: [],
    verified: null,
    notes: []
  }
];

window.MODELS_CATALOGUE = MODELS;
