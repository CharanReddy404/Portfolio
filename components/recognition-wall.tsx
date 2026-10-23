'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { RecognitionCard } from '@/content/recognition';

const PREVIEW = 6;

// The original recognition posts as screenshots, in a masonry grid with a lightbox.
export function RecognitionWall({ cards }: { cards: RecognitionCard[] }) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const shown = expanded ? cards : cards.slice(0, PREVIEW);
  const current = open === null ? null : cards[open];

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + cards.length) % cards.length)),
    [cards.length],
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
    <div>
      <ul className='gap-4 sm:columns-2'>
        {shown.map((card, i) => (
          <li key={card.src} className='mb-4 break-inside-avoid'>
            <button
              type='button'
              onClick={() => setOpen(i)}
              className='block w-full overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-muted/50 hover:shadow-[0_12px_40px_-16px_rgb(0_0_0/0.25)]'
              aria-label={`View recognition: ${card.alt}`}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={card.width}
                height={card.height}
                sizes='(min-width: 640px) 380px, 90vw'
                className='h-auto w-full'
              />
            </button>
          </li>
        ))}
      </ul>

      {cards.length > PREVIEW && (
        <button
          type='button'
          onClick={() => setExpanded((v) => !v)}
          className='mt-2 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-fg'
          aria-expanded={expanded}
        >
          {expanded ? 'Show fewer' : `Show all ${cards.length}`}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        className='m-auto w-[min(760px,calc(100vw-2rem))] max-w-none rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm'
        aria-label={current?.alt}
      >
        {current && (
          <div>
            <div className='flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5'>
              <p className='min-w-0 truncate text-sm font-medium'>{current.alt}</p>
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
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes='760px'
                className='mx-auto max-h-[75vh] w-auto'
              />
              <button
                type='button'
                onClick={() => step(-1)}
                className='absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70'
                aria-label='Previous recognition'
              >
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button
                type='button'
                onClick={() => step(1)}
                className='absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70'
                aria-label='Next recognition'
              >
                <ChevronRight className='h-5 w-5' />
              </button>
            </div>
            <p className='border-t border-line px-5 py-3 font-mono text-xs text-muted'>
              {open! + 1} / {cards.length}
            </p>
          </div>
        )}
      </dialog>
    </div>
  );
}
