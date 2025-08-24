// ---- State types ----
interface AboutCard {
  title: string;
  value: number;
}

interface AboutLinks {
  git: string;
  linkedin: string;
  twitter: string;
}

interface Education {
  title: string;
  institute: string;
  result: string;
  duration: string;
}

interface Skill {
  name: string;
  level: number;
}

interface ImageVideo {
  type: string;
  value: string;
}

interface Project {
  title: string;
  description: string;
  imagesVideos: ImageVideo[];
  link: string;
  tags: string[];
}

export interface DataState {
  siteTitle: string;
  pp: string;
  heroTitle: string;
  heroText: string;
  aboutTitle: string;
  aboutText: string;
  aboutCards: AboutCard[];
  aboutProjCompleted: number;
  aboutExperience: number;
  aboutExperienceSelf: number;
  aboutTech: number;
  aboutLinks: AboutLinks;
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

// ---- Helper types ----
type ArrayKeys<T> = {
  [K in keyof T]: T[K] extends Array<unknown> ? K : never;
}[keyof T];

type ArrayElement<T> = T extends Array<infer U> ? U : never;
