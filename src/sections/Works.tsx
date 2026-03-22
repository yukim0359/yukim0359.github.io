import { AnimatePresence, motion } from "framer-motion";
import { Layers2, X } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { works } from "../constants/works";
import { useI18n } from "../i18n/index.tsx";

const Works = () => {
  const { locale } = useI18n();
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedWork(index);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <section id="works" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <SectionHeading icon={Layers2}>Works</SectionHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10"
        >
          <div className="text-left space-y-5">
            <p className="section-body">
              {locale === "en"
                ? "A selection of things I have worked on, not limited to research. Click an item to see more details."
                : "研究に限らず，これまでに取り組んできたことの抜粋です。クリックして詳細を確認できます。"}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-md shadow-sm p-5 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow duration-200"
              onClick={() => openModal(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {work.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3 whitespace-pre-line">
                {(locale === "en" && work.descriptionsEn
                  ? work.descriptionsEn
                  : work.descriptions
                ).join("\n")}
              </p>

              <div className="flex flex-wrap gap-2">
                {work.technologies?.map((tech) => (
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
        {selectedWork !== null && (
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
                    {works[selectedWork].title}
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
                    {works[selectedWork].descriptions.map((desc, descIndex) => (
                      <p
                        key={descIndex}
                        className="text-gray-600 leading-relaxed"
                      >
                        {(locale === "en" &&
                        works[selectedWork].descriptionsEn
                          ? works[selectedWork].descriptionsEn
                          : works[selectedWork].descriptions)[descIndex] ??
                          desc}
                      </p>
                    ))}
                  </div>

                  {works[selectedWork].images && (
                    <div>
                      <div className="grid grid-cols-1 gap-4">
                        {works[selectedWork].images?.map((img, imgIndex) => (
                          <div key={imgIndex} className="text-center">
                            <img
                              src={img.src}
                              alt={`${works[selectedWork].title} image ${imgIndex + 1}`}
                              className="w-full max-w-md mx-auto rounded-lg shadow-md"
                            />
                            {img.caption && (
                              <p className="text-sm text-gray-500 mt-2">
                                {locale === "en" && img.captionEn
                                  ? img.captionEn
                                  : img.caption}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {works[selectedWork].links && (
                    <div>
                      <div className="flex flex-col gap-2">
                        {works[selectedWork].links?.map((link, linkIndex) => (
                          <div key={linkIndex} className="text-gray-600">
                            <span className="font-medium">{link.title}: </span>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link break-all"
                            >
                              {link.url}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {works[selectedWork].technologies?.map((tech) => (
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

export default Works;
