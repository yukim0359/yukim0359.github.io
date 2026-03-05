import { motion } from "framer-motion";

const Bio = () => {
  return (
    <section id="bio" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="section-heading">Biography</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          <section>
            <h3 className="section-subheading">学歴</h3>
            <ul className="list-primary section-body">
              <li>
                2019年4月 – 2022年3月：
                <span className="font-bold">開成高等学校</span>
              </li>
              <li>
                2022年4月 – 2026年3月：
                <span className="font-bold">
                  東京大学 工学部 電子情報工学科
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="section-subheading">職歴</h3>
            <ul className="list-primary section-body">
              <li>
                2022年4月 – 現在：
                <span className="font-bold">鉄緑会 アルバイト</span>
                <ul className="list-secondary section-body">
                  <li>中高生に数学を教えています。</li>
                </ul>
              </li>
              <li>
                2025年10月 – 2025年12月：
                <span className="font-bold">Fixstars インターンシップ</span>
                <ul className="list-secondary section-body">
                  <li>
                    <a
                      href="https://zenn.dev/fixstars/articles/6000-max-q-llm-finetuning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Blackwellアーキテクチャ上でのLLM fine-tuningについてのtech
                      blog
                    </a>{" "}
                    を執筆しました。
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
