export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

export interface Skill {
  title: string;
  progress: string;
}
