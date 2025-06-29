import { Project } from "@/types/ProjectTypes";

export const projectCategories = [
  "Web Development",
  "Mobile Development",
  "Full Stack",
  "UI/UX Design",
  "Backend Development",
] as const;

export const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Redux",
  "GraphQL",
  "Docker",
  "AWS",
] as const;

export const projectData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, blog functionality, and dynamic project showcase.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    featured: true,
    date: "2024-03-15",
    category: "Web Development"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with features like product management, cart functionality, payment integration, and order tracking.",
    image: "/projects/ecommerce.jpg",
    tags: ["Full Stack", "Node.js", "MongoDB"],
    demoLink: "https://ecommerce.example.com",
    githubLink: "https://github.com/example/ecommerce",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
    featured: true,
    date: "2024-02-28",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking capabilities.",
    image: "/projects/taskmanager.jpg",
    tags: ["React", "GraphQL", "PostgreSQL"],
    demoLink: "https://tasks.example.com",
    githubLink: "https://github.com/example/taskmanager",
    techStack: ["React", "GraphQL", "PostgreSQL", "TypeScript", "Docker"],
    featured: false,
    date: "2024-02-15",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that provides real-time weather information, forecasts, and interactive maps using multiple weather APIs.",
    image: "/projects/weather.jpg",
    tags: ["React", "APIs", "Tailwind CSS"],
    demoLink: "https://weather.example.com",
    githubLink: "https://github.com/example/weather",
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    featured: false,
    date: "2024-01-20",
    category: "Web Development"
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media managers with data visualization and reporting features.",
    image: "/projects/analytics.jpg",
    tags: ["Next.js", "D3.js", "AWS"],
    demoLink: "https://analytics.example.com",
    githubLink: "https://github.com/example/analytics",
    techStack: ["Next.js", "D3.js", "AWS", "TypeScript", "Redux"],
    featured: true,
    date: "2024-01-10",
    category: "Web Development"
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "A modern chat application with features like real-time messaging, file sharing, and group conversations.",
    image: "/projects/chat.jpg",
    tags: ["Socket.io", "Node.js", "MongoDB"],
    demoLink: "https://chat.example.com",
    githubLink: "https://github.com/example/chat",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "TypeScript"],
    featured: false,
    date: "2023-12-15",
    category: "Full Stack"
  },
  {
    id: 7,
    title: "Fitness Tracking Platform",
    description: "A comprehensive fitness tracking platform with workout planning, progress monitoring, and social features.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "Node.js", "GraphQL"],
    demoLink: "https://fitness.example.com",
    githubLink: "https://github.com/example/fitness",
    techStack: ["React Native", "Node.js", "GraphQL", "PostgreSQL"],
    featured: true,
    date: "2023-11-30",
    category: "Mobile Development"
  },
  {
    id: 8,
    title: "Content Management System",
    description: "A flexible CMS built for content creators with markdown support, media management, and SEO optimization.",
    image: "/projects/cms.jpg",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    demoLink: "https://cms.example.com",
    githubLink: "https://github.com/example/cms",
    techStack: ["Next.js", "PostgreSQL", "AWS", "TypeScript"],
    featured: false,
    date: "2023-11-15",
    category: "Full Stack"
  }
];
