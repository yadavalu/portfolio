import React, { useEffect, useState } from 'react'
import './index.css'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Aadith Panels",
    description: "A social enterprise founded by myself focused on sustainable energy solutions by providing solar panel system designs to small power-intensive firms & organisations.",
    tech: ["Python", "CAD/ANSYS", "Manufacturing", "Leadership"],
    link: "https://yadavalu.github.io/Aadith-Panels/",
    image: "/images/RGTemple.jpg"
  },
  {
    id: 2,
    title: "E-Library GUI System",
    description: "Built an E-Library system for Radha-Govinda Temple to manage and keep track of their theological book inventory and lending system.",
    tech: ["Python", "Qt5", "SQL"],
    link: "https://gitlab.com/YG-alu/rg-temple-library",
    image: "/images/E-library.jpg"
  },
  {
    id: 3,
    title: "E-Bike Conversion",
    description: "Converted mechanical bicycle to an electric bicycle with a 250W motor, 24V battery and a custom PCB for control systems.",
    tech: ["Manufacturing", "Control Systems"],
    link: "#"
  }
]

const experience = [
  {
    position: "Founder",
    company: "Aadith Panels",
    location: "Berlin, Germany",
    year: "March 2024 - July 2025",
    description: "Founded a social enterprise, consisting of a team of 7, focused on sustainable energy solutions, providing solar panel system designs to small power-intensive firms and organisations.",
    key: ["Ansys", "CAD", "Manufacturing", "Leadership", "Business Ownership"],
  },
  {
    position: "Student Internship",
    company: "Rolls Royce Deutschland",
    location: "Dahlewitz, Germany",
    year: "June 2023",
    description: "Assisted in the design of compressor blade with modal analysis using ANSYS, basics of CAD modelling for turbine fan blade, unittesting for python codebase and basics of project management.",
    key: ["Ansys", "CAD", "Python", "Project Management"]
  }
]

const publications = [
  {
    title: "Computation of maximum slosh wave height for various viscous liquids with linear and non-linear models",
    affiliation: "Berlin International School",
    journal: "Journal of Fluids and Structures",
    doi: "#",
    year: "July 2025",
    keywords: ["Sloshing", "Maximum slosh wave height", "Linear mechanical model", "Non-linear mechanical model", "Duffing oscillator"]
  }
]

const education = [
  {
    degree: "IB Diploma",
    school: "Berlin International School",
    year: "2023-2025",
    grade: "IB 43 / 45",
    description: "HL: Physics, Mathematics AA, German B, SL: English A L&L, Chemistry, Economics, Extended Essay in Physics",
  }
]

const tech_skills = [
  "Python", "Webdev", "Data Analysis", "CAD", "ANSYS", "Manufacturing"
] 

const soft_skills = [
  "Leadership", "Project Management", "Problem Solving", "Teamwork", "Communication"
]

const languages = [
  { name: "English", level: "Native" },
  { name: "German", level: "Fluent C1" },
  { name: "Tamil", level: "Mothertongue" },
  { name: "Spanish", level: "Basics ~A1" },
  { name: "Sanskrit", level: "Basics ~A1" }
]

const honors = [
  { 
    title: "Valedictorian award",
    year: "June 2025",
    awardedBy: "Berlin International School",
    description: "Awarded for maintaining highest overall (German) GPA of 1.0 throughout the IB Diploma at Berlin International School",
  },
  { 
    title: "DPG-Abiturpreis",
    year: "June 2025",
    awardedBy: "Deutsche Physikalische Gesellschaft",
    description: "Awarded for outstanding performance in Physics during the IB Diploma",
  },
  { 
    title: "Kant Prize 2025 Winner",
    year: "May 2025",
    awardedBy: "Stiftung Private Kant-Schulen gGmbH",
    description: "Awarded for research paper stemming from our BL4S 2025 proposal on optimising neutron spallation target geometry",
  },
  { 
    title: "Kant Medal 2025 Natural Science Nominee",
    year: "May 2025",
    awardedBy: "Stiftung Private Kant-Schulen gGmbH",
    description: "Nominated for Kant Medal 2025 in Natural Science category for extended essay in modelling sloshing using mechanical models",
  },
  { 
    title: "Cambridge IGCSE Mathematics Top in Germany Award",
    year: "August 2023",
    awardedBy: "Cambridge Assessment International Education",
    description: "Awarded for achieving the highest mark in IGCSE Mathematics in Germany",
  },
  { 
    title: "Cayley CEMS Waterloo Contest International High Honor Role",
    year: "June 2023",
    awardedBy: "CEMS, University of Waterloo",
    description: "Awarded for achieving a score, ranking 34th internationally under Group III of the honour role, in the Cayley Mathematics contest",

  }
]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

