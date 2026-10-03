import { ArrowRight, ArrowUpRight, Download, Phone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { education, educationDates, site, skills } from '@/content/site';
import { experience } from '@/content/experience';
import { projects, showProjects } from '@/content/projects';
import { certifications } from '@/content/certifications';
import { hasResume } from '@/lib/resume';
import { SiteHeader } from '@/components/site-header';
import { Section } from '@/components/section';
import { SocialLinks } from '@/components/social-links';
import { CopyEmail } from '@/components/copy-email';
import { CertificationsGallery } from '@/components/certifications-gallery';
import { HeroVisual } from '@/components/hero-visual';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  worksFor: { '@type': 'Organization', name: site.company },
  sameAs: Object.values(site.socials).filter(Boolean),
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <SiteHeader hasResume={hasResume} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main id='top' className='mx-auto max-w-5xl px-4 sm:px-6'>
        {/* Hero */}
        <section className='relative pb-12 pt-12 md:pb-16 md:pt-20 lg:flex lg:min-h-[640px] lg:items-center lg:py-12'>
          {/* On desktop the text floats over the 3D scene; only its links take the pointer, so the scene stays hoverable. */}
          <div data-hero-text className='relative z-10 lg:pointer-events-none lg:max-w-[44%] [&_a]:pointer-events-auto'>
            <p className='flex animate-rise items-center gap-2 font-mono text-xs text-muted'>
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60' />
                <span className='relative inline-flex h-2 w-2 rounded-full bg-accent' />
              </span>
              {site.role} at {site.company} · {site.location}
            </p>
            <h1
              className='mt-6 animate-rise font-serif text-[clamp(3.25rem,10vw,6.5rem)] leading-[0.92] tracking-tight lg:text-[clamp(3.5rem,5.6vw,5.5rem)] [text-wrap:balance]'
              style={{ animationDelay: '80ms' }}
            >
              {site.name}
              <span className='block italic text-muted'>{site.headline}</span>
            </h1>
            <p
              className='mt-8 max-w-xl animate-rise text-lg leading-relaxed text-muted md:text-xl'
              style={{ animationDelay: '160ms' }}
            >
              {site.tagline}
            </p>
            <div className='mt-10 flex animate-rise flex-wrap items-center gap-3' style={{ animationDelay: '240ms' }}>
              <a
                href={showProjects ? '#projects' : '#experience'}
                className='group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85'
              >
                {showProjects ? 'See my work' : 'See my experience'}
                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
              </a>
              <a
                href='#contact'
                className='inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-fg'
              >
                Get in touch
              </a>
              {hasResume && (
                <a
                  href={site.resume}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm text-muted transition-colors hover:text-fg md:hidden'
                >
                  <Download className='h-4 w-4' />
                  Resume
                </a>
              )}
            </div>
            <SocialLinks className='-ml-2.5 mt-8 animate-rise [animation-delay:320ms]' />
          </div>
          <div className='-mx-4 mt-6 h-[460px] sm:-mx-6 sm:h-[480px] md:mt-2 lg:absolute lg:inset-y-0 lg:-left-6 lg:-right-6 lg:mx-0 lg:mt-0 lg:h-auto xl:-right-24'>
            <HeroVisual />
          </div>
        </section>

        {/* About */}
        <Section id='about' index='01' title='About'>
          <div className='space-y-5 text-lg leading-relaxed'>
            {site.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className='mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2'>
            {skills.map(({ group, items }) => (
              <div key={group}>
                <dt className='font-mono text-xs uppercase tracking-wider text-muted'>{group}</dt>
                <dd className='mt-2 text-[15px]'>{items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Experience */}
        <Section id='experience' index='02' title='Experience'>
          <ol className='space-y-12'>
            {experience.map((job) => (
              <li key={`${job.company}-${job.start}`}>
                <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'>
                  <h3 className='text-lg font-medium'>
                    {job.role} <span className='text-muted'>·</span>{' '}
                    {job.url ? (
                      <a
                        href={job.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-accent hover:underline'
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span className='text-accent'>{job.company}</span>
                    )}
                  </h3>
                  <p className='shrink-0 font-mono text-xs text-muted'>
                    {job.start} — {job.end}
                  </p>
                </div>
                <p className='mt-1 text-sm text-muted'>{job.location}</p>
                <ul className='mt-4 space-y-2 text-[15px] leading-relaxed'>
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className='relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-muted'
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className='mt-4 flex flex-wrap gap-1.5'>
                  {job.tech.map((t) => (
                    <li key={t} className='tag'>
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className='mt-14 border-t border-line pt-8'>
            <p className='font-mono text-xs uppercase tracking-wider text-muted'>Education</p>
            <ul className='mt-3 space-y-6'>
              {education.map((e) => (
                <li key={e.degree}>
                  <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'>
                    <h3 className='text-lg font-medium'>
                      {e.degree}
                      {e.field && <span className='text-muted'> · {e.field}</span>}
                    </h3>
                    <p className='shrink-0 font-mono text-xs text-muted'>{educationDates(e)}</p>
                  </div>
                  <p className='mt-1 text-sm text-muted'>{[e.school, e.grade].filter(Boolean).join(' · ')}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Projects */}
        <Section id='projects' index='03' title='Projects'>
          {showProjects ? (
            <>
              <div className='grid gap-4 sm:grid-cols-2'>
                {featured.map((p) => (
                  <article
                    key={p.title}
                    className='group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-muted/50 hover:shadow-[0_12px_40px_-16px_rgb(0_0_0/0.25)]'
                  >
                    <div className='flex items-center justify-between font-mono text-xs text-muted'>
                      <span>{p.year}</span>
                      <span className='text-accent'>Featured</span>
                    </div>
                    <h3 className='mt-6 font-serif text-3xl tracking-tight'>
                      <a
                        href={p.live ?? p.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='after:absolute after:inset-0'
                      >
                        {p.title}
                      </a>
                    </h3>
                    <p className='mt-3 flex-1 text-[15px] leading-relaxed text-muted'>{p.description}</p>
                    <ul className='mt-6 flex flex-wrap gap-1.5'>
                      {p.tech.map((t) => (
                        <li key={t} className='tag'>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <ArrowUpRight className='absolute right-6 top-14 h-5 w-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent' />
                  </article>
                ))}
              </div>

              {others.length > 0 && (
                <ul className='mt-10 divide-y divide-line border-y border-line'>
                  {others.map((p) => (
                    <li key={p.title}>
                      <a
                        href={p.live ?? p.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6'
                      >
                        <div>
                          <h3 className='inline-flex items-center gap-1.5 font-medium transition-colors group-hover:text-accent'>
                            {p.title}
                            <ArrowUpRight className='h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100' />
                          </h3>
                          <p className='mt-1 text-sm leading-relaxed text-muted'>{p.description}</p>
                        </div>
                        <p className='font-mono text-xs text-muted'>
                          {p.tech.slice(0, 3).join(' · ')} — {p.year}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={site.socials.github}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg'
              >
                <FaGithub className='h-4 w-4' />
                More on GitHub
                <ArrowUpRight className='h-3.5 w-3.5' />
              </a>
            </>
          ) : (
            <div className='relative overflow-hidden rounded-2xl border border-dashed border-line p-8 md:p-10'>
              <p className='flex items-center gap-2 font-mono text-xs text-accent'>
                <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-accent' />
                In progress
              </p>
              <p className='mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl'>
                New projects are on the way.
              </p>
              <p className='mt-3 max-w-xl text-[15px] leading-relaxed text-muted'>
                I’m building a few new projects focused on backend systems. They’ll be here soon — in the meantime,
                follow along on GitHub.
              </p>
              <a
                href={site.socials.github}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-fg'
              >
                <FaGithub className='h-4 w-4' />
                Follow on GitHub
                <ArrowUpRight className='h-3.5 w-3.5' />
              </a>
            </div>
          )}
        </Section>

        {/* Certifications */}
        <Section id='certifications' index='04' title='Certifications'>
          <CertificationsGallery items={certifications} />
          <a
            href={site.certificationsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg'
          >
            View all on LinkedIn
            <ArrowUpRight className='h-3.5 w-3.5' />
          </a>
        </Section>

        {/* Contact */}
        <Section id='contact' index='05' title='Contact'>
          <p className='font-serif text-4xl leading-tight tracking-tight md:text-6xl'>
            Have a role or a project in mind? <span className='italic text-muted'>Let’s talk.</span>
          </p>
          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <a href={`mailto:${site.email}`} className='link-underline break-all text-lg md:text-xl'>
              {site.email}
            </a>
            <CopyEmail email={site.email} />
          </div>
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className='mt-4 inline-flex items-center gap-2 text-muted transition-colors hover:text-fg'
          >
            <Phone className='h-4 w-4' />
            {site.phone}
          </a>
          <SocialLinks className='-ml-2.5 mt-6' />
        </Section>
      </main>

      <footer className='mx-auto flex max-w-5xl flex-col gap-2 border-t border-line px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-6'>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js · Hosted on Vercel</p>
      </footer>
    </>
  );
}
