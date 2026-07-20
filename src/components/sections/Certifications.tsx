import { motion } from "framer-motion";
import CertificationCard from "../certifications/CertificationCard";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
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
          <p className="mb-3 text-cyan-400 font-semibold tracking-widest uppercase">
            Certifications
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Learning Never Stops
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
            Professional certifications and industry-recognized credentials that
            strengthen my expertise in Artificial Intelligence, Data Science,
            Cloud Computing, and Analytics.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <CertificationCard {...certificate} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}