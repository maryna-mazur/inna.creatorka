import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
