import { motion } from "framer-motion";

interface SkillCardProps {
  skill: string;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-center text-sm font-medium text-cyan-300 backdrop-blur-md hover:border-cyan-400/50 hover:bg-cyan-500/20"
    >
      {skill}
    </motion.div>
  );
}