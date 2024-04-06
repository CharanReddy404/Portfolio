import React from 'react';
import Link from 'next/link';

import { ModeToggle } from './ModeToggle';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IoMdMenu } from 'react-icons/io';

const Header = () => {
  return (
    <div className='p-4 sticky top-0 z-10 max-w-5xl w-full font-mono flex justify-between items-center bg-inherit'>
      <a href='/' className='font-bold text-lg'>
        CharanReddy404
      </a>
      <div className='hidden gap-6 items-center font-medium lg:flex'>
        <Link href='/experience'>Experience</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/'>Certifications</Link>
        <Link href='/'>Blogs</Link>
        <Link href='/' target='_blank'>
          Resume
        </Link>
        <ModeToggle />
      </div>
      <div className='flex lg:hidden'>
        <Sheet>
          <SheetTrigger>
            <IoMdMenu className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent className='flex flex-col gap-4 w-[180px] md:w-[300px]'>
            <SheetClose asChild>
              <Link href='/experience'>Experience</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href='/projects'>Projects</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href='/'>Certifications</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href='/'>Blogs</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href='/' target='_blank'>
                Resume
              </Link>
            </SheetClose>
            <ModeToggle />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
