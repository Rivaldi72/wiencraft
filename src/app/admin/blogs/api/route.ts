import { NextResponse } from "next/server";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  return NextResponse.json(db.select().from(blogs).all());
}

export async function POST(req: Request) {
  const body = await req.json();
  db.insert(blogs).values(body).run();
  return NextResponse.json({ ok: true });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, ...data } = body;
  db.update(blogs).set(data).where(eq(blogs.id, id)).run();
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  db.delete(blogs).where(eq(blogs.id, id)).run();
  return NextResponse.json({ ok: true });
}
