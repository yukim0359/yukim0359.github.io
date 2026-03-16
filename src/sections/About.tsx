import { motion } from "framer-motion";
import { useI18n } from "../i18n/index.tsx";

const About = () => {
  const { locale } = useI18n();
  return (
    <section id="about" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="text-left space-y-5">
            <p className="section-body">
              {locale === "en" ? (
                <>
                  I am a fourth-year undergraduate student in the Department of
                  Information and Communication Engineering, Faculty of
                  Engineering, the University of Tokyo, and a member of{" "}
                  <a
                    href="https://www.eidos.ic.i.u-tokyo.ac.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Taura Laboratory
                  </a>
                  . My research interest is in high-performance computing (HPC),
                  especially parallel and distributed systems.
                </>
              ) : (
                <>
                  東京大学工学部電子情報工学科（EEIC）
                  <a
                    href="https://www.eidos.ic.i.u-tokyo.ac.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    田浦研究室
                  </a>
                  に所属。学部4年。並列・分散処理を主とした高性能計算（HPC）分野に関心があり，研究を行っています。
                </>
              )}
            </p>
            <p className="section-body">
              {locale === "en"
                ? "My main hobby is watching baseball. I am a Yokohama DeNA BayStars fan and have supported the team since their so-called dark ages. I also enjoy watching other sports, listening to music, and travelling."
                : "趣味は野球観戦です。横浜DeNAベイスターズを応援しており，いわゆる暗黒時代からのファンです。他にもスポーツ観戦全般，音楽鑑賞，旅行なども好きです。"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <img
                  src="baseball.JPG"
                  alt="野球観戦"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {locale === "en" ? (
                    <>
                      A photo from the game where the Yokohama DeNA BayStars won
                      the Nippon Series in 2024.
                      <br />I was lucky enough to be there in the stadium.
                    </>
                  ) : (
                    <>
                      2024年にDeNAが日本一になったときの写真。
                      <br />
                      運良く現地で観戦できました。
                    </>
                  )}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <img
                  src="satamisaki.JPG"
                  alt="佐多岬"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {locale === "en"
                    ? "A photo taken at Cape Sata in Kagoshima Prefecture."
                    : "鹿児島県の佐多岬に行ったときの写真。"}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
