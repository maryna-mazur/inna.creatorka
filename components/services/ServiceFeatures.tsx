interface ServiceFeaturesProps {
  features: string[];
  listClassName?: string;
  itemClassName?: string;
}

export default function ServiceFeatures({
  features,
  listClassName = "",
  itemClassName = "",
}: ServiceFeaturesProps) {
  return (
    <ul className={`flex flex-col ${listClassName}`}>
      {features.map((feature, i) => (
        <li
          key={i}
          className={`flex items-start font-body text-text tracking-wide ${itemClassName}`}
        >
          <span className="text-accent-dark mt-[1px] shrink-0">—</span>
          {feature}
        </li>
      ))}
    </ul>
  );
}
