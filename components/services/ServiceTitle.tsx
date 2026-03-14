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
      className={`flex items-center gap-3 font-heading text-primary uppercase font-semibold shrink-0 ${className}`}
    >
      <span>/{num}</span>
      <h3>{title}</h3>
    </div>
  );
}
