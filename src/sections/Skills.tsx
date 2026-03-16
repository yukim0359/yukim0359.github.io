import { motion } from "framer-motion";
import { skills } from "../constants/skills";
import { useI18n } from "../i18n/index.tsx";

const Skills = () => {
  const { locale } = useI18n();
  return (
    <section id="skills" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="section-heading">Skills</h2>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="section-subheading">{skill.field}</div>
              <ul className="list-primary section-body">
                {skill.descriptions.map((desc, descIndex) => (
                  <li key={descIndex}>
                    {locale === "en" && skill.descriptionsEn
                      ? skill.descriptionsEn[descIndex] ?? desc
                      : desc}
                  </li>
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
