import Image from "next/image";

import { siteConfig } from "../../site-config";

type EditorialImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  hoverVariant?: "none" | "editorial" | "zoom";
  className?: string;
  imageClassName?: string;
  accentLineClassName?: string;
  overlayClassName?: string;
  frameClassName?: string;
};

const hoverStyles = {
  none: {
    container: "",
    image: "",
    accent: "",
    overlay: "",
  },
  editorial: {
    container:
      "transition duration-500 ease-out group-hover:shadow-[0_34px_72px_rgba(17,17,17,0.1)]",
    image:
      "transition duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-[0.35deg] group-hover:contrast-105 group-hover:saturate-[1.05]",
    accent: "transition-all duration-500 group-hover:w-20",
    overlay: "transition duration-500 group-hover:opacity-100",
  },
  zoom: {
    container:
      "transition duration-500 ease-out group-hover:shadow-[0_32px_68px_rgba(17,17,17,0.1)]",
    image:
      "transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] group-hover:contrast-[1.03] group-hover:saturate-[1.04]",
    accent: "transition-all duration-500 group-hover:w-14",
    overlay: "transition duration-500 group-hover:opacity-100",
  },
} as const;

export function EditorialImage({
  src,
  alt,
  sizes,
  priority = false,
  hoverVariant = "none",
  className = "",
  imageClassName = "",
  accentLineClassName = "",
  overlayClassName = "",
  frameClassName = "",
}: EditorialImageProps) {
  const hover = hoverStyles[hoverVariant];

  return (
    <div
      className={`group relative overflow-hidden rounded-[30px] bg-[var(--surface)] shadow-[0_28px_64px_rgba(17,17,17,0.08)] ${hover.container} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized={siteConfig.media.unoptimizedImages}
        className={`object-cover ${hover.image} ${imageClassName}`}
      />
      <div
        className={`pointer-events-none absolute left-5 top-5 h-px w-0 bg-[var(--accent)]/55 ${hover.accent} ${accentLineClassName}`}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent opacity-0 ${hover.overlay} ${overlayClassName}`}
      />
      <div
        className={`pointer-events-none absolute inset-0 rounded-[30px] border border-white/50 ${frameClassName}`}
      />
    </div>
  );
}
