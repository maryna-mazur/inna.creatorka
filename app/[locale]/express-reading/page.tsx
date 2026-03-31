import { setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
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
    return redirect({ href: "/", locale });
  }

  // Step 1: User returned from WayForPay with orderReference — verify payment and create token
  if (orderReference && !token) {
    const paid = await isPaymentApproved(orderReference);
    if (!paid) {
      return redirect({ href: "/", locale });
    }
    const accessToken = createAccessToken(orderReference, secret);
    return redirect({
      href: `/express-reading?token=${accessToken}`,
      locale,
    });
  }

  // Step 2: Validate token
  if (!token) {
    return redirect({ href: "/", locale });
  }

  const result = verifyAccessToken(token, secret);

  if (!result.valid) {
    return redirect({ href: "/", locale });
  }

  if (isUsed(token)) {
    return redirect({ href: "/", locale });
  }

  // Mark token as used (one-time access)
  markAsUsed(token, result.orderRef!);

  return (
    <main>
      <ExpressReadingClient />
    </main>
  );
}
