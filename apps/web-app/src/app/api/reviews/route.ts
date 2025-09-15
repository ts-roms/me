import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'reviews.json');
    const file = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(file);

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  } catch (err: any) {
    const message = err?.message ?? 'Failed to load reviews';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
