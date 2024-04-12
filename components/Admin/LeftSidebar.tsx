import Link from 'next/link';
import React from 'react';
import { Separator } from '../ui/separator';

const LeftSidebar = () => {
  return (
    <div className='p-5 w-64 flex flex-col gap-3 shadow-lg h-full'>
      <Link href='/admin'>Profile</Link>
      <Separator />
      <Link href='/admin/experience'>Experience</Link>
      <Separator />
      <Link href='/admin/projects'>Projects</Link>
      <Separator />
      <Link href='/admin/certifications'>Certifications</Link>
      <Separator />
      <Link href='/admin/blogs'>Blogs</Link>
    </div>
  );
};

export default LeftSidebar;
