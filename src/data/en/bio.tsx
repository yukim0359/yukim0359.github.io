import type { ReactNode } from "react";

export const bioEn = {
  educationHeading: "Education",
  workHeading: "Work Experience",
  education: {
    kaisei: {
      period: "Apr. 2019 – Mar. 2022: ",
      name: "Kaisei High School",
    },
    uTokyoBSc: {
      period: "Apr. 2022 – Mar. 2026: ",
      name: "Department of Information and Communication Engineering, Faculty of Engineering, The University of Tokyo",
      notes: ["Outstanding Undergraduate Thesis Award"],
    },
    uTokyoMSc: {
      period: "Apr. 2026 – Present: ",
      name: "Department of Information and Communication Engineering, Graduate School of Information Science and Technology, The University of Tokyo",
    },
  },
  work: {
    tetsuryokukai: {
      period: "Apr. 2022 – Present: ",
      name: "Tetsuryokukai (part-time lecturer)",
      details: [
        "Teaching mathematics to junior and senior high school students.",
      ],
    },
    fixstars: {
      period: "Oct. 2025 – Dec. 2025: ",
      name: "Fixstars (internship)",
      blogLine: (
        <>
          Wrote a tech blog on LLM fine-tuning on the Blackwell architecture:{" "}
          <a
            href="https://zenn.dev/fixstars/articles/6000-max-q-llm-finetuning"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            tech blog
          </a>
          .
        </>
      ) satisfies ReactNode,
    },
  },
} as const;
