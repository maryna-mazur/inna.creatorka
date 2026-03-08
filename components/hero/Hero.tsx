import BackgroundVideo from "@/components/hero/BackgroundVideo";
import Header from "@/components/header/Header";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroTags from "@/components/hero/HeroTags";
import HeroCTA from "@/components/hero/HeroCTA";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-hero-bg">
      <BackgroundVideo />

      <Header />

      <div className="absolute inset-x-0 bottom-0 z-10 h-[70lvh] pointer-events-none xl:hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(59,35,20,0.1) 15%, rgba(59,35,20,0.25) 30%, rgba(59,35,20,0.45) 43%, rgba(59,35,20,0.65) 55%, rgba(59,35,20,0.85) 68%, rgba(59,35,20,0.95) 80%, rgba(59,35,20,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-[1px]"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 35%, transparent 50%)" }}
        />
        <div
          className="absolute inset-0 backdrop-blur-[3px]"
          style={{ maskImage: "linear-gradient(to bottom, transparent 25%, black 40%, black 55%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 backdrop-blur-[6px]"
          style={{ maskImage: "linear-gradient(to bottom, transparent 45%, black 60%, black 75%, transparent 85%)" }}
        />
        <div
          className="absolute inset-0 backdrop-blur-[10px]"
          style={{ maskImage: "linear-gradient(to bottom, transparent 65%, black 80%, black 100%)" }}
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-[100lvh] px-6 2xl:px-10 3xl:px-16 4xl:px-24 max-w-[2560px] mx-auto w-full">
        <HeroHeading />
        <HeroTags />
        <div className="absolute bottom-6 right-6 xl:bottom-6 xl:right-20 2xl:right-24 3xl:bottom-10 3xl:right-32 4xl:bottom-14 4xl:right-40 z-30 max-xl:right-0 max-xl:left-0 max-xl:flex max-xl:justify-center">
          <HeroCTA />
        </div>
      </div>
    </section>
  );
}
