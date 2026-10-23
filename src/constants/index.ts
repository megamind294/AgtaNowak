import type {
  TExperience,
  TNavLink,
  TProject,
  TService,
  TTestimonial,
} from "../types";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const services: TService[] = [
  {
    title: "Process planning",
    description:
      "Production and materials planning, with a focus on reliable execution.",
  },
  {
    title: "Supply chain operations",
    description:
      "Experience across fulfillment, reverse supply chain, and logistics.",
  },
  {
    title: "Continuous improvement",
    description:
      "Using process analysis and performance indicators to find opportunities.",
  },
  {
    title: "Data-driven decisions",
    description:
      "Working with operational data and communicating results through reports.",
  },
];

export const experiences: TExperience[] = [
  {
    title: "Process Engineer",
    companyName: "Philip Morris International",
    iconBg: "#006b68",
    date: "January 2025 — Present",
    points: [
      "Prepare On Time In Full reports to track delivery performance and support continuous improvement.",
      "Create interactive Power BI presentations to visualize regional performance indicators and support decisions.",
      "Analyze lead-time and historical data to identify inefficiencies and propose process improvements.",
      "Develop procedures and Lead Time KPIs to standardize performance tracking.",
      "Coordinate regular reviews with stakeholders to align operational goals.",
    ],
  },
  {
    title: "Reverse Supply Chain Specialist",
    companyName: "Philip Morris International",
    iconBg: "#006b68",
    date: "June 2023 — December 2024",
    points: [
      "Supported inbound and outbound reverse supply chain fulfillment, capacity planning, and coordination.",
      "Maintained and improved global fulfillment processes and systems to support shipment plans.",
      "Worked with business service providers and stakeholders to support consistent execution and compliance.",
    ],
  },
  {
    title: "Material Requirement Planner",
    companyName: "Philip Morris International, Kraków",
    iconBg: "#006b68",
    date: "September 2020 — May 2023",
    points: [
      "Monitored and maintained material planning data in SAP in line with agreed rules.",
      "Coordinated with business service providers to maintain material master data and planning processes.",
      "Developed and maintained KPIs for procurement, service level, and supplier reliability.",
    ],
  },
  {
    title: "Central MRP Analyst",
    companyName: "Philip Morris International, Kraków",
    iconBg: "#006b68",
    date: "May 2017 — August 2020",
    points: [
      "Supported material availability and supply continuity for production requirements.",
      "Prepared material supply plans and monitored stock levels and supplier performance.",
      "Worked with planning and procurement teams to support efficient material flows.",
    ],
  },
  {
    title: "Specialist of Production Planning",
    companyName: "FoodCare Sp. z o.o.",
    iconBg: "#006b68",
    date: "January 2017 — April 2017",
    points: [
      "Monitored finished-product stock and production orders.",
      "Prepared and adjusted production plans and coordinated with customers and production teams.",
    ],
  },
  {
    title: "Stock Planning roles",
    companyName: "Jeronimo Martins Polska S.A., Distribution Centre",
    iconBg: "#006b68",
    date: "September 2014 — December 2016",
    points: [
      "Planned stock and maintained inventory levels for the distribution centre.",
      "Coordinated supplier orders, deliveries, and warehouse stock reporting.",
    ],
  },
];

export const skills = [
  "MS Office",
  "SAP ERP",
  "Power BI",
  "SolidWorks",
  "AutoCAD",
  "Six Sigma Yellow Belt",
  "Process flow analysis",
  "Communication and teamwork",
];

export const languages = [
  { name: "English", level: "C1" },
  { name: "German", level: "A1" },
  { name: "Italian", level: "A1" },
];

export const education = [
  {
    degree: "Management and Production Engineering",
    qualification: "Master of Science",
    institution: "Cracow University of Technology",
    date: "October 2012 — June 2015",
  },
  {
    degree: "Commodity Science — Quality Management",
    qualification: "Master of Science",
    institution: "University of Economics in Cracow",
    date: "February 2013 — December 2013",
  },
  {
    degree: "Management and Production Engineering",
    qualification: "Bachelor of Engineering",
    institution: "University of Economics in Cracow",
    date: "October 2008 — February 2012",
  },
];

export const projects: TProject[] = [];
export const testimonials: TTestimonial[] = [];
