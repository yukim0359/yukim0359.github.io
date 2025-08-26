import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="text-left space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              東京大学工学部電子情報工学科（EEIC）に所属。並列・分散処理をはじめとしたHPC分野に関心があり，現在はGPUにおけるタスク並列モデルに関する研究を行っています。
              OSやコンピュータアーキテクチャなど，低レイヤーの技術にも興味があります。
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              趣味は野球観戦です。横浜DeNAベイスターズを応援しており，いわゆる暗黒時代からのファンです。他にもスポーツ観戦全般，音楽鑑賞，旅行なども好きです。
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
                  2024年にDeNAが日本一になったときの写真。
                  <br />
                  運良く現地で観戦できました。
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
                  鹿児島県の佐多岬に行ったときの写真。
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
