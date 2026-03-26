import type { ReactNode } from "react";

export const aboutEn = {
  intro: (
    <>
      I am a first-year master's student in the Department of Information and
      Communication Engineering, Graduate School of Information Science and
      Technology, The University of Tokyo, and a member of{" "}
      <a
        href="https://www.eidos.ic.i.u-tokyo.ac.jp"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        Taura Laboratory
      </a>
      . My research interest is in high-performance computing (HPC), especially
      parallel and distributed systems.
    </>
  ) satisfies ReactNode,
  hobby:
    "My main hobby is watching baseball. I am a Yokohama DeNA BayStars fan and have supported the team since I was a six-year-old child. I also enjoy watching other sports, listening to music (especially J-POP), and travelling.",
  photos: [
    {
      src: "baseball.JPG",
      alt: "Baseball game",
      caption: (
        <>
          A photo from the game where the Yokohama DeNA BayStars won the Nippon
          Series in 2024.
          <br />I was lucky enough to be there in the stadium.
        </>
      ) satisfies ReactNode,
    },
    {
      src: "satamisaki.JPG",
      alt: "Cape Sata",
      caption: "A photo taken at Cape Sata in Kagoshima Prefecture.",
    },
  ],
} as const;
