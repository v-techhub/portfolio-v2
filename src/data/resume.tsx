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
    "Full-Stack Software Engineer with 3+ years of experience building scalable applications people actually enjoy using. From heavy-duty enterprise platforms for financial giants to sleek mobile apps, I turn complex business logic into high-performance digital reality. Based in Nigeria and fully equipped to ship premium code for remote-first teams worldwide.",
  summary: `**Full-Stack Software Engineer** with 3+ years of experience building scalable products that people actually enjoy using. From heavy-duty enterprise platforms for financial giants to sleek mobile apps, I turn complex business logic into high-performance, production-ready reality.

I thrive in fast-paced environments, speak fluent **TypeScript, React, Node.js, and Go**, and specialize in turning clunky legacy systems into seamless, premium digital experiences.

> 🌍 **Open to Global Opportunities:** Fully equipped, battle-tested, and ready to ship high-impact code for remote-first teams worldwide.

---

### **Why Bring Me On Board?**

* **Enterprise-Grade Execution:** Trusted by major corporations, banks, and energy sectors (like MTN Nigeria, LAPO, and Federal Mortgage Bank) to architect mission-critical onboarding apps and secure data migrations.
* **Revenue-Driven Engineering:** Focused on the bottom line—whether that means boosting conversion rates by implementing frictionless global/regional checkouts (Paystack + Google Pay) or optimizing backend throughput using Go.
* **Sleek UI/UX Obsessed:** I build for the user. I specialize in upgrading dated applications into premium, ultra-modern interfaces inspired by clean Apple and Shadcn design standards.
* **Cross-Platform Versatility:** Seamlessly jumping between robust server-side API architecture and high-performance mobile apps without missing a beat.`,
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
    { href: "/resume_2026.pdf", icon: FolderKey, label: "Résumé" },
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
  ],
  awards: [
    {
      title: "Staff of The Year",
      dates: "December 2025 - March 2026",
      location: "Lotus Beta Analytics",
      description:
        "Recognized for exceptional technical contributions, engineering excellence, and the consistent delivery of high-quality software solutions that drive business impact.",
      image: "/lba.png",
      links: [],
    },
  ],
} as const;
