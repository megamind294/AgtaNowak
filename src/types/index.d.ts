export type TExperience = {
  title: string;
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type TTestimonial = {
  name: string;
  testimonial: string;
  designation: string;
  company: string;
  image: string;
};

export type TProject = {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
};

export type TNavLink = {
  id: string;
  title: string;
};

export type TService = {
  title: string;
  description: string;
};

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
