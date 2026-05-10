import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const user = db.select().from(users).where(eq(users.username, username)).get();
  if (!user) return NextResponse.json({ error: "Invalid" }, { status: 401 });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return NextResponse.json({ error: "Invalid" }, { status: 401 });
  const token = await createToken(user.username, user.role);
  const res = NextResponse.json({ ok: true });
  res.cookies.set("wiencraft_token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 8 });
  return res;
}
