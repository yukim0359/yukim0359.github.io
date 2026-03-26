import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/index.tsx";
import { aboutEn } from "../data/en/about";
import { aboutJa } from "../data/ja/about";

const About = () => {
  const { locale } = useI18n();
  const data = locale === "en" ? aboutEn : aboutJa;
  return (
    <section id="about" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <SectionHeading icon={UserRound}>About Me</SectionHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="text-center"
        >
          <div className="text-left space-y-5">
            <p className="section-body">{data.intro}</p>
            <p className="section-body">{data.hobby}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="text-center"
              >
                <img
                  src={data.photos[0].src}
                  alt={data.photos[0].alt}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {data.photos[0].caption}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.36 }}
                className="text-center"
              >
                <img
                  src={data.photos[1].src}
                  alt={data.photos[1].alt}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {data.photos[1].caption}
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
