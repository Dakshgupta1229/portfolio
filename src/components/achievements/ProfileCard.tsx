import { ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

interface ProfileCardProps {
  platform: string;
  username: string;
  icon: string;
  stats: string;
  description: string;
  url: string;
  color: string;
}

export default function ProfileCard({
  platform,
  username,
  stats,
  description,
  url,
  color,
  icon,
}: ProfileCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "github":
        return <FaGithub size={32} className="text-white" />;

      case "linkedin":
        return <FaLinkedin size={32} className="text-white" />;

      case "leetcode":
        return <SiLeetcode size={32} className="text-white" />;

      case "gfg":
        return <SiGeeksforgeeks size={32} className="text-white" />;

      default:
        return <FaGithub size={32} className="text-white" />;
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]">
      {/* Top Gradient */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${color}`}
      />

      {/* Icon */}
      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${color}`}
      >
        {getIcon()}
      </div>

      {/* Platform */}
      <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
        {platform}
      </h3>

      {/* Username */}
      <p className="mt-2 font-medium text-cyan-400">@{username}</p>

      {/* Stats */}
      <p className="mt-5 font-semibold text-white">{stats}</p>

      {/* Description */}
      <p className="mt-3 leading-relaxed text-gray-400">{description}</p>

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 px-5 py-2.5 font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
      >
        Visit Profile
        <ExternalLink size={18} />
      </a>
    </div>
  );
}