import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
});
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const description = `${site.name} — ${site.role} at ${site.company}. ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  authors: [{ name: site.name, url: site.url }],
  keywords: ['Charan B', 'charanreddy404', 'Backend Engineer', 'NestJS', 'Fastify', 'PostgreSQL', 'Node.js', 'TypeScript'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(sans.variable, serif.variable, mono.variable)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
