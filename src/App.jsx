import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import GlobalBackground from "./components/GlobalBackground";

// ✨ import motion
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <GlobalBackground />
      <Header />
      <Hero />
      <About />
      <Projects />

      {/* Fade-in Skills section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <Skills />
      </motion.div>

      {/* Fade-in Contact section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <Contact />
      </motion.div>
    </>
  );
}
