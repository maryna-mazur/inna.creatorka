import Image from "next/image";

const photos = [
  { src: "/about/photo.jpg", alt: "About photo 1" },
  { src: "/about/photo.jpg", alt: "About photo 2" },
  { src: "/about/photo.jpg", alt: "About photo 3" },
];

export default function AboutPhotos() {
  return (
    <div className="pt-2 md:pt-4 lg:pt-4 flex items-end gap-2 md:gap-3 lg:gap-4 w-[85%] sm:w-[80%] md:w-[75%] lg:w-[65%] xl:w-[60%] 2xl:w-[55%] ml-auto">
      {photos.map((photo) => (
        <div key={photo.alt} className="relative overflow-hidden bg-accent flex-1 min-w-0 rounded-md">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={533}
            className="w-full h-auto"
            sizes="(max-width: 768px) 28vw, 300px"
          />
        </div>
      ))}
    </div>
  );
}
