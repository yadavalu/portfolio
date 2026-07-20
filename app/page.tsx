"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import portfolioData from './data/portfolio-data.json'


//const portfolioData = 
 
const { personal, projects, experience, publications, education, skills, languages, honors } = portfolioData;
const { technical: techSkills, soft: softSkills } = skills;

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const sectionList = ["about", "projects", "experience", "publications", "education", "skills", "honors", "contact"];
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const renderSection = (section: string) => {
    switch (section) {
      case "about":
        return (
          <section className="flex h-full w-full items-center justify-center bg-[#fef9c3] p-6 sm:p-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="flex flex-col items-center gap-8 md:flex-row"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-300 to-green-700 text-5xl font-bold text-white shadow-lg"
              >
                AY
              </motion.div>
              <div className="max-w-2xl text-center md:text-left">
                <h1 className="mb-2 text-4xl font-extrabold text-green-900 md:text-5xl">{personal.name}</h1>
                <p className="mb-4 text-xl text-green-700">{personal.subheading}</p>
                <p className="mb-6 text-yellow-900">{personal.description}</p>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <button
                    className="rounded-lg bg-green-700 px-6 py-2 font-medium text-white shadow transition hover:bg-green-800"
                    onClick={() => setActiveSection("projects")}
                  >
                    View Projects
                  </button>
                  <button
                    className="rounded-lg border-2 border-green-700 px-6 py-2 font-medium text-green-700 transition hover:bg-yellow-100"
                    onClick={() => setActiveSection("contact")}
                  >
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        );
      case "projects":
        return (
          <section className="h-full w-full overflow-auto bg-[#fef9c3] p-8">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-6xl px-4">
              <h2 className="mb-10 text-3xl font-bold text-green-900">Featured Projects</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <motion.a
                    key={project.id}
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(202, 138, 4, 0.15)" }}
                    className="group block rounded-2xl bg-[#fef3c7] p-6 shadow-md transition-shadow hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-32 w-full items-center justify-center rounded-xl bg-yellow-200 text-3xl text-green-400 transition group-hover:text-green-700">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="h-32 w-full rounded-lg object-cover" />
                      ) : (
                        <span role="img" aria-label="project">💡</span>
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-green-800">{project.title}</h3>
                    <p className="mb-3 text-yellow-900">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded bg-[#f0f0b0] px-2 py-1 text-xs text-green-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </section>
        );
      case "experience":
        return (
          <section className="h-full w-full overflow-auto bg-[#fef9c3] p-8">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-6xl px-4">
              <h2 className="mb-10 text-3xl font-bold text-green-900">Experience</h2>
              <div className="relative pl-6">
                <div className="absolute bottom-0 left-2 top-0 w-1 rounded bg-green-200" />
                {experience.map((exp, index) => (
                  <motion.div
                    key={`${exp.position}-${exp.company}`}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative mb-10 flex items-start"
                  >
                    <div className="absolute -left-3 top-2 h-4 w-4 rounded-full bg-green-700" />
                    <div className="ml-6 flex-1 rounded-xl bg-[#fef3c7] p-6 shadow-md transition-shadow hover:shadow-lg">
                      <h3 className="text-xl font-semibold text-green-800">{exp.position}</h3>
                      <p className="font-medium text-yellow-900">{exp.company}</p>
                      <p className="mb-2 text-sm text-yellow-900">{exp.year}</p>
                      <p className="text-yellow-900">{exp.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {exp.key.map((key) => (
                          <span key={key} className="rounded bg-[#f0f0b0] px-2 py-1 text-xs text-green-800">
                            {key}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        );
      case "publications":
        return (
          <section className="h-full w-full overflow-auto bg-[#fef9c3] p-8">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-6xl px-4">
              <h2 className="mb-8 text-3xl font-bold text-green-900">Publications</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {publications.map((pub, index) => (
                  <motion.div
                    key={`${pub.title}-${index}`}
                    whileHover={{ scale: 1.03 }}
                    className="cursor-pointer rounded-xl bg-[#fef3c7] p-5 shadow-md transition"
                    onClick={() => window.open(pub.link, "_blank", "noopener,noreferrer")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        window.open(pub.link, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    <h3 className="font-semibold text-green-800">{pub.title}</h3>
                    <p className="font-medium text-yellow-900">{pub.journal}</p>
                    <p className="text-sm text-yellow-900">{pub.doi}</p>
                    <p className="text-sm text-yellow-900">{pub.year}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {pub.keywords.map((keyword) => (
                        <span key={keyword} className="rounded bg-[#f0f0b0] px-2 py-1 text-xs text-green-800">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        );
      case "education":
        return (
          <section className="h-full w-full overflow-auto bg-[#fef9c3] p-8">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-6xl px-4">
              <h2 className="mb-10 text-3xl font-bold text-green-900">Education</h2>
              <div className="relative pl-6">
                <div className="absolute bottom-0 left-2 top-0 w-1 rounded bg-green-200" />
                {education.map((edu, index) => (
                  <motion.div
                    key={`${edu.degree}-${index}`}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative mb-10 flex items-start"
                  >
                    <div className="absolute -left-3 top-2 h-4 w-4 rounded-full bg-green-700" />
                    <div className="ml-6 flex-1 rounded-xl bg-[#fef3c7] p-6 shadow-md transition-shadow hover:shadow-lg">
                      <h3 className="text-xl font-semibold text-green-800">{edu.degree}</h3>
                      <p className="font-medium text-yellow-900">{edu.school}</p>
                      <p className="mb-2 text-sm text-yellow-900">{edu.year}</p>
                      <p className="mb-2 font-medium text-yellow-900">Grade: {edu.grade}</p>
                      <p className="text-yellow-900">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        );
      case "skills":
        return (
          <section className="h-full w-full overflow-auto bg-[#fef9c3] p-8">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-6xl px-4 pb-24">
              <h2 className="mb-8 text-3xl font-bold text-green-900">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {techSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="cursor-pointer rounded-full bg-[#fef3c7] px-4 py-2 text-green-800 shadow transition-colors hover:bg-yellow-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-6xl px-4 pb-24">
              <h2 className="mb-8 text-3xl font-bold text-green-900">Soft Skills</h2>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="cursor-pointer rounded-full bg-[#fef3c7] px-4 py-2 text-green-800 shadow transition-colors hover:bg-yellow-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-6xl px-4 pb-24">
              <h2 className="mb-8 text-3xl font-bold text-green-900">Languages</h2>
              <div className="flex flex-wrap gap-6">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex min-w-[140px] flex-col items-center rounded-xl bg-[#fef3c7] px-6 py-4 shadow-md"
                  >
                    <span className="font-semibold text-green-800">{lang.name}</span>
                    <span className="text-sm text-yellow-900">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        );
      case "honors":
        return (
          <section className="h-full w-full overflow-auto bg-[#fef9c3] p-8">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-6xl px-4">
              <h2 className="mb-8 text-3xl font-bold text-green-900">Honors & Awards</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {honors.map((award) => (
                  <motion.div key={award.title} whileHover={{ scale: 1.03 }} className="rounded-xl bg-[#fef3c7] p-5 shadow-md">
                    <h3 className="font-semibold text-green-800">{award.title}</h3>
                    <p className="text-sm text-yellow-900">{award.year}</p>
                    <p className="text-yellow-900">{award.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        );
      case "contact":
        return (
          <section className="h-full w-full overflow-auto bg-[#fef9c3] p-8">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mx-auto max-w-2xl px-4">
              <h2 className="mb-8 mt-8 text-3xl font-bold text-green-900">Contact</h2>
              <div className="flex flex-col items-center gap-6 rounded-xl bg-[#fef3c7] p-8 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-green-700">Email:</span>
                  <a href={`mailto:${personal.email}`} className="text-green-900 underline transition hover:text-green-700">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-green-700">LinkedIn:</span>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-green-900 underline transition hover:text-green-700">
                    {personal.linkedin.replace("https://", "")}
                  </a>
                </div>
              </div>
              <h2 className="mb-8 mt-8 text-3xl font-bold text-green-900">Links</h2>
              <div className="flex flex-col items-center gap-6 rounded-xl bg-[#fef3c7] p-8 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-green-700">GitHub:</span>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-green-900 underline transition hover:text-green-700">
                    {personal.github}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-green-700">ORCID:</span>
                  <a href={personal.orcid} target="_blank" rel="noopener noreferrer" className="text-green-900 underline transition hover:text-green-700">
                    {personal.orcid.replace("https://orcid.org/", "")}
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fef9c3] font-sans text-gray-900">
      <nav className="fixed left-0 top-0 z-30 w-full bg-[#fef9c3]/80 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button className="text-xl font-bold tracking-tight text-green-800" onClick={() => setActiveSection("about")}>
            {personal.name.split(" ").slice(0, 2).join(" ") + " G."}
          </button>
          <div className="flex gap-6 overflow-x-auto whitespace-nowrap text-sm font-medium text-green-900">
            {sectionList.map((section) => (
              <button
                key={section}
                className={`transition-colors hover:text-yellow-600 ${activeSection === section ? "font-bold underline" : ""}`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="flex h-screen items-center justify-center pt-20 pb-24">
        {renderSection(activeSection)}
      </div>

      <footer className="pointer-events-none fixed bottom-0 left-0 w-full select-none bg-[#fef9c3]/80 py-6 text-center text-sm text-green-900">
        © {new Date().getFullYear()} {personal.name.split(" ").slice(0, 2).join(" ") + " G."} All rights reserved.
      </footer>
    </div>
  );
}
