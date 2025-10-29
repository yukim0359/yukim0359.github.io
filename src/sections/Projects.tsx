import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { projects } from "../constants/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center mb-10"
        >
          <div className="text-left">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              これまでに取り組んできたことをまとめたものです。クリックして詳細を確認できます。
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-md shadow-sm p-5 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow duration-200"
              onClick={() => openModal(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3 whitespace-pre-line">
                {project.descriptions.join("\n")}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {projects[selectedProject].title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    {projects[selectedProject].descriptions.map(
                      (desc, descIndex) => (
                        <p
                          key={descIndex}
                          className="text-gray-600 leading-relaxed"
                        >
                          {desc}
                        </p>
                      ),
                    )}
                  </div>

                  {projects[selectedProject].images && (
                    <div>
                      <div className="grid grid-cols-1 gap-4">
                        {projects[selectedProject].images?.map(
                          (img, imgIndex) => (
                            <div key={imgIndex} className="text-center">
                              <img
                                src={img.src}
                                alt={`${
                                  projects[selectedProject].title
                                } image ${imgIndex + 1}`}
                                className="w-full max-w-md mx-auto rounded-lg shadow-md"
                              />
                              {img.caption && (
                                <p className="text-sm text-gray-500 mt-2">
                                  {img.caption}
                                </p>
                              )}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {projects[selectedProject].links && (
                    <div>
                      <div className="flex flex-col gap-2">
                        {projects[selectedProject].links?.map(
                          (link, linkIndex) => (
                            <div key={linkIndex} className="text-gray-600">
                              <span className="font-medium">
                                {link.title}:{" "}
                              </span>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline break-all"
                              >
                                {link.url}
                              </a>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
