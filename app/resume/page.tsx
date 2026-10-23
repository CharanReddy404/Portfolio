import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { resume } from '@/content/resume';

// Print-ready single-column resume. `pnpm resume` saves it to public/resume.pdf.
export const metadata: Metadata = {
  title: 'Resume',
  robots: { index: false },
};

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className='mt-5'>
      <h2 className='border-b border-[#d4d4d4] pb-1 text-[11px] font-semibold tracking-[0.02em] text-[#555]'>
        {title}
      </h2>
      <div className='mt-2.5'>{children}</div>
    </section>
  );
}

export default function Resume() {
  const r = resume;
  return (
    <main className='min-h-screen bg-stone-200 py-10 print:bg-white print:py-0'>
      <style>{'@page { size: A4; margin: 0; }'}</style>
      <article
        className={`${inter.className} mx-auto h-[297mm] w-[210mm] overflow-hidden bg-white px-[17mm] py-[14mm] text-[10.75px] leading-[1.5] text-[#1a1a1a] shadow-xl print:shadow-none`}
      >
        <header className='text-center'>
          <h1 className='text-[24px] font-semibold tracking-tight text-black'>{r.name}</h1>
          <p className='mt-1 text-[11px] text-[#555]'>{r.headline}</p>
          <p className='mt-0.5 text-[11px] text-[#555]'>{r.contact.join(' · ')}</p>
        </header>

        <Section title='Summary'>
          <p>{r.summary}</p>
        </Section>

        <Section title='Experience'>
          <div className='space-y-3'>
            {r.experience.map((job) => (
              <div key={job.company}>
                <div className='flex items-baseline justify-between gap-6'>
                  <p>
                    <span className='font-semibold'>{job.role}</span>, {job.company}
                  </p>
                  <p className='shrink-0 whitespace-nowrap text-[#555]'>
                    {job.when} · {job.place}
                  </p>
                </div>
                <ul className='mt-1 list-disc space-y-0.5 pl-[1.4em] marker:text-[#1a1a1a]'>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title='Skills'>
          <div className='space-y-0.5'>
            {r.skills.map((s) => (
              <p key={s.group}>
                <span className='font-semibold'>{s.group}:</span> {s.items.join(', ')}
              </p>
            ))}
          </div>
        </Section>

        <Section title='Certifications'>
          <ul>
            {r.certifications.map((c) => (
              <li key={c.name} className='flex items-baseline justify-between gap-6'>
                <span>
                  {c.name} <span className='text-[#555]'>· {c.issuer}</span>
                </span>
                <span className='shrink-0 whitespace-nowrap text-[#555]'>{c.date}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title='Education'>
          <div className='space-y-0.5'>
            {r.education.map((e) => (
              <div key={e.degree} className='flex items-baseline justify-between gap-6'>
                <p>{e.degree}</p>
                <p className='shrink-0 whitespace-nowrap text-[#555]'>{e.when}</p>
              </div>
            ))}
          </div>
        </Section>
      </article>
    </main>
  );
}
