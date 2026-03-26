import type { ReactNode } from "react";

export const researchEn = {
  overview: (
    <>
      I am interested in software design that can fully and easily exploit the
      capabilities of parallel hardware, based on a deep understanding of its
      characteristics. Currently, for my bachelor's thesis, I am working on the
      design and implementation of a task-parallel runtime on GPUs (
      <a
        href="https://www.eidos.ic.i.u-tokyo.ac.jp/contents/research/gpu_task_parallelism"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        see also the research introduction on the lab website
      </a>
      ).
    </>
  ) satisfies ReactNode,
  keywords:
    "Keywords: task parallelism, fork-join, work stealing, CUDA, Clang, etc.",
  interestsLead:
    "I am also interested in the following areas (though I am not an expert in all of them):",
  interests: [
    {
      title: "Domain-specific load balancing algorithms",
      examples:
        "Examples: scheduling of grouped GEMM in LLM training and inference, parallel graph traversal on GPUs, etc.",
    },
    {
      title: "Optimization of LLM training and inference workloads",
      examples:
        "Examples: mitigating load imbalance in MoE expert parallelism, low-precision computation such as quantization, etc.",
    },
    {
      title: "High-level language runtimes independent of specific hardware",
    },
  ],
  presentationsHeading: "Conference Presentations",
  presentation: {
    authors: (
      <>
        <span className="font-bold">Yuki Maeda</span>, Kenjiro Taura.
      </>
    ) satisfies ReactNode,
    title: "A GPU-Resident Fork-Join Task-Parallel Runtime.",
    venueLabel: "LATHC 2026",
    venueUrl: "https://jnamaral.github.io/LATHC26/",
  },
} as const;
