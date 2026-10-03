// Content for the printable resume at /resume (`pnpm resume` saves it to public/resume.pdf).
// It follows the layout of the original 2023 resume; only Simpplr and Education were updated.
import { experience } from './experience';
import { site } from './site';

const simpplr = experience.find((e) => e.company === 'Simpplr')!;

export const resume = {
  updated: '3rd October 2026',
  name: { first: 'Charan', last: 'B' },
  title: 'Software Engineer',
  email: site.email,
  phone: '+919380473736',

  links: [
    { label: 'Linktree', handle: 'CharanReddy404', url: 'https://linktr.ee/CharanReddy404' },
    { label: 'Github', handle: 'CharanReddy404', url: 'https://github.com/CharanReddy404' },
    { label: 'LinkedIn', handle: 'CharanReddy404', url: 'https://www.linkedin.com/in/charanreddy404' },
    { label: 'YouTube', handle: 'CharanReddy404', url: 'https://youtube.com/@charanreddy404' },
    { label: 'Twitter', handle: 'CharanReddy404', url: 'https://twitter.com/charanreddy404' },
    { label: 'HackerRank', handle: 'CharanReddy404', url: 'https://www.hackerrank.com/charanreddy404' },
  ],

  skills: [
    ['ReactJs', 'NodeJs', 'JavaScript'],
    ['TypeScript', 'Redux', 'NextJs'],
    ['Express', 'Docker', 'Microservices'],
    ['MongoDB', 'PostgreSQL', 'DSA'],
    ['Core Java', 'Git', 'GitHub'],
    ['Linux', 'REST APIs', 'TestCafe'],
  ],

  education: [
    {
      degree: 'Master of Computer Applications',
      field: 'Artificial Intelligence',
      lines: ['Jain (Deemed-to-be University)'],
      when: 'Nov 2025 - Present',
      place: 'Bangalore, IN',
    },
    {
      degree: 'Bachelor of Computer Application',
      lines: ['Bangalore North University', 'Govt. First Grade College for Boys', 'Cum. CGPA: 7.4 / 10.0'],
      when: 'Sept 2022',
      place: 'Kolar, IN',
    },
  ],

  projects: [
    {
      name: 'NextJS Dashboard',
      text: 'Developed a dynamic dashboard using Next.js, leveraging Tailwind CSS for styling. Implemented user authentication with NextAuth and utilized PostgreSQL for database functionality. Deployed the project on Vercel for optimal performance.',
      url: 'https://nextjs-dashboard-nu-weld.vercel.app',
    },
    {
      name: 'React Movies',
      text: 'Created a responsive movie application using React.js, incorporating Redux for state management. Styled the application using Tailwind CSS for a modern and sleek interface. Implemented features for browsing and managing movie data to enhance user experience.',
      url: 'https://charanreddy404-react-movies.netlify.app/',
    },
  ],

  experience: [
    {
      company: 'Simpplr',
      role: 'Associate Software Engineer',
      when: 'May 2023 - Present',
      place: 'Remote, IN',
      points: [
        ...simpplr.highlights,
        'Work across Kafka event streams, Redis caching, Prisma, Docker and Kubernetes deployments, with CI/CD on GitHub Actions and Jenkins.',
      ],
    },
    {
      company: 'EMOMENT.IN',
      role: 'Full Stack Developer',
      when: 'Oct 2022 - Feb 2023',
      place: 'Remote, IN',
      points: [
        'Despite facing challenges without senior guidance, I successfully navigated the complexities, acquiring proficiency in new technologies such as Node.js and SQL.',
        'My responsibilities included working on a project facilitating stock purchases using Solana cryptocurrency.',
        'I actively participated in both backend (Node.js) and frontend (React.js) development, resolving bugs, and implementing new features across various projects.',
      ],
    },
    {
      company: 'Coding Ninjas',
      role: 'Teaching Assistant at Coding Ninjas',
      when: 'May 2022 - Sep 2022',
      place: 'Remote, IN',
      points: [
        'I undertook an internship at Coding Ninjas as a Teaching Assistant for Java DSA from May 2022 to September 2022, spanning 5 months.',
        'During this period, I mentored 969 students, addressed 1.5k queries, and achieved a rating of 4.77.',
      ],
    },
    {
      company: 'Sanmoon Software Solutions',
      role: 'Software Engineering Trainee',
      when: 'Jun 2017 - Apr 2018',
      place: 'Bangalore, IN',
      points: [
        'I gained foundational knowledge in web development.',
        'I created static websites for clients, and actively sought new project opportunities.',
      ],
    },
  ],

  certifications: [
    ['2023', 'Udemy', 'The Complete JavaScript Course 2024'],
    ['2023', 'Cutshort', 'Cutshort Certified Javascript - Advanced'],
    ['2022', 'Coding Ninjas', 'Front End | Full Stack Web Development'],
    ['2022', 'Coding Ninjas', 'Back End | Full Stack Web Development in Node.js'],
    ['2022', 'Coding Ninjas', 'Advance Front-End Web Development with React'],
    ['2022', 'Coding Ninjas', 'Introduction to Programming Using Java'],
    ['2022', 'Coding Ninjas', 'Data Structures in JAVA'],
    ['2023', 'HiCounselor', 'Build a URL Shortener from Scratch'],
  ],

  achievements: [
    {
      title: 'Coding Ninja',
      text: 'I have mentored 969 students, addressed 1520 doubts and queries on Java DSA, and achieved a rating of 4.77.',
    },
  ],
};
