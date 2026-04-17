"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { siteConfig } from "../../site-config";
import { EditorialImage } from "./EditorialImage";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number, distance = 28) =>
    prefersReducedMotion
      ? {
          initial: false as const,
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  const expandLine = prefersReducedMotion
    ? {
        initial: false as const,
        animate: { width: "3.5rem" },
        transition: { duration: 0 },
      }
    : {
        initial: { width: 0 },
        animate: { width: "3.5rem" },
        transition: {
          duration: 1,
          delay: 0.8,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      };

  const revealImage = (delay: number) =>
    prefersReducedMotion
      ? {
          initial: false as const,
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 18, scale: 0.97 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: {
            duration: 1,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  const revealSideImage = (delay: number) =>
    prefersReducedMotion
      ? {
          initial: false as const,
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 22, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: {
            duration: 0.95,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  return (
    <section
      id="top"
      className="
        relative mx-auto min-h-[calc(100vh-7rem)] max-w-[1350px] pb-14 pt-15
        lg:pr-[43rem]
        max-[1120px]:grid max-[1120px]:grid-cols-1 max-[1120px]:gap-[clamp(2.5rem,5vw,5rem)]
      "
    >
      <div className="max-w-[39rem] order-2 md:order-1 max-md:max-w-none">
        <motion.div className="flex items-center gap-3" {...fadeUp(0.12, 18)}>
          <motion.span
            className="block h-px bg-[var(--accent)]"
            {...expandLine}
          />
          <p className="eyebrow-label !text-[0.72rem] !tracking-[0.26em]">
            Indo-Western Womenswear
          </p>
        </motion.div>

        <motion.h1
          className="section-title-xl mt-4 max-w-[11ch]"
          {...fadeUp(0.2)}
        >
          Rebellious Elegance,
          <br />
          <span className="text-[var(--accent)]">Worn</span> with Adaa
        </motion.h1>

        <motion.div className="mt-6 flex items-start gap-5" {...fadeUp(0.3)}>
          <div className="mt-1 h-14 w-px shrink-0" />
          <div className="space-y-5">
            <p className="body-copy max-w-[33rem]">
              Indo-Western dressing shaped with bold silhouettes, softer
              details, and a confident editorial point of view.
            </p>
            <div className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>Designed to stand out quietly.</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-9 flex flex-wrap gap-3 max-sm:grid max-sm:grid-cols-1"
          {...fadeUp(0.4)}
        >
          <a
            href="#collection"
            className="button-shimmer button-shimmer--accent inline-flex min-h-[3.35rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,#9a063b_0%,#bf0d4d_55%,#d53870_100%)] px-7 text-center text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[#fffaf4] shadow-[0_16px_40px_rgba(191,13,77,0.22)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_22px_48px_rgba(191,13,77,0.28)] max-sm:w-full"
          >
            <span className="button-shimmer__label">Explore Collection</span>
          </a>

          <a
            href="#journal"
            className="button-shimmer button-shimmer--soft inline-flex min-h-[3.35rem] items-center justify-center rounded-full border border-black/12 bg-[rgba(255,252,245,0.74)] px-7 text-center text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[var(--ink)] shadow-[0_12px_26px_rgba(17,17,17,0.05)] transition-[transform,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-black/20 hover:bg-white/90 hover:shadow-[0_18px_34px_rgba(17,17,17,0.08)] max-sm:w-full"
          >
            <span className="button-shimmer__label">View Lookbook</span>
          </a>
        </motion.div>
      </div>

      <div
        className="relative min-h-[48rem] order-1 md:order-2 lg:absolute lg:right-0 lg:top-1/2 lg:w-[39rem] lg:-translate-y-1/2 max-[1120px]:min-h-0 max-md:grid max-md:gap-4
        "
      >
        <motion.div
          className="hero-img-main editorial-hover ml-auto aspect-[0.84] w-full max-w-[39rem] overflow-hidden rounded-[2.5rem] max-[1120px]:ml-0"
          {...revealImage(0.18)}
        >
          <EditorialImage
            src="/instagram/hero-look-1.avif"
            alt="Two models wearing Own Adaa looks in a soft editorial setup."
            sizes="(max-width: 980px) 100vw, 39rem"
            priority
            hoverVariant="editorial"
            className="group h-full w-full"
            imageClassName="object-[center_24%]"
          />
        </motion.div>

        <motion.div
          className="hero-img-side absolute left-0 top-5 md:top-14 w-[min(18rem,38%)] -rotate-[4deg] overflow-hidden rounded-[1.6rem] shadow-[0_24px_52px_rgba(17,17,17,0.16)]"
          {...revealSideImage(0.44)}
        >
          <EditorialImage
            src="/instagram/hero-look-3.avif"
            alt="Own Adaa teal printed tunic look."
            sizes="(max-width: 980px) 80vw, 18rem"
            hoverVariant="editorial"
            className="group aspect-[0.76] w-full"
            imageClassName="object-[center_18%]"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-0 z-10 w-[min(13rem,28%)] rounded-[1.4rem] bg-[rgba(255,252,245,0.94)] p-1 shadow-[0_20px_40px_rgba(17,17,17,0.12)] max-[1120px]:bottom-0 max-md:w-[min(12rem,62%)]"
          {...revealImage(0.56)}
        >
          <div className="relative aspect-[0.82] overflow-hidden rounded-2xl">
            <Image
              src="/instagram/hero-look-2.avif"
              alt="Own Adaa white dress editorial portrait."
              fill
              sizes="220px"
              unoptimized={siteConfig.media.unoptimizedImages}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
