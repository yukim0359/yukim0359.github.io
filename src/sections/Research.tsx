import { motion } from "framer-motion";
import { Microscope } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useI18n } from "../i18n/index.tsx";
import { researchEn } from "../data/en/research.tsx";
import { researchJa } from "../data/ja/research.tsx";

type ResearchData = typeof researchEn | typeof researchJa;

const Research = () => {
  const { locale } = useI18n();
  const data = locale === "en" ? researchEn : researchJa;
  return (
    <section id="research" className="py-6 bg-white">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <SectionHeading icon={Microscope}>Research</SectionHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="space-y-4"
        >
          <p className="section-body">
            {data.overview}
            <br />
            {data.keywords}
          </p>

          <p className="section-body">{data.interestsLead}</p>
          <ul className="list-primary section-body">
            {data.interests.map((item: ResearchData["interests"][number]) => (
              <li key={item.title}>
                {item.title}
                {"examples" in item && item.examples && (
                  <ul className="list-secondary section-body">
                    <li>{item.examples}</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <section className="pt-2">
            <h3 className="section-subheading">{data.presentationsHeading}</h3>
            <ul className="list-primary section-body">
              <li>
                {data.presentation.authors}
                <br />
                <span className="font-bold">{data.presentation.title}</span>
                <br />
                <a
                  href={data.presentation.venueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {data.presentation.venueLabel}
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="pt-2">
            <h3 className="section-subheading">{data.publicationHeading}</h3>
            <ul className="list-primary section-body">
              <li>
                {data.publication.authors}
                <br />
                <span className="font-bold">{data.publication.title}</span>
                <br />
                <span className="text-slate-700">
                  <a
                    href={data.publication.arxivUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {data.publication.arxivLabel}
                  </a>
                  {" · "}
                  <a
                    href={data.publication.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {data.publication.githubLabel}
                  </a>
                </span>
              </li>
            </ul>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
