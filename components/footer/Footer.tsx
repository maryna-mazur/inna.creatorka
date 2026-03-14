import FooterHero from "./FooterHero";
import FooterNav from "./FooterNav";
import FooterDocs from "./FooterDocs";
import FooterIllustrations from "./FooterIllustrations";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-primary-dark pt-8 md:pt-14 lg:pt-18 xl:pt-24 3xl:pt-28 4xl:pt-32 pb-6 md:pb-10 lg:pb-12 3xl:pb-14 4xl:pb-18">
      <div className="mx-auto max-w-[1400px] 3xl:max-w-[1600px] 4xl:max-w-[1800px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <FooterHero />

        <div className="h-px bg-accent/15 mb-6 md:mb-10 lg:mb-12 3xl:mb-14" />

        <div className="flex flex-col gap-0 lg:grid lg:grid-cols-4 lg:gap-6 3xl:gap-8 4xl:gap-10">
          <FooterCopyright />
          <FooterNav />
          <FooterDocs />
          <FooterIllustrations />
        </div>
      </div>
    </footer>
  );
}
