'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export function SiteHeader({ hasResume }: { hasResume: boolean }) {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      // Active = last section whose top has passed 40% of the viewport;
      // the final section wins once the page is scrolled to the bottom.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = '';
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      }
      setActive(atBottom ? NAV[NAV.length - 1].id : current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 border-b transition-colors duration-300',
        scrolled || open ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent'
      )}
    >
      <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6'>
        <a href='#top' className='font-serif text-2xl tracking-tight' onClick={() => setOpen(false)}>
          {site.name}
          <span className='text-accent'>.</span>
        </a>

        <nav className='hidden items-center gap-1 md:flex' aria-label='Sections'>
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm transition-colors',
                active === id ? 'text-fg' : 'text-muted hover:text-fg'
              )}
              aria-current={active === id ? 'true' : undefined}
            >
              {label}
              <span
                className={cn(
                  'mx-auto mt-0.5 block h-px bg-accent transition-all duration-300',
                  active === id ? 'w-full' : 'w-0'
                )}
              />
            </a>
          ))}
          {hasResume && (
            <a
              href={site.resume}
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 rounded-full border border-line px-4 py-1.5 text-sm transition-colors hover:border-fg'
            >
              Resume
            </a>
          )}
          <ThemeToggle />
        </nav>

        <div className='flex items-center gap-1 md:hidden'>
          <ThemeToggle />
          <button
            type='button'
            onClick={() => setOpen((v) => !v)}
            className='grid h-9 w-9 place-items-center rounded-full hover:bg-line/60'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {open && (
        <nav className='border-t border-line px-4 pb-6 pt-2 md:hidden' aria-label='Sections'>
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className='flex items-center justify-between border-b border-line py-3.5 font-serif text-2xl'
            >
              {label}
              {active === id && <span className='h-1.5 w-1.5 rounded-full bg-accent' />}
            </a>
          ))}
          {hasResume && (
            <a
              href={site.resume}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-5 block rounded-full bg-fg py-3 text-center text-sm font-medium text-bg'
            >
              Download resume
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
