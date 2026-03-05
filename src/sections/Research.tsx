import { motion } from "framer-motion";

const Research = () => {
  return (
    <section id="research" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="section-heading">Research</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4"
        >
          <p className="section-body">
            並列性を備えたハードウェアの特性を深く理解したうえで，その特性を最大限に，かつ簡単に引き出すことのできるソフトウェア設計に関心があります。
            現在は，卒論研究として，GPUにおけるタスク並列ランタイムの設計・実装に取り組んでいます（
            <a
              href="https://www.eidos.ic.i.u-tokyo.ac.jp/contents/research/gpu_task_parallelism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              研究室HPの研究紹介記事
            </a>
            もご覧ください）。
            <br></br>
            キーワード：タスク並列，fork-join，work stealing，CUDA，Clang など
          </p>

          <p className="section-body">
            その他にも，以下の分野に関心があります（すべてに詳しいわけではありません）。
          </p>

          <ul className="list-primary section-body">
            <li>ドメイン特化の負荷分散アルゴリズム</li>
            <ul className="list-secondary section-body">
              <li>
                例：LLM学習・推論におけるGrouped
                GEMMのスケジューリング，GPU上での並列グラフ探索 など
              </li>
            </ul>
            <li>LLM推論・学習ワークロードの最適化</li>
            <ul className="list-secondary section-body">
              <li>
                例：MoEのExpert
                Parallelismにおける負荷不均衡の緩和，量子化等の低精度処理 など
              </li>
            </ul>
            <li>ハードウェアに依存しない高水準な言語処理系</li>
          </ul>

          <section className="pt-2">
            <h3 className="section-subheading">対外発表</h3>
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
                  className="text-blue-600 underline"
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
