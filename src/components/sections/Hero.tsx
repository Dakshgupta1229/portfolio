import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Brain,
  Database,
  Code2,
  Sparkles,
} from "lucide-react";

import Button from "../ui/Button";
import Badge from "../ui/Badge";
import FloatingCard from "../ui/FloatingCard";
import AIIllustration from "../hero/AIIllustration";
import HeroStats from "../hero/HeroStats";

import { heroData } from "../../data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-lg font-medium tracking-wide text-cyan-400">
            {heroData.greeting}
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </h1>

          <div className="mt-6 h-16 text-2xl font-semibold text-cyan-400 md:text-3xl">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                1800,
                "Data Scientist",
                1800,
                "Machine Learning Engineer",
                1800,
                "Full Stack Developer",
                1800,
                "Open Source Contributor",
                1800,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-2 text-lg text-gray-300">
            Building intelligent AI applications with modern web technologies.
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            {heroData.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a href="#projects">
              <Button>View Projects</Button>
            </a>

            <a href="/resume.pdf" download>
              <Button primary={false}>Download Resume</Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroData.technologies.map((tech) => (
              <Badge key={tech} text={tech} />
            ))}
          </div>

          <div className="mt-10">
            <HeroStats />
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex h-[650px] items-center justify-center"
        >
          <AIIllustration />

          {/* Floating Card 1 */}

          <div className="absolute left-0 top-10">
            <FloatingCard delay={0}>
              <div className="flex items-center gap-3">
                <Brain className="text-cyan-400" />

                <div>
                  <h3 className="font-semibold">
                    1000+ DSA
                  </h3>

                  <p className="text-sm text-gray-400">
                    Problems Solved
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* Floating Card 2 */}

          <div className="absolute right-0 top-36">
            <FloatingCard delay={1}>
              <div className="flex items-center gap-3">
                <Database className="text-cyan-400" />

                <div>
                  <h3 className="font-semibold">
                    4+ Projects
                  </h3>

                  <p className="text-sm text-gray-400">
                    AI & Data Science
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* Floating Card 3 */}

          <div className="absolute bottom-20 left-8">
            <FloatingCard delay={2}>
              <div className="flex items-center gap-3">
                <Code2 className="text-cyan-400" />

                <div>
                  <h3 className="font-semibold">
                    3+ Certifications
                  </h3>

                  <p className="text-sm text-gray-400">
                    Oracle • Deloitte
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>

          {/* Floating Card 4 */}

          <div className="absolute bottom-8 right-8">
            <FloatingCard delay={3}>
              <div className="flex items-center gap-3">
                <Sparkles className="text-cyan-400" />

                <div>
                  <h3 className="font-semibold">
  AI Enthusiast
</h3>

<p className="text-sm text-gray-400">
  Building Intelligent Solutions
</p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}