function App() {
  const sectionList = [
    "about", "projects", "experience", "publications", "education", "skills", "honors", "contact"
  ]
  const [activeSection, setActiveSection] = useState("about")

  // Disable scroll on body, allow scroll within section
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Helper to render only the active section
  const renderSection = (section) => {
    switch (section) {
      case "about":
        return (
          <section className="w-screen h-screen flex items-center justify-center bg-yellow-100">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-300 to-green-700 shadow-lg flex items-center justify-center text-5xl text-white font-bold"
              >
                AY
              </motion.div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-2">Aadith Yadav Govindarajan</h1>
                <p className="text-xl text-green-700 mb-4">Aspiring engineering student @ Berlin International School</p>
                <p className="text-yellow-900 max-w-xl mb-4">
                  IB Student at Berlin International School with a passion for mechanical & electrical engineering. Part-time founder at Aadith Panels, a social enterprise focused on sustainable energy solutions.
                </p>
                <div className="flex gap-4">
                  <button
                    className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 shadow transition"
                    onClick={() => setActiveSection('projects')}
                  >
                    View Projects
                  </button>
                  <button
                    className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg font-medium hover:bg-yellow-100 transition"
                    onClick={() => setActiveSection('contact')}
                  >
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        )
      case "projects":
        return (
          <section className="w-full h-full flex flex-col items-start justify-start from-yellow-100 overflow-auto p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-6xl mx-auto px-4"
            >
              <h2 className="text-3xl font-bold mb-10 text-green-900">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                  <motion.a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(202, 138, 4, 0.15)" }}
                    className="block bg-yellow-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 group"
                  >
                    <div className="h-32 w-full bg-yellow-200 rounded-xl mb-4 flex items-center justify-center text-3xl text-green-400 group-hover:text-green-700 transition">
                      {(!project.image || project.image === "none") ? (
                        <span role="img" aria-label="project">💡</span>
                      ) : (
                        <img
                          src={process.env.PUBLIC_URL + project.image}
                          alt={project.title}
                          className="w-full h-32 overflow-hidden object-fit rounded-lg"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800">{project.title}</h3>
                    <p className="text-yellow-900 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs text-green-800 bg-[#f0f0b0] px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </section>
        )
      case "experience":
        return (
          <section className="w-full h-full flex flex-col items-start justify-start bg-yellow-100 overflow-auto p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-6xl mx-auto px-4"
            >
              <h2 className="text-3xl font-bold mb-10 text-green-900">Experience</h2>
              <div className="relative pl-6">
                <div className="absolute left-2 top-0 bottom-0 w-1 bg-green-200 rounded"></div>
                {experience.map((exp, idx) => (
                  <motion.div
                    key={exp.position}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.2 }}
                    className="mb-10 flex items-start relative"
                  >
                    <div className="w-4 h-4 bg-green-700 rounded-full absolute -left-3 top-2"></div>
                    <div className="bg-yellow-100 p-6 rounded-xl shadow-md ml-6 flex-1 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-green-800">{exp.position}</h3>
                      <p className="text-green-700 font-medium">{exp.company}</p>
                      <p className="text-sm text-yellow-900 mb-2">{exp.year}</p>
                      <p className="text-yellow-900">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 gap-top-2 mt-2">
                        {exp.key.map(key => (
                          <span key={key} className="text-xs text-green-800 bg-[#f0f0b0] px-2 py-1 rounded">
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
        )
      case "publications":
        return (
          <section className="w-full h-full flex flex-col items-start justify-start bg-yellow-100 overflow-auto p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-6xl mx-auto px-4"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-900">Publications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {publications.map((pubs, i) => (
                  <motion.div
                    key={pubs.title + i}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-4 bg-yellow-100 p-5 rounded-xl shadow-md transition cursor-pointer"
                    onClick={() => window.open(pubs.doi, '_blank', 'noopener,noreferrer')}
                    tabIndex={0}
                    role="button"
                    onKeyPress={e => {
                      if (e.key === 'Enter' || e.key === ' ') window.open(pubs.doi, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <div>
                      <h3 className="font-semibold text-green-800">{pubs.title}</h3>
                      <p className="font-medium text-green-800">{pubs.journal}</p>
                      <p className="text-sm text-yellow-900">{pubs.year}</p>
                      <div className="flex flex-wrap gap-2 gap-top-2 mt-2">
                        {pubs.keywords.map(keywords => (
                          <span key={keywords} className="text-xs text-green-800 bg-[#f0f0b0] px-2 py-1 rounded">
                            {keywords}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )
      case "education":
        return (
          <section className="w-full h-full flex flex-col items-start justify-start bg-yellow-100 overflow-auto p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-6xl mx-auto px-4"
            >
              <h2 className="text-3xl font-bold mb-10 text-green-900">Education</h2>
              <div className="relative pl-6">
                <div className="absolute left-2 top-0 bottom-0 w-1 bg-green-200 rounded"></div>
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.2 }}
                    className="mb-10 flex items-start relative"
                  >
                    <div className="w-4 h-4 bg-green-700 rounded-full absolute -left-3 top-2"></div>
                    <div className="bg-yellow-100 p-6 rounded-xl shadow-md ml-6 flex-1 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-green-800">{edu.degree}</h3>
                      <p className="text-green-700 font-medium">{edu.school}</p>
                      <p className="text-sm text-yellow-900 mb-2">{edu.year}</p>
                      <p className="text-yellow-900 mb-2 font-medium">Grade: {edu.grade}</p>
                      <p className="text-yellow-900">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )
      case "skills":
        return (
          <section className="w-full h-full flex flex-col items-start justify-start bg-yellow-100 overflow-auto p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-6xl mx-auto px-4 pb-24"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-900">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {tech_skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="bg-yellow-100 text-green-800 px-4 py-2 rounded-full hover:bg-yellow-200 cursor-pointer transition-colors shadow"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-6xl mx-auto px-4 pb-24"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-900">Soft Skills</h2>
              <div className="flex flex-wrap gap-3">
                {soft_skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="bg-yellow-100 text-green-800 px-4 py-2 rounded-full hover:bg-yellow-200 cursor-pointer transition-colors shadow"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-6xl mx-auto px-4 pb-24"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-900">Languages</h2>
              <div className="flex flex-wrap gap-6">
                {languages.map(lang => (
                  <motion.div
                    key={lang.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-yellow-100 px-6 py-4 rounded-xl shadow-md flex flex-col items-center min-w-[140px]"
                  >
                    <span className="font-semibold text-green-800">{lang.name}</span>
                    <span className="text-sm text-yellow-900">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )
      case "honors":
        return (
          <section className="w-full h-full flex flex-col items-start justify-start bg-yellow-100 overflow-auto p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-6xl mx-auto px-4"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-900">Honors & Awards</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {honors.map((award, i) => (
                  <motion.div
                    key={award.title}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-4 bg-yellow-100 p-5 rounded-xl shadow-md"
                  >
                    <div>
                      <h3 className="font-semibold text-green-800">{award.title}</h3>
                      <p className="text-sm text-yellow-900">{award.year}</p>
                      <p className="text-yellow-900">{award.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )
      case "contact":
        return (
          <section className="w-full h-full flex flex-col items-start justify-start bg-yellow-100 overflow-auto p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="max-w-2xl mx-auto px-4"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-900">Contact</h2>
              <div className="bg-yellow-100 rounded-xl shadow-md p-8 flex flex-col gap-6 items-center">
                <div className="flex items-center gap-3">
                  <span className="text-green-700 text-xl font-semibold">Email:</span>
                  <a
                    href="mailto:g.aadithyadav@gmail.com"
                    className="text-green-900 underline hover:text-green-700 transition"
                  >
                    g.aadithyadav@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-700 text-xl font-semibold">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/aadith-yadav-govindarajan-8a18b0280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-900 underline hover:text-green-700 transition"
                  >
                    linkedin.com/in/aadith-yadav-govindarajan-8a18b0280/
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-yellow-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <span className="font-bold text-green-800 text-xl tracking-tight cursor-pointer" onClick={() => setActiveSection('about')}>
            Aadith Yadav G.
          </span>
          <div className="flex gap-6 text-green-900 font-medium text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-[#d8ad71] scrollbar-track-transparent whitespace-nowrap">
            {sectionList.map((sec) => (
              <button
                key={sec}
                className={`hover:text-yellow-600 transition-colors ${activeSection === sec ? "underline font-bold" : ""}`}
                onClick={() => setActiveSection(sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Only render the active section */}
      <div className="w-screen h-screen flex items-center justify-center pt-20 pb-24">
        {renderSection(activeSection)}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-yellow-900 text-sm fixed bottom-0 left-0 w-full bg-white/80 pointer-events-none select-none">
        &copy; {new Date().getFullYear()} Aadith Yadav G. All rights reserved.
      </footer>
    </div>
  )
}

export default App

