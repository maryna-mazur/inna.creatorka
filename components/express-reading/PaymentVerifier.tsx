"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface PaymentVerifierProps {
  orderReference?: string;
  locale: string;
  error?: boolean;
}

export default function PaymentVerifier({
  orderReference,
  locale,
  error,
}: PaymentVerifierProps) {
  const router = useRouter();
  const t = useTranslations("ExpressReading");
  const [status, setStatus] = useState<"checking" | "failed">(
    error ? "failed" : "checking"
  );
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (!orderReference || error) return;

    const maxAttempts = 30; // 30 attempts * 2s = 60s max
    let cancelled = false;

    const check = async () => {
      try {
        const res = await fetch(
          `/api/check-payment?orderReference=${encodeURIComponent(orderReference)}`
        );
        const data = await res.json();

        if (cancelled) return;

        if (data.status === "approved" && data.token) {
          router.replace(`/${locale}/express-reading?token=${data.token}`);
          return;
        }

        setAttempts((prev) => {
          const next = prev + 1;
          if (next >= maxAttempts) {
            setStatus("failed");
            return next;
          }
          return next;
        });
      } catch {
        if (!cancelled) {
          setAttempts((prev) => prev + 1);
        }
      }
    };

    const interval = setInterval(check, 2000);
    check(); // immediate first check

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [orderReference, locale, router, error]);

  useEffect(() => {
    if (attempts >= 30) {
      setStatus("failed");
    }
  }, [attempts]);

  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        {status === "checking" ? (
          <>
            <div className="mb-6">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
            <h1 className="font-heading text-xl text-text mb-2">
              {t("paymentChecking")}
            </h1>
            <p className="font-body text-text-light text-sm">
              {t("paymentWait")}
            </p>
          </>
        ) : (
          <>
            <h1 className="font-heading text-xl text-text mb-4">
              {t("paymentFailed")}
            </h1>
            <a
              href={`/${locale}`}
              className="inline-block font-body text-sm text-accent underline"
            >
              {t("backToHome")}
            </a>
          </>
        )}
      </div>
    </main>
  );
}
