import Aurora from "../hero/Aurora";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030712]">
      <Aurora />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_80%)]" />
    </div>
  );
}