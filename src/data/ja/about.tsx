import type { ReactNode } from "react";

export const aboutJa = {
  intro: (
    <>
      東京大学大学院 情報理工学系研究科 電子情報学専攻{" "}
      <a
        href="https://www.eidos.ic.i.u-tokyo.ac.jp"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        田浦研究室
      </a>
      に所属。修士1年。並列・分散処理を主とした高性能計算（HPC）分野に関心があり，研究を行っています。
    </>
  ) satisfies ReactNode,
  hobby:
    "趣味は野球観戦です。横浜 DeNA ベイスターズを応援しており，いわゆる暗黒時代からのファンです。他にもスポーツ観戦全般，音楽を聴くこと（特にJ-POP），旅行なども好きです。",
  photos: [
    {
      src: "baseball.JPG",
      alt: "野球観戦",
      caption: (
        <>
          2024年にDeNAが日本一になったときの写真。
          <br />
          運良く現地で観戦できました。
        </>
      ) satisfies ReactNode,
    },
    {
      src: "satamisaki.JPG",
      alt: "佐多岬",
      caption: "鹿児島県の佐多岬に行ったときの写真。",
    },
  ],
} as const;
