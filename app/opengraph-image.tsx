import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const font = (file: string) => readFile(path.join(process.cwd(), 'assets', file));

export default async function OpengraphImage() {
  const [regular, italic] = await Promise.all([
    font('InstrumentSerif-Regular.ttf'),
    font('InstrumentSerif-Italic.ttf'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#fafaf9',
          color: '#1c1917',
          fontFamily: 'Instrument Serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 30, color: '#716a65' }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#c2410c' }} />
          {site.url.replace('https://', '')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 190, lineHeight: 1, letterSpacing: -5 }}>
            {site.name}
            <span style={{ color: '#c2410c' }}>.</span>
          </div>
          <div style={{ display: 'flex', fontSize: 64, marginTop: 16, color: '#716a65', fontStyle: 'italic' }}>
            {site.role} at {site.company}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Instrument Serif', data: regular, style: 'normal', weight: 400 },
        { name: 'Instrument Serif', data: italic, style: 'italic', weight: 400 },
      ],
    }
  );
}
