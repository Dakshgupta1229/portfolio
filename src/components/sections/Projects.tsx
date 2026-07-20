import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Featured Projects"
          subtitle="A collection of AI, Machine Learning, Data Science and Full Stack projects."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}