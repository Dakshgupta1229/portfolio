import { motion } from "framer-motion";
import { GraduationCap, Brain, Target, Sparkles } from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import AboutCard from "../about/AboutCard";
import Timeline from "../about/Timeline";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          title="About Me"
          subtitle="Passionate about building AI-powered solutions, analyzing data, and creating modern web applications."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AboutCard title="Who I Am">
              <p className="leading-8 text-gray-400">
                I'm a Computer Science student specializing in Artificial
                Intelligence, Machine Learning, and Data Science. I enjoy
                transforming complex problems into practical applications
                through clean code, intelligent systems, and data-driven
                decision making.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Brain className="mb-3 text-cyan-400" size={28} />

                  <h3 className="font-semibold">
                    AI & ML
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Building intelligent applications using Machine Learning.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <GraduationCap
                    className="mb-3 text-cyan-400"
                    size={28}
                  />

                  <h3 className="font-semibold">
                    Learning
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Continuously improving through projects and DSA.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Target className="mb-3 text-cyan-400" size={28} />

                  <h3 className="font-semibold">
                    Goal
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Become a professional AI Engineer creating impactful products.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Sparkles
                    className="mb-3 text-cyan-400"
                    size={28}
                  />

                  <h3 className="font-semibold">
                    Innovation
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Passionate about solving real-world problems with technology.
                  </p>
                </div>

              </div>
            </AboutCard>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AboutCard title="Journey">
              <Timeline />
            </AboutCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}