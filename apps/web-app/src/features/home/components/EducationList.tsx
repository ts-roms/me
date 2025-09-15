"use client";
import { useEffect, useState } from 'react';
import { EducationItem, type Education } from './EducationItem';

export function EducationList() {
  const [items, setItems] = useState<Education[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/api/education', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as Education[];
        if (!cancelled) setItems(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load education');
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <p className="text-sm text-red-600 dark:text-red-400">Failed to load education: {error}</p>;
  if (!items) return <p className="text-sm text-gray-500 dark:text-gray-400">Loading education…</p>;

  return (
    <div className="grid gap-4">
      {items.map((edu, i) => (
        <EducationItem key={edu.school + i} edu={edu} index={i} />
      ))}
    </div>
  );
}
