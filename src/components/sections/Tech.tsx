import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { languages, skills } from "../../constants";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.skills} />

      <h3 className="mb-6 mt-12 text-xl font-semibold text-white">
        Tools and methods
      </h3>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <li
            className="bg-tertiary rounded-xl border border-white/10 px-5 py-4 text-center font-medium text-white shadow-card"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <h3 className="mb-6 text-xl font-semibold text-white">Languages</h3>
        <ul className="flex flex-wrap gap-4">
          {languages.map((language) => (
            <li
              className="bg-tertiary rounded-xl border border-white/10 px-5 py-4 text-white"
              key={language.name}
            >
              <span className="font-medium">{language.name}</span>
              <span className="text-secondary"> — {language.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
