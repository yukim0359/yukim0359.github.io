import type { Skill } from "../../types";

export const skillsEn: Skill[] = [
  {
    field: "Programming Languages",
    technologies: ["C", "C++", "Python", "Rust"],
    descriptions: [
      "Mainly use C/C++/Python for research and implementation.",
      "Designed a minc compiler in Rust as a university assignment.",
      "Extended Clang's parsing/AST/semantics as part of my research.",
    ],
  },
  {
    field: "HPC",
    technologies: ["CUDA", "OpenMP", "MPI", "OpenACC", "Chapel"],
    descriptions: [
      "Developing a GPU-resident task-parallel runtime using CUDA as part of my research.",
      "Implemented hybrid parallel LU decomposition (MPI 56 processes × OpenMP 4 threads, total 224 threads) on a supercomputer in a university course using OpenMP/MPI.",
      "Can write simple kernels in Triton.",
      "Studied the parallel programming language Chapel and understand its design philosophy and basic syntax.",
    ],
  },
  {
    field: "Machine Learning & LLMs",
    technologies: ["PyTorch", "Scikit-learn", "HuggingFace Transformers"],
    descriptions: [
      "Comfortable using PyTorch.",
      "Have experience fine-tuning and running inference of LLMs with HuggingFace Transformers and related tools.",
      "Familiar with performance analysis tools such as Nsight Compute, Nsight Systems, and PyTorch Profiler.",
    ],
  },
  {
    field: "Computer Architecture",
    technologies: ["Verilog", "Vivado"],
    descriptions: [
      "Designed a super-scalar in-order pipelined processor in Verilog, implemented and verified on an FPGA using Vivado.",
    ],
  },
  {
    field: "Misc.",
    technologies: [],
    descriptions: [
      "Passed the Applied Information Technology Engineer Examination in May 2025.",
      "TOEFL iBT score: 93/120 (May 2025)",
      "Comfortable enough with TypeScript/React/Vite and related frontend stack to build this website.",
    ],
  },
];
