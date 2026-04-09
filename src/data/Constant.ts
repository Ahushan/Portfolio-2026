import {
  Code,
  Zap,
  Palette,
  Layers,
  BarChart3,
  BriefcaseBusiness,
  Folders,
  House,
  Signature,
  Wrench,
} from "lucide-react";
// Projects Imagees
import prjtImg1 from "../assets/images/projects/images/projectPht1.png";
import prjtImg2 from "../assets/images/projects/images/projectPht2.png";
import prjtImg3 from "../assets/images/projects/images/projectPht3.png";


import type {
  projectsDataTypes,
  naturalSkillsCardDataTypes,
  certificationsDataTypes,
  naturalSkillsDataTypes,
} from "./types";
import type { IconifyIcon } from "@iconify/react";


export const projectsData: projectsDataTypes[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: prjtImg1,
    technologies: ["React.js", "Tailwind CSS", "Nodejs", "Express", "Mysql2"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: prjtImg2,
    technologies: ["React", "Node.js", "Express"],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "An intelligent analytics dashboard that uses machine learning to provide insights and predictions for business data.",
    image: prjtImg3,
    technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const naturalSkillsData: naturalSkillsDataTypes[] = [
  { name: "INNATE ABILITIES" },
  { name: "INHERENT SKILLS" },
  { name: "INSTINCTIVE SKILLS" },
  { name: "GIFTEDNESS" },
  { name: "NATURAL PROFICIENCY" },
];

export const naturalSkillsCardData: naturalSkillsCardDataTypes[] = [
  {
    id: 1,
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Building scalable web applications with React, Node.js, Express, and SQL.",
    color: "bg-gradient-to-r from-blue-700 to-indigo-900",
    icon: Code,
  },
  {
    id: 2,
    title: "FRONT-END UI/UX",
    description:
      "Crafting responsive, modern interfaces with Tailwind CSS, Framer Motion, and Next.js.",
    color: "bg-gradient-to-r from-purple-800 to-purple-900",
    icon: Palette,
  },
  {
    id: 3,
    title: "BACK-END & DATABASES",
    description:
      "Optimized server-side logic, REST APIs, and database management with MySQL & MongoDB.",
    color: "bg-gradient-to-r from-green-700 to-teal-900",
    icon: Layers,
  },
  {
    id: 4,
    title: "CLOUD & DEPLOYMENT",
    description:
      "Deploying apps to cloud platforms, CI/CD pipelines, and managing hosting with reliability.",
    color: "bg-gradient-to-br from-orange-700 via-amber-800 to-amber-900",
    icon: Zap,
  },
  {
    id: 5,
    title: "DATA VISUALIZATION",
    description:
      "Creating interactive dashboards and charts for better decision-making.",
    color: "bg-gradient-to-r from-blue-700 via-indigo-800 to-indigo-900",
    icon: BarChart3,
  },
  {
    id: 6,
    title: "REACTIVE ANIMATIONS",
    description:
      "Building smooth animations and micro-interactions with Framer Motion & GSAP.",
    color: "bg-gradient-to-r from-purple-800 via-violet-900 to-indigo-900",
    icon: Zap,
  },
  {
    id: 7,
    title: "PERFORMANCE OPTIMIZATION",
    description:
      "Improving app speed, reducing load times, and efficient rendering across devices.",
    color: "bg-gradient-to-r from-slate-600 via-stone-800 to-slate-700",
    icon: Code,
  },
  {
    id: 8,
    title: "ACCESSIBLE & INCLUSIVE DESIGN",
    description:
      "Ensuring apps are usable by everyone, following best accessibility practices.",
    color: "bg-gradient-to-r from-rose-800 to-pink-900",
    icon: Palette,
  },
];

export const certificationsData: certificationsDataTypes[] = [
  {
    title: "MernStack Developer",
    company: "Muskan Technologies",
    description:
      "Developed and maintained full-stack web applications using the MERN stack. Implemented responsive UI with React.js, managed server-side logic with Node.js and Express, and designed relational databases with MySQL. Collaborated with cross-functional teams to deliver scalable, high-performance applications, optimized API endpoints, and integrated third-party services to enhance functionality.",
    date: "2024-2025",
    techStacks: [
      "html5",
      "css3",
      "javascript",
      "reactJs",
      "nodeJs",
      "express",
      "mySql",
    ],
  },
];

export const navLinkData: { label: string; to: string }[] = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
  { label: "More", to: "more" },
];

export const navbarIcons = [
  { id: "#Home", icon: House },
  { id: "#About", icon: Folders },
  { id: "#Tech=Stack", icon: BriefcaseBusiness },
  { id: "#Projects", icon: Wrench },
  { id: "#More", icon: Signature },
];

export const skillsData = [
  { name: "HTML", icon: "logos:html-5", color: "#E34F26" },
  { name: "CSS", icon: "logos:css-3", color: "#1572B6" },
  { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
  { name: "Bootstrap", icon: "logos:bootstrap", color: "#7952B3" },
  { name: "React", icon: "logos:react", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#38BDF8" },
  { name: "Framer Motion", icon: "logos:framer", color: "#E62B9E" },
  { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
  { name: "Node.js", icon: "logos:nodejs-icon", color: "#68A063" },
  { name: "Express", icon: "simple-icons:express", color: "#b3b3b3" },
  { name: "MySQL", icon: "logos:mysql", color: "#00758F" },
  { name: "Python", icon: "logos:python", color: "#3776AB" },
  { name: "NumPy", icon: "logos:numpy", color: "#4DABCF" },
  { name: "Pandas", icon: "logos:pandas", color: "#150458" },
];

export const techStacksDataWithTypes: {
  name: string;
  icon: string | IconifyIcon;
  color: string;
}[] = [
  { name: "React", icon: "logos:react", color: "#61DAFB" },
  { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
  { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
  { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
  { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
  { name: "Python", icon: "logos:python", color: "#3776AB" },
  { name: "Vue.js", icon: "logos:vue", color: "#4FC08D" },
  { name: "Angular", icon: "logos:angular-icon", color: "#DD0031" },
  { name: "Svelte", icon: "logos:svelte-icon", color: "#FF3E00" },
  { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
  { name: "Kubernetes", icon: "logos:kubernetes", color: "#326CE5" },
  { name: "AWS", icon: "logos:aws", color: "#FF9900" },
  { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
  { name: "PostgreSQL", icon: "logos:postgresql", color: "#336791" },
  { name: "Redis", icon: "logos:redis", color: "#DC382D" },
  { name: "GraphQL", icon: "logos:graphql", color: "#E10098" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
  { name: "Sass", icon: "logos:sass", color: "#CC6699" },
  { name: "Git", icon: "logos:git-icon", color: "#F05032" },
  { name: "GitHub", icon: "logos:github-icon", color: "#181717" },
  { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
  { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
  { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
  { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
  { name: "Python", icon: "logos:python", color: "#3776AB" },
  { name: "Vue.js", icon: "logos:vue", color: "#4FC08D" },
  { name: "Angular", icon: "logos:angular-icon", color: "#DD0031" },
  { name: "Svelte", icon: "logos:svelte-icon", color: "#FF3E00" },
  { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
  { name: "Kubernetes", icon: "logos:kubernetes", color: "#326CE5" },
  { name: "AWS", icon: "logos:aws", color: "#FF9900" },
  { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
  { name: "PostgreSQL", icon: "logos:postgresql", color: "#336791" },
  { name: "Redis", icon: "logos:redis", color: "#DC382D" },
  { name: "GraphQL", icon: "logos:graphql", color: "#E10098" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
  { name: "Sass", icon: "logos:sass", color: "#CC6699" },
];
