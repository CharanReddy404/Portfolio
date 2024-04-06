import React from 'react';

const ExperienceList = [
  {
    companyName: 'Simpplr',
    position: 'Associate Software Engineer',
    location: 'Remote',
    Joined: 'May 2023',
    left: 'Present',
    items: [
      'I developed an automated Node.js application for streamlining Salesforce tasks.',
      'I expanded my skill set by learning about microservices, set by learning about microservices, deployment, methodologies, TypeScript, PostgreSQL, and the fundamentals of Docker, Kubernetes, Helm, and Jenkins, among others.',
      'I have managed and actively contributed to Salesforce Jiratickets',
    ],
  },
  {
    companyName: 'EMOMENT.IN',
    position: 'Full Stack Developer',
    location: 'Remote',
    Joined: 'Oct 2022',
    left: 'Feb 2023',
    items: [
      'Despite facing challenges without senior guidance, I successfully navigated the complexities, acquiring proficiency in new technologies such as Node.js and SQL',
      'My responsibilities included working on a project facilitating stock purchases using Solana cryptocurrency.',
      'I actively participated in both backend (Node.js) and frontend (React.js) development, resolving bugs, and implementing new features across various projects.',
    ],
  },
  {
    companyName: 'CODING NINJAS',
    position: 'Teaching Assistant At Coding Ninjas',
    location: 'Remote',
    Joined: 'May 2022',
    left: 'Sep 2022',
    items: [
      'I undertook an internship at Coding Ninjas as a Teaching Assistant for Java DSA from May 2022 to September 2022 spanning 5 months.',
      'During this period, I mentored 969 students, addressed 1.5k queries, improved their coding skills and achieved a rating of 4.77',
    ],
  },
  {
    companyName: 'SANMOON SOFTWARE SOLUTIONS',
    position: 'Software Engineering Trainee',
    location: 'Bangalore, IN',
    Joined: 'May 2022',
    left: 'Sep 2022',
    items: [
      'I gained foundational knowledge in web development.',
      'I created static websites for clients, and working on new project.',
    ],
  },
];

const Experience = () => {
  return (
    <div className='max-w-5xl w-full p-4 md:p-14 flex flex-col gap-12 '>
      <h1 className='text-lg md:text-4xl uppercase tracking-widest'>
        Experience
      </h1>
      <ul className='border-l-2 border-black dark:border-white pl-6'>
        {ExperienceList.map((item, index) => (
          <li
            key={index}
            className='border-b-2 border-black dark:border-white py-6'
          >
            <h1 className='text-2xl font-mono font-bold uppercase pb-1'>
              {item.companyName} |{' '}
              <span className='text-lg'>{item.position}</span>
            </h1>
            <p className='pl-2 font-medium'>{`${item.Joined} - ${item.left} | ${item.location}`}</p>
            <ul className='pl-6 list-disc'>
              {item.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
