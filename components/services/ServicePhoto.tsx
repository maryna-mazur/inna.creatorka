interface ServicePhotoProps {
  placeholder: string;
  className?: string;
}

export default function ServicePhoto({
  placeholder,
  className = "",
}: ServicePhotoProps) {
  return (
    <div className={`rounded-xl bg-accent/40 flex items-center justify-center ${className}`}>
      <span className="font-body text-text-light text-[10px] md:text-xs uppercase tracking-widest">
        {placeholder}
      </span>
    </div>
  );
}
