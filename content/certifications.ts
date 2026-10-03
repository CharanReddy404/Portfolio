export type Certification = {
  name: string;
  issuer?: string;
  date?: string;
  url?: string;
  badge?: string;
  // Image in public/certificates/, shown as a thumbnail in the gallery.
  image?: string;
};

const udemy = (id: string) => `https://www.udemy.com/certificate/${id}/`;
const codingNinjas = (id: string) => `https://certificate.codingninjas.com/verify/${id}`;
const cybrary = (id: string) => `https://app.cybrary.it/courses/api/certificate/${id}/view`;

// Sources: LinkedIn certifications page and resume.
export const certifications: Certification[] = [
  {
    name: 'Blockchain A-Z: Build a Blockchain, a Crypto',
    issuer: 'Udemy',
    date: 'Aug 2024',
    url: udemy('UC-e3413728-9aab-462b-9654-05bea197b36b'),
    image: '/certificates/udemy-blockchain.jpg',
  },
  {
    name: 'Flutter & Dart — The Complete Guide',
    issuer: 'Udemy',
    date: 'Mar 2024',
    url: udemy('UC-4e2fd4d5-894a-4ba8-8e21-860f7d1789a5'),
    image: '/certificates/udemy-flutter.jpg',
  },
  {
    name: 'Understanding TypeScript',
    issuer: 'Udemy',
    date: 'Jan 2024',
    url: udemy('UC-092ba0c0-57e5-4a40-a0de-81b482d80a38'),
    image: '/certificates/udemy-typescript.jpg',
  },
  {
    name: 'The Complete JavaScript Course: From Zero to Expert',
    issuer: 'Udemy',
    date: 'Dec 2023',
    url: udemy('UC-434a6a86-6a30-4630-a7f7-537227f83c8b'),
    image: '/certificates/udemy-javascript.jpg',
  },
  { name: 'Linux CLI Basics', issuer: 'Cybrary', date: 'Dec 2023', url: cybrary('CC-ed92c872-70cb-41c5-b551-979053b0f703'), image: '/certificates/cybrary-linux-cli.jpg' },
  { name: 'Linux File System Basics', issuer: 'Cybrary', date: 'Dec 2023', url: cybrary('CC-2499835d-d715-4221-9c41-e3f9528d46b8'), image: '/certificates/cybrary-linux-fs.jpg' },
  { name: 'Windows CLI Basics', issuer: 'Cybrary', date: 'Dec 2023', url: cybrary('CC-5d794404-4e25-4431-a633-513bf65be742'), image: '/certificates/cybrary-windows-cli.jpg' },
  { name: 'Windows File System Basics', issuer: 'Cybrary', date: 'Dec 2023', url: cybrary('CC-1051f803-34b7-4d66-95ab-6d804b8e4042'), image: '/certificates/cybrary-windows-fs.jpg' },
  { name: 'Careers in Cybersecurity', issuer: 'Cybrary', date: 'Dec 2023', url: cybrary('CC-4aa0690b-9cc1-442c-9196-75d5b2a67df8'), image: '/certificates/cybrary-careers.jpg' },
  {
    name: 'Build a URL Shortener from Scratch',
    issuer: 'HiCounselor',
    date: 'May 2023',
    url: 'https://hicounselor.com/certificate/verify/MTg2NDIxMzg=',
    image: '/certificates/hicounselor-url-shortener.jpg',
  },
  { name: 'Cutshort Certified JavaScript — Advanced', issuer: 'Cutshort', date: '2023' },
  // Coding Ninjas: all Certificates of Excellence with a Top Performer badge.
  { name: 'Full Stack Web Development in Node.js (Back End)', badge: 'Top Performer', issuer: 'Coding Ninjas', date: '2022', url: codingNinjas('b693d4ef39fb5d72'), image: '/certificates/cn-backend.jpg' },
  { name: 'Full Stack Web Development (Front End)', badge: 'Top Performer', issuer: 'Coding Ninjas', date: '2022', url: codingNinjas('8acbc2fe9a4d6173'), image: '/certificates/cn-frontend.jpg' },
  { name: 'Advanced Front-End Web Development with React', badge: 'Top Performer', issuer: 'Coding Ninjas', date: '2022', url: codingNinjas('430dae139d808d63'), image: '/certificates/cn-react.jpg' },
  { name: 'Data Structures in Java', badge: 'Top Performer', issuer: 'Coding Ninjas', date: '2022', url: codingNinjas('54f3faa4b65267e2'), image: '/certificates/cn-dsa-java.jpg' },
  { name: 'Introduction to Java', badge: 'Top Performer', issuer: 'Coding Ninjas', date: '2022', url: codingNinjas('d3ed067cf90f4bda'), image: '/certificates/cn-intro-java.jpg' },
];
