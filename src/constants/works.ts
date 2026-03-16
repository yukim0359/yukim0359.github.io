import type { Work } from "../types";

export const works: Work[] = [
  {
    title: "OpenMP Tutorial",
    descriptions: [
      "B4時の研究室内の勉強会のため，OpenMPを学習するためのチュートリアルを作成しました。スライドとともにサンプルコードを示しており，手元で動かしながらOpenMPの基本的な構文に関する学習を進めることができます。",
      "各種指示文の機能だけでなく，指示文ごとのパフォーマンスの比較などにより，各種機能の使い所をなるべく明快に理解できるよう意図して作成しました。Github上で公開しています。",
    ],
    descriptionsEn: [
      "Created an OpenMP tutorial for a lab study session in my fourth undergraduate year. It combines slides with sample code so that learners can run code locally while studying the basic OpenMP constructs.",
      "I tried to not only explain each directive but also compare their performance, so that readers can clearly understand when and how to use the different features. The materials are available on GitHub.",
    ],
    images: [
      {
        src: "fibonacci_tasks_animation.gif",
        caption:
          "OpenMPのタスク並列においてタスクが分配されていく様子を示したアニメーション",
        captionEn:
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
      "EEIC３年後期実験「マイクロプロセッサの設計と実装」において，スーパースカラインオーダパイプラインプロセッサを設計しました。開発環境としてはvivadoを使用し，FPGAへ書き込んだのち動作確認をしました。",
      "スーパースカラは命令の同時実行可能性判定やレジスタファイルの改良など考える点が多く大変でしたが，最終的にはきちんと動くものが完成し達成感がありました。設計はGithub上で公開しています。",
    ],
    descriptionsEn: [
      "In the third-year EEIC lab course “Design and Implementation of Microprocessors”, I designed a super-scalar in-order pipelined processor. I used Vivado as the development environment and verified the design on an FPGA.",
      "Designing a super-scalar processor required many considerations—such as deciding which instructions can be issued in parallel and improving the register file—but I ultimately managed to build a working processor, which was very rewarding. The design is published on GitHub.",
    ],
    images: [
      {
        src: "pipeline_processor.jpeg",
        caption: "設計したプロセッサのパイプライン構造を示す図",
        captionEn: "Diagram of the pipeline structure of the designed processor.",
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
      "EEIC３年後期実験「情報可視化とデータ解析」において，チーム開発により，M1グランプリに出場している漫才師のコンビ名を可視化するウェブサイトを作成しました。大規模なデータを可視化する手法を学ぶとともに，ウェブサイトを設計することでフロントエンドの基礎を学びました。",
      "技術面では，seleniumによるスクレイピング，D3.jsを用いた情報可視化，Reactを用いたウェブサイトの作成などを行いました。",
    ],
    descriptionsEn: [
      "In the third-year EEIC lab course “Information Visualization and Data Analysis”, I worked in a team to build a website that visualizes the names of manzai comedy duos appearing in the M-1 Grand Prix. Through the project, I learned techniques for visualizing large datasets as well as the basics of frontend development by designing a web application.",
      "On the technical side, we used Selenium for web scraping, D3.js for information visualization, and React to build the website.",
    ],
    images: [
      {
        src: "m1_web.png",
        caption: "M1コンビ名可視化サイトのスクリーンショット",
        captionEn:
          "Screenshot of the website visualizing manzai combi names.",
      },
    ],
    technologies: ["TypeScript", "React", "Vite", "D3.js", "Python"],
  },
  {
    title: "Atcoder Participations",
    descriptions: [
      "アルゴリズムの勉強のため，Atcoderのコンテストに参加していました。",
    ],
    descriptionsEn: [
      "I regularly participated in AtCoder programming contests to study algorithms.",
    ],
    images: [
      {
        src: "atcoder_profile.png",
        caption: "Atcoderのプロフィールページのスクリーンショット",
        captionEn: "Screenshot of my AtCoder profile page.",
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
