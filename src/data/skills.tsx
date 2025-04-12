import { CodeXml, ListVideo, Server } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
}

interface Skills {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

export const skills: Skills[] = [
  {
    icon: <CodeXml className="text-3xl text-blue-500" />,
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Redux", icon: "redux" },
      { name: "Zustand", icon: "zustand" },
      { name: "Framer Motion", icon: "framer-motion" },
      { name: "React Hook Form", icon: "react-hook-form" },
    ],
  },

  {
    icon: <Server className="text-3xl text-purple-500" />,
    title: "Backend",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Mongoose", icon: "mongoose" },
      { name: "Prisma", icon: "prisma" },
    ],
  },

  {
    icon: <ListVideo className="text-3xl text-pink-500" />,
    title: "Other",
    skills: [
      { name: "Git / GitHub", icon: "github" },
      { name: "CI/CD", icon: "cicd" },
      { name: "Vite", icon: "vite" },
      { name: "Webpack", icon: "webpack" },
    ],
  },

  // {
  //   icon: <FaCode className="text-3xl text-blue-500" />,
  //   title: "In Progress",
  //   skills: [
  //     { name: "NestJS", icon: "nestjs" },
  //     { name: "Docker", icon: "docker" },
  //     { name: "Formik", icon: "formik" },
  //     { name: "React Hook Form", icon: "react-hook-form" },
  //     { name: "Yup", icon: "yup" },
  //     { name: "Sanity", icon: "sanity" },
  //     { name: "Strapi", icon: "strapi" },
  //     { name: "GSAP", icon: "gsap" },
  //     { name: "ThreeJS", icon: "threejs" },
  //     { name: "Architecture Patterns", icon: "architecture-patterns" },
  //   ],
  // },
];
