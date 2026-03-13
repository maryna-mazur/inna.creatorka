export type BlurLayerProps = {
    blur: number;
    mask: string;
    direction: "horizontal" | "vertical";
};

export const BlurLayer = ({ blur, mask, direction }: BlurLayerProps) => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        maskImage: `linear-gradient(to ${direction === "horizontal" ? "right" : "bottom"}, ${mask})`,
      }}
    />
  );
};