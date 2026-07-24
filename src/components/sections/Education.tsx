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

        <div className="mt-16 space-y-8">
          <EducationCard
            degree="Bachelor of Technology (B.Tech)"
            institute="Lovely Professional University"
            duration="2023 – 2027"
            score="CGPA: 8.65 / 10"
            description="Currently pursuing B.Tech in Computer Science and Engineering with a focus on Data Science, Artificial Intelligence, Machine Learning, Full Stack Development, and Data Structures & Algorithms."
          />

          <EducationCard
            degree="Intermediate (Class XII)"
            institute="S.D. Public School,Jagadhri"
            duration="2022 – 2023"
            score="Percentage: 80%"
            description="Completed Higher Secondary education with a strong foundation in Mathematics, Physics, Chemistry, and Computer Science."
          />

          <EducationCard
            degree="Matriculation (Class X)"
            institute="S.D. Public School,Jagadhri"
            duration="2020 – 2021"
            score="Percentage: 93.4%"
            description="Completed Secondary education with excellent academic performance and developed a strong interest in Mathematics and Computer Science."
          />
        </div>
      </div>
    </section>
  );
}