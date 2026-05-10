import { NextResponse } from "next/server";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const all = db.select().from(products).all();
  return NextResponse.json(all);
}

export async function POST(req: Request) {
  const body = await req.json();
  db.insert(products).values(body).run();
  return NextResponse.json({ ok: true });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, ...data } = body;
  db.update(products).set(data).where(eq(products.id, id)).run();
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  db.delete(products).where(eq(products.id, id)).run();
  return NextResponse.json({ ok: true });
}
