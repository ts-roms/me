'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export type Education = {
  school: string;
  degree: string;
  period: string;
  details?: string;
};

export function EducationItem({ edu, index = 0 }: Readonly<{ edu: Education; index?: number }>) {
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
            <span className="font-semibold">{edu.degree}</span>
            <span className="text-sm font-normal text-gray-500">{edu.period}</span>
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">{edu.school}</CardDescription>
        </CardHeader>
        {edu.details ? (
          <CardContent>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{edu.details}</p>
          </CardContent>
        ) : null}
      </Card>
    </motion.div>
  );
}
