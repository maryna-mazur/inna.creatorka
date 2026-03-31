import { NextRequest, NextResponse } from "next/server";
import { isPaymentApproved } from "@/lib/payment-store";
import { createAccessToken } from "@/lib/crypto";

export async function GET(request: NextRequest) {
  const orderReference = request.nextUrl.searchParams.get("orderReference");
  const secret = process.env.ACCESS_TOKEN_SECRET?.trim();

  if (!orderReference || !secret) {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }

  const approved = await isPaymentApproved(orderReference);

  if (!approved) {
    return NextResponse.json({ status: "pending" });
  }

  const token = createAccessToken(orderReference, secret);
  return NextResponse.json({ status: "approved", token });
}
