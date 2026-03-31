import type { Skill } from "../../types";

export const skillsJa: Skill[] = [
  {
    field: "Programming Languages",
    technologies: ["C", "C++", "Python", "Rust"],
    descriptions: [
      "主に使用するのは C/C++/Python です（研究・実装の中心）。",
      "大学の課題として，Rust で minc コンパイラを設計したことがあります。",
      "研究の一部分として，Clang の Parsing/AST/Semantics を拡張した経験があります。",
    ],
  },
  {
    field: "HPC",
    technologies: ["CUDA", "OpenMP", "MPI", "OpenACC", "Chapel"],
    descriptions: [
      "研究では CUDA を用いて，GPU 上で動作するタスク並列ランタイムを開発しています。",
      "大学の授業で OpenMP/MPI を用いたハイブリッド並列の実装経験があり，スーパーコンピュータ上で LU 分解を MPI 56プロセス × OpenMP 4スレッド（計224スレッド）で並列化しました。",
      "Triton で簡単なカーネルを記述できます。",
      "並列プログラミング言語 Chapel を学習しており，設計思想と基本的な文法を理解しています。",
    ],
  },
  {
    field: "Machine Learning & LLMs",
    technologies: ["PyTorch", "Scikit-learn", "HuggingFace Transformers"],
    descriptions: [
      "PyTorch が使えます。",
      "HuggingFace Transformers 等を用いて，LLM の fine-tuning および推論を行った経験があります。",
      "関連して，Nsight Compute，Nsight Systems，PyTorch Profiler 等のパフォーマンス解析ツールの使用経験があります。",
    ],
  },
  {
    field: "Computer Architecture",
    technologies: ["Verilog", "Vivado"],
    descriptions: [
      "Verilog により，スーパースカラインオーダパイプラインプロセッサを設計した経験があります。開発環境としては Vivado を使用し，FPGA へ書き込んだのち動作確認をしました。",
    ],
  },
  {
    field: "Misc.",
    technologies: [],
    descriptions: [
      "2025年5月，応用情報技術者試験を取得しています。",
      "TOEFL iBT スコア：93/120 (2025年5月)",
      "このホームページを作れる程度には，TypeScript，React，Vite 等のフロントエンドスタックを扱えます。",
    ],
  },
];
