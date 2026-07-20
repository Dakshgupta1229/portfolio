import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institute: string;
  duration: string;
  score: string;
  description: string;
}

export default function EducationCard({
  degree,
  institute,
  duration,
  score,
  description,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-cyan-500/10 p-4">
          <GraduationCap className="h-8 w-8 text-cyan-400" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            {degree}
          </h3>

          <p className="mt-1 text-gray-400">
            {institute}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2">
          <Calendar size={18} className="text-cyan-400" />
          <span className="text-gray-300">{duration}</span>
        </div>

        <div className="rounded-xl bg-cyan-500/10 px-4 py-2 font-semibold text-cyan-400">
          {score}
        </div>
      </div>

      <p className="mt-6 leading-8 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}