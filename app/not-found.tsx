import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 sm:px-6'>
      <p className='font-mono text-xs text-accent'>404</p>
      <h1 className='mt-2 font-serif text-6xl tracking-tight'>Nothing here.</h1>
      <Link href='/' className='link-underline mt-8 w-fit text-muted'>
        Back to home
      </Link>
    </main>
  );
}
