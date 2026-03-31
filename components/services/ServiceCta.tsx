import ArrowLongIcon from "../icons/ArrowLongIcon";

interface ServiceCtaProps {
  cta: string;
  className?: string;
  mobile?: boolean;
}

export default function ServiceCta({ cta, className = "" }: ServiceCtaProps) {
  return (
    <a
      href="https://t.me/inna_28_i"
      className={`inline-flex items-center border border-primary/30 rounded-full
        font-heading text-primary uppercase font-semibold cursor-pointer
        group/btn hover:border-primary hover:bg-primary hover:text-bg
        active:border-primary active:bg-primary active:text-bg
        transition-all duration-300 ${className}
        text-[clamp(0.625rem,0.9vw,0.875rem)]
        py-[clamp(0.3rem,0.6vw,0.625rem)] px-[clamp(0.75rem,1.8vw,1.5rem)]
        `}
      target="_blank"
    >
      {cta}
      <ArrowLongIcon
        className="transition-transform duration-300 group-hover/btn:translate-x-1 group-active/btn:translate-x-1"
        style={{ width: "clamp(2rem, 3vw, 5rem)" }}
      />
    </a>
  );
}
