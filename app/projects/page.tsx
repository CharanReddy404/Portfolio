'use client';
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from '@tabler/icons-react';

const ImageBox = ({ imgURL }: { imgURL: string }) => (
  <Image
    src={imgURL}
    height='1000'
    width='1000'
    className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
    alt='thumbnail'
  />
);

const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: ImageBox({
      imgURL:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: ImageBox({
      imgURL:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: ImageBox({
      imgURL:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: ImageBox({
      imgURL:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: ImageBox({
      imgURL:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: ImageBox({
      imgURL:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    icon: <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: ImageBox({
      imgURL:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />,
  },
];

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
        className='w-full flex justify-center gap-1 md:gap-6 overflow-x-scroll no-scrollbar '
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
      <BentoGrid className='max-w-4xl mx-auto'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Projects;
