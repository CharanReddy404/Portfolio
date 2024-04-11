import React from 'react';
import { Button } from '../ui/button';
import { ModeToggle } from '../ModeToggle';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';

const AdminHeader = () => {
  return (
    <div className='py-2 px-4 fixed w-full flex justify-between items-center bg-inherit'>
      <div className='flex gap-5'>
        <div className='flex lg:hidden'>
          <Sheet>
            <SheetTrigger>
              <IoMdMenu className='h-6 w-6' />
            </SheetTrigger>
            <SheetContent
              side={'left'}
              className='flex flex-col pt-14 gap-4 w-[180px] md:w-[300px]'
            >
              <SheetClose asChild>
                <Link className='' href='admin'>
                  Profile
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href='admin/experience'>Experience</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href='admin/projects'>Projects</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href='admin/certifications'>Certifications</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href='admin/blogs'>Blogs</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href='admin/resume'>Resume</Link>
              </SheetClose>
              <ModeToggle />
            </SheetContent>
          </Sheet>
        </div>
        <a href='/admin' className='font-bold text-lg'>
          Admin Dashboard
        </a>
      </div>

      <div className='flex gap-5'>
        <ModeToggle />
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default AdminHeader;
