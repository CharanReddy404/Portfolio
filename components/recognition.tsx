import { Award as AwardIcon } from 'lucide-react';
import { awards, feedbackCards, recognitionCards } from '@/content/recognition';
import { RecognitionWall } from './recognition-wall';
import { cn } from '@/lib/utils';

export function Recognition() {
  return (
    <div className='space-y-14'>
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
