import { Section } from '@/features/home/components/Section';
import {
  ContactForm,
  EducationList,
  ExperienceList,
  HeroLoader,
  IntroductionLoader,
  ProjectsGrid,
  ReviewsLoader,
  TechStackLoader,
} from '@/features/home';

export default function HomePage() {
  return (
    <main className="min-h-dvh  from-white to-slate-50 text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
      <HeroLoader />

      <Section id="about" title="About">
        <IntroductionLoader />
      </Section>

      <Section id="experience" title="Work Experience">
        <ExperienceList />
      </Section>

      <Section id="stack" title="Tech Stack">
        <TechStackLoader />
      </Section>

      <Section id="education" title="Education">
        <EducationList />
      </Section>

      <Section id="projects" title="Projects">
        <ProjectsGrid />
      </Section>

      <Section id="reviews" title="Reviews / Feedback">
        <ReviewsLoader />
      </Section>

      <Section id="contact" title="Contact / Hire Me">
        <ContactForm title="Let’s work together" cta="Send Inquiry" />
      </Section>
    </main>
  );
}
