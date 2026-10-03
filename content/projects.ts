export type Project = {
  title: string;
  description: string;
  tech: string[];
  year: string;
  github?: string;
  live?: string;
  featured?: boolean;
};

// Projects are hidden while new ones are being built — the site shows a "coming soon" note instead.
// Set to true to show the list below again.
export const showProjects = false;

// Featured projects render larger, at the top.
export const projects: Project[] = [
  {
    title: 'ToMoola',
    description:
      'A marketplace connecting Indian folk artists with event organisers. Clients discover artists by art form and request bookings; artists manage profiles, availability and bookings; admins approve artists and moderate content.',
    tech: ['Next.js 15', 'NestJS 11', 'PostgreSQL', 'Prisma', 'Redis', 'Turborepo'],
    year: '2026',
    github: 'https://github.com/CharanReddy404/tomoola',
    featured: true,
  },
  {
    title: 'Next × Nest Starter',
    description:
      'A production-ready monorepo boilerplate for full-stack TypeScript apps: Next.js 16 and NestJS 11 with shared configs, Biome, Husky hooks and GitHub Actions CI.',
    tech: ['Next.js 16', 'NestJS 11', 'Turborepo', 'pnpm', 'GitHub Actions'],
    year: '2026',
    github: 'https://github.com/CharanReddy404/next-nest-starter',
    featured: true,
  },
  {
    title: 'This portfolio',
    description:
      'The site you’re on. Statically generated with Next.js, content kept in typed files, dynamic Open Graph images and full light/dark theming.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: '2026',
    live: 'https://charanreddy404.vercel.app',
  },
  {
    title: 'Next.js Dashboard',
    description:
      'A dashboard app with NextAuth authentication and a PostgreSQL database, styled with Tailwind CSS and deployed on Vercel.',
    tech: ['Next.js', 'NextAuth', 'PostgreSQL', 'Tailwind CSS'],
    year: '2023',
    live: 'https://nextjs-dashboard-nu-weld.vercel.app',
  },
  {
    title: 'React Movies',
    description:
      'A responsive movie browsing app built with React and Redux for state management, styled with Tailwind CSS.',
    tech: ['React', 'Redux', 'Tailwind CSS'],
    year: '2023',
    live: 'https://charanreddy404-react-movies.netlify.app/',
  },
  {
    title: 'Music Player',
    description: 'A browser music player with playlist, seek and playback controls — one of my first web projects.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2022',
    github: 'https://github.com/CharanReddy404/MusicPlayer',
  },
];
