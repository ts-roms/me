"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export type Review = {
  name: string;
  role?: string;
  company?: string;
  rating?: number; // 1-5
  feedback: string;
};

export function Reviews({ items }: Readonly<{ items: Review[] }>) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((rev, i) => (
        <motion.div
          key={rev.name + i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
        >
          <Card className="h-full bg-white dark:bg-gray-900/40">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2 text-base md:text-lg">
                <span>
                  {rev.name}
                  {rev.role || rev.company ? (
                    <span className="block text-xs font-normal text-gray-500">
                      {[rev.role, rev.company].filter(Boolean).join(' • ')}
                    </span>
                  ) : null}
                </span>
                {typeof rev.rating === 'number' ? (
                  <span aria-label={`${rev.rating} out of 5 stars`} className="text-yellow-500">
                    {'★'.repeat(Math.max(0, Math.min(5, Math.round(rev.rating))))}
                    <span className="text-gray-300 dark:text-gray-600">
                      {'★'.repeat(5 - Math.max(0, Math.min(5, Math.round(rev.rating))))}
                    </span>
                  </span>
                ) : null}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">“{rev.feedback}”</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
