import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AboutCardProps {
  title: string;
  children: ReactNode;
}

export default function AboutCard({
  title,
  children,
}: AboutCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h3 className="mb-5 text-2xl font-bold text-cyan-400">
        {title}
      </h3>

      {children}
    </motion.div>
  );
}