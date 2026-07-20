import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
}

export default function Button({
  children,
  primary = true,
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
        primary
          ? "bg-cyan-500 text-white hover:bg-cyan-400 hover:scale-105"
          : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-105"
      }`}
    >
      {children}
    </button>
  );
}