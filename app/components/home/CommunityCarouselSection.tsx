"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "../../site-config";
import { RevealItem } from "./RevealItem";

const communitySlides = [
  {
    src: "/proof/community-proof.jpeg",
    alt: "Instagram story screenshot showing a customer sharing an Own Adaa product.",
    imageClassName: "object-cover object-top",
  },
  {
    src: "/proof/community-proof.jpeg",
    alt: "Instagram story screenshot highlighting the central product packaging and message.",
    imageClassName: "object-cover object-center",
  },
  {
    src: "/proof/community-proof.jpeg",
    alt: "Instagram story screenshot showing the lower handwritten note and product details.",
    imageClassName: "object-cover object-bottom",
  },
] as const;

/** Returns how many slides are visible at the current viewport width. */
function useSlidesVisible() {
  const getVisible = (): 1 | 2 | 3 => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visible, setVisible] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

export function CommunityCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const slidesVisible = useSlidesVisible();

  const total = communitySlides.length;
  const maxIndex = Math.max(0, total - slidesVisible);

  const goPrevious = () => setActiveIndex((c) => Math.max(0, c - 1));
  const goNext = () => setActiveIndex((c) => Math.min(maxIndex, c + 1));

  // Keep index in bounds when breakpoint changes
  useEffect(() => {
    setActiveIndex((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 40) delta < 0 ? goNext() : goPrevious();
    touchStartX.current = null;
  };

  // Each slide occupies (100 / slidesVisible)% of the track width
  const slideWidthPct = 100 / slidesVisible;
  const translatePct = activeIndex * slideWidthPct;

  return (
    <section className="mx-auto max-w-[1320px] pt-10">
      {/* Header */}
      <div className="mb-8">
        <RevealItem delay={0.06} x={-34} y={12} className="max-w-[44rem]">
          <p className="text-[0.74rem] font-bold uppercase tracking-[0.22em] text-[var(--accent-deep)]">
            Community Appreciation
          </p>
          <h2 className="[font-family:var(--font-editorial)] text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-[var(--ink)]">
            What people are saying about the products.
          </h2>
        </RevealItem>
      </div>

      {/* Card wrapper */}
      <RevealItem
        delay={0.16}
        y={22}
        scaleFrom={0.985}
      >
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Prev — hidden on mobile, shown md+ */}
          <button
            type="button"
            onClick={goPrevious}
            disabled={activeIndex === 0}
            aria-label="Previous community image"
            className="
              absolute left-4 top-1/2 z-10
              hidden h-11 w-11 -translate-y-1/2
              cursor-pointer items-center justify-center
              rounded-full border border-black/10 bg-white/88
              text-[var(--ink)] shadow-[0_12px_26px_rgba(17,17,17,0.08)]
              transition-all duration-300
              hover:-translate-y-[calc(50%+2px)]
              hover:border-[var(--accent)]/30
              hover:shadow-[0_18px_32px_rgba(17,17,17,0.13)]
              hover:text-[var(--accent-deep)]
              active:scale-[0.93] disabled:opacity-30
              md:inline-flex
            "
          >
            <ChevronLeft
              aria-hidden="true"
              className="h-4 w-4"
              strokeWidth={2.1}
            />
          </button>

          {/* Next — hidden on mobile, shown md+ */}
          <button
            type="button"
            onClick={goNext}
            disabled={activeIndex === maxIndex}
            aria-label="Next community image"
            className="
              absolute right-4 top-1/2 z-10
              hidden h-11 w-11 -translate-y-1/2
              cursor-pointer items-center justify-center
              rounded-full border border-black/10 bg-white/88
              text-[var(--ink)] shadow-[0_12px_26px_rgba(17,17,17,0.08)]
              transition-all duration-300
              hover:-translate-y-[calc(50%+2px)]
              hover:border-[var(--accent)]/30
              hover:shadow-[0_18px_32px_rgba(17,17,17,0.13)]
              hover:text-[var(--accent-deep)]
              active:scale-[0.93] disabled:opacity-30
              md:inline-flex
            "
          >
            <ChevronRight
              aria-hidden="true"
              className="h-4 w-4"
              strokeWidth={2.1}
            />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden rounded-[22px]">
            <div
              className="flex cursor-grab select-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] active:cursor-grabbing"
              style={{ transform: `translateX(-${translatePct}%)` }}
            >
              {communitySlides.map((slide, index) => (
                <article
                  key={index}
                  className="flex-shrink-0 px-1.5"
                  style={{ width: `${slideWidthPct}%` }}
                >
                  <div className="relative aspect-[0.54] overflow-hidden rounded-2xl bg-[rgba(245,237,221,0.72)] max-sm:rounded-[18px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      unoptimized={siteConfig.media.unoptimizedImages}
                      className={`${slide.imageClassName} transition-transform duration-500 hover:scale-[1.03]`}
                      draggable={false}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>


          {/* Dots — one per "page" */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[var(--accent)]"
                    : "w-2.5 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>
      </RevealItem>
    </section>
  );
}
