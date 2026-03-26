import type { Work } from "../../types";

export const worksIntroEn =
  "A selection of things I have worked on, not limited to research. Click an item to see more details.";

export const worksEn: Work[] = [
  {
    title: "OpenMP Tutorial",
    descriptions: [
      "Created an OpenMP tutorial for a lab study session in my fourth undergraduate year. It combines slides with sample code so that learners can run code locally while studying the basic OpenMP constructs.",
      "I tried to not only explain each directive but also compare their performance, so that readers can clearly understand when and how to use the different features. The materials are available on GitHub.",
    ],
    images: [
      {
        src: "fibonacci_tasks_animation.gif",
        caption:
          "Animation showing how tasks are distributed in OpenMP task parallelism.",
      },
    ],
    links: [
      {
        title: "Github",
        url: "https://github.com/yukim0359/OpenMP-tutorial",
      },
    ],
    technologies: ["C", "OpenMP"],
  },
  {
    title: "Super Scalar In-Order Pipeline Processor Design",
    descriptions: [
      "In the third-year EEIC lab course “Design and Implementation of Microprocessors”, I designed a super-scalar in-order pipelined processor. I used Vivado as the development environment and verified the design on an FPGA.",
      "Designing a super-scalar processor required many considerations—such as deciding which instructions can be issued in parallel and improving the register file—but I ultimately managed to build a working processor, which was very rewarding. The design is published on GitHub.",
    ],
    images: [
      {
        src: "pipeline_processor.jpeg",
        caption: "Diagram of the pipeline structure of the designed processor.",
      },
    ],
    links: [
      {
        title: "Github",
        url: "https://github.com/yukim0359/verilog-RISCV-processor",
      },
    ],
    technologies: ["Verilog", "Vivado"],
  },
  {
    title: "A Visualization of Manzai Combi Name",
    descriptions: [
      "In the third-year EEIC lab course “Information Visualization and Data Analysis”, I worked in a team to build a website that visualizes the names of manzai comedy duos appearing in the M-1 Grand Prix. Through the project, I learned techniques for visualizing large datasets as well as the basics of frontend development by designing a web application.",
      "On the technical side, we used Selenium for web scraping, D3.js for information visualization, and React to build the website.",
    ],
    images: [
      {
        src: "m1_web.png",
        caption: "Screenshot of the website visualizing manzai combi names.",
      },
    ],
    technologies: ["TypeScript", "React", "Vite", "D3.js", "Python"],
  },
  {
    title: "Atcoder Participations",
    descriptions: [
      "I regularly participated in AtCoder programming contests to study algorithms.",
    ],
    images: [
      {
        src: "atcoder_profile.png",
        caption: "Screenshot of my AtCoder profile page.",
      },
    ],
    links: [
      {
        title: "Profile",
        url: "https://atcoder.jp/users/yukim0359",
      },
    ],
    technologies: ["C++"],
  },
];
