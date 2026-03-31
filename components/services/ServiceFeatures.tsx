interface ServiceFeaturesProps {
  features: string[];
  listClassName?: string;
  itemClassName?: string;
  mobile?: boolean;
}

export default function ServiceFeatures({
  features,
  listClassName = "",
  itemClassName = "",
  mobile = false,
}: ServiceFeaturesProps) {
  return (
    <ul
      className={`flex flex-col ${listClassName}`}
      style={{ fontSize: mobile ? "clamp(0.5625rem, 3vw, 1rem)" : "clamp(0.6875rem, 1vw, 1rem)" }}
    >
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
              <span className="text-accent-dark mt-[1px] shrink-0 mr-2">
                —{" "}
              </span>
              <span
                className="font-semibold"
                style={{ fontSize: mobile ? "clamp(0.5625rem, 3.5vw, 1.0625rem)" : "clamp(0.75rem, 1.1vw, 1.125rem)" }}
              >
                {heading}
              </span>
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
