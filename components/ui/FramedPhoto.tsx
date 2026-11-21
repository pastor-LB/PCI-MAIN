import Image from "next/image";
import type { ReactNode } from "react";

type FramedPhotoProps = {
  src: string;
  alt: string;
  caption?: ReactNode;
  aspect?: string;
  position?: string;
  className?: string;
  children?: ReactNode;
};

export default function FramedPhoto({
  src,
  alt,
  caption,
  aspect = "aspect-[4/5]",
  position = "center",
  className = "",
  children,
}: FramedPhotoProps) {
  return (
    <figure className={`relative mx-auto w-full max-w-md ${className}`}>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-brand-gold/70 sm:-bottom-4 sm:-right-4"
        />
        <div className={`relative overflow-hidden rounded-2xl shadow-xl ${aspect}`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: position }}
          />
        </div>
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-7 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-dark">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
