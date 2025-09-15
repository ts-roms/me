"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type IntroductionProps = {
  heading?: string;
  paragraphs?: string[];
  highlights?: string[];
};

export function Introduction({
  heading = 'Professional Introduction',
  paragraphs = [
    "I'm a Software Engineer specializing in building fast, reliable, and delightful web applications.",
    'I enjoy crafting clean, scalable frontends with React/Next.js and thoughtful UX, and I collaborate closely with teams to ship features that matter.',
  ],
  highlights = [
    'Frontend: React, Next.js, TypeScript, Tailwind',
    'Animation/UI: Framer Motion, shadcn/ui',
    'Practices: Performance, Accessibility, DX, Reusability',
  ],
}: Readonly<IntroductionProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.35 }}
    >
      <Card className="bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="text-xl">{heading}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {highlights.length > 0 ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}
