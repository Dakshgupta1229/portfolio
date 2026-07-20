import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  {
    number: 4,
    suffix: "+",
    label: "Featured Projects",
  },
  {
    number: 15,
    suffix: "+",
    label: "Technologies",
  },
  {
    number: 1000,
    suffix: "+",
    label: "DSA Problems Solved",
  },
  {
    number: 3,
    suffix: "+",
    label: "AI & Data Science Certifications",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
          }}
          whileHover={{
            y: -8,
            scale: 1.05,
          }}
          className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
        >
          <div className="flex items-baseline justify-center">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-4xl font-bold text-transparent">
              <AnimatedCounter
                end={stat.number}
                duration={2200}
              />
            </span>

            <span className="ml-1 text-4xl font-bold text-cyan-400">
              {stat.suffix}
            </span>
          </div>

          <p className="mt-4 text-sm font-medium text-gray-400">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}