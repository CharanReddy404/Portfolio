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
import { Separator } from './ui/separator';

const Header = () => {
  return (
    <div className='p-4 sticky top-0 z-10 max-w-5xl w-full font-mono flex justify-between items-center bg-inherit'>
      <a href='/' className='font-bold text-lg'>
        CharanReddy404
      </a>
      <div className='hidden gap-6 items-center font-medium lg:flex'>
        <Link href='/experience'>Experience</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/certifications'>Certifications</Link>
        <Link href='/blogs'>Blogs</Link>
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
            <Separator />
            <SheetClose asChild>
              <Link href='/projects'>Projects</Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link href='/certifications'>Certifications</Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link href='/blogs'>Blogs</Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link href='/' target='_blank'>
                Resume
              </Link>
            </SheetClose>
            <Separator />
            <ModeToggle />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
