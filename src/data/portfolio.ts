export const site = {
  name: 'Harsh Nagarkar',
  tagline: 'Developer / Designer',
  bioParagraphs: [
    `I like opening things that aren't broken. Code, systems, sometimes ideas. Mostly to see what's actually holding them together.`,
    `Lately I've been spending more time on the backend. Less buttons, more structure. Less noise, more logic.`,
    `I read a lot about generative AI. Not just how to use it, but how it thinks. Or pretends to. I'm interested in where it's going, and what it quietly changes while we're busy arguing about it.`,
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
    tags: ['LangGraph','Next.js', 'TypeScript'],
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
