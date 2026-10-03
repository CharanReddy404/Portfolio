import fs from 'node:fs';
import path from 'node:path';
import { site } from '@/content/site';

// Evaluated at build time, so the Resume button only shows once the PDF exists.
export const hasResume = fs.existsSync(path.join(process.cwd(), 'public', site.resume));
