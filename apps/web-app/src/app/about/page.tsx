import { Section } from '@/features/home/components/Section';
import { IntroductionLoader } from '@/features/home/components';

export const metadata = {
  title: 'About — Orions',
  description: 'Learn more about me, my background, and what I do.',
};

export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
      <Section title="About Me">
        <IntroductionLoader />
      </Section>
    </main>
  );
}
