export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  url?: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: 'Simpplr',
    role: 'Associate Software Engineer',
    location: 'Remote',
    start: 'May 2023',
    end: 'Present',
    url: 'https://www.simpplr.com',
    highlights: [
      'Backend engineer on Simpplr’s Recognition & Rewards product, building services with NestJS and Fastify on PostgreSQL inside a TypeScript monorepo.',
      'Built the rewards ledger that records every rewards transaction, serving as the source of truth for balances and transaction history.',
      'Shipped multiple complex features across recognition and rewards end to end, from API and data-model design through to production.',
    ],
    tech: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'NestJS',
      'Fastify',
      'Kafka',
      'REST APIs',
      'Microservices',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Jenkins',
      'Turborepo',
      'Monorepos',
    ],
  },
  {
    company: 'EMOMENT',
    role: 'Full-Stack Developer',
    location: 'Remote',
    start: 'Oct 2022',
    end: 'Feb 2023',
    highlights: [
      'Built features for a platform that lets users purchase stocks using Solana cryptocurrency.',
      'Worked across the React frontend and Node.js backend — shipping new features and fixing production bugs.',
      'Picked up Node.js and SQL independently and delivered without senior engineering support.',
    ],
    tech: ['React', 'Node.js', 'SQL', 'Solana'],
  },
  {
    company: 'Coding Ninjas',
    role: 'Teaching Assistant — Java & DSA',
    location: 'Remote',
    start: 'May 2022',
    end: 'Sep 2022',
    highlights: [
      'Mentored 969 students in Java and data structures & algorithms.',
      'Resolved 1,500+ student doubts while holding a 4.77 / 5 rating.',
    ],
    tech: ['Java', 'DSA'],
  },
  {
    company: 'Sanmoon Software Solutions',
    role: 'Software Engineering Trainee',
    location: 'Bangalore, IN',
    start: 'Jun 2017',
    end: 'Apr 2018',
    highlights: [
      'Built and delivered static websites for client projects.',
      'Learned the foundations of production web development.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];
