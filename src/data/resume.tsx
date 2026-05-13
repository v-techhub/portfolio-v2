import { Icons } from "@/components/icons";
import { FolderKey, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Victor Adeshina",
  initials: "VA",
  url: "https://victor-adeshina.vercel.app",
  location: "Lagos Nigeria",
  locationLink:
    "https://www.google.com/maps/place/Alimosho,+Ipaja+South+102213,+Lagos",
  description:
    "Assistant Technical Lead @ Lotus Beta Analytics | Architecting Scalable Enterprise Systems | React • Mobile Apps • SPFx • Full-Stack Engineering",
  summary: `I am a Full-Stack Software Developer and Assistant Technical Lead at Lotus Beta Analytics, where I lead the design and delivery of scalable, enterprise-grade web and mobile applications within a 20-engineer team. I specialize in architecting reliable backend systems and high-performance frontends using Typescript, React, SharePoint Framework (SPFx), Node.js, Golang and Postgres/MongoDB, with a strong focus on scalability, maintainability, and clean architecture.  I contribute to technical direction, mentor engineers, and enforce best practices to ensure consistent, production-ready delivery. My work centers on building resilient systems, optimizing complex business workflows, and delivering secure, data-driven solutions that drive real organizational impact.`,
  avatarUrl: "/victorscripts.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SharePoint Framework",
    "Firebase",
    "Git",
    // "Angular",
    "MongoDB",
    "Azure",
    "Google Cloud",
    "Go",
    "Postgres",
    // "Docker",
    // "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/victoradeshinarésume.pdf", icon: FolderKey, label: "Résumé" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "victoradeshina922@gmail.com",
    tel: "+2349135409822",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/v-techhub",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/victor-adeshina-a40191304",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/victor-adeshina",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      Email: {
        name: "Send Email",
        url: "mailto:victoradeshina922@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Lotus Beta Analytics",
      href: "https://www.lotusbetaanalytics.com",
      badges: ["Assistant Tech Lead"],
      location: "Remote",
      title: "Business Solutions and Application Developer",
      logoUrl: "/lba.png",
      start: "May 2025",
      end: "Till Date",
      description:
        "Customized SharePoint solutions to automate internal processes and enhance team collaboration. Built and maintained full-stack applications using Next.js, React.js, Node.js, and MongoDB. Developed cross-platform mobile apps with React Native and Firebase. Contributed to architecture decisions and delivery of scalable features.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/victorscripts.jpg",
      start: "January 2023",
      end: "May 2025",
      description:
        "Delivered full-stack web and mobile solutions for clients using Next.js, React.js, React Native, Node.js, Firebase, and MongoDB. Built custom APIs and deployed scalable applications. Collaborated closely with clients to understand business needs and translate them into functional, user-friendly products.",
    },
  ],
  education: [
    {
      school: "Open University of Nigeria",
      href: "https://nou.edu.ng",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/noun.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "smartflow.io",
      href: "https://smartflow-backend-fb4b.onrender.com",
      dates: "August 2025 - Till Date",
      active: false,
      description:
        "SmartFlow is a modern, intelligent project management application designed to solve real-world collaboration challenges in software development teams. Built with the MERN stack and enhanced with AI capabilities, it bridges the gap between project planning and actual development work through seamless GitHub integration and real-time collaboration features.",
      technologies: [
        "React.JS",
        "Typescript",
        "Redux",
        "Node.JS",
        "Express",
        "Mongoose",
        "MongoDB",
        "Socket.io",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Open AI",
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/v-techhub/Smartflow-Frontend",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/v-techhub/Smartflow-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/showcase.png",
      //   video: "showcase.mp4",
    },
    {
      active: true,
      title: "Fluxio Admin Dashboard",
      href: "https://fluxio-admin.vercel.app",
      dates: "Feb 2025 - Till Date",
      description:
        "A modern e-commerce admin dashboard crafted to showcase my frontend development skills through polished UI design, reusable architecture, responsive layouts, analytics visualizations, and smooth user interactions. Fluxio focuses on creating a production-level admin experience using React, TypeScript, and scalable component patterns. Additional screens and features are actively being developed.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Ant Design",
        "SCSS",
        "React Router",
        "React Hook Form",
        "Zod",
        "Recharts",
        "Framer Motion",
        "Draft.js",
        "UUID",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://fluxio-admin.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/v-techhub/fluxio-admin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fluxio.png",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
