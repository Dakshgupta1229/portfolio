import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import OrbitIcons from "./OrbitIcons";

export default function AIIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      <OrbitIcons />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(6,182,212,0.2)]"
      >
        <Brain size={90} className="text-cyan-400" />
      </motion.div>
    </div>
  );
}