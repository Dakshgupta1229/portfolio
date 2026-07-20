import { Award, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
  credential: string;
  color: string;
}

export default function CertificationCard({
  title,
  issuer,
  year,
  credential,
  color,
}: CertificationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20">
      {/* Gradient Accent */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${color}`}
      />

      {/* Icon */}
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${color}`}
      >
        <Award className="h-7 w-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
        {title}
      </h3>

      <p className="text-gray-300">{issuer}</p>

      <p className="mt-1 text-sm text-gray-500">{year}</p>

      {/* Button */}
      <a
        href={credential}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2 text-cyan-300 transition-all hover:bg-cyan-400 hover:text-black"
      >
        View Certificate
        <ExternalLink size={16} />
      </a>
    </div>
  );
}