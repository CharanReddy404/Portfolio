import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { resume } from '@/content/resume';

// Print-ready resume in the style of "Jake's Resume" (LaTeX). `pnpm resume` saves it to public/resume.pdf.
export const metadata: Metadata = {
  title: 'Resume',
  robots: { index: false },
};

// Computer Modern (CMU Serif, OFL) — the typeface of the original LaTeX template.
const cmu = localFont({
  src: [
    { path: './fonts/cmu-serif-500-roman.woff2', weight: '400', style: 'normal' },
    { path: './fonts/cmu-serif-500-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/cmu-serif-700-roman.woff2', weight: '700', style: 'normal' },
    { path: './fonts/cmu-serif-700-italic.woff2', weight: '700', style: 'italic' },
  ],
  fallback: ['Georgia', 'serif'],
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className='mb-[4pt] mt-[9pt] border-b-[0.6pt] border-black pb-[1pt] text-[12.5pt] [font-variant:small-caps]'>
        {title}
      </h2>
      {children}
    </section>
  );
}

// Two-line entry: bold title with right-aligned detail, then italic subtitle with italic detail.
function Entry({
  title,
  right,
  subtitle,
  subRight,
}: {
  title: string;
  right: string;
  subtitle: string;
  subRight: string;
}) {
  return (
    <div className='mb-[3pt] ml-[6pt]'>
      <div className='flex justify-between gap-[12pt]'>
        <strong>{title}</strong>
        <span className='shrink-0 whitespace-nowrap'>{right}</span>
      </div>
      <div className='flex justify-between gap-[12pt] text-[9.6pt] italic'>
        <span>{subtitle}</span>
        <span className='shrink-0 whitespace-nowrap'>{subRight}</span>
      </div>
    </div>
  );
}

export default function Resume() {
  const r = resume;
  return (
    <main className='min-h-screen bg-stone-200 py-10 print:bg-white print:py-0'>
      <style>{'@page { size: A4; margin: 0; }'}</style>
      <article
        className={`${cmu.className} mx-auto h-[297mm] w-[210mm] overflow-hidden bg-white px-[14mm] py-[12mm] text-[10.6pt] leading-[1.22] text-black shadow-xl print:shadow-none`}
      >
        <header className='mb-[6pt] text-center'>
          <h1 className='text-[25pt] font-bold leading-none tracking-[0.5pt] [font-variant:small-caps]'>{r.name}</h1>
          <p className='mt-[5pt] text-[9.6pt]'>
            {r.contact.map((c, i) => (
              <span key={c}>
                {i > 0 && <span className='mx-[5pt]'>|</span>}
                <span className={c.startsWith('+') ? '' : 'underline'}>{c}</span>
              </span>
            ))}
          </p>
        </header>

        <Section title='Experience'>
          {r.experience.map((job) => (
            <div key={job.company}>
              <Entry title={job.role} right={job.when} subtitle={job.company} subRight={job.place} />
              <ul className='mb-[5pt] ml-[22pt] mt-[2pt] list-disc text-[9.6pt] marker:text-[7pt]'>
                {job.points.map((pt) => (
                  <li key={pt} className='mb-[1.2pt] pl-[2pt]'>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title='Education'>
          {r.education.map((e) => (
            <Entry key={e.school} title={e.school} right={e.place} subtitle={e.degree} subRight={e.when} />
          ))}
        </Section>

        <Section title='Technical Skills'>
          <div className='ml-[6pt] text-[9.6pt] leading-[1.35]'>
            {r.skills.map((s) => (
              <p key={s.group}>
                <strong>{s.group}</strong>: {s.items.join(', ')}
              </p>
            ))}
          </div>
        </Section>

        <Section title='Certifications'>
          <ul className='ml-[6pt] text-[9.6pt] leading-[1.32]'>
            {r.certifications.map((c) => (
              <li key={c.name} className='flex justify-between gap-[12pt]'>
                <span>
                  <strong>{c.name}</strong> | <em>{c.issuer}</em>
                </span>
                <span className='shrink-0 whitespace-nowrap'>{c.date}</span>
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </main>
  );
}
