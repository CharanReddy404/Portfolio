'use client';

import { useRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const MAX_TILT = 10; // degrees

// A button that tilts toward the cursor in 3D, with a soft glare that follows the pointer.
// Mouse only; touch devices and reduced-motion users get a flat card.
export function TiltCard({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${((0.5 - y) * MAX_TILT * 2).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${((x - 0.5) * MAX_TILT * 2).toFixed(2)}deg`);
    el.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`);
    el.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`);
    el.dataset.tilting = 'true';
  }

  function onPointerLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    delete el.dataset.tilting;
  }

  return (
    <div className='h-full [perspective:900px]'>
      <button
        ref={ref}
        type='button'
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className={cn(
          'group relative h-full w-full [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] transition-[transform,box-shadow,border-color] duration-200 ease-out will-change-transform data-[tilting=true]:duration-75 data-[tilting=true]:shadow-[0_24px_50px_-20px_rgb(0_0_0/0.35)]',
          className,
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [background:radial-gradient(circle_at_var(--gx,50%)_var(--gy,50%),rgb(255_255_255/0.45),transparent_55%)] group-data-[tilting=true]:opacity-100 dark:[background:radial-gradient(circle_at_var(--gx,50%)_var(--gy,50%),rgb(255_255_255/0.14),transparent_55%)]'
        />
      </button>
    </div>
  );
}
