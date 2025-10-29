import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    descriptions: [
      "このホームページです。フロントエンドの技術の練習のため，そして自分のこれまで取り組んできたことを公開するために作成しました。",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Github Pages",
    ],
  },
  {
    title: "OpenMP Tutorial",
    descriptions: [
      "OpenMPを学習するためのチュートリアルを作成しました。スライドとともにサンプルコードを示しており，手元で動かしながらOpenMPの基本的な構文に関する学習を進めることができます。",
      "各種指示文の機能だけでなく，指示文ごとのパフォーマンスの比較などにより，各種機能の使い所をなるべく明快に理解できるよう意図して作成しました。Github上で公開しています。",
    ],
    images: [
      {
        src: "fibonacci_tasks_animation.gif",
        caption:
          "OpenMPのタスク並列においてタスクが分配されていく様子を示したアニメーション",
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
    images: [
      {
        src: "pipeline_processor.jpeg",
        caption: "設計したプロセッサのパイプライン構造を示す図",
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
  // {
  //   title: "Artificial Intelligence Experiment",
  //   descriptions: [
  //     "EEIC３年後期実験「人工知能演習」において，機械学習の基礎を学ぶとともに，既存の論文を読み解き，その論文に示されている実装の拡張を目指しました。",
  //     "具体的には，論文「Text Gestalt: Stroke-Aware Scene Text Image Super-Resolution」に示されている，strokeの情報を用いた文字の超解像手法の実装に関して，論文には示されていない日本語の文字に対しての実装手法の提案および性能評価を行いました。",
  //   ],
  //   technologies: ["Python", "PyTorch"],
  // },
  {
    title: "M1 Combi-Name Visualization",
    descriptions: [
      "EEIC３年後期実験「情報可視化とデータ解析」において，チーム開発により，M1グランプリに出場している漫才師のコンビ名を可視化するウェブサイトを作成しました。大規模なデータを可視化する手法を学ぶとともに，ウェブサイトを設計することでフロントエンドの基礎を学びました。",
      "技術面では，seleniumによるスクレイピング，D3.jsを用いた情報可視化，Reactを用いたウェブサイトの作成などを行いました。",
    ],
    images: [
      {
        src: "m1_web.png",
        caption: "M1コンビ名可視化サイトのスクリーンショット",
      },
    ],
    technologies: ["TypeScript", "React", "Vite", "D3.js", "Python"],
  },
  {
    title: "Atcoder Participations",
    descriptions: [
      "アルゴリズムの勉強のため，Atcoderのコンテストに参加していました。",
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
