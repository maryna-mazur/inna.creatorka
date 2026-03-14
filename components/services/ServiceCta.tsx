import ArrowLongIcon from "../icons/ArrowLongIcon";

interface ServiceCtaProps {
  cta: string;
  className?: string;
}

export default function ServiceCta({
  cta,
  className = "",
}: ServiceCtaProps) {
  return (
    <a
      href="#contacts"
      className={`inline-flex items-center border border-primary/30 rounded-full
        font-heading text-primary uppercase font-semibold cursor-pointer
        group/btn hover:border-primary hover:bg-primary hover:text-bg
        active:border-primary active:bg-primary active:text-bg
        transition-all duration-300 ${className}`}
    >
      {cta}
      <ArrowLongIcon className="w-10 xl:w-12 3xl:w-18 4xl:w-20 transition-transform duration-300 group-hover/btn:translate-x-1 group-active/btn:translate-x-1" />
    </a>
  );
}
