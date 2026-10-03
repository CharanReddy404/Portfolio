// Saves the /resume page as public/resume.pdf using headless Chrome.
// Usage: start the site (`pnpm dev`), then run `pnpm resume`.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const url = process.env.RESUME_URL ?? 'http://localhost:3000/resume';
const chrome =
  process.env.CHROME_PATH ??
  [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].find(existsSync);

const out = path.resolve('public', 'resume.pdf');
mkdirSync(path.dirname(out), { recursive: true });

if (!chrome) {
  console.error('Chrome not found. Set CHROME_PATH to your Chrome/Chromium binary.');
  process.exit(1);
}

execFileSync(chrome, [
  '--headless=new',
  '--no-pdf-header-footer',
  '--log-level=3',
  '--virtual-time-budget=5000',
  `--print-to-pdf=${out}`,
  url,
], { stdio: 'inherit' });

console.log('Saved public/resume.pdf');
