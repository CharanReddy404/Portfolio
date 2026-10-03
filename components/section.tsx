export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className='grid gap-6 border-t border-line py-16 md:grid-cols-[180px_1fr] md:gap-10 md:py-24'>
      <div className='md:sticky md:top-24 md:self-start'>
        <p className='font-mono text-xs text-accent'>{index}</p>
        <h2 className='mt-1 font-serif text-3xl tracking-tight md:text-4xl'>{title}</h2>
      </div>
      <div className='min-w-0'>{children}</div>
    </section>
  );
}
