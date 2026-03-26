import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/index.tsx";
import { skillsEn } from "../data/en/skills";
import { skillsJa } from "../data/ja/skills";

const Skills = () => {
  const { locale } = useI18n();
  const skills = locale === "en" ? skillsEn : skillsJa;
  return (
    <section id="skills" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <SectionHeading icon={Sparkles}>Skills</SectionHeading>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
            >
              <div className="section-subheading">{skill.field}</div>
              <ul className="list-primary section-body">
                {skill.descriptions.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
