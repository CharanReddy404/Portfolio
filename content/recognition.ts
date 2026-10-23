// Recognition & feedback, taken from Simpplr's recognition platform, Lattice feedback and FY2026 reviews.
// Only show people who have agreed to appear. Keep customer names and internal links out of this file.

export type Award = { title: string; detail: string; when: string };

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

// Screenshots of written feedback from teammates (Lattice), shown as they are (newest first).
export const feedbackCards: RecognitionCard[] = [
  { src: '/feedback/2026-02-dheeraj-mahra.png', width: 586, height: 1167, alt: 'Feedback from Dheeraj Mahra, Feb 2026' },
  { src: '/feedback/2026-02-sean-coleman.png', width: 584, height: 658, alt: 'Feedback from Sean Coleman, Feb 2026' },
  { src: '/feedback/2026-02-ravi-kiran-kanneganti.png', width: 579, height: 704, alt: 'Feedback from Ravi Kiran Kanneganti, Feb 2026' },
  { src: '/feedback/2026-02-gajendra-singh.png', width: 583, height: 755, alt: 'Feedback from Gajendra Singh, Feb 2026' },
  { src: '/feedback/2026-02-sagar-aggarwal.png', width: 582, height: 887, alt: 'Feedback from Sagar Aggarwal, Feb 2026' },
  { src: '/feedback/2026-02-aishma-gupta.png', width: 582, height: 861, alt: 'Feedback from Aishma Gupta, Feb 2026' },
  { src: '/feedback/2026-02-harish-jangir.png', width: 585, height: 774, alt: 'Feedback from Harish Jangir, Feb 2026' },
  { src: '/feedback/2026-02-aman-kumar-rai.png', width: 585, height: 860, alt: 'Feedback from Aman Kumar Rai, Feb 2026' },
  { src: '/feedback/2026-02-sonu-kumar.png', width: 585, height: 756, alt: 'Feedback from Sonu Kumar, Feb 2026' },
  { src: '/feedback/2025-08-anuj-kumar-gupta.png', width: 585, height: 614, alt: 'Feedback from Anuj Kumar Gupta, Aug 2025' },
  { src: '/feedback/2025-08-satyam-singh-bhadoria.png', width: 584, height: 851, alt: 'Feedback from Satyam Singh Bhadoria, Aug 2025' },
  { src: '/feedback/2025-sagar-aggarwal.png', width: 587, height: 869, alt: 'Feedback from Sagar Aggarwal, 2025' },
  { src: '/feedback/2025-08-sonu-kumar.png', width: 590, height: 765, alt: 'Feedback from Sonu Kumar, Aug 2025' },
  { src: '/feedback/2025-08-mark-lai.png', width: 592, height: 1166, alt: 'Feedback from Mark Lai, Aug 2025' },
  { src: '/feedback/2025-07-abhishek-saini.png', width: 592, height: 1034, alt: 'Feedback from Abhishek Saini, Jul 2025' },
];
