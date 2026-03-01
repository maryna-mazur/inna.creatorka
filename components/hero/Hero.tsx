import BackgroundVideo from "@/components/hero/BackgroundVideo";
import Header from "@/components/header/Header";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroTags from "@/components/hero/HeroTags";
import HeroCTA from "@/components/hero/HeroCTA";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-hero-bg">
      <BackgroundVideo />

      <Header />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 2xl:px-10 3xl:px-16 4xl:px-24 max-w-[2560px] mx-auto w-full">
        <HeroHeading />
        <HeroTags />
        <div className="absolute bottom-6 right-6 lg:bottom-6 lg:right-20 2xl:right-24 3xl:bottom-10 3xl:right-32 4xl:bottom-14 4xl:right-40 z-30 max-lg:right-0 max-lg:left-0 max-lg:flex max-lg:justify-center">
          <HeroCTA />
        </div>
      </div>
    </section>
  );
}
