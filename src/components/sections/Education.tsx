import SectionTitle from "../ui/SectionTitle";
import EducationCard from "../education/EducationCard";

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and educational background."
        />

        <div className="mt-16">
          <EducationCard
            degree="Bachelor of Technology (B.Tech)"
            institute="Lovely Professional University"
            duration="2023 – 2027"
            score="CGPA: 8.65"
            description="Currently pursuing B.Tech with a focus on Data Science, Artificial Intelligence, Machine Learning, Full Stack Development, and Data Structures & Algorithms."
          />
        </div>
      </div>
    </section>
  );
}