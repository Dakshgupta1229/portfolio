import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "dakshgupta217@gmail.com",
      link: "mailto:dakshgupta217@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8168990890",
      link: "tel:+918168990890",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Yamunanagar, Haryana, India",
      link: "https://maps.google.com/?q=Yamunanagar,Haryana,India",
    },
  ];

  return (
    <div className="space-y-6">
      {contactItems.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-cyan-500/20 p-3 text-cyan-400">
              {item.icon}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <a
                href={item.link}
                target={item.title === "Location" ? "_blank" : undefined}
                rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                className="mt-1 text-gray-400 transition hover:text-cyan-400"
              >
                {item.value}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Social Links */}
      <div className="flex gap-4 pt-4">
        <a
          href="https://github.com/dakshgupta1229"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:text-cyan-400"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/dakshgupta217/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:text-cyan-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}