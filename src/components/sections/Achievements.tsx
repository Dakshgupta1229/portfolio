import { motion } from "framer-motion";
import ProfileCard from "../achievements/ProfileCard";
import { profiles } from "../../data/profiles";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            Coding Profiles
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Achievements & Profiles
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
            I actively solve Data Structures & Algorithms problems, build AI
            projects, contribute to GitHub, and continuously improve my software
            engineering skills.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <ProfileCard {...profile} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}