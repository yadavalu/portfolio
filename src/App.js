import React, { useRef } from 'react'
import './index.css'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Smart Grid Optimization",
    description: "Developed a machine learning model to reduce energy waste by 23% in simulated environments.",
    tech: ["Python", "TensorFlow", "MATLAB"],
    link: "#"
  },
  {
    id: 2,
    title: "IoT Power Monitoring",
    description: "Built a real-time IoT system for monitoring power usage in industrial settings.",
    tech: ["C++", "ESP32", "AWS IoT"],
    link: "#"
  },
  {
    id: 3,
    title: "Solar Inverter Design",
    description: "Prototyped a 5kW inverter with 98.2% efficiency using GaN transistors.",
    tech: ["Altium", "Simulink", "Power Systems"],
    link: "#"
  }
]

const experience = [
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
    doi: "unavailable",
    year: "July 2025",
    description: "TODO",
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

const skills = [
  "Power Systems", "Circuit Design", "C++", "Python", "MATLAB", "PCB Design", "PLC Programming", "AutoCAD"
]

const languages = [
  { name: "English", level: "Native" },
  { name: "German", level: "Fluent, C1" },
  { name: "Tamil", level: "Mothertongue" }
]

const honors = [
  { title: "IEEE Best Paper Award", year: "2022" },
  { title: "National Engineering Competition Winner", year: "2021" },
  { title: "Siemens Innovation Grant Recipient", year: "2020" }
]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

function App() {
  const refs = {
    about: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    publications: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    languages: useRef(null),
    honors: useRef(null),
    contact: useRef(null)
  }

  const scrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-green-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <span className="font-bold text-green-800 text-xl tracking-tight cursor-pointer" onClick={() => scrollTo('about')}>
            Aadith Yadav G.
          </span>
          <div className="flex gap-6 text-green-900 font-medium text-sm">
            {["about", "projects", "education", "skills", "languages", "honors", "contact"].map((sec) => (
              <button
                key={sec}
                className="hover:text-yellow-600 transition-colors"
                onClick={() => scrollTo(sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <section ref={refs.about} className="pt-28 pb-16 max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
            <p className="text-xl text-green-700 mb-4">Power Systems Engineer & IoT Specialist</p>
            <p className="text-yellow-900 max-w-xl mb-4">
              Innovative electrical engineer with 5+ years of experience in power systems optimization and IoT device development. Passionate about sustainable energy solutions and smart grid technologies.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 shadow transition"
                onClick={() => scrollTo('projects')}
              >
                View Projects
              </button>
              <button
                className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg font-medium hover:bg-yellow-100 transition"
                onClick={() => scrollTo('contact')}
              >
                Contact
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section ref={refs.projects} className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
                className="block bg-gradient-to-br from-yellow-100 to-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 group"
              >
                <div className="h-32 w-full bg-yellow-200 rounded-xl mb-4 flex items-center justify-center text-3xl text-green-400 group-hover:text-green-700 transition">
                  <span role="img" aria-label="project">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">{project.title}</h3>
                <p className="text-yellow-900 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs text-green-800 bg-yellow-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section ref={refs.experience} className="py-16 bg-gradient-to-r from-yellow-100 to-green-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
                transition={{ delay: idx * 0.2 }}
                className="mb-10 flex items-start relative"
              >
                <div className="w-4 h-4 bg-green-700 rounded-full absolute -left-3 top-2"></div>
                <div className="bg-white p-6 rounded-xl shadow-md ml-6 flex-1 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-800">{exp.position}</h3>
                  <p className="text-green-700 font-medium">{exp.company}</p>
                  <p className="text-sm text-yellow-900 mb-2">{exp.year}</p>
                  <p className="text-yellow-900">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 gap-top-2 mt-2">
                  {exp.key.map(key => (
                    <span key={key} className="text-xs text-green-800 bg-yellow-100 px-2 py-1 rounded">
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

      {/* Publications */}
      <section ref={refs.publications} className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-green-900">Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pubs, i) => (
              <motion.div
                key={pubs.title}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 bg-gradient-to-r from-yellow-100 to-white p-5 rounded-xl shadow-md"
              >
                <div>
                  <h3 className="font-semibold text-green-800">{pubs.title}</h3>
                  <p className="font-medium text-yellow-900">{pubs.journal}</p>
                  <p className="text-sm text-yellow-900">{pubs.year}</p>
                  <div className="flex flex-wrap gap-2 gap-top-2 mt-2">
                  {pubs.keywords.map(keywords => (
                    <span key={keywords} className="text-xs text-green-800 bg-yellow-100 px-2 py-1 rounded">
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

      {/* Education */}
      <section ref={refs.education} className="py-16 bg-gradient-to-r from-yellow-100 to-green-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
                transition={{ delay: idx * 0.2 }}
                className="mb-10 flex items-start relative"
              >
                <div className="w-4 h-4 bg-green-700 rounded-full absolute -left-3 top-2"></div>
                <div className="bg-white p-6 rounded-xl shadow-md ml-6 flex-1 hover:shadow-lg transition-shadow">
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

      {/* Skills */}
      <section ref={refs.skills} className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-green-900">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
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
      </section>

      {/* Languages */}
      <section ref={refs.languages} className="py-16 bg-gradient-to-r from-green-100 to-yellow-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-green-900">Languages</h2>
          <div className="flex flex-wrap gap-6">
            {languages.map(lang => (
              <motion.div
                key={lang.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-4 rounded-xl shadow-md flex flex-col items-center min-w-[140px]"
              >
                <span className="text-2xl mb-2">🌐</span>
                <span className="font-semibold text-green-800">{lang.name}</span>
                <span className="text-sm text-yellow-900">{lang.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Honors & Awards */}
      <section ref={refs.honors} className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-green-900">Honors & Awards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {honors.map((award, i) => (
              <motion.div
                key={award.title}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 bg-gradient-to-r from-yellow-100 to-white p-5 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <h3 className="font-semibold text-green-800">{award.title}</h3>
                  <p className="text-sm text-yellow-900">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section ref={refs.contact} className="py-16 bg-gradient-to-br from-yellow-100 to-green-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-green-900">Contact</h2>
          <form
            className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4"
            onSubmit={e => { e.preventDefault(); alert('Thank you for reaching out!'); }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border border-yellow-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-yellow-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-yellow-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-yellow-900 text-sm">
        &copy; {new Date().getFullYear()} Aadith Yadav G. All rights reserved.
      </footer>
    </div>
  )
}

export default App
