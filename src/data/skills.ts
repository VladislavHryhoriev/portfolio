interface Skill {
  name: string;
  icon: string;
}

interface inProgress {
  name: string;
  icon: string;
  patterns?: Skill[];
}

interface Skills {
  frontend: Skill[];
  backend: Skill[];
  other: Skill[];
  inProgress: inProgress[];
}

// TODO: Add more skills

export const skills: Skills = {
  frontend: [
    {
      name: "React",
      icon: "react",
    },
    {
      name: "Next",
      icon: "next",
    },
    {
      name: "TypeScript",
      icon: "typescript",
    },
    {
      name: "Tailwind",
      icon: "tailwind",
    },
    {
      name: "Redux",
      icon: "redux",
    },
    {
      name: "Zustand",
      icon: "zustand",
    },
    {
      name: "Framer Motion",
      icon: "framer-motion",
    },
  ],

  backend: [
    {
      name: "Mongo",
      icon: "mongo",
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
    },
    {
      name: "Mongoose",
      icon: "mongoose",
    },
    {
      name: "Prisma",
      icon: "prisma",
    },
  ],

  other: [
    {
      name: "Git / GitHub",
      icon: "github",
    },
    {
      name: "CI/CD",
      icon: "cicd",
    },
    {
      name: "Webpack",
      icon: "webpack",
    },
    {
      name: "Vite",
      icon: "vite",
    },
  ],

  inProgress: [
    {
      name: "NestJS",
      icon: "nestjs",
    },
    {
      name: "Docker",
      icon: "docker",
    },
    {
      name: "Formik",
      icon: "formik",
    },
    {
      name: "React Hook Form",
      icon: "react-hook-form",
    },
    {
      name: "Yup",
      icon: "yup",
    },
    {
      name: "Sanity",
      icon: "sanity",
    },
    {
      name: "Strapi",
      icon: "strapi",
    },
    {
      name: "GSAP",
      icon: "gsap",
    },
    {
      name: "ThreeJS",
      icon: "threejs",
    },
    {
      name: "Architecture Patterns (SOLID, DRY, KISS, YAGNI)",
      icon: "architecture-patterns",
      patterns: [
        {
          name: "SOLID",
          icon: "solid",
        },
        {
          name: "DRY",
          icon: "dry",
        },
        {
          name: "KISS",
          icon: "kiss",
        },
        {
          name: "YAGNI",
          icon: "yagni",
        },
      ],
    },
  ],
};
