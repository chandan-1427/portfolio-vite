import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaNetworkWired,
  FaBrain, FaComments, FaHandshake, FaLightbulb
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiElectron, SiPostman, SiJasmine, SiGraphql, SiVite
} from "react-icons/si";
import { GiIndiaGate, GiTalk } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const skills = {
  technical: {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Framer Motion", icon: <FaReact className="text-pink-400" /> },
    ],
    Backend: [
      { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "ExpressJS", icon: <SiExpress className="text-gray-300" /> },
      { name: "ElectronJS", icon: <SiElectron className="text-indigo-400" /> },
    ],
    Testing: [
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Jasmine", icon: <SiJasmine className="text-pink-500" /> },
    ],
    "CI/CD": [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
    ],
    API: [
      { name: "REST", icon: <FaReact className="text-teal-400" /> },
      { name: "SOAP", icon: <FaReact className="text-purple-300" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
      { name: "WebSocket", icon: <FaNetworkWired className="text-green-400" /> },
    ],
  },
  nonTechnical: {
    Languages: [
      { name: "English", icon: <FaFlagUsa className="text-blue-400" /> },
      { name: "Hindi", icon: <GiIndiaGate className="text-orange-400" /> },
      { name: "Telugu", icon: <GiTalk className="text-green-400" /> },
    ],
    "Soft Skills": [
      { name: "Communication", icon: <FaComments className="text-pink-400" /> },
      { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-400" /> },
      { name: "Critical Thinking", icon: <FaBrain className="text-purple-400" /> },
      { name: "Emotional Thinking", icon: <FaHandshake className="text-green-400" /> },
      { name: "Decision Making", icon: <FaBrain className="text-blue-400" /> },
    ],
  },
};

const SkillBubble = ({ skill }) => (
  <motion.div
    className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-white/5 border border-violet-500/20 shadow-md transition text-center"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-3xl">{skill.icon}</div>
    <span className="mt-2 text-xs text-violet-300 leading-tight text-center">{skill.name}</span>
  </motion.div>
);

const SkillCategory = ({ category, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-lg font-semibold text-violet-300 bg-white/5 px-4 py-3 rounded-lg border border-violet-500/20 hover:bg-white/10 transition"
      >
        {category}
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 flex flex-wrap gap-4 overflow-hidden"
          >
            {items.map((skill, i) => (
              <SkillBubble key={i} skill={skill} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-4 sm:px-8 md:px-16 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/smoke.png')] opacity-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      <h2 className="text-3xl font-title sm:text-4xl md:text-5xl font-extrabold text-center mb-12 relative">
        My Skills
      </h2>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-4 sm:p-6 font-accent rounded-2xl"
        >
          <h3 className="text-xl sm:text-2xl font-subtitle font-bold text-violet-400 mb-6">Technical Skills</h3>
          {Object.entries(skills.technical).map(([category, items], idx) => (
            <SkillCategory key={idx} category={category} items={items} />
          ))}
        </motion.div>

        {/* Non-Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-4 sm:p-6 font-accent rounded-2xl"
        >
          <h3 className="text-xl sm:text-2xl font-subtitle font-bold text-violet-400 mb-6">Non-Technical Skills</h3>
          {Object.entries(skills.nonTechnical).map(([category, items], idx) => (
            <SkillCategory key={idx} category={category} items={items} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
