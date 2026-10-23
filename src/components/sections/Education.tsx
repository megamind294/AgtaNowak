import { education } from "../../constants";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";

const Education = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article
            className="bg-tertiary rounded-2xl border border-white/10 p-6 shadow-card"
            key={`${item.institution}-${item.qualification}`}
          >
            <p className="text-secondary text-sm">{item.date}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {item.degree}
            </h3>
            <p className="mt-2 text-[#aaa6c3]">{item.qualification}</p>
            <p className="mt-2 text-white">{item.institution}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
