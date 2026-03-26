import type { ReactNode } from "react";

export const bioJa = {
  educationHeading: "学歴",
  workHeading: "職歴",
  education: {
    kaisei: {
      period: "2019年4月 – 2022年3月：",
      name: "開成高等学校",
    },
    uTokyoBSc: {
      period: "2022年4月 – 2026年3月：",
      name: "東京大学 工学部 電子情報工学科",
      notes: ["優秀卒業論文賞 受賞"],
    },
    uTokyoMSc: {
      period: "2026年4月 – 現在：",
      name: "東京大学大学院 情報理工学系研究科 電子情報学専攻",
    },
  },
  work: {
    tetsuryokukai: {
      period: "2022年4月 – 現在：",
      name: "鉄緑会 アルバイト",
      details: ["中高生に数学を教えています。"],
    },
    fixstars: {
      period: "2025年10月 – 2025年12月：",
      name: "Fixstars インターンシップ",
      blogLine: (
        <>
          <a
            href="https://zenn.dev/fixstars/articles/6000-max-q-llm-finetuning"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Blackwell アーキテクチャ上での LLM fine-tuning についての tech blog
          </a>{" "}
          を執筆しました。
        </>
      ) satisfies ReactNode,
    },
  },
} as const;
