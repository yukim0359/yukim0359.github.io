import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import type { Project } from "../types";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      descriptions: [
        "このホームページです。フロントエンドの技術の勉強と，自分のこれまで取り組んできたことを公開するために作成しました。",
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
        "OpenMPを学習するためのチュートリアルを作成しました。スライドとともにサンプルコードを示しており，手元で動かしながら学習を進めることができます。",
        "各種指示文の機能だけでなく，指示文ごとのパフォーマンスの比較などにより，各種機能の使い所をなるべく明快に理解できるよう意図して作成しました。Github上で公開しています。",
      ],
      images: ["/fibonacci_tasks_animation.gif"],
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
        "スーパースカラは命令の同時実行判定やレジスタファイルの改良など考える点が多く大変でしたが，最終的にはきちんと動くものが完成し達成感がありました。設計はGithub上で公開しています。",
      ],
      images: ["/pipeline_processor.jpeg"],
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
        "EEIC３年後期実験「情報可視化とデータ解析」において，チーム開発により，M1グランプリに出場している漫才師のコンビ名を可視化するウェブサイトを作成しました。大量のデータを可視化する手法を学ぶとともに，ウェブサイトを作成することでフロントエンドの基礎を学びました。",
        "技術面では，seleniumによるスクレイピング，D3.jsを用いた情報可視化，Reactを用いたウェブサイトの作成などを行いました。",
      ],
      images: ["/m1_web.png"],
      technologies: ["TypeScript", "React", "Vite", "D3.js", "Python"],
    },
    {
      title: "Atcoder Participations",
      descriptions: [
        "アルゴリズムの勉強のため，Atcoderのコンテストに参加していました。水色に到達してからは少し離れてしまっています。",
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

  const openModal = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これまでに取り組んできたことをまとめたものです。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-200"
              onClick={() => openModal(index)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3 whitespace-pre-line">
                {project.descriptions.join("\n")}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {projects[selectedProject].title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    {projects[selectedProject].descriptions.map(
                      (desc, descIndex) => (
                        <p
                          key={descIndex}
                          className="text-gray-600 leading-relaxed"
                        >
                          {desc}
                        </p>
                      ),
                    )}
                  </div>

                  {projects[selectedProject].images && (
                    <div>
                      <div className="grid grid-cols-1 gap-4">
                        {projects[selectedProject].images?.map(
                          (img, imgIndex) => (
                            <div key={imgIndex} className="text-center">
                              <img
                                src={img}
                                alt={`${
                                  projects[selectedProject].title
                                } image ${imgIndex + 1}`}
                                className="w-full max-w-md mx-auto rounded-lg shadow-md"
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {projects[selectedProject].links && (
                    <div>
                      <div className="flex flex-col gap-2">
                        {projects[selectedProject].links?.map(
                          (link, linkIndex) => (
                            <div key={linkIndex} className="text-gray-600">
                              <span className="font-medium">
                                {link.title}:{" "}
                              </span>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline break-all"
                              >
                                {link.url}
                              </a>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
