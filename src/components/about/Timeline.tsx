const timeline = [
  {
    year: "2023",
    title: "Started B.Tech",
    description:
      "Began my Computer Science journey with a focus on AI and Data Science.",
  },
  {
    year: "2025",
    title: "Built AI Projects",
    description:
      "Developed projects in Machine Learning, Data Analysis, and Full Stack Development.",
  },
  {
    year: "2026",
    title: "Professional Growth",
    description:
      "Focused on AI Engineering, DSA, and production-ready applications.",
  },
];

export default function Timeline() {
  return (
    <div className="space-y-8">
      {timeline.map((item) => (
        <div
          key={item.year}
          className="relative border-l border-cyan-400/30 pl-6"
        >
          <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-cyan-400" />

          <p className="text-cyan-400 font-semibold">
            {item.year}
          </p>

          <h4 className="mt-1 text-xl font-semibold">
            {item.title}
          </h4>

          <p className="mt-2 text-gray-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}