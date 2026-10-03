import type { Metadata } from 'next';
import { Lato, Raleway } from 'next/font/google';
import { resume } from '@/content/resume';

// Print-ready resume in the layout of the original 2023 resume.
// `pnpm resume` saves it to public/resume.pdf.
export const metadata: Metadata = {
  title: 'Resume',
  robots: { index: false },
};

const display = Raleway({ subsets: ['latin'], weight: ['200', '300', '600'] });
const body = Lato({ subsets: ['latin'], weight: ['300', '400', '700'] });

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className={`${display.className} mb-1.5 text-[19px] font-[300] uppercase text-[#555]`}>{children}</h2>;
}

export default function Resume() {
  const r = resume;
  return (
    <main className='min-h-screen bg-stone-200 py-10 print:bg-white print:py-0'>
      <style>{'@page { size: A4; margin: 0; }'}</style>
      <article
        className={`${body.className} relative mx-auto h-[297mm] w-[210mm] overflow-hidden bg-white px-[13mm] pb-[10mm] pt-[9mm] text-[10.2px] leading-[1.38] text-[#333] shadow-xl print:shadow-none`}
      >
        <p className={`${display.className} absolute right-[13mm] top-[7mm] text-[8px] font-[300] text-[#999]`}>
          Last Updated on {r.updated}
        </p>

        <header className='text-center'>
          <h1 className={`${display.className} text-[44px] font-[200] leading-none text-[#777]`}>
            {r.name.first} <span className='text-[#222]'>{r.name.last}</span>
          </h1>
          <p className={`${display.className} mt-1.5 text-[13px] font-[300] text-[#555]`}>{r.title}</p>
          <p className={`${display.className} text-[12px] font-[300] text-[#555]`}>
            {r.email} | {r.phone}
          </p>
        </header>
        <hr className='-mx-[13mm] mt-2 border-[#999]' />

        <div className='mt-3 grid grid-cols-[30%_1fr] gap-[6mm]'>
          {/* Left column */}
          <div className='space-y-3.5'>
            <section>
              <Heading>Links</Heading>
              {r.links.map((l) => (
                <p key={l.label} className='text-[10.5px] font-[300]'>
                  {l.label}://{' '}
                  <a href={l.url} className='font-[700] text-[#222]'>
                    {l.handle}
                  </a>
                </p>
              ))}
            </section>

            <section>
              <Heading>Skills</Heading>
              {r.skills.map((row) => (
                <p key={row.join()} className='text-[10.5px] font-[400] text-[#222]'>
                  {row.join(' • ')}
                </p>
              ))}
            </section>

            <section>
              <Heading>Education</Heading>
              <div className='space-y-2.5'>
                {r.education.map((e) => (
                  <div key={e.degree}>
                    <p className='text-[11px] font-[700] uppercase leading-tight text-[#222]'>{e.degree}</p>
                    {e.field && <p className='text-[10.5px] [font-variant:small-caps]'>{e.field}</p>}
                    {e.lines.map((line) => (
                      <p key={line} className='text-[10.5px]'>
                        {line}
                      </p>
                    ))}
                    <p className='text-[10.5px]'>
                      {e.when} | {e.place}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <Heading>Projects</Heading>
              <div className='space-y-2.5'>
                {r.projects.map((p) => (
                  <div key={p.name}>
                    <p className='text-[11px] font-[700] uppercase text-[#222]'>{p.name}</p>
                    <p className='font-[300]'>{p.text}</p>
                    <p className='font-[300]'>
                      Hosted:{' '}
                      <a href={p.url} className='font-[700] text-[#222]'>
                        {p.url.replace(/^https:\/\//, '').replace(/\/$/, '')}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className='space-y-3.5'>
            <section>
              <Heading>Experience</Heading>
              <div className='space-y-2.5'>
                {r.experience.map((job) => (
                  <div key={job.company}>
                    <p className='text-[11.5px] text-[#222]'>
                      <span className='font-[700] uppercase'>{job.company}</span>
                      <span className='font-[300]'> | </span>
                      <span className='[font-variant:small-caps]'>{job.role}</span>
                    </p>
                    <p className='font-[300]'>
                      {job.when} | {job.place}
                    </p>
                    <ul className='mt-0.5 list-disc space-y-0.5 pl-5 font-[300]'>
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <Heading>Certifications</Heading>
              <table className='font-[300]'>
                <tbody>
                  {r.certifications.map(([year, issuer, name]) => (
                    <tr key={name}>
                      <td className='w-[11mm] pl-2 align-top'>{year}</td>
                      <td className='w-[24mm] align-top'>{issuer}</td>
                      <td className='align-top'>{name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section>
              <Heading>Achievements</Heading>
              {r.achievements.map((a) => (
                <div key={a.title}>
                  <p className='text-[11px] font-[700] uppercase text-[#222]'>{a.title}</p>
                  <p className='text-[10.5px] [font-variant:small-caps]'>{a.text}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
