import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import ExpressSection from "@/components/express/ExpressSection";
import Services from "@/components/services/Services";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";

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
      <ExpressSection />
      <Services />
      <Faq />
      <Footer />
    </main>
  );
}
