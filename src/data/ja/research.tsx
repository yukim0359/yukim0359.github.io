import type { ReactNode } from "react";

export const researchJa = {
  overview: (
    <>
      並列性を備えたハードウェアの特性を深く理解したうえで，その特性を最大限に，かつ簡単に引き出すことのできるソフトウェア設計に関心があります。卒論研究として，GPU
      におけるタスク並列ランタイムの設計・実装に取り組みました（
      <a
        href="https://www.eidos.ic.i.u-tokyo.ac.jp/contents/research/gpu_task_parallelism"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        研究室 HP の研究紹介記事
      </a>
      もご覧ください）。
    </>
  ) satisfies ReactNode,
  keywords:
    "キーワード：タスク並列，fork-join，work stealing，CUDA，Clang など",
  interestsLead:
    "その他にも，以下の分野に関心があります（すべてに詳しいわけではありません）。",
  interests: [
    {
      title: "ドメイン特化の負荷分散アルゴリズム",
      examples:
        "例：LLM 学習・推論における Grouped GEMM のスケジューリング，GPU 上での並列グラフ探索 など",
    },
    {
      title: "LLM 推論・学習ワークロードの最適化",
      examples:
        "例：MoE の Expert Parallelism における負荷不均衡の緩和，量子化等の低精度処理 など",
    },
    {
      title: "ハードウェアに依存しない高水準な言語処理系",
    },
  ],
  presentationsHeading: "対外発表",
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
