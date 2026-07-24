import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Tilt from "react-parallax-tilt";

import TechBadge from "./TechBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  live,
}: ProjectCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      glareEnable
      glareMaxOpacity={0.2}
      scale={1.02}
      transitionSpeed={2500}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
      >
        {/* Project Image */}
        <div className="flex h-64 items-center justify-center overflow-hidden bg-slate-950 p-4">
  <img
    src={image}
    alt={title}
    loading="lazy"
    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
  />
</div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <TechBadge
                key={tech}
                text={tech}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-cyan-400/20 px-5 py-3 transition-all duration-300 hover:bg-cyan-500 hover:text-black"
            >
              <SiGithub size={18} />
              GitHub
            </a>

            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-white transition-all duration-300 hover:bg-cyan-400 hover:text-black"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}