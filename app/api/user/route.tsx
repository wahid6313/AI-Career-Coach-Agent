// app/api/user/route.ts  (temporary debug)
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    console.log("/api/user debug: headers:", Object.fromEntries(req.headers.entries()));
    const user = await currentUser();
    console.log("/api/user debug: currentUser():", !!user, user?.id ?? "(no id)");
    return NextResponse.json({ ok: true, user: user ?? null });
  } catch (e: any) {
    console.error("Debug /api/user error:", e);
    // return stack for dev-only debugging
    return NextResponse.json({ error: e.message, stack: e.stack }, { status: 500 });
  }
}
