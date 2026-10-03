# charanreddy404.vercel.app

Personal portfolio of Charan B — a statically generated Next.js site.

## Editing content

All content lives in [`content/`](./content):

| File | What it controls |
| --- | --- |
| `site.ts` | Name, role, tagline, about text, social links, skills |
| `experience.ts` | Work history |
| `projects.ts` | Projects (`featured: true` shows them as large cards) |
| `certifications.ts` | Certifications |

The resume is generated from the same content. After editing, run `pnpm dev`, then
`pnpm resume` in another terminal to regenerate `public/resume.pdf` (preview it at `/resume`).

Commit and push. Vercel redeploys on every push to `main`.

## Development

```bash
pnpm install
pnpm dev
```

Stack: Next.js 15 (App Router, fully static) · React 19 · Tailwind CSS · next-themes.
The Open Graph image and favicon are generated from `app/opengraph-image.tsx` and `app/icon.tsx`.
