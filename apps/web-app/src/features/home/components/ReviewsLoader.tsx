"use client";
import { useEffect, useState } from 'react';
import { Reviews, type Review } from './Reviews';

export function ReviewsLoader() {
  const [items, setItems] = useState<Review[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/api/reviews', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as Review[];
        if (!cancelled) setItems(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to load reviews');
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <p className="text-sm text-red-600 dark:text-red-400">Failed to load reviews: {error}</p>;
  if (!items) return <p className="text-sm text-gray-500 dark:text-gray-400">Loading reviews…</p>;

  return <Reviews items={items} />;
}
