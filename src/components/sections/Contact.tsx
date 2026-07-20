import { motion } from "framer-motion";
import ContactInfo from "../contact/ContactInfo";
import ContactForm from "../contact/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
            Have an opportunity, collaboration idea, or just want to connect?
            Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}