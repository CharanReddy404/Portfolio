// Content for the printable resume at /resume (`pnpm resume` saves it to public/resume.pdf).
// Jake's Resume style: summary, experience, education, technical skills, certifications.
import { site } from './site';
import { certifications as allCertifications } from './certifications';

export type ResumeJob = { role: string; company: string; when: string; place: string; points: string[] };

export const resume = {
  name: 'Charan B',
  contact: [
    site.email,
    site.phone,
    site.url.replace(/^https?:\/\//, ''),
    'github.com/CharanReddy404',
    'linkedin.com/in/charanreddy404',
  ],

  summary:
    'Backend engineer with 3.5 years at Simpplr, a B2B SaaS employee experience platform, building TypeScript services (NestJS, Fastify, PostgreSQL, Kafka) for its recognition and rewards product. Own the rewards ledger that is the source of truth for balances and transaction history. Rated Far Exceeds Expectations for FY2026.',

  experience: [
    {
      role: 'Associate Software Engineer',
      company: 'Simpplr',
      when: 'May 2023 – Present',
      place: 'Remote',
      points: [
        'Designed and built the rewards ledger recording every rewards transaction, serving as the source of truth for balances and history; used it to allocate 111,000+ points mid-cycle across multiple customers through a safe, auditable process.',
        'Owned the Tango gift-card availability webhook end to end, from API and data model design to production, preventing redemptions from failing on out-of-stock items.',
        'Built core logic for the Programs feature with Peer Awards (award, per-giver and total program limits with weekly, monthly and quarterly resets) and delivered a key milestone in 15 days, half the expected time.',
        'Shipped bulk points upload via CSV and concurrency-safe editing of recognition points; upgraded a service from Node.js 18 to 20 and fixed critical SonarQube issues, including SQL injection.',
        'Merged 150+ PRs across Recognition, Rewards and Redemption services with 80%+ code coverage, and mentored two new backend engineers through onboarding.',
        'Deployed services on Docker and Kubernetes with CI/CD on GitHub Actions and Jenkins.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'eMoment.in',
      when: 'Oct 2022 – Feb 2023',
      place: 'Remote',
      points: [
        'Built Node.js APIs and React features for a platform enabling stock purchases with Solana.',
        'Shipped features and resolved production bugs across backend and frontend, picking up Node.js and SQL without senior guidance.',
      ],
    },
    {
      role: 'Teaching Assistant, Java DSA',
      company: 'Coding Ninjas',
      when: 'May 2022 – Sep 2022',
      place: 'Remote',
      points: ['Mentored 969 students and resolved 1,520 doubts with a 4.77/5 rating.'],
    },
  ] satisfies ResumeJob[],

  skills: [
    { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'SQL'] },
    { group: 'Backend', items: ['Node.js', 'NestJS', 'Fastify', 'Express', 'REST APIs', 'Microservices', 'Kafka'] },
    { group: 'Data', items: ['PostgreSQL', 'Prisma', 'Redis', 'MongoDB'] },
    { group: 'Infra and tools', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Git', 'Linux'] },
    { group: 'Frontend', items: ['React', 'Redux', 'Next.js'] },
  ],

  // Only the certificates that support a backend profile (the full list stays on the website).
  certifications: [
    'Full Stack Web Development in Node.js (Back End)',
    'Data Structures in Java',
    'Understanding TypeScript',
    'Cutshort Certified JavaScript — Advanced',
    'Build a URL Shortener from Scratch',
  ].map((name) => {
    const c = allCertifications.find((x) => x.name === name);
    if (!c) throw new Error(`Unknown certification: ${name}`);
    return { name: c.name, issuer: c.issuer ?? '', date: c.date ?? '', badge: c.badge };
  }),

  education: [
    {
      school: 'Jain (Deemed-to-be University)',
      place: 'Bangalore, India',
      degree: 'Master of Computer Applications, Artificial Intelligence',
      when: '2025 – Present',
    },
    {
      school: 'Bangalore North University',
      place: 'Kolar, India',
      degree: 'Bachelor of Computer Applications · CGPA 7.4/10',
      when: '2022',
    },
  ],
};
