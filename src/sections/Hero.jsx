import myImage from "../assets/me4.jpg";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 md:p-20 text-center"
    >
      {/* Container for the symmetrical layout */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12">
        {/* Left: Greeting and Socials */}
        <div className={`flex-1 space-y-6 md:text-left order-2 md:order-1 flex flex-col items-center md:items-start transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-[#f5f5f5]">
            Hi, I’m <span className="text-[#ffffff]">Chandan</span>
          </h2>
          {/* Socials on desktop */}
          <div className="hidden md:flex gap-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/chandan-dakka-805068360/"
              target="_blank"
              rel="noreferrer"
              className="bg-transition group p-3 rounded-full bg-[#f5f5f5]/10 hover:bg-[#0A66C2] transition-all duration-300"
            >
              <Linkedin className="w-7 h-7 text-[#f5f5f5] group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://github.com/chandan-1427"
              target="_blank"
              rel="noreferrer"
              className="bg-transition group p-3 rounded-full bg-[#f5f5f5]/10 hover:bg-[#181717] transition-all duration-300"
            >
              <Github className="w-7 h-7 text-[#f5f5f5] group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chandandakka@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="bg-transition group p-3 rounded-full bg-[#f5f5f5]/10 hover:bg-[#D93025] transition-all duration-300"
            >
              <Mail className="w-7 h-7 text-[#f5f5f5] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Center: Profile image */}
        <div className={`relative flex justify-center flex-shrink-0 order-1 md:order-2 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src={myImage}
            alt="Chandan"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-[#f5f5f5] shadow-lg shadow-[#ffffff]/20"
          />
        </div>

        {/* Right: Text content */}
        <div className={`flex-1 space-y-6 md:text-right order-3 flex flex-col items-center md:items-end transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <p className="text-lg md:text-xl text-[#d1d1d1] max-w-md">
            A passionate <span className="font-bold">Full Stack Developer</span> crafting modern web
            applications with the MERN stack, JavaScript, and beyond.
          </p>
          <p className="text-lg md:text-xl text-[#d1d1d1] max-w-md">
            Skilled in building interactive, scalable, and high-performance digital solutions.
          </p>
        </div>
      </div>
      {/* Socials on mobile */}
      <div className={`flex md:hidden gap-6 justify-center mt-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a
          href="https://www.linkedin.com/in/chandan-dakka-805068360/"
          target="_blank"
          rel="noreferrer"
          className="group p-3 rounded-full bg-[#f5f5f5]/10 hover:bg-[#0A66C2] transition-all duration-300"
        >
          <Linkedin className="w-7 h-7 text-[#f5f5f5] group-hover:text-white transition-colors" />
        </a>
        <a
          href="https://github.com/chandan-1427"
          target="_blank"
          rel="noreferrer"
          className="group p-3 rounded-full bg-[#f5f5f5]/10 hover:bg-[#181717] transition-all duration-300"
        >
          <Github className="w-7 h-7 text-[#f5f5f5] group-hover:text-white transition-colors" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=chandandakka@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="group p-3 rounded-full bg-[#f5f5f5]/10 hover:bg-[#D93025] transition-all duration-300"
        >
          <Mail className="w-7 h-7 text-[#f5f5f5] group-hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  );
}