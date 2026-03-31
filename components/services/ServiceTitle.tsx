interface ServiceTitleProps {
  num: number;
  title: string;
  className?: string;
}

export default function ServiceTitle({
  num,
  title,
  className = "",
}: ServiceTitleProps) {
  return (
    <div
      className={`flex items-center gap-3 font-heading text-primary uppercase font-semibold shrink-0 ${className}
        text-[clamp(1rem,3.5vw,1.0625rem)] md:text-[clamp(1rem,1.6vw,1.625rem)]`}
    >
      <span>/{num}</span>
      <h3>{title}</h3>
    </div>
  );
}
