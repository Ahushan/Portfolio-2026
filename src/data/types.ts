import type { LucideIcon } from "lucide-react";

export type projectsDataTypes = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
};

export type naturalSkillsDataTypes = {
  name: string;
};

export interface naturalSkillsCardDataTypes {
  id: number;
  description: string;
  title: string;
  color: string;
  icon: LucideIcon;
}

export type certificationsDataTypes = {
  title: string;
  company: string;
  description: string;
  date: string;
  techStacks: string[];
};

export type skillsDataTypes = { name: string; icon: string; color?: string };
