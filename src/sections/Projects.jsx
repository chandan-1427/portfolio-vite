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
    github: "https://github.com/chandan-1427/Amazon_ecom",
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
    <section id="projects" className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden text-white">
      {/* Background with a more prominent grid animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-repeat bg-center animate-Kenburns-strong"
          style={{ backgroundImage: `url('http://googleusercontent.com/image_generation_content/3')` }}
        ></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 relative text-red-500">
          My Work 
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 rounded-full"></div>
        </h2>

        {/* Desktop-specific layout with "page-stacking" effect */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main card - First Project */}
          <motion.div
            key={0}
            className="lg:col-span-2 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8 flex flex-col h-full transform transition-transform duration-300 ease-in-out hover:scale-105 z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-red-400 mb-4">{allProjects[0].title}</h3>
            <p className="text-gray-300 text-base flex-grow mb-4">{allProjects[0].description}</p>
            
            {allProjects[0].tech && (
              <div className="flex flex-wrap gap-2 mb-4">
                {allProjects[0].tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold bg-red-600/30 text-red-200 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            
            <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
              <a
                href={allProjects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
              {allProjects[0].live && (
                <a
                  href={allProjects[0].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700 transition"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Stacked Cards on the right */}
          <div className="relative col-span-1">
            {/* The project card on top of the stack */}
            <motion.div
              key={1}
              className="absolute w-full h-full bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8 flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-105 origin-center z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-2">{allProjects[1].title}</h3>
              <p className="text-gray-300 text-sm flex-grow mb-4">{allProjects[1].description}</p>
              
              {allProjects[1].tech && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {allProjects[1].tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-red-600/30 text-red-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
                <a
                  href={allProjects[1].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                {allProjects[1].live && (
                  <a
                    href={allProjects[1].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700 transition"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
            
            {/* "Pages" for the stacking effect */}
            {allProjects.slice(2).map((_, i) => (
              <motion.div
                key={i + 2}
                className="absolute w-[90%] h-[90%] bg-gray-700 rounded-2xl shadow-2xl origin-bottom-right"
                style={{ top: `${(i + 1) * 1.5}rem`, right: `${(i + 1) * 1.5}rem` }}
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: (i + 1) * 5 }} // Subtle increasing rotation
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.1) }}
              ></motion.div>
            ))}
          </div>
        </div>

        {/* Mobile-first layout remains as a simple grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
          {allProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6 flex flex-col h-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm flex-grow mb-4">{project.description}</p>
              
              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-red-600/30 text-red-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700 transition"
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