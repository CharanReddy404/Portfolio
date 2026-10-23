// Recognition & feedback, taken from Simpplr's recognition platform, Lattice feedback and FY2026 reviews.
// Only quote people who have agreed to be quoted. Keep customer names and internal links out of this file.

export type Award = { title: string; detail: string; when: string };
export type Stat = { value: string; label: string };
export type Quote = {
  text: string;
  name: string;
  role?: string; // TODO: fill in each person's role, e.g. 'Senior Software Engineer'
  context: string; // where the quote comes from, e.g. 'Peer recognition · Hidden Gem'
  when: string;
  featured?: boolean;
};

export const awards: Award[] = [
  {
    title: 'Far Exceeds Expectations',
    detail: 'FY2026 annual performance rating, the highest on the scale',
    when: 'Feb 2025 – Jan 2026',
  },
  {
    title: 'Brilliant Beginner R&D Award',
    detail: 'For exceptional early contributions and rapid learning',
    when: 'Apr 2025',
  },
  {
    title: '18 peer recognitions',
    detail: 'Galactic Gratitude ×8 · Hidden Gem ×4 · Simpplr Spirit ×2 · Rocket Booster ×2 · Rising Star',
    when: '2025 – 2026',
  },
];

export const stats: Stat[] = [
  { value: '94+', label: 'PRs merged across Recognition, Rewards and Redemption' },
  { value: '111K+', label: 'points allocated through a mid-cycle allowance solution' },
  { value: '15 days', label: 'to ship a Programs milestone, half the expected time' },
  { value: '80%+', label: 'code coverage maintained on delivered work' },
];

export const quotes: Quote[] = [
  {
    text: 'He operates at a level higher than his current title and consistently adds significant value to the team and business. He is clearly a star performer.',
    name: 'Arbind Kumar',
    role: 'Team Lead',
    context: 'FY2026 annual review',
    when: 'Jan 2026',
    featured: true,
  },
  {
    text: 'Charan is a strong engineer for the R&R team. He punches above his weight class to address deep and complex issues like a senior engineer and works well under pressure.',
    name: 'Sean Coleman',
    context: 'Peer feedback',
    when: 'Feb 2026',
  },
  {
    text: 'He takes the time to deeply understand problems before jumping into implementation, which really shows in the quality of his work.',
    name: 'Harish Jangir',
    context: 'Peer feedback',
    when: 'Feb 2026',
  },
  {
    text: 'He not only debugged it from the Recognition service’s perspective but also drilled down the code in the account service and clearly pointed out what’s going wrong in the flow.',
    name: 'Ravi Kiran Kanneganti',
    context: 'Peer feedback',
    when: 'Feb 2026',
  },
  {
    text: 'You consistently came prepared with a solid initial investigation, which saved time for both of us and helped expedite faster resolution of bugs.',
    name: 'Gajendra Singh',
    context: 'Peer feedback',
    when: 'Feb 2026',
  },  {
    text: 'Your quality of work has been great always. You understand the problem deeply and then create your solutions, which shows critical thinking and makes sure all the edge cases are known beforehand.',
    name: 'Dheeraj Mahra',
    context: 'Peer feedback',
    when: 'Feb 2026',
  },
  {
    text: 'You take strong ownership of your tasks and see them through end-to-end. Your work on billing and invoicing was commendable — every detail was thoroughly thought through and executed perfectly.',
    name: 'Sagar Aggarwal',
    context: 'Peer feedback',
    when: 'Feb 2026',
  },
];

// Screenshots of recognition posts from Simpplr's recognition platform, shown as they are (newest first).
export type RecognitionCard = { src: string; width: number; height: number; alt: string };

export const recognitionCards: RecognitionCard[] = [
  { src: '/recognition/2026-08-hidden-gem-rajan.png', width: 680, height: 425, alt: 'Hidden Gem from Rajan Talwar, Aug 2026' },
  { src: '/recognition/2026-07-simpplr-spirit-sagar.png', width: 681, height: 554, alt: 'Simpplr Spirit from Sagar Aggarwal, Jul 2026' },
  { src: '/recognition/2026-04-simpplr-spirit-sagar.png', width: 653, height: 430, alt: 'Simpplr Spirit from Sagar Aggarwal, Apr 2026' },
  { src: '/recognition/2026-04-galactic-gratitude-arbind.png', width: 672, height: 560, alt: 'Galactic Gratitude from Arbind Kumar, Apr 2026' },
  { src: '/recognition/2026-04-galactic-gratitude-rajan.png', width: 676, height: 531, alt: 'Galactic Gratitude from Rajan Talwar, Apr 2026' },
  { src: '/recognition/2026-03-rocket-booster-sagar.png', width: 664, height: 567, alt: 'Rocket Booster from Sagar Aggarwal, Mar 2026' },
  { src: '/recognition/2026-01-rocket-booster-harish.png', width: 664, height: 567, alt: 'Rocket Booster from Harish Kumar Jangir, Jan 2026' },
  { src: '/recognition/2025-12-rising-star-pankaj.png', width: 654, height: 629, alt: 'Simpplr Rising Star from Pankaj Rajwani, Dec 2025' },
  { src: '/recognition/2025-12-galactic-gratitude-arbind.png', width: 654, height: 545, alt: 'Galactic Gratitude from Arbind Kumar, Dec 2025' },
  { src: '/recognition/2025-12-hidden-gem-rajan.png', width: 658, height: 493, alt: 'Hidden Gem from Rajan Talwar, Dec 2025' },
  { src: '/recognition/2025-09-galactic-gratitude-sagar.png', width: 673, height: 445, alt: 'Galactic Gratitude from Sagar Aggarwal, Sep 2025' },
  { src: '/recognition/2025-09-galactic-gratitude-dheeraj.png', width: 675, height: 431, alt: 'Galactic Gratitude from Dheeraj Mahra, Sep 2025' },
  { src: '/recognition/2025-07-galactic-gratitude-vishaar.png', width: 679, height: 659, alt: 'Galactic Gratitude from G N Vishaar, Jul 2025' },
  { src: '/recognition/2025-07-galactic-gratitude-arbind.png', width: 681, height: 436, alt: 'Galactic Gratitude from Arbind Kumar, Jul 2025' },
  { src: '/recognition/2025-06-hidden-gem-abhishek.png', width: 680, height: 405, alt: 'Hidden Gem from Abhishek, Jun 2025' },
  { src: '/recognition/2025-04-brilliant-beginner-award.png', width: 680, height: 405, alt: 'Brilliant Beginner R&D Award announced by Parag Kulkarni, Apr 2025' },
  { src: '/recognition/2025-03-galactic-gratitude-arbind.png', width: 679, height: 513, alt: 'Galactic Gratitude from Arbind Kumar, Mar 2025' },
  { src: '/recognition/2025-03-hidden-gem-pankaj.png', width: 684, height: 495, alt: 'Hidden Gem from Pankaj Rajwani, Mar 2025' },
];
