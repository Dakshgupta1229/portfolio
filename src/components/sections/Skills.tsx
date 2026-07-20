import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import SkillCategory from "../skills/SkillCategory";

import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I use to build AI, Data Science and Full Stack applications."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}