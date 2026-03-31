import { setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { createAccessToken, verifyAccessToken } from "@/lib/crypto";
import { isUsed, markAsUsed } from "@/lib/token-store";
import { isPaymentApproved } from "@/lib/payment-store";
import ExpressReadingClient from "@/components/express-reading/ExpressReadingClient";

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
  const secret = process.env.ACCESS_TOKEN_SECRET;

  if (!secret) {
    redirect(`/${locale}`);
  }

  // Step 1: User returned from WayForPay with orderReference — verify payment and create token
  if (orderReference && !token) {
    const paid = await isPaymentApproved(orderReference);
    if (!paid) {
      redirect(`/${locale}`);
    }
    const accessToken = createAccessToken(orderReference, secret);
    redirect(`/${locale}/express-reading?token=${accessToken}`);
  }

  // Step 2: Validate token
  if (!token) {
    redirect(`/${locale}`);
  }

  const result = verifyAccessToken(token, secret);

  if (!result.valid) {
    redirect(`/${locale}`);
  }

  if (isUsed(token)) {
    redirect(`/${locale}`);
  }

  // Mark token as used (one-time access)
  markAsUsed(token, result.orderRef!);

  return (
    <main>
      <ExpressReadingClient />
    </main>
  );
}
