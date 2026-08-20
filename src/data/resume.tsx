import { Icons } from "@/components/icons";
import { FolderKey, HomeIcon, BookOpen } from "lucide-react";

export const DATA = {
  name: "Victor Adeshina",
  initials: "VA",
  url: "https://victor-adeshina.vercel.app",
  location: "Lagos Nigeria",
  locationLink:
    "https://www.google.com/maps/place/Alimosho,+Ipaja+South+102213,+Lagos",
  description:
    "Full-Stack Software Engineer with 3+ years of experience building scalable products people actually enjoy using. From enterprise platforms for financial teams to sleek mobile apps, I turn complex business logic into high-performance, production-ready digital experiences. Based in Nigeria and ready to ship premium code for remote-first teams worldwide.",
  summary: `**Full-Stack Software Engineer** with 3+ years of experience building scalable products that people actually enjoy using. From heavy-duty enterprise platforms for financial giants to sleek mobile apps, I turn complex business logic into high-performance, production-ready reality.

I thrive in fast-paced environments, speak fluent **TypeScript, React, Node.js, and Go**, and specialize in turning clunky legacy systems into seamless, premium digital experiences.

> **Open to Global Opportunities:** Fully equipped, battle-tested, and ready to ship high-impact code for remote-first teams worldwide.

---

### **Why Bring Me On Board?**

* **Enterprise-Grade Execution:** Trusted by major corporations, banks, and energy sectors to architect mission-critical onboarding apps and secure data migrations.
* **Revenue-Driven Engineering:** Focused on the bottom line whether that means improving conversion flows or optimizing backend throughput with Go.
* **Sleek UI/UX Obsessed:** I build for the user. I specialize in upgrading dated applications into premium, ultra-modern interfaces inspired by clean Apple and Shadcn design standards.
* **Cross-Platform Versatility:** Seamlessly jumping between robust server-side API architecture and high-performance mobile apps without missing a beat.`,
  avatarUrl: "/victor.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Golang",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Microsoft 365",
    "SharePoint Framework",
    "Azure",
    "Firebase",
    "Supabase",
    "Git",
    "GitHub",
    "Vercel",
    "Agentic Engineering",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
    { href: "/victoradeshina_resume.pdf", icon: FolderKey, label: "Resume" },
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
      badges: ["Tech Lead"],
      location: "Remote",
      title: "Software Engineer",
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
      logoUrl: "/victor.jpg",
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
      featured: true,
      title: "Along",
      href: "https://along-ruddy.vercel.app/",
      ctaLabel: "View live app",
      dates: "August 2026 - Present",
      description:
        "An in-progress collaborative trip workspace designed to replace scattered chats, spreadsheets, map links, and payment messages with one reliable place to plan together. Along brings destination decisions, shared itineraries, expense tracking, and realtime updates into a responsive, offline-ready experience for desktop and mobile.",
      highlights: [
        "Shared destination decisions",
        "Collaborative itineraries and expenses",
        "Realtime, offline-ready experience",
      ],
      technologies: [
        "Product Design",
        "Realtime Collaboration",
        "Offline-first PWA",
        "Responsive UX",
        "Expense Splitting",
      ],
      links: [
        {
          type: "Live App",
          href: "https://along-ruddy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/along.png",
      video: undefined,
    },
    {
      active: true,
      featured: true,
      title: "Fluxio Admin Dashboard",
      href: "https://fluxio-admin.vercel.app",
      dates: "Feb 2025 - Till Date",
      description:
        "An e-commerce operations workspace designed to make business performance easier to understand and everyday admin work easier to manage. Fluxio combines scan-friendly analytics, focused workflows, and consistent interaction patterns in a responsive interface that helps merchants move from insight to action without a cluttered back office.",
      highlights: [
        "Clear commerce performance overview",
        "Focused operational workflows",
        "Responsive, consistent interface",
      ],
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
      video: undefined,
    },
    {
      active: false,
      featured: false,
      title: "smartflow.io",
      href: "https://smartflow-backend-fb4b.onrender.com",
      dates: "August 2025 - Till Date",
      description:
        "A collaborative workspace that connects software planning with the work happening in development. SmartFlow helps teams turn ideas into structured tasks, coordinate in real time, and connect GitHub activity to the work it affects, while AI supports planning without taking decisions away from the team.",
      highlights: [
        "Planning connected to GitHub delivery",
        "Live team collaboration",
        "Human-guided AI assistance",
      ],
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
      video: "/showcase.mp4",
    },
    {
      active: true,
      featured: false,
      title: "Dental Health Website",
      href: "https://health-website-tan-gamma.vercel.app/",
      dates: "2026",
      description:
        "A patient-first website that makes dental care feel easier to understand and less intimidating. It helps visitors quickly explore treatments, recognise urgent-care options, and choose a clear next step through approachable language, confident visual direction, and responsive interactions.",
      highlights: [
        "Approachable treatment discovery",
        "Visible emergency-care pathways",
        "Responsive, patient-focused experience",
      ],
      technologies: [
        "Healthcare UX",
        "Responsive Design",
        "Landing Page",
        "Interactive UI",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://health-website-tan-gamma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Private Source",
          href: "https://github.com/v-techhub/Health-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/health-showcase.png",
      video: undefined,
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
      links: [
        {
          title: "LinkedIn post",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7407708515307274240?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7407708515307274240%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
    },
  ],
  certifications: [
    {
      title: "Go (Golang) Masterclass: Learn Like a Google Engineer",
      issuer: "Udemy",
      dates: "Issued January 2026",
      description:
        "Comprehensive mastery of the Go programming language, covering advanced concurrency patterns, performance profiling, scalable API design, and Go's runtime internals.",
      image: "udemy",
      links: [
        {
          title: "Credential",
          href: "https://www.udemy.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      dates: "Issued March 2026",
      description:
        "Validation of professional skills in designing, building, testing, and maintaining secure cloud applications and services on the Microsoft Azure platform.",
      image: "microsoft",
      links: [
        {
          title: "Credential",
          href: "https://learn.microsoft.com/credentials/certifications/azure-developer/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
