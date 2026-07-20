import { Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#020617]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Daksh{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Gupta
              </span>
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              AI & Data Science enthusiast passionate about building intelligent
              applications, solving real-world problems, and creating modern web
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3 text-gray-400">
              <a href="#home" className="transition hover:text-cyan-400">
                Home
              </a>

              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>

              <a href="#skills" className="transition hover:text-cyan-400">
                Skills
              </a>

              <a href="#projects" className="transition hover:text-cyan-400">
                Projects
              </a>

              <a
                href="#certifications"
                className="transition hover:text-cyan-400"
              >
                Certifications
              </a>

              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/dakshgupta1229"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/dakshgupta217/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin size={22} />
              </a>
            </div>

            <p className="mt-6 text-gray-400">
              Open to internships, full-time roles, and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="flex items-center gap-2 text-gray-400">
            © {new Date().getFullYear()} Daksh Gupta. Built with
            <Heart size={16} className="text-red-500" />
            React & TypeScript.
          </p>

          <button
            onClick={scrollToTop}
            className="rounded-full border border-cyan-400/30 bg-cyan-500/10 p-3 transition hover:bg-cyan-500 hover:text-black"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}