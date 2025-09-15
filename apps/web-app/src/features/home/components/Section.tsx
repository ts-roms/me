'use client';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function Section({
  id,
  title,
  children,
  className,
}: Readonly<{
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section id={id} className={cn('mx-auto max-w-5xl px-6 py-10 md:py-12', className)}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-2xl font-bold tracking-tight md:text-3xl"
      >
        {title}
      </motion.h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
