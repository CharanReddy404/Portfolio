'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type='button'
      onClick={copy}
      className='inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-fg hover:text-fg'
    >
      {copied ? <Check className='h-4 w-4 text-accent' /> : <Copy className='h-4 w-4' />}
      <span aria-live='polite'>{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  );
}
