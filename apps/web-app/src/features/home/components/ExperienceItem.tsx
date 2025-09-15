'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export type Experience = {
  company: string;
  role: string;
  period: string;
  details: string;
};

export function ExperienceItem({ exp, index = 0 }: Readonly<{ exp: Experience; index?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Card className="bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <span className="font-semibold">{exp.role}</span>
            <span className="text-sm font-normal text-gray-500">{exp.period}</span>
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">{exp.company}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{exp.details}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
