import { motion } from "framer-motion";
import { skills } from "../constants/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
        </motion.div>

        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-5">
          {skills.map((skill, index) => (
            <motion.li
              key={skill.field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-2 pl-6 pr-4 border border-gray-200 rounded-md"
            >
              <div className="pt-2 font-semibold text-lg md:text-xl text-gray-900 mb-4">
                {skill.field}
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {skill.descriptions.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
