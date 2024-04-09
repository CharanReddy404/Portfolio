import React from 'react';
import { Button } from '../ui/button';

const AdminHeader = () => {
  return (
    <div className='flex justify-between fixed z-50 w-full gap-5 p-6 sm:px-12'>
      <a href='/admin' className='font-bold text-lg'>
        Admin Dashboard
      </a>
      <Button>Logout</Button>
    </div>
  );
};

export default AdminHeader;
