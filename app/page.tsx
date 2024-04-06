import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaLinkedin,
  FaSquareGithub,
  FaSquareXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

export default function Home() {
  return (
    <div className='max-w-5xl w-full p-4 md:p-14 flex flex-col gap-12 '>
      <h1 className='text-lg md:text-4xl uppercase tracking-widest'>
        I&apos;m Charan B
      </h1>
      <p className='text-sm md:text-lg md:leading-10 tracking-wide'>
        Hello! I&apos;m a Full Stack Developer passionate about turning ideas
        into reality. Skilled in ReactJs, NodeJs, NextJs, JavaScript,
        TypeScript, Tailwind CSS, and Core Java. I expanded my skill set by
        learning about microservices, deployment methodologies, PostgreSQL, and
        the fundamentals of Docker, Kubernetes, Helm, and Jenkins, among others.
        Certified in JavaScript, Node.js, and Full Stack Web Development. Always
        eager to grow and contribute.
      </p>
      <div className='flex gap-4'>
        <Link href='https://github.com/CharanReddy404' target='_blank'>
          <Button className='h-12 gap-1'>
            <FaSquareGithub className='h-full w-full' />
            <p className='hidden md:inline text-2xl'>GitHub</p>
          </Button>
        </Link>
        <Link href='https://www.linkedin.com/in/charanreddy404' target='_blank'>
          <Button className='h-12 gap-1'>
            <FaLinkedin className='h-full w-full' />
            <p className='hidden md:inline text-2xl'>LinkedIn</p>
          </Button>
        </Link>
        <Link href='https://www.linkedin.com/in/charanreddy404' target='_blank'>
          <Button className='h-12 gap-1'>
            <FaSquareXTwitter className='h-full w-full' />
            <p className='hidden md:inline text-2xl'>Twitter</p>
          </Button>
        </Link>
        <Link href='https://www.youtube.com/@charanreddy404' target='_blank'>
          <Button className='h-12 gap-1'>
            <FaYoutube className='h-full w-full' />
            <p className='hidden md:inline text-2xl'>Youtube</p>
          </Button>
        </Link>
        <Link href='mailto:charanlucky6143@gmail.com' target='_blank'>
          <Button className='h-12 gap-1'>
            <IoMail className='h-full w-full' />
            <p className='hidden md:inline text-2xl'>Gmail</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
