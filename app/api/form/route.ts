import { type NextRequest, NextResponse } from "next/server";
import { detectLocale, getFormMessages, getQueryMessages } from "@/lib/locale";
import { prisma } from "@/lib/prisma";
import { DUPLICATE_WINDOW_MS, validateContactForm } from "@/lib/validation";

// ── POST /api/form — Submit the contact form ────
export async function POST(request: NextRequest) {
  const locale = detectLocale(
    request.headers.get("Accept-Language"),
    request.headers.get("X-Locale"),
  );
  const msg = getFormMessages(locale);

  try {
    const body = await request.json();

    const result = validateContactForm(body, locale);
    if (!result.ok) {
      return NextResponse.json(
        { success: false, errors: result.errors },
        { status: 400 },
      );
    }

    const { name, email, message, interests } = result.data;

    // Duplicate check — same email within 6 hours
    const recent = await prisma.website.findFirst({
      where: {
        email,
        createdAt: { gte: new Date(Date.now() - DUPLICATE_WINDOW_MS) },
      },
      orderBy: { createdAt: "desc" },
    });

    if (recent) {
      return NextResponse.json(
        {
          success: false,
          errors: { _form: msg.duplicateSubmission },
        },
        { status: 429 },
      );
    }

    // Persist
    const saved = await prisma.website.create({
      data: { name, email, message, interests },
    });

    console.log("[Contact] Saved", saved.id);

    return NextResponse.json(
      {
        success: true,
        message: msg.success,
        data: {
          id: saved.id,
          createdAt: saved.createdAt.toISOString(),
        },
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("[Contact Error]", err);
    return NextResponse.json(
      {
        success: false,
        errors: { _form: msg.serverError },
      },
      { status: 500 },
    );
  }
}

// ── GET /api/form?email=xxx — Check if email exists ──
export async function GET(request: NextRequest) {
  const locale = detectLocale(
    request.headers.get("Accept-Language"),
    request.headers.get("X-Locale"),
  );
  const msg = getQueryMessages(locale);

  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { success: false, error: msg.emailRequired },
      { status: 400 },
    );
  }

  try {
    const existing = await prisma.website.findFirst({
      where: { email },
      orderBy: { createdAt: "desc" },
      select: { createdAt: true },
    });

    return NextResponse.json({
      success: true,
      exists: !!existing,
      lastSubmittedAt: existing?.createdAt.toISOString() ?? null,
    });
  } catch (err) {
    console.error("[Contact Query Error]", err);
    return NextResponse.json(
      { success: false, error: msg.queryFailed },
      { status: 500 },
    );
  }
}
