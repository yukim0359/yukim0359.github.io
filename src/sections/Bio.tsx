import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/index.tsx";
import { bioEn } from "../data/en/bio.tsx";
import { bioJa } from "../data/ja/bio.tsx";

const Bio = () => {
  const { locale } = useI18n();
  const data = locale === "en" ? bioEn : bioJa;
  return (
    <section id="bio" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <SectionHeading icon={GraduationCap}>Biography</SectionHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="space-y-6"
        >
          <section>
            <h3 className="section-subheading">{data.educationHeading}</h3>
            <ul className="list-primary section-body">
              <li>
                {data.education.kaisei.period}
                <span className="font-bold">{data.education.kaisei.name}</span>
              </li>
              <li>
                {data.education.uTokyoBSc.period}
                <span className="font-bold">
                  {data.education.uTokyoBSc.name}
                </span>
                <ul className="list-secondary section-body">
                  {data.education.uTokyoBSc.notes.map((note: string) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </li>
              <li>
                {data.education.uTokyoMSc.period}
                <span className="font-bold">
                  {data.education.uTokyoMSc.name}
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="section-subheading">{data.workHeading}</h3>
            <ul className="list-primary section-body">
              <li>
                {data.work.tetsuryokukai.period}
                <span className="font-bold">
                  {data.work.tetsuryokukai.name}
                </span>
                <ul className="list-secondary section-body">
                  {data.work.tetsuryokukai.details.map((d: string) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </li>
              <li>
                {data.work.fixstars.period}
                <span className="font-bold">{data.work.fixstars.name}</span>
                <ul className="list-secondary section-body">
                  <li>{data.work.fixstars.blogLine}</li>
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
