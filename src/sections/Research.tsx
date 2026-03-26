import { motion } from "framer-motion";
import { Microscope } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/index.tsx";

const Research = () => {
  const { locale } = useI18n();
  return (
    <section id="research" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <SectionHeading icon={Microscope}>Research</SectionHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="space-y-4"
        >
          <p className="section-body">
            {locale === "en" ? (
              <>
                I am interested in software design that can fully and easily
                exploit the capabilities of parallel hardware, based on a deep
                understanding of its characteristics. Currently, for my
                bachelor's thesis, I am working on the design and implementation
                of a task-parallel runtime on GPUs (
                <a
                  href="https://www.eidos.ic.i.u-tokyo.ac.jp/contents/research/gpu_task_parallelism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  see also the research introduction on the lab website
                </a>
                ).
                <br />
                Keywords: task parallelism, fork-join, work stealing, CUDA,
                Clang, etc.
              </>
            ) : (
              <>
                並列性を備えたハードウェアの特性を深く理解したうえで，その特性を最大限に，かつ簡単に引き出すことのできるソフトウェア設計に関心があります。
                卒論研究として，GPU
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
                <br />
                キーワード：タスク並列，fork-join，work stealing，CUDA，Clang
                など
              </>
            )}
          </p>

          <p className="section-body">
            {locale === "en"
              ? "I am also interested in the following areas (though I am not an expert in all of them):"
              : "その他にも，以下の分野に関心があります（すべてに詳しいわけではありません）。"}
          </p>
          <ul className="list-primary section-body">
            <li>
              {locale === "en"
                ? "Domain-specific load balancing algorithms"
                : "ドメイン特化の負荷分散アルゴリズム"}
            </li>
            <ul className="list-secondary section-body">
              <li>
                {locale === "en"
                  ? "Examples: scheduling of grouped GEMM in LLM training and inference, parallel graph traversal on GPUs, etc."
                  : "例：LLM 学習・推論における Grouped GEMM のスケジューリング，GPU 上での並列グラフ探索 など"}
              </li>
            </ul>
            <li>
              {locale === "en"
                ? "Optimization of LLM training and inference workloads"
                : "LLM 推論・学習ワークロードの最適化"}
            </li>
            <ul className="list-secondary section-body">
              <li>
                {locale === "en"
                  ? "Examples: mitigating load imbalance in MoE expert parallelism, low-precision computation such as quantization, etc."
                  : "例：MoE の Expert Parallelism における負荷不均衡の緩和，量子化等の低精度処理 など"}
              </li>
            </ul>
            <li>
              {locale === "en"
                ? "High-level language runtimes independent of specific hardware"
                : "ハードウェアに依存しない高水準な言語処理系"}
            </li>
          </ul>

          <section className="pt-2">
            <h3 className="section-subheading">
              {locale === "en" ? "Conference Presentations" : "対外発表"}
            </h3>
            <ul className="list-primary section-body">
              <li>
                <span className="font-bold">Yuki Maeda</span>, Kenjiro Taura.
                <br></br>
                <span className="font-bold">
                  A GPU-Resident Fork-Join Task-Parallel Runtime.
                </span>
                <br></br>
                <a
                  href="https://jnamaral.github.io/LATHC26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  LATHC 2026
                </a>
                .
              </li>
            </ul>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
