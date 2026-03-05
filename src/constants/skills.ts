import type { Skill } from "../types";

export const skills: Skill[] = [
  {
    field: "Programming Languages",
    technologies: ["C", "C++", "Python", "Rust"],
    descriptions: [
      "主に使用するのはC/C++/Pythonです（研究・実装の中心）。",
      "大学の課題として，Rustでmincコンパイラを設計したことがあります。",
      "研究の一部分として，ClangのParsing/AST/Semanticsを拡張した経験があります。",
    ],
  },
  {
    field: "HPC",
    technologies: ["CUDA", "OpenMP", "MPI", "OpenACC", "Chapel"],
    descriptions: [
      "研究ではCUDAを用いて，GPU上で動作するタスク並列ランタイムを開発しています。",
      "大学の授業でOpenMP/MPIを用いたハイブリッド並列の実装経験があり，スーパーコンピュータ上でLU分解をMPI 56プロセス × OpenMP 4スレッド（計224スレッド）で並列化しました。",
      "Tritonで簡単なカーネルを記述できます。",
      "並列プログラミング言語Chapelを学習しており，設計思想と基本的な文法を理解しています。",
    ],
  },
  {
    field: "Machine Learning & LLMs",
    technologies: ["PyTorch", "Scikit-learn", "HuggingFace Transformers"],
    descriptions: [
      "PyTorchが使えます。",
      "HuggingFace Transformers等を用いて，LLMのfine-tuning・推論を行った経験があります。",
      "関連して，Nsight Compute／Nsight Systems／PyTorch Profiler等のパフォーマンス解析ツールの使用経験があります。",
    ],
  },
  {
    field: "Computer Architecture",
    technologies: ["Verilog", "Vivado"],
    descriptions: [
      "Verilogにより，スーパースカラインオーダパイプラインプロセッサを設計した経験があります。開発環境としてはVivadoを使用し，FPGAへ書き込んだのち動作確認をしました。",
    ],
  },
  {
    field: "Misc.",
    technologies: [],
    descriptions: [
      "2025年5月，応用情報技術者試験を取得しています。",
      "このホームページを作れる程度には，TypeScript/React/Vite等のフロントエンドスタックを扱えます。",
    ],
  },
];
