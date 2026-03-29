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
      {features.map((feature, i) => {
        const colonIndex = feature.indexOf(":");
        if (colonIndex === -1) {
          return (
            <li
              key={i}
              className={`flex items-start font-body text-text tracking-wide ${itemClassName}`}
            >
              <span className="text-accent-dark mt-[1px] shrink-0">— </span>
              {feature}
            </li>
          );
        }
        const heading = feature.slice(0, colonIndex);
        const description = feature.slice(colonIndex + 1).trim();
        return (
          <li
            key={i}
            className={`font-body text-text tracking-wide ${itemClassName}`}
          >
            <div className="flex items-start">
              <span className="text-accent-dark mt-[1px] shrink-0 mr-2">— </span>
              <span className="font-semibold">{heading}</span>
            </div>
            {description && (
              <p className="pl-4 mt-0.5 opacity-85">{description}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
