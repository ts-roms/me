"use client";
import { useEffect, useState } from 'react';
import { TechStack, type StackGroup } from './TechStack';

export function TechStackLoader() {
  const [groups, setGroups] = useState<StackGroup[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/api/stack', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as StackGroup[];
        if (!cancelled) setGroups(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load stack');
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <p className="text-sm text-red-600 dark:text-red-400">Failed to load tech stack: {error}</p>;
  if (!groups) return <p className="text-sm text-gray-500 dark:text-gray-400">Loading tech stack…</p>;

  return <TechStack groups={groups} />;
}
