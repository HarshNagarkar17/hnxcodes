import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Harsh Nagarkar",
  initials: "HN",
  url: "https://hnxcodes.vercel.app",
  location: "Ahmedabad, Gujarat",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "engineer-in-progress",
  summary: "tldr; self-taught through projects, trial, and persistence",
  summary2:
    "curious about code, systems, and design. drawn to things that scale and last.",
  avatarUrl: "/black-hole.png",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Tailwind", "MySQL"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Harshnagarkar17/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harsh-nagarkar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hnx246",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:harshvn871@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Softcolon Technologies",
      href: "https://softcolon.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      // logoUrl: "/atomic.png",
      start: "Feb 2024",
      end: "Present",
      description:
        "Built and shipped web apps with React, Next.js, and Firebase. Contributed to backend APIs and database integrations, delivering scalable, production-ready features.",
    },
  ],
  education: [
    {
      school: "Silver Oak University",
      href: "https://silveroakuni.ac.in/",
      degree: "Bachelor's Degree of Computer Engineering",
      // logoUrl: "/buildspace.jpg",
      start: "2021",
      end: "2024",
    },
    {
      school: "RC Technical Institue",
      href: "https://www.rcti.ac.in/",
      degree: "Diploma In Computer Engineering",
      // logoUrl: "/waterloo.png",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Argent",
      active: true,
      description:
        "A web app where you create a room of AI agents—like a senator, lawyer, engineer, or artist—and let them debate your chosen topic from different perspectives in a dynamic, chat-style interface.",
      technologies: [
        "Next.js",
        "LangGraph",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/HarshNagarkar17/Argent",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Sourcebin",
      active: true,
      description:
        "A modern, AI-powered code snippet management platform. Save, organize, and quickly find your code snippets with intelligent search and automatic metadata generation.",
      technologies: [
        "Next.js",
        "OpenAI API",
        "Drizzle",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HarshNagarkar17/Sourcebin",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Calmwriter",
      href: "https://calmwriter.vercel.app/",
      active: true,
      description:
        "A minimal note-taking app designed for a calm, distraction-free writing experience, helping you focus on thoughts, ideas, and journaling with a clean, elegant interface.",
      technologies: [
        "React.js",
        "Indexed DB",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://calmwriter.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HarshNagarkar17/calmwriter",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
