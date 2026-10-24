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
      'Backend engineer on the Recognition & Rewards team since Feb 2025, engineering core financial microservices with NestJS and Fastify on PostgreSQL in a TypeScript monorepo.',
      'Designed the user wallet and budget ledgers with strict ACID guarantees to handle high-concurrency reward transactions.',
      'Built the multi-tenant reward store supporting multiple countries and multi-vendor integrations, fulfilling both digital and physical orders.',
      'Designed a safe, auditable way to allocate allowance points mid-cycle and distributed 111,000+ points across multiple customers.',
      'Designed and built the Tango gift-card availability webhook end to end, preventing redemptions from failing on out-of-stock items.',
      'Built core logic for the new Programs feature with Peer Awards — award, per-giver and total program limits with weekly, monthly and quarterly resets — and delivered a key milestone in 15 days, half the expected time.',
      'Designed and built time-zone-aware work-anniversary awards in Programs end to end, posting recognition with points at each user\'s local time.',
      'Designed and built Boost end to end, letting users add their own points to a colleague\'s recognition to amplify it.',
      'Shipped bulk points upload via CSV and editing recognition with points safely under concurrent edits; upgraded a service from Node.js 18 to 20 and fixed critical SonarQube findings.',
      'Merged 150+ PRs across Recognition, Rewards and Redemption with 80%+ code coverage, handled production support, and mentored two new backend engineers.',
      'Top Performer with 5/5 reviews in FY2025 and FY2026; received the Brilliant Beginner R&D Award (Apr 2025) and the Simpplr Rising Star award (Dec 2025).',
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
