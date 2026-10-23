import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Contact = () => {
  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />
        <p className="text-secondary mt-6 max-w-xl leading-7">
          For professional inquiries, please get in touch by email.
        </p>
        <a
          className="bg-tertiary shadow-primary mt-8 inline-flex rounded-xl px-8 py-4 font-bold text-white shadow-md outline-none transition hover:bg-[#006b68] focus-visible:ring-2 focus-visible:ring-white"
          href={`mailto:${config.html.email}`}
        >
          Email Agata
        </a>
        <p className="mt-4 text-secondary">
          <a
            className="underline decoration-[#006b68] underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            href={`mailto:${config.html.email}`}
          >
            {config.html.email}
          </a>
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        aria-hidden="true"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
