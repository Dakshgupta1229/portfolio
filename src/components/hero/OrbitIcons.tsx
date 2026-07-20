import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiScikitlearn,
} from "react-icons/si";

const icons = [
  { Icon: SiPython, angle: 0 },
  { Icon: SiReact, angle: 60 },
  { Icon: SiTypescript, angle: 120 },
  { Icon: SiMysql, angle: 180 },
  { Icon: SiNodedotjs, angle: 240 },
  { Icon: SiScikitlearn, angle: 300 },
];

export default function OrbitIcons() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[360px] w-[360px]"
    >
      {icons.map(({ Icon, angle }, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `rotate(${angle}deg) translateY(-180px)`,
            transformOrigin: "center",
          }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-lg">
            <Icon className="text-2xl text-cyan-400" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}