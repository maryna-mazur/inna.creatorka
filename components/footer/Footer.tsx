import FooterHero from "./FooterHero";
import FooterNav from "./FooterNav";
import FooterDocs from "./FooterDocs";
import FooterIllustrations from "./FooterIllustrations";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-primary-dark pt-8 md:pt-14 lg:pt-18 xl:pt-24 3xl:pt-28 4xl:pt-32 pb-6 md:pb-10 lg:pb-12 3xl:pb-14 4xl:pb-18">
      <div className="mx-auto max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1800px] px-6 sm:px-8 md:px-10 lg:px-10 xl:px-12 3xl:px-16 4xl:px-20">
        <FooterHero />

        <div className="h-px bg-accent/15 mb-6 md:mb-8 lg:mb-8 3xl:mb-10" />

        <div className="flex flex-col gap-0 lg:grid lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:items-start lg:gap-x-4 xl:gap-x-5 3xl:gap-x-6 4xl:gap-x-8">
          <FooterCopyright />
          <FooterNav />
          <FooterDocs />
          <FooterIllustrations />
        </div>
      </div>
    </footer>
  );
}
