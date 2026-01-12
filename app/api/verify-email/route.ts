import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BOUNCER_API_KEY;
    if (!apiKey) {
      // No server key configured; soft-fail so client can proceed
      return NextResponse.json(
        {
          status: "unknown",
          message: "Email validation not configured",
        },
        { status: 200 }
      );
    }

    const url = `https://api.usebouncer.com/v1.1/email/verify?email=${encodeURIComponent(
      email
    )}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json",
      },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // Pass through meaningful messages but avoid blocking client-side flow
      const msg =
        res.status === 402
          ? "API credits exhausted"
          : res.status === 429
          ? "Too many requests"
          : data?.message || "Email validation service error";

      return NextResponse.json(
        { status: "unknown", message: msg },
        { status: res.status }
      );
    }

    // Bouncer format: { status: "deliverable" | "risky" | "undeliverable" | "unknown", reason?: string }
    return NextResponse.json(
      {
        status: data?.status ?? "unknown",
        reason: data?.reason,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "unknown", message: "Unable to verify email address" },
      { status: 500 }
    );
  }
}
