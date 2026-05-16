export const site = {
  name: 'Harsh Nagarkar',
  tagline: 'Developer',
  bioParagraphs: [
    `i like working with technology and figuring out how things work. i enjoy building, improving, and solving problems with code.`,
    `these days, i’m focusing more on backend and systems work. i like solving logic and structure problems behind the scenes.`,
    `outside of coding, i spend a lot of time reading, learning new things, and exploring ideas that help me think better and build better.`,
  ],
  email: 'harshvn871@gmail.com',
  lastUpdated: '21st February 2026',
  links: [
    { label: 'GitHub', href: 'https://github.com/HarshNagarkar17' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/harsh-nagarkar' },
    { label: 'Twitter', href: 'https://x.com/hnx246' },
  ],
} as const;

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Git',
];

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Softcolon Technologies',
    period: 'Feb 2024 – Present',
    description: 'Built and shipped web apps with React, Next.js, and Firebase. Contributed to backend APIs and database integrations, delivering scalable, production-ready features.',
  },
];

export const projects = [
  {
    slug: 'argent',
    title: 'Argent',
    description: 'A web app where you create a room of AI agents—like a senator, lawyer, engineer, or artist—and let them debate your chosen topic from different perspectives in a dynamic, chat-style interface.',
    href: 'https://github.com/HarshNagarkar17/Argent',
    tags: ['LangGraph', 'Next.js', 'TypeScript'],
    featured: true,
  },
  {
    slug: 'stackfeed',
    title: 'StackFeed',
    description: 'A small web app that brings together articles from a few tech RSS feeds so you can skim them in one place, add or remove feeds, and keep your selections saved.',
    href: 'https://stackfeed.vercel.app/',
    tags: ['Next.js', 'TypeScript'],
    featured: true,
  },
  {
    slug: 'tweetbase',
    title: 'TweetBase',
    description: "Save and organize tweets with custom folders, all stored locally. TweetBase gives you full control over bookmarks with fast access and clean structure, without needing X Premium for basic saving.",
    href: '/projects/tweetbase',
    tags: ['Browser Extension', 'Productivity'],
    featured: true,
  },

  {
    slug: 'gitaura',
    title: 'Gitaura',
    description: 'A Python CLI for git commit visualization and repo analysis. Bar charts, file churn, hotspots, branch insights, and a "where do I work most?" directory map.',
    href: 'https://gitaura.harshfr.me/',
    tags: ['Python', 'Git', 'CLI'],
    featured: true,
  },
  {
    slug: 'sourcebin',
    title: 'Sourcebin',
    description: 'A modern, AI-powered code snippet management platform. Save, organize, and quickly find your code snippets with intelligent search and automatic metadata generation.',
    href: 'https://github.com/HarshNagarkar17/Sourcebin',
    tags: ['OpenAI', 'Next.js', 'TypeScript', 'Drizzle ORM'],
    featured: true,
  },
  {
    slug: 'calmwriter',
    title: 'Calmwriter',
    description: 'A minimal note-taking app designed for a calm, distraction-free writing experience, helping you focus on thoughts, ideas, and journaling with a clean, elegant interface.',
    href: 'https://calmwriter.vercel.app/',
    tags: ['React', 'IndexedDB', 'TypeScript'],
    featured: false,
  },
];
