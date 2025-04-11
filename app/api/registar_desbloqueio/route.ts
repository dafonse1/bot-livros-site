import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const filePath = path.join(process.cwd(), 'public', 'desbloqueados.json');

  let existing = {};
  if (fs.existsSync(filePath)) {
    try {
      existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch {}
  }

  const updated = { ...existing, ...body };
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));

  return NextResponse.json({ status: "ok" });
}