import { Award as AwardIcon, Quote as QuoteIcon } from 'lucide-react';
import { awards, feedbackCards, quotes, recognitionCards, type Quote } from '@/content/recognition';
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

      <div>
        <p className='font-mono text-xs uppercase tracking-wider text-muted'>
          Recognition posts · {recognitionCards.length}
        </p>
        <div className='mt-5'>
          <RecognitionWall cards={recognitionCards} />
        </div>
      </div>

      <div>
        <p className='font-mono text-xs uppercase tracking-wider text-muted'>
          Feedback from teammates · {feedbackCards.length}
        </p>
        <div className='mt-5'>
          <RecognitionWall cards={feedbackCards} label='feedback' />
        </div>
      </div>
    </div>
  );
}
