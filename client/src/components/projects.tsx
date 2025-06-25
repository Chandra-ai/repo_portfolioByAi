import { Github, ExternalLink, FileText, Book } from "lucide-react";

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  links 
}: {
  title: string;
  description: string;
  technologies: { name: string; color: string }[];
  links: { type: string; label: string; icon: React.ReactNode }[];
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <div className="text-slate-400 text-center">
          <div className="w-16 h-16 bg-slate-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <FileText size={32} />
          </div>
          <p className="text-sm">Project Preview</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className={`px-3 py-1 text-sm rounded-full ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {links.map((link) => (
            <button
              key={link.label}
              className="flex items-center text-primary hover:text-blue-700 font-medium"
            >
              {link.icon}
              <span className="ml-1">{link.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application built with Spring Boot, featuring user authentication, product catalog, shopping cart, and payment integration.",
      technologies: [
        { name: "Spring Boot", color: "bg-primary/10 text-primary" },
        { name: "MySQL", color: "bg-primary/10 text-primary" },
        { name: "Thymeleaf", color: "bg-primary/10 text-primary" },
        { name: "Bootstrap", color: "bg-primary/10 text-primary" },
      ],
      links: [
        { type: "code", label: "Code", icon: <Github size={16} /> },
        { type: "demo", label: "Demo", icon: <ExternalLink size={16} /> },
      ]
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, team collaboration features, and comprehensive reporting dashboard.",
      technologies: [
        { name: "Spring Boot", color: "bg-accent/10 text-accent" },
        { name: "WebSocket", color: "bg-accent/10 text-accent" },
        { name: "PostgreSQL", color: "bg-accent/10 text-accent" },
        { name: "React", color: "bg-accent/10 text-accent" },
      ],
      links: [
        { type: "code", label: "Code", icon: <Github size={16} /> },
        { type: "demo", label: "Demo", icon: <ExternalLink size={16} /> },
      ]
    },
    {
      title: "Banking REST API",
      description: "Secure banking REST API with comprehensive transaction handling, account management, and fraud detection capabilities.",
      technologies: [
        { name: "Spring Boot", color: "bg-secondary/10 text-secondary" },
        { name: "Spring Security", color: "bg-secondary/10 text-secondary" },
        { name: "JWT", color: "bg-secondary/10 text-secondary" },
        { name: "Redis", color: "bg-secondary/10 text-secondary" },
      ],
      links: [
        { type: "code", label: "Code", icon: <Github size={16} /> },
        { type: "docs", label: "Docs", icon: <Book size={16} /> },
      ]
    },
    {
      title: "Inventory Management",
      description: "Enterprise inventory management system with barcode scanning, automated reordering, and comprehensive analytics dashboard.",
      technologies: [
        { name: "Spring Boot", color: "bg-primary/10 text-primary" },
        { name: "JPA", color: "bg-primary/10 text-primary" },
        { name: "MySQL", color: "bg-primary/10 text-primary" },
        { name: "Angular", color: "bg-primary/10 text-primary" },
      ],
      links: [
        { type: "code", label: "Code", icon: <Github size={16} /> },
        { type: "demo", label: "Demo", icon: <ExternalLink size={16} /> },
      ]
    },
    {
      title: "Microservices Platform",
      description: "Scalable microservices architecture with service discovery, API gateway, distributed tracing, and centralized logging.",
      technologies: [
        { name: "Spring Cloud", color: "bg-accent/10 text-accent" },
        { name: "Docker", color: "bg-accent/10 text-accent" },
        { name: "Kubernetes", color: "bg-accent/10 text-accent" },
        { name: "Eureka", color: "bg-accent/10 text-accent" },
      ],
      links: [
        { type: "code", label: "Code", icon: <Github size={16} /> },
        { type: "architecture", label: "Architecture", icon: <FileText size={16} /> },
      ]
    },
    {
      title: "Real-time Chat App",
      description: "Real-time messaging application with group chats, file sharing, push notifications, and end-to-end encryption.",
      technologies: [
        { name: "Spring Boot", color: "bg-secondary/10 text-secondary" },
        { name: "WebSocket", color: "bg-secondary/10 text-secondary" },
        { name: "MongoDB", color: "bg-secondary/10 text-secondary" },
        { name: "Vue.js", color: "bg-secondary/10 text-secondary" },
      ],
      links: [
        { type: "code", label: "Code", icon: <Github size={16} /> },
        { type: "demo", label: "Demo", icon: <ExternalLink size={16} /> },
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            <Github className="mr-2" size={20} />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
