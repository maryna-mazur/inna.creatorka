import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { generateWayForPaySignature } from "@/lib/crypto";
import { createPayment } from "@/lib/payment-store";

export async function POST(request: NextRequest) {
  const merchantAccount = process.env.WAYFORPAY_MERCHANT_ACCOUNT?.trim();
  const merchantSecret = process.env.WAYFORPAY_MERCHANT_SECRET?.trim();
  const merchantDomain = process.env.WAYFORPAY_MERCHANT_DOMAIN?.trim();
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || `https://${request.headers.get("host")}`).trim();

  if (!merchantAccount || !merchantSecret || !merchantDomain) {
    return NextResponse.json(
      { error: "Payment configuration missing" },
      { status: 500 }
    );
  }

  const { locale } = await request.json();
  const orderReference = `express_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
  const orderDate = Math.floor(Date.now() / 1000);
  const amount = "333";
  const currency = "UAH";
  const productName = "Express Reading";
  const productCount = "1";
  const productPrice = "333";

  const signatureFields = [
    merchantAccount,
    merchantDomain,
    orderReference,
    orderDate.toString(),
    amount,
    currency,
    productName,
    productCount,
    productPrice,
  ];

  const merchantSignature = generateWayForPaySignature(
    signatureFields,
    merchantSecret
  );

  const formData = {
    merchantAccount,
    merchantDomainName: merchantDomain,
    merchantSignature,
    orderReference,
    orderDate,
    amount,
    currency,
    productName: [productName],
    productCount: [productCount],
    productPrice: [productPrice],
    returnUrl: `${baseUrl}/api/payment-return?orderReference=${orderReference}`,
    serviceUrl: `${baseUrl}/api/wayforpay-callback`,
  };

  await createPayment(orderReference);

  return NextResponse.json(formData);
}
