import { setRequestLocale } from "next-intl/server";
import { verifyAccessToken } from "@/lib/crypto";
import { isUsed, markAsUsed } from "@/lib/token-store";
import ExpressReadingClient from "@/components/express-reading/ExpressReadingClient";
import PaymentVerifier from "@/components/express-reading/PaymentVerifier";

export default async function ExpressReadingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string; orderReference?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { token, orderReference } = await searchParams;
  const secret = process.env.ACCESS_TOKEN_SECRET?.trim();

  // If user returned from WayForPay with orderReference — show polling UI
  if (orderReference && !token) {
    return <PaymentVerifier orderReference={orderReference} locale={locale} />;
  }

  // Validate token
  if (!token || !secret) {
    return <PaymentVerifier error locale={locale} />;
  }

  const result = verifyAccessToken(token, secret);

  if (!result.valid || isUsed(token)) {
    return <PaymentVerifier error locale={locale} />;
  }

  markAsUsed(token, result.orderRef!);

  return (
    <main>
      <ExpressReadingClient />
    </main>
  );
}
