import { NextResponse } from 'next/server';
import { openPack } from '@/engine/packEngine';

export async function POST() {
  const card = openPack();
  return NextResponse.json({ success: true, card });
}
