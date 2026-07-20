import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [-40, 40, -40],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [40, -40, 40],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-150px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]"
      />
    </div>
  );
}