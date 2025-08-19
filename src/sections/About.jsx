import frontImage from "../assets/me6.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 py-16 md:py-24"
    >
      {/* Background with a violet grid pattern */}
      <div 
        className="absolute inset-0 z-0 bg-[#0d0d0d] opacity-95"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(156, 39, 176, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(156, 39, 176, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main content container with a responsive grid layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column: Image */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={frontImage}
            alt="Chandan"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl border-2 border-[#9C27B0]/50"
          />
        </div>
        
        {/* Right column: About text content */}
        <div className="text-white space-y-6 text-center md:text-left order-1 md:order-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#f5f5f5] tracking-wide drop-shadow-lg">
            About Me
          </h2>
          <p className="text-white/90 leading-relaxed text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 mt-4 drop-shadow-md">
            I’m{" "}
            <span className="font-bold text-[#9C27B0] text-lg sm:text-xl md:text-2xl">
              Chandan
            </span>{" "}
            from
            <span className="text-[#f5f5f5]"> Tirupati, Andhra Pradesh</span>.
            Currently pursuing my{" "}
            <span className="font-medium">B.Tech in Computer Science</span>,
            passionate about crafting digital solutions and exploring modern
            technologies.
          </p>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
            <li>
              <span className="font-semibold text-[#9C27B0]">Qualification:</span>{" "}
              B.Tech (Computer Science, expected 2026)
            </li>
            <li>
              <span className="font-semibold text-[#9C27B0]">Domain:</span>{" "}
              Full Stack Web Development (MERN, JavaScript, Python)
            </li>
            <li>
              <span className="font-semibold text-[#9C27B0]">Interests:</span>{" "}
              Building scalable apps, fintech, trading systems, and open-source projects.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}