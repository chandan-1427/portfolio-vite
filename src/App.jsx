import { useEffect, useState, lazy, Suspense } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import GlobalBackground from "./components/GlobalBackground";
import Loader from "./components/Loader";

// Lazy load heavy sections
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <GlobalBackground />
      <Header />
      <Hero />
      <About />

      <Suspense fallback={<Loader />}>
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </>
  );
}
