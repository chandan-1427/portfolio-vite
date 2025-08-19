import { useEffect, useState } from "react";
import {
  Home,
  User,
  BriefcaseBusiness,
  Cylinder,
  Mail,
  Menu,
  X,
} from "lucide-react";

// Navigation items
const navItems = [
  { name: "Home", icon: Home, href: "#hero" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: BriefcaseBusiness, href: "#projects" },
  { name: "Skills", icon: Cylinder, href: "#skills" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction (hide/show header)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHidden(true); // hide on scroll down
      } else {
        setHidden(false); // show on scroll up
      }
      setLastScrollY(currentScroll);

      // Detect active section
      const sections = navItems.map((item) =>
        document.getElementById(item.href.substring(1))
      );
      const offset = 120; // offset for fixed header

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500`}
    >
      <div className="backdrop-blur-sm bg-black/10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          {/* Branding */}
          <h1 className="relative text-2xl md:text-3xl font-extrabold text-white tracking-[0.1em]">
            CHANDAN
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navItems.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => handleScrollToSection(e, href)}
                className={`group relative flex flex-col items-center transition-colors duration-300 ${
                  activeSection === href.substring(1)
                    ? "text-purple-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="absolute top-[-25px] text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out group-hover:-translate-y-1">
                  {name}
                </span>
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-purple-400 transition-transform duration-300 ${
                    activeSection === href.substring(1)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-4 gap-4 bg-black/80 backdrop-blur-lg">
            {navItems.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => handleScrollToSection(e, href)}
                className={`flex items-center gap-4 transition-colors ${
                  activeSection === href.substring(1)
                    ? "text-purple-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-base font-medium">{name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
