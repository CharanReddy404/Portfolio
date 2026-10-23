// Content for the printable resume at /resume (`pnpm resume` saves it to public/resume.pdf).
// Jake's Resume style: summary, experience, technical skills, education, certifications.
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
    'Backend engineer with 4+ years building financial-grade TypeScript microservices (NestJS, Fastify, PostgreSQL, Kafka) for an enterprise recognition and rewards platform.',

  experience: [
    {
      role: 'Associate Software Engineer',
      company: 'Simpplr',
      when: 'May 2023 – Present',
      place: 'Remote',
      points: [
        'Backend engineer for a rewards system generating ~$5M ARR; engineered core financial microservices, designing user wallet and budget ledgers with strict ACID guarantees for high-concurrency reward transactions.',
        'Built the multi-tenant reward store supporting multiple countries and multi-vendor integrations, fulfilling both digital and physical orders.',
        'Owned the Tango gift-card availability webhook end to end, preventing failed redemptions on out-of-stock items.',
        'Designed a safe, auditable ledger process to allocate 111,000+ points mid-cycle across multiple customers.',
        'Built core logic for Programs with Peer Awards (award, per-giver and total program limits with weekly, monthly and quarterly resets); delivered a key milestone in 15 days, half the expected time.',
        'Merged 150+ PRs across Recognition, Rewards and Redemption with 80%+ code coverage; upgraded Node.js 18 to 20, fixed critical SonarQube issues including SQL injection, and mentored two new backend engineers.',
        'Used Claude and Cursor daily for 1.5 years to ship end-to-end features faster with zero reported production bugs; deployed on Docker and Kubernetes with CI/CD on GitHub Actions and Jenkins.',
        'Top Performer with 5/5 reviews in FY2025 and FY2026; received the Brilliant Beginner R&D Award (Apr 2025) and the Simpplr Rising Star award (Dec 2025).',
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
    { group: 'AI tools', items: ['Claude', 'Cursor'] },
    { group: 'Frontend', items: ['React', 'Redux', 'Next.js'] },
  ],

  // Only the certificates that support a backend profile (the full list stays on the website).
  certifications: [
    'Full Stack Web Development in Node.js (Back End)',
    'Data Structures in Java',
    'Understanding TypeScript',
    'The Complete JavaScript Course: From Zero to Expert',
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
