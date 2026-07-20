import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tight transition hover:scale-105"
        >
          <span className="text-white">Daksh </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Gupta
          </span>
        </a>

        <nav className="hidden gap-10 md:flex">
          <a href="#home" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>

        <button className="md:hidden">
          <Menu />
        </button>

      </div>
    </header>
  );
}