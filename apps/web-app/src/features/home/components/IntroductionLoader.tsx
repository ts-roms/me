"use client";
import { useEffect, useState } from 'react';
import { Introduction, type IntroductionProps } from './Introduction';

export function IntroductionLoader() {
  const [data, setData] = useState<IntroductionProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/api/introduction', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as IntroductionProps;
        if (!cancelled) setData(json);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load introduction');
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <p className="text-sm text-red-600 dark:text-red-400">Failed to load: {error}</p>;
  if (!data) return <p className="text-sm text-gray-500 dark:text-gray-400">Loading…</p>;
  return <Introduction heading={data.heading} paragraphs={data.paragraphs} highlights={data.highlights} />;
}
