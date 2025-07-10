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

const education = [
  {
    degree: "M.Sc. Electrical Engineering",
    school: "Stanford University",
    year: "2021-2023",
    description: "Specialization in Power Electronics and Renewable Energy Systems"
  },
  {
    degree: "B.Sc. Electrical Engineering",
    school: "MIT",
    year: "2017-2021",
    description: "Minor in Computer Science, Dean's List all semesters"
  }
]

const skills = [
  "Power Systems", "Circuit Design", "C++", "Python", "MATLAB", "PCB Design", "PLC Programming", "AutoCAD"
]

const languages = [
  { name: "English", level: "Native" },
  { name: "Mandarin", level: "Fluent" },
  { name: "German", level: "Conversational" }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <span className="font-bold text-blue-700 text-xl tracking-tight cursor-pointer" onClick={() => scrollTo('about')}>
            Alexandra Chen
          </span>
          <div className="flex gap-6 text-gray-700 font-medium text-sm">
            {["about", "projects", "education", "skills", "languages", "honors", "contact"].map((sec) => (
              <button
                key={sec}
                className="hover:text-blue-600 transition-colors"
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
            className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600 shadow-lg flex items-center justify-center text-5xl text-white font-bold"
          >
            AC
          </motion.div>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2">Alexandra Chen</h1>
            <p className="text-xl text-blue-600 mb-4">Power Systems Engineer & IoT Specialist</p>
            <p className="text-gray-700 max-w-xl mb-4">
              Innovative electrical engineer with 5+ years of experience in power systems optimization and IoT device development. Passionate about sustainable energy solutions and smart grid technologies.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 shadow transition"
                onClick={() => scrollTo('projects')}
              >
                View Projects
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
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
          <h2 className="text-3xl font-bold mb-10 text-blue-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
                className="block bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 group"
              >
                <div className="h-32 w-full bg-blue-100 rounded-xl mb-4 flex items-center justify-center text-3xl text-blue-400 group-hover:text-blue-600 transition">
                  <span role="img" aria-label="project">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section ref={refs.education} className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-10 text-blue-800">Education</h2>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-1 bg-blue-200 rounded"></div>
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="mb-10 flex items-start relative"
              >
                <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-3 top-2"></div>
                <div className="bg-white p-6 rounded-xl shadow-md ml-6 flex-1 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-blue-700">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
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
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 cursor-pointer transition-colors shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Languages */}
      <section ref={refs.languages} className="py-16 bg-gradient-to-r from-blue-100 to-blue-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Languages</h2>
          <div className="flex flex-wrap gap-6">
            {languages.map(lang => (
              <motion.div
                key={lang.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-4 rounded-xl shadow-md flex flex-col items-center min-w-[140px]"
              >
                <span className="text-2xl mb-2">🌐</span>
                <span className="font-semibold text-blue-700">{lang.name}</span>
                <span className="text-sm text-gray-500">{lang.level}</span>
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
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Honors & Awards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {honors.map((award, i) => (
              <motion.div
                key={award.title}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-white p-5 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700">{award.title}</h3>
                  <p className="text-sm text-gray-500">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section ref={refs.contact} className="py-16 bg-gradient-to-br from-blue-50 to-blue-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Contact</h2>
          <form
            className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4"
            onSubmit={e => { e.preventDefault(); alert('Thank you for reaching out!'); }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Alexandra Chen. All rights reserved.
      </footer>
    </div>
  )
}

export default App
