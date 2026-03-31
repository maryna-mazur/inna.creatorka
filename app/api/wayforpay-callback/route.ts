import { NextRequest, NextResponse } from "next/server";
import { generateWayForPaySignature } from "@/lib/crypto";

export async function POST(request: NextRequest) {
  const merchantSecret = process.env.WAYFORPAY_MERCHANT_SECRET;

  if (!merchantSecret) {
    return NextResponse.json({ status: "decline" });
  }

  const body = await request.json();

  const {
    merchantAccount,
    orderReference,
    amount,
    currency,
    authCode,
    cardPan,
    transactionStatus,
    reasonCode,
    merchantSignature,
  } = body;

  const signatureFields = [
    merchantAccount,
    orderReference,
    amount,
    currency,
    authCode,
    cardPan,
    transactionStatus,
    reasonCode,
  ];

  const expectedSignature = generateWayForPaySignature(
    signatureFields.map(String),
    merchantSecret
  );

  if (merchantSignature !== expectedSignature) {
    console.error("[WayForPay] Invalid callback signature for order:", orderReference);
    return NextResponse.json({ status: "decline" });
  }

  console.log("[WayForPay] Callback received:", {
    orderReference,
    transactionStatus,
    reasonCode,
  });

  const responseTime = new Date().toISOString();
  const responseSignature = generateWayForPaySignature(
    [orderReference, "accept", responseTime],
    merchantSecret
  );

  return NextResponse.json({
    orderReference,
    status: "accept",
    time: responseTime,
    signature: responseSignature,
  });
}
