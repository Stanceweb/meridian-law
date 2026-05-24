"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AttorneyPhotoProps {
  name: string;
  photo?: string;
  /** Tailwind text-size class for the initials (default: text-5xl for cards) */
  initialsSize?: string;
  className?: string;
}

/**
 * Renders the attorney's photo via next/image when available,
 * with a graceful fallback to styled monogram initials.
 *
 * Usage: drop inside any relative-positioned container with a defined aspect ratio.
 */
export function AttorneyPhoto({ name, photo, initialsSize = "text-5xl", className }: AttorneyPhotoProps) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const showPhoto = photo && !imgError;

  return (
    <>
      {showPhoto ? (
        <Image
          src={photo}
          alt={`Headshot of ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className={cn("object-cover object-top", className)}
          onError={() => setImgError(true)}
          priority={false}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "font-serif font-semibold text-text-muted/40 select-none",
              initialsSize
            )}
            aria-hidden="true"
          >
            {initials}
          </span>
        </div>
      )}
    </>
  );
}
