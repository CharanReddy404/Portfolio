import React from 'react';
import AdminHeader from '@/components/Admin/AdminHeader';
import LeftSidebar from '@/components/Admin/LeftSidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='relative bg-inherit'>
      <AdminHeader />

      <div className='flex pt-14 h-[100vh]'>
        <div className='hidden lg:block'>
          <LeftSidebar />
        </div>
        <div className='mx-auto w-full max-w-5xl'>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
