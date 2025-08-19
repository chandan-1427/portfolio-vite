import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import GlobalBackground from "./components/GlobalBackground";

export default function App() {
  return (
    <>
      <GlobalBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
