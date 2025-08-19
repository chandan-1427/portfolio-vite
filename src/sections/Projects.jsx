import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const allProjects = [
  {
    title: "Job Finder",
    description: "A MERN-based platform connecting job seekers and employers with a seamless and intuitive interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Vite"],
    github: "https://github.com/chandan-1427/Job-Finder-MERN",
    live: "",
    featured: true,
  },
  {
    title: "Weather App",
    description: "A simple, elegant weather application that fetches real-time weather data using the OpenWeather API.",
    tech: ["React", "Vite", "JavaScript", "TailwindCSS"],
    github: "https://github.com/chandan-1427/weather-app",
    live: "https://weather-app-iota-dusky-88.vercel.app/",
    featured: true,
  },
  {
    title: "Amazon Clone",
    description: "A detailed frontend clone of the Amazon e-commerce platform, built to practice layout and design.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com.com/chandan-1427/Amazon_ecom",
    live: "https://amazon-clone-project-three.vercel.app/",
    featured: true,
  },
  {
    title: "Rock-Paper-Scissors Game",
    description: "A classic rock-paper-scissors game built with a clean, responsive user interface.",
    tech: ["HTML", "CSS", "JS", "TailwindCSS"],
    github: "https://github.com/chandan-1427/rock-paper-scissors-game",
    live: "https://rock-paper-scissors-game-gamma-swart.vercel.app/",
    featured: false,
  },
  {
    title: "Age Calculator",
    description: "A fun and simple tool that calculates your exact age based on your date of birth.",
    tech: ["HTML", "CSS", "JS", "TailwindCSS"],
    github: "https://github.com/chandan-1427/Age-Calculator",
    live: "https://age-calculator-sigma-three.vercel.app/",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-violet-900 to-black relative overflow-hidden text-white"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 relative">
          My Work
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-violet-600 rounded-full"></div>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`bg-gray-900/80 rounded-2xl shadow-lg border border-gray-700 p-6 flex flex-col h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-violet-800/30
                ${!project.featured ? "hidden md:flex" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-violet-400 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-violet-600/20 text-violet-200 rounded-full border border-violet-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-violet-600 px-4 py-2 rounded-full text-white hover:bg-violet-700 transition"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;