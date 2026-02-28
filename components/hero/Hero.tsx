import BackgroundVideo from "@/components/hero/BackgroundVideo";
import Header from "@/components/header/Header";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroTags from "@/components/hero/HeroTags";
import HeroCTA from "@/components/hero/HeroCTA";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <BackgroundVideo />

      <Header />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6">
        <HeroHeading />
        <HeroTags />
        <HeroCTA />
      </div>
    </section>
  );
}
