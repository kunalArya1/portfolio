export const tags = ["React", "Node.js", "Next.js", "Tailwind", "TypeScript", "MongoDB", "Express", "Full Stack", "React Native", "GraphQL", "AWS", "Docker", "Python", "Django", "Vue.js"];

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
  techStack: string[];
  featured: boolean;
  type: "Frontend" | "Backend" | "Fullstack";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and secure checkout functionality.",
    image: "/projects/ecommerce.jpg",
    demoLink: "https://demo.example.com/ecommerce",
    githubLink: "https://github.com/example/ecommerce",
    tags: ["React", "Node.js", "MongoDB"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    featured: true,
    type: "Fullstack"
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for managing e-commerce operations with real-time analytics and inventory management.",
    image: "/projects/dashboard.jpg",
    demoLink: "https://demo.example.com/dashboard",
    githubLink: "https://github.com/yourusername/dashboard",
    tags: ["Full Stack", "Node.js", "MongoDB"],
    techStack: ["React", "Node.js", "MongoDB"],
    featured: true,
    type: "Backend"
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/projects/tasks.jpg",
    demoLink: "https://tasks-app.com",
    githubLink: "https://github.com/yourusername/tasks",
    tags: ["TypeScript", "Express"],
    techStack: ["TypeScript", "Express", "MongoDB"],
    featured: false,
    type: "Fullstack"
  },
  {
    id: "4",
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support and SEO optimization.",
    image: "/projects/blog.jpg",
    demoLink: "https://blog-platform.com",
    githubLink: "https://github.com/yourusername/blog",
    tags: ["Next.js", "Tailwind"],
    techStack: ["Next.js", "Tailwind", "MongoDB"],
    featured: false,
    type: "Frontend"
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description: "A weather dashboard with real-time updates and interactive maps.",
    image: "/projects/weather.jpg",
    demoLink: "https://weather-app.com",
    githubLink: "https://github.com/yourusername/weather",
    tags: ["React", "Node.js"],
    techStack: ["React", "Node.js", "Express"],
    featured: true,
    type: "Frontend"
  },
  {
    id: "6",
    title: "Chat Application",
    description: "Real-time chat application with group chat and file sharing capabilities.",
    image: "/projects/chat.jpg",
    demoLink: "https://chat-app.com",
    githubLink: "https://github.com/yourusername/chat",
    tags: ["Full Stack", "TypeScript"],
    techStack: ["TypeScript", "Node.js", "MongoDB"],
    featured: false,
    type: "Fullstack"
  },
  {
    id: "7",
    title: "Social Media Analytics",
    description: "Advanced analytics platform for social media managers with AI-powered insights.",
    image: "/projects/analytics.jpg",
    demoLink: "https://analytics-demo.com",
    githubLink: "https://github.com/yourusername/analytics",
    tags: ["React", "Python", "AWS"],
    techStack: ["React", "Python", "AWS", "TensorFlow"],
    featured: true,
    type: "Backend"
  },
  {
    id: "8",
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts, nutrition, and fitness progress with social features.",
    image: "/projects/fitness.jpg",
    demoLink: "https://fitness-app.com",
    githubLink: "https://github.com/yourusername/fitness",
    tags: ["React Native", "Node.js"],
    techStack: ["React Native", "Node.js", "MongoDB"],
    featured: false,
    type: "Frontend"
  },
  {
    id: "9",
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with order processing and inventory tracking.",
    image: "/projects/restaurant.jpg",
    demoLink: "https://restaurant-demo.com",
    githubLink: "https://github.com/yourusername/restaurant",
    tags: ["Vue.js", "Express", "MongoDB"],
    techStack: ["Vue.js", "Express", "MongoDB"],
    featured: true,
    type: "Fullstack"
  },
  {
    id: "10",
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tour capabilities.",
    image: "/projects/realestate.jpg",
    demoLink: "https://realestate-demo.com",
    githubLink: "https://github.com/yourusername/realestate",
    tags: ["Next.js", "GraphQL"],
    techStack: ["Next.js", "GraphQL", "PostgreSQL"],
    featured: false,
    type: "Frontend"
  },
  {
    id: "11",
    title: "Learning Management System",
    description: "Educational platform with course management, assignments, and progress tracking.",
    image: "/projects/lms.jpg",
    demoLink: "https://lms-demo.com",
    githubLink: "https://github.com/yourusername/lms",
    tags: ["React", "Django", "PostgreSQL"],
    techStack: ["React", "Django", "PostgreSQL"],
    featured: true,
    type: "Backend"
  },
  {
    id: "12",
    title: "Inventory Management System",
    description: "Warehouse and inventory tracking system with barcode scanning support.",
    image: "/projects/inventory.jpg",
    demoLink: "https://inventory-demo.com",
    githubLink: "https://github.com/yourusername/inventory",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    techStack: ["Vue.js", "Node.js", "MongoDB"],
    featured: false,
    type: "Fullstack"
  },
  {
    id: "13",
    title: "Travel Planning App",
    description: "Mobile app for planning trips with itinerary management and local recommendations.",
    image: "/projects/travel.jpg",
    demoLink: "https://travel-app.com",
    githubLink: "https://github.com/yourusername/travel",
    tags: ["React Native", "GraphQL"],
    techStack: ["React Native", "GraphQL", "MongoDB"],
    featured: true,
    type: "Frontend"
  },
  {
    id: "14",
    title: "Project Management Tool",
    description: "Comprehensive project management solution with Gantt charts and resource allocation.",
    image: "/projects/project-management.jpg",
    demoLink: "https://pm-tool.com",
    githubLink: "https://github.com/yourusername/pm-tool",
    tags: ["React", "TypeScript", "GraphQL"],
    techStack: ["React", "TypeScript", "GraphQL"],
    featured: false,
    type: "Fullstack"
  },
  {
    id: "15",
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and medical records.",
    image: "/projects/healthcare.jpg",
    demoLink: "https://healthcare-demo.com",
    githubLink: "https://github.com/yourusername/healthcare",
    tags: ["Next.js", "Python", "PostgreSQL"],
    techStack: ["Next.js", "Python", "PostgreSQL"],
    featured: true,
    type: "Backend"
  },
  {
    id: "16",
    title: "Music Streaming App",
    description: "Audio streaming platform with playlist management and social features.",
    image: "/projects/music.jpg",
    demoLink: "https://music-app.com",
    githubLink: "https://github.com/yourusername/music",
    tags: ["React", "Node.js", "AWS"],
    techStack: ["React", "Node.js", "AWS"],
    featured: false,
    type: "Frontend"
  },
  {
    id: "17",
    title: "Event Management Platform",
    description: "Complete event planning and ticketing system with QR code support.",
    image: "/projects/events.jpg",
    demoLink: "https://events-demo.com",
    githubLink: "https://github.com/yourusername/events",
    tags: ["Vue.js", "Express", "MongoDB"],
    techStack: ["Vue.js", "Express", "MongoDB"],
    featured: true,
    type: "Fullstack"
  },
  {
    id: "18",
    title: "Job Board Platform",
    description: "Job listing and application management system with AI-powered matching.",
    image: "/projects/jobs.jpg",
    demoLink: "https://jobs-board.com",
    githubLink: "https://github.com/yourusername/jobs",
    tags: ["React", "GraphQL", "PostgreSQL"],
    techStack: ["React", "GraphQL", "PostgreSQL"],
    featured: false,
    type: "Backend"
  }
]; 