import { setRequestLocale } from "next-intl/server";
import ExpressReadingClient from "@/components/express-reading/ExpressReadingClient";

export default async function ExpressReadingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <ExpressReadingClient />
    </main>
  );
}
