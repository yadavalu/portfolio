import React, { useState } from 'react'

// Project and Education type definitions removed for JavaScript compatibility

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Smart Grid Optimization",
      description: "Developed a machine learning model to reduce energy waste by 23% in simulated environments",
      tech: ["Python", "TensorFlow", "MATLAB"]
    },
    {
      id: 2,
      title: "IoT Power Monitoring",
      description: "Built a real-time IoT system for monitoring power usage in industrial settings",
      tech: ["C++", "ESP32", "AWS IoT"]
    },
    {
      id: 3,
      title: "Solar Inverter Design",
      description: "Prototyped a 5kW inverter with 98.2% efficiency using GaN transistors",
      tech: ["Altium", "Simulink", "Power Systems"]
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl" />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Alexandra Chen</h1>
              <p className="text-xl mb-4">Power Systems Engineer & IoT Specialist</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50">
                  View Projects
                </button>
                <button className="border-2 border-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-600 leading-relaxed">
            Innovative electrical engineer with 5+ years of experience in power systems optimization
            and IoT device development. Passionate about sustainable energy solutions and smart grid technologies.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Education</h2>
          <div className="relative">
            {education.map((edu, index) => (
              <div key={edu.degree} className="mb-8 flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  {index !== education.length - 1 && <div className="w-0.5 h-full bg-blue-200"></div>}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['Power Systems', 'Circuit Design', 'C++', 'Python', 'MATLAB', 'PCB Design', 'PLC Programming', 'AutoCAD']
            .map(skill => (
              <span
                key={skill} 
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 cursor-pointer transition-colors"
              >
                {skill}
              </span>
            ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gray-200 border-2 border-dashed" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Awards & Honors</h2>
        <div className="grid gap-4">
          {['IEEE Best Paper Award 2022', 'National Engineering Competition Winner 2021', 'Siemens Innovation Grant Recipient']
            .map((award, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{award}</h3>
                  <p className="text-sm text-gray-500">2022</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default App
