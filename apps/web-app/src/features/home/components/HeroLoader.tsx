"use client";
import { useEffect, useState } from 'react';
import { Hero } from './Hero';

export function HeroLoader() {
  const [data, setData] = useState<{ name: string; title: string; subtitle?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/api/hero', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as { name: string; title: string; subtitle?: string };
        if (!cancelled) setData(json);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load hero');
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <section className="py-10"><p className="text-center text-sm text-red-600 dark:text-red-400">Failed to load hero: {error}</p></section>;
  if (!data) return <section className="py-10"><p className="text-center text-sm text-gray-500 dark:text-gray-400">Loading…</p></section>;

  return <Hero name={data.name} title={data.title} subtitle={data.subtitle} />;
}
