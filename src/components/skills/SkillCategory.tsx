import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({
  title,
  skills,
}: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
    >
      <h3 className="mb-6 text-2xl font-bold text-cyan-400">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  );
}