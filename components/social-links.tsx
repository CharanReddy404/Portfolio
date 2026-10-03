import { FaGithub, FaHackerrank, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Mail } from 'lucide-react';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

const LINKS = [
  { label: 'GitHub', href: site.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: site.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'X / Twitter', href: site.socials.twitter, Icon: FaXTwitter },
  { label: 'YouTube', href: site.socials.youtube, Icon: FaYoutube },
  { label: 'HackerRank', href: site.socials.hackerrank, Icon: FaHackerrank },
  { label: 'Email', href: `mailto:${site.email}`, Icon: Mail },
].filter((link) => link.href);

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {LINKS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel='noopener noreferrer'
            aria-label={label}
            title={label}
            className='grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-line/60 hover:text-fg'
          >
            <Icon className='h-[18px] w-[18px]' />
          </a>
        </li>
      ))}
    </ul>
  );
}
