import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
}

export default function FloatingCard({
  children,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
    >
      {children}
    </motion.div>
  );
}