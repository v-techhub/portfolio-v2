import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Victor Adeshina",
  initials: "VA",
  url: "https://victor-adeshina.vercel.app",
  location: "Lagos Nigeria",
  locationLink:
    "https://www.google.com/maps/place/Alimosho,+Ipaja+South+102213,+Lagos",
  description:
    "Software Engineer • Web Developer • Mobile App Developer • Aspiring Full Stack Engineer",
  summary:
    "Software Engineer with 3+ years of experience in developing scalable software solutions. Expertise in full-stack development, specializing in developing dynamic, user-friendly, and scalable web and mobile applications. Skilled in crafting seamless user experiences and experienced in building business applications that streamline workflows and drive efficiency.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SPFx",
    "Firebase",
    "Git",
    // "Angular",
    "MongoDB",
    "AWS",
    // "Go",
    // "Postgres",
    // "Docker",
    // "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
        url: "https://www.linkedin.com/in/adeshina-victor-a40191304",
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
      badges: [],
      location: "Remote",
      title: "Business Solution and Application Developer",
      logoUrl: "/lba.png",
      start: "May 2025",
      end: "Till Date",
      description:
        "Built and maintained full-stack applications using Next.js, React.js, Node.js, and MongoDB. Developed cross-platform mobile apps with React Native and Firebase. Customized SharePoint solutions to automate internal processes and enhance team collaboration. Contributed to architecture decisions and delivery of scalable features.",
    },
    {
      company: "Freelance",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/me.png",
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
      href: "#",
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
          type: "Website",
          href: "https://victor-adeshina.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/v-techhub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
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
