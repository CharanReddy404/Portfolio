'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Certification } from '@/content/certifications';
import { cn } from '@/lib/utils';
import { TiltCard } from './tilt-card';

export function CertificationsGallery({ items }: { items: Certification[] }) {
  // Badged certificates (e.g. Top Performer) lead the gallery; otherwise keep content order.
  const withImage = items.filter((c) => c.image).sort((a, b) => Number(!!b.badge) - Number(!!a.badge));
  const withoutImage = items.filter((c) => !c.image);

  const issuers = useMemo(() => ['All', ...Array.from(new Set(withImage.map((c) => c.issuer!)))], [withImage]);
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? withImage : withImage.filter((c) => c.issuer === filter);

  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = open === null ? null : visible[open];

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, step]);

  return (
    <>
      <div className='-mx-1 mb-6 flex gap-1.5 overflow-x-auto px-1 pb-1' role='tablist' aria-label='Filter by issuer'>
        {issuers.map((issuer) => {
          const count = issuer === 'All' ? withImage.length : withImage.filter((c) => c.issuer === issuer).length;
          return (
            <button
              key={issuer}
              type='button'
              role='tab'
              aria-selected={filter === issuer}
              onClick={() => setFilter(issuer)}
              className={cn(
                'shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                filter === issuer ? 'border-fg bg-fg text-bg' : 'border-line text-muted hover:border-fg hover:text-fg'
              )}
            >
              {issuer} <span className='ml-0.5 font-mono text-[11px] opacity-60'>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {visible.map((c, i) => (
          <li key={c.name}>
            <TiltCard
              onClick={() => setOpen(i)}
              className='flex flex-col overflow-hidden rounded-xl border border-line bg-surface text-left hover:border-muted/50'
              aria-label={`View certificate: ${c.name}`}
            >
              <div className='relative aspect-[1.414] w-full overflow-hidden border-b border-line bg-white'>
                <Image
                  src={c.image!}
                  alt=''
                  fill
                  sizes='(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw'
                  className='object-contain p-1.5'
                />
              </div>
              <div className='flex flex-1 flex-col gap-2 p-4'>
                <p className='text-sm font-medium leading-snug'>{c.name}</p>
                <div className='mt-auto flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5'>
                  <p className='font-mono text-[11px] text-muted'>{[c.issuer, c.date].filter(Boolean).join(' · ')}</p>
                  {c.badge && (
                    <span className='whitespace-nowrap rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent'>
                      {c.badge}
                    </span>
                  )}
                </div>
              </div>
            </TiltCard>
          </li>
        ))}
      </ul>

      {withoutImage.length > 0 && (
        <ul className='mt-6 divide-y divide-line border-y border-line'>
          {withoutImage.map((c) => (
            <li key={c.name} className='flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4'>
              <span className='font-medium'>{c.name}</span>
              <span className='shrink-0 whitespace-nowrap font-mono text-xs text-muted'>
                {[c.issuer, c.date].filter(Boolean).join(' · ')}
              </span>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        className='m-auto w-[min(960px,calc(100vw-2rem))] max-w-none rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm'
        aria-label={current?.name}
      >
        {current && (
          <div>
            <div className='flex items-start justify-between gap-4 border-b border-line p-4 sm:p-5'>
              <div className='min-w-0'>
                <p className='font-serif text-2xl leading-tight tracking-tight'>{current.name}</p>
                <p className='mt-1 font-mono text-xs text-muted'>
                  {[current.issuer, current.date].filter(Boolean).join(' · ')}
                  {current.badge && <span className='ml-2 text-accent'>{current.badge}</span>}
                </p>
              </div>
              <button
                type='button'
                onClick={() => setOpen(null)}
                className='grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-line/60'
                aria-label='Close'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            <div className='relative bg-white'>
              <Image
                key={current.image}
                src={current.image!}
                alt={`${current.name} certificate`}
                width={1400}
                height={1000}
                sizes='960px'
                className='max-h-[70vh] w-full object-contain'
                priority
              />
              {visible.length > 1 && (
                <>
                  <button
                    type='button'
                    onClick={() => step(-1)}
                    className='absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70'
                    aria-label='Previous certificate'
                  >
                    <ChevronLeft className='h-5 w-5' />
                  </button>
                  <button
                    type='button'
                    onClick={() => step(1)}
                    className='absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70'
                    aria-label='Next certificate'
                  >
                    <ChevronRight className='h-5 w-5' />
                  </button>
                </>
              )}
            </div>

            <div className='flex items-center justify-between gap-4 border-t border-line p-4 sm:px-5'>
              <p className='font-mono text-xs text-muted'>
                {open! + 1} / {visible.length}
              </p>
              {current.url && (
                <a
                  href={current.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85'
                >
                  Verify credential
                  <ArrowUpRight className='h-4 w-4' />
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
