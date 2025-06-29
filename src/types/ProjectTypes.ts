export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  techStack: string[];
  featured: boolean;
  date: string;
  category: string;
}
