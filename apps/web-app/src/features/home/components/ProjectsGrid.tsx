"use client";
import { useEffect, useState } from 'react';
import { ProjectCard, type Project } from './ProjectCard';

export function ProjectsGrid() {
  const [items, setItems] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/api/projects', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as Project[];
        if (!cancelled) setItems(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load projects');
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <p className="text-sm text-red-600 dark:text-red-400">Failed to load projects: {error}</p>;
  if (!items) return <p className="text-sm text-gray-500 dark:text-gray-400">Loading projects…</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((p, i) => (
        <ProjectCard key={p.name + i} project={p} index={i} />
      ))}
    </div>
  );
}
