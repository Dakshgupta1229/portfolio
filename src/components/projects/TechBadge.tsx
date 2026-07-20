interface TechBadgeProps {
  text: string;
}

export default function TechBadge({ text }: TechBadgeProps) {
  return (
    <span className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 text-xs text-cyan-300">
      {text}
    </span>
  );
}