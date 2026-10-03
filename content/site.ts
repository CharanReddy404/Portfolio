// Everything on the site is driven from the files in /content.
// Edit these, commit, and push — Vercel redeploys automatically.

export const site = {
  name: 'Charan B',
  handle: 'charanreddy404',
  role: 'Backend Engineer',
  company: 'Simpplr',
  location: 'India · Remote',
  url: 'https://charanreddy404.vercel.app',
  email: 'charanlucky6143@gmail.com',
  phone: '+91 93804 73736',
  // Drop your resume at /public/resume.pdf — the Resume button appears automatically.
  resume: '/resume.pdf',
  // Shown in italics under your name in the hero.
  headline: 'builds reliable backends.',
  tagline:
    'I design and build complex backend systems end to end — production-ready services behind the parts of a product you never see, but always rely on.',
  about: [
    'I’m a backend engineer at Simpplr, working on the Recognition & Rewards product. I build services with NestJS and Fastify on PostgreSQL in a TypeScript monorepo — including the ledger that tracks every rewards transaction.',
    'Before that I shipped features end to end on a Solana-based trading product at EMOMENT, and mentored nearly a thousand students in Java and data structures as a Teaching Assistant at Coding Ninjas. Outside work, I’m building a few new backend-focused projects — they’ll be on this page soon.',
  ],
  socials: {
    github: 'https://github.com/CharanReddy404',
    linkedin: 'https://www.linkedin.com/in/charanreddy404',
    youtube: 'https://www.youtube.com/@charanreddy404',
    twitter: 'https://x.com/CharanReddy404',
    hackerrank: 'https://www.hackerrank.com/profile/CharanReddy404',
  },
  certificationsUrl: 'https://www.linkedin.com/in/charanreddy404/details/certifications/',
};

export type Education = {
  degree: string;
  field?: string;
  school: string;
  start?: string;
  end: string;
  grade?: string;
};

// Most recent first.
export const education: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Artificial Intelligence',
    school: 'Jain (Deemed-to-be University)',
    start: 'Nov 2025',
    end: 'Present',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Govt. First Grade College for Boys, Kolar — Bangalore North University',
    end: 'Sep 2022',
    grade: 'CGPA 7.4 / 10',
  },
];

export const educationDates = (e: Education) => (e.start ? `${e.start} — ${e.end}` : e.end);

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Fastify', 'Kafka', 'REST APIs', 'Microservices'] },
  { group: 'Data', items: ['PostgreSQL', 'Prisma', 'Redis', 'MongoDB'] },
  { group: 'Tooling', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Turborepo', 'Monorepos'] },
];
