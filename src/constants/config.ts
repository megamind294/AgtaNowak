type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: TSection;
    skills: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Agata Nowak | Process Engineer",
    fullName: "Agata Anna Nowak",
    email: "nowak.agata.an@gmail.com",
  },
  hero: {
    name: "Agata Anna Nowak",
    p: [
      "Process Engineer focused on planning,",
      "logistics, and continuous improvement.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content:
        "I am a Process Engineer with experience across planning, logistics, and supply chain operations. I use data and process analysis to identify improvement opportunities, support reliable delivery, and help teams make informed decisions. I value clear communication, collaboration, and continuous learning.",
    },
    experience: {
      p: "Career history",
      h2: "Experience.",
    },
    education: {
      p: "Academic background",
      h2: "Education.",
    },
    skills: {
      p: "Tools and languages",
      h2: "Skills.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: "",
    },
  },
};
