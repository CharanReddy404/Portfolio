import React from 'react';
import Header from '@/components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
