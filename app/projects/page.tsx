'use client';
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';

const Projects = () => {
  const [value, setValue] = useState('All');

  return (
    <div className='max-w-5xl w-full p-4 md:p-14 flex flex-col gap-12'>
      <h1 className='text-lg md:text-4xl uppercase tracking-widest'>
        Projects
      </h1>
      <ToggleGroup
        variant='outline'
        type='single'
        value={value}
        onValueChange={(val) => {
          setValue(val);
        }}
        className='w-full flex justify-center gap-1 md:gap-6 overflow-x-scroll'
      >
        <ToggleGroupItem
          className='border-black dark:border-gray-400'
          value='All'
        >
          All
        </ToggleGroupItem>
        <ToggleGroupItem
          className='border-black dark:border-gray-400'
          value='Beginner'
        >
          Beginner
        </ToggleGroupItem>
        <ToggleGroupItem
          className='border-black dark:border-gray-400'
          value='Intermediate'
        >
          Intermediate
        </ToggleGroupItem>
        <ToggleGroupItem
          className='border-black dark:border-gray-400'
          value='Advance'
        >
          Advance
        </ToggleGroupItem>
      </ToggleGroup>
      <div className='w-full flex flex-wrap justify-around'>
        <CardContainer className='inter-var '>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-96 h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Make things float in air
            </CardItem>
            <CardItem translateZ='100' className='relative w-full mt-4'>
              <Image
                src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
              <CardItem
                translateZ={20}
                as='button'
                className='absolute bottom-4 right-20 px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Live
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='absolute bottom-4 right-4 px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                CODE
              </CardItem>
            </CardItem>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                React
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Javascript
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                NodeJs
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Typescript
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-96 h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Make things float in air
            </CardItem>
            <CardItem translateZ='100' className='w-full mt-4'>
              <Image
                src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                React
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Javascript
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                NodeJs
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Typescript
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-96 h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Make things float in air
            </CardItem>
            <CardItem translateZ='100' className='w-full mt-4'>
              <Image
                src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                React
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Javascript
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                NodeJs
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Typescript
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-96 h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Make things float in air
            </CardItem>
            <CardItem translateZ='100' className='w-full mt-4'>
              <Image
                src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                React
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Javascript
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                NodeJs
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Typescript
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Projects;
