'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export type Project = {
  name: string;
  description: string;
  tech?: string[];
  link?: string;
};

export function ProjectCard({ project, index = 0 }: Readonly<{ project: Project; index?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Card className="h-full bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{project.name}</span>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                View
              </a>
            ) : null}
          </CardTitle>
          {project.tech && project.tech.length > 0 ? (
            <CardDescription>{project.tech.join(' • ')}</CardDescription>
          ) : null}
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
