import { motion } from "framer-motion";
import { useI18n } from "../i18n/index.tsx";

const Bio = () => {
  const { locale } = useI18n();
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
            <h3 className="section-subheading">
              {locale === "en" ? "Education" : "学歴"}
            </h3>
            <ul className="list-primary section-body">
              <li>
                {locale === "en"
                  ? "Apr. 2019 – Mar. 2022: "
                  : "2019年4月 – 2022年3月："}
                <span className="font-bold">
                  {locale === "en" ? "Kaisei High School" : "開成高等学校"}
                </span>
              </li>
              <li>
                {locale === "en"
                  ? "Apr. 2022 – Mar. 2026: "
                  : "2022年4月 – 2026年3月："}
                <span className="font-bold">
                  {locale === "en"
                    ? "Department of Information and Communication Engineering, Faculty of Engineering, The University of Tokyo"
                    : "東京大学 工学部 電子情報工学科"}
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="section-subheading">
              {locale === "en" ? "Work Experience" : "職歴"}
            </h3>
            <ul className="list-primary section-body">
              <li>
                {locale === "en"
                  ? "Apr. 2022 – Present: "
                  : "2022年4月 – 現在："}
                <span className="font-bold">
                  {locale === "en"
                    ? "Tetsuryokukai (part-time lecturer)"
                    : "鉄緑会 アルバイト"}
                </span>
                <ul className="list-secondary section-body">
                  <li>
                    {locale === "en"
                      ? "Teaching mathematics to junior and senior high school students."
                      : "中高生に数学を教えています。"}
                  </li>
                </ul>
              </li>
              <li>
                {locale === "en"
                  ? "Oct. 2025 – Dec. 2025: "
                  : "2025年10月 – 2025年12月："}
                <span className="font-bold">
                  {locale === "en"
                    ? "Fixstars (internship)"
                    : "Fixstars インターンシップ"}
                </span>
                <ul className="list-secondary section-body">
                  <li>
                    {locale === "en" ? (
                      <>
                        Wrote a tech blog on LLM fine-tuning on the Blackwell
                        architecture:{" "}
                        <a
                          href="https://zenn.dev/fixstars/articles/6000-max-q-llm-finetuning"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          tech blog
                        </a>
                        .
                      </>
                    ) : (
                      <>
                        <a
                          href="https://zenn.dev/fixstars/articles/6000-max-q-llm-finetuning"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Blackwellアーキテクチャ上でのLLM
                          fine-tuningについてのtech blog
                        </a>{" "}
                        を執筆しました。
                      </>
                    )}
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
