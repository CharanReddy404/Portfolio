import { Award as AwardIcon, Quote as QuoteIcon } from 'lucide-react';
import { awards, quotes, recognitionCards, stats, type Quote } from '@/content/recognition';
import { RecognitionWall } from './recognition-wall';
import { cn } from '@/lib/utils';

function Attribution({ q, className }: { q: Quote; className?: string }) {
  return (
    <div className={cn('text-sm', className)}>
      <p className='font-medium'>
        {q.name}
        <span className='font-normal text-muted'> · {q.role ?? 'Simpplr'}</span>
      </p>
      <p className='mt-0.5 font-mono text-[11px] text-muted'>
        {q.context} · {q.when}
      </p>
    </div>
  );
}

export function Recognition() {
  const featured = quotes.find((q) => q.featured);
  const rest = quotes.filter((q) => !q.featured);

  return (
    <div className='space-y-14'>
      {featured && (
        <figure className='relative'>
          <QuoteIcon className='h-8 w-8 text-accent' aria-hidden='true' />
          <blockquote className='mt-4 font-serif text-3xl leading-snug tracking-tight md:text-[2.5rem] md:leading-[1.15]'>
            {featured.text}
          </blockquote>
          <figcaption className='mt-6'>
            <Attribution q={featured} />
          </figcaption>
        </figure>
      )}

      <ul className='grid gap-3 sm:grid-cols-3'>
        {awards.map((a, i) => (
          <li
            key={a.title}
            className={cn(
              'flex flex-col rounded-xl border bg-surface p-5',
              i === 0 ? 'border-accent/60' : 'border-line',
            )}
          >
            <AwardIcon className={cn('h-5 w-5', i === 0 ? 'text-accent' : 'text-muted')} aria-hidden='true' />
            <p className='mt-4 font-serif text-2xl leading-tight tracking-tight'>{a.title}</p>
            <p className='mt-2 flex-1 text-sm leading-relaxed text-muted'>{a.detail}</p>
            <p className='mt-4 font-mono text-[11px] text-muted'>{a.when}</p>
          </li>
        ))}
      </ul>

      <dl className='grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 md:grid-cols-4'>
        {stats.map((s) => (
          <div key={s.value}>
            <dt className='sr-only'>{s.label}</dt>
            <dd className='font-serif text-4xl tracking-tight text-accent'>{s.value}</dd>
            <dd className='mt-2 text-sm leading-snug text-muted'>{s.label}</dd>
          </div>
        ))}
      </dl>

      <div>
        <p className='font-mono text-xs uppercase tracking-wider text-muted'>
          Recognition posts · {recognitionCards.length}
        </p>
        <div className='mt-5'>
          <RecognitionWall cards={recognitionCards} />
        </div>
      </div>

      <div>
        <p className='font-mono text-xs uppercase tracking-wider text-muted'>Feedback from teammates</p>
        <ul className='mt-5 gap-4 sm:columns-2'>
          {rest.map((q) => (
            <li key={q.name + q.when} className='mb-4 break-inside-avoid rounded-xl border border-line bg-surface p-5'>
              <blockquote className='text-[15px] leading-relaxed'>“{q.text}”</blockquote>
              <Attribution q={q} className='mt-4' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
