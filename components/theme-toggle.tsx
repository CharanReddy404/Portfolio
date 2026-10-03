'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='relative grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-fg'
      aria-label='Toggle theme'
    >
      <Sun className='h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100' />
    </button>
  );
}
