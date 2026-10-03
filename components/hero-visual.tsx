'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

// Three.js loads only in the browser, after the hero text has rendered.
const HeroScene = dynamic(() => import('./hero-scene'), { ssr: false });

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const { resolvedTheme } = useTheme();
  const [ready, setReady] = useState(false);
  const [layout, setLayout] = useState<'wide' | 'compact'>('wide');
  const [beside, setBeside] = useState(false); // desktop: model sits beside and behind the hero text

  useEffect(() => setReady(supportsWebGL()), []);
  useEffect(() => {
    const phone = window.matchMedia('(max-width: 767px)');
    const desktop = window.matchMedia('(min-width: 1024px)');
    const update = () => {
      setLayout(phone.matches ? 'compact' : 'wide');
      setBeside(desktop.matches);
    };
    update();
    phone.addEventListener('change', update);
    desktop.addEventListener('change', update);
    return () => {
      phone.removeEventListener('change', update);
      desktop.removeEventListener('change', update);
    };
  }, []);

  if (!ready || !resolvedTheme) return null;
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
  return (
    <div
      className={cn(
        'h-full w-full animate-[rise_1.2s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]',
        beside
          ? '[mask-image:linear-gradient(to_right,transparent_6%,black_38%,black_97%,transparent)]'
          : '[mask-image:radial-gradient(ellipse_70%_75%_at_center,black_70%,transparent_100%)]',
      )}
    >
      <HeroScene
        key={`${theme}-${layout}-${beside}`}
        theme={theme}
        layout={layout}
        align={beside ? 'right' : 'center'}
      />
    </div>
  );
}
