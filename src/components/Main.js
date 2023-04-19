import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillYoutube,
} from 'react-icons/ai';

const Main = () => {
  return (
    <div>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>Charan B</h2>
        <h3 className='text-2xl py-2'>Software Developer</h3>
        <p className='text-lg py-5 leading-8 text-gray-800'>
          As a software developer with a passion for creating innovative
          solutions to complex problems, I am excited to showcase my skills and
          experience in designing and developing software applications.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-5 md:gap-16 py-3 text-gray-600'>
        <a
          href='https://www.linkedin.com/in/charanreddy404/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin />
        </a>
        <a
          href='https://github.com/CharanReddy404'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillGithub />
        </a>
        <a
          href='https://www.youtube.com/@charanreddy404'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillYoutube />
        </a>
        <a
          href='https://twitter.com/CharanReddy404'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href='mailto: charanlucky6143@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillMail />
        </a>
      </div>
      <div className=''></div>
    </div>
  );
};

export default Main;
