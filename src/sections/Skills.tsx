import { motion } from "framer-motion";
import type { Skill } from "../types";

const Skills = () => {
  const skills: Skill[] = [
    {
      field: "Mainly used languages",
      technologies: ["C", "C++", "Python", "Rust"],
      descriptions: [
        "最初に学習したプログラミング言語はCでした。",
        "C/C++は研究などでも使っています。",
        "大学の授業で，mincコンパイラをRustで制作したことがあります。",
      ],
    },
    {
      field: "HPC",
      technologies: ["CUDA", "OpenMP", "MPI", "OpenACC"],
      descriptions: [
        "CUDAは研究で使っています。まだまだ勉強中です。",
        "OpenMP/MPIは研究室活動や大学の授業で使っています。LU分解の後に連立方程式の解を求めるプログラムをOpenMP/MPIでハイブリッド並列化したりしました。",
      ],
    },
    {
      field: "Computer Architecture",
      technologies: ["Verilog", "Vivado"],
      descriptions: ["RISC-Vのプロセッサを設計する際に用いました。"],
    },
    {
      field: "Machine Learning",
      technologies: ["PyTorch", "Scikit-learn"],
      descriptions: ["簡単な機械学習モデルは組める程度です。"],
    },
    {
      field: "Web",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Vite",
      ],
      descriptions: ["使用頻度は高くありません。勉強中です。"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {skill.field}
              </h3>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {skill.descriptions.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
