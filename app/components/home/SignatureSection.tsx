import Image from "next/image";
import { siteConfig } from "../../site-config";

import { EditorialImage } from "./EditorialImage";
import { RevealItem } from "./RevealItem";
import { ScanSearch, Scissors, Sparkles } from "lucide-react";

const signatureBlocks = [
  {
    title: "Crafted placement",
    copy: "Every motif is positioned with intent, allowing the garment to feel composed rather than decorated.",
    Icon: ScanSearch,
  },
  {
    title: "Refined finishing",
    copy: "Edges, cuffs, and seams are shaped to hold structure while maintaining ease and fluidity.",
    Icon: Scissors,
  },
  {
    title: "Detail as identity",
    copy: "Each element is considered in isolation, yet designed to belong to a larger, cohesive story.",
    Icon: Sparkles,
  },
] as const;

const detailStudies = [
  {
    title: "Spiral stitch",
    caption:
      "Linear stitch work gives the front panel a quiet, dimensional rhythm.",
    src: "/instagram/signature-details/spiral-stitch.jpeg",
    alt: "Close-up of the spiral stitch detailing across the kurta front.",
    positionClass: "left-[52%] top-[37%]",
    wireClass:
      "left-1 top-0 h-px w-0 bg-[#6b7f74]/55 transition-all duration-500 group-hover/detail:w-20 group-focus-within/detail:w-20",
    wireVerticalClass:
      "left-[5.25rem] top-0 h-0 w-px bg-[#6b7f74]/35 transition-all duration-500 group-hover/detail:h-10 group-focus-within/detail:h-10",
    panelClass:
      "left-[5.25rem] top-10 translate-x-3 [clip-path:inset(0_100%_0_0_round_5px)] group-hover/detail:translate-x-0 group-hover/detail:opacity-100 group-hover/detail:[clip-path:inset(0_0_0_0_round_5px)] group-focus-within/detail:translate-x-0 group-focus-within/detail:opacity-100 group-focus-within/detail:[clip-path:inset(0_0_0_0_round_5px)]",
    mobilePanelClass:
      "top-5 left-0 translate-y-2 [clip-path:inset(0_100%_0_0_round_5px)] group-hover/detail:translate-y-0 group-hover/detail:opacity-100 group-hover/detail:[clip-path:inset(0_0_0_0_round_5px)] group-focus-within/detail:translate-y-0 group-focus-within/detail:opacity-100 group-focus-within/detail:[clip-path:inset(0_0_0_0_round_5px)]",
  },
  {
    title: "Sleeve cuff panel",
    caption:
      "The cuff print frames the volume and keeps the sleeve finish tailored.",
    src: "/instagram/signature-details/sleeve-cuff-panel.jpeg",
    alt: "Close-up of the kurta sleeve cuff panel.",
    positionClass: "left-[37%] top-[40%]",
    wireClass:
      "right-1 top-0 h-px w-0 bg-[#6b7f74]/55 transition-all duration-500 group-hover/detail:w-20 group-focus-within/detail:w-20",
    wireVerticalClass:
      "right-[5.25rem] top-0 h-0 w-px bg-[#6b7f74]/35 transition-all duration-500 group-hover/detail:h-10 group-focus-within/detail:h-10",
    panelClass:
      "right-[3.8rem] top-10 -translate-x-3 [clip-path:inset(0_0_0_100%_round_5px)] group-hover/detail:translate-x-0 group-hover/detail:opacity-100 group-hover/detail:[clip-path:inset(0_0_0_0_round_5px)] group-focus-within/detail:translate-x-0 group-focus-within/detail:opacity-100 group-focus-within/detail:[clip-path:inset(0_0_0_0_round_5px)]",
    mobilePanelClass:
      "top-5 right-0 translate-y-2 [clip-path:inset(0_0_0_100%_round_5px)] group-hover/detail:translate-y-0 group-hover/detail:opacity-100 group-hover/detail:[clip-path:inset(0_0_0_0_round_5px)] group-focus-within/detail:translate-y-0 group-focus-within/detail:opacity-100 group-focus-within/detail:[clip-path:inset(0_0_0_0_round_5px)]",
  },
  {
    title: "Printed border panel",
    caption:
      "A denser border story anchors the hem and sharpens the silhouette break.",
    src: "/instagram/signature-details/printed-border-panel.jpeg",
    alt: "Close-up of the printed border panel at the kurta hem.",
    positionClass: "left-[53%] top-[59%]",
    wireClass:
      "left-1 top-0 h-px w-0 bg-[#6b7f74]/55 transition-all duration-500 group-hover/detail:w-24 group-focus-within/detail:w-24",
    wireVerticalClass:
      "left-[6.25rem] -top-10 h-0 w-px bg-[#6b7f74]/35 transition-all duration-500 group-hover/detail:h-10 group-focus-within/detail:h-10",
    panelClass:
      "left-[6.25rem] -top-28 translate-x-3 [clip-path:inset(0_100%_0_0_round_5px)] group-hover/detail:translate-x-0 group-hover/detail:opacity-100 group-hover/detail:[clip-path:inset(0_0_0_0_round_5px)] group-focus-within/detail:translate-x-0 group-focus-within/detail:opacity-100 group-focus-within/detail:[clip-path:inset(0_0_0_0_round_5px)]",
    mobilePanelClass:
      "-top-28 left-0 translate-y-2 [clip-path:inset(0_100%_0_0_round_5px)] group-hover/detail:translate-y-0 group-hover/detail:opacity-100 group-hover/detail:[clip-path:inset(0_0_0_0_round_5px)] group-focus-within/detail:translate-y-0 group-focus-within/detail:opacity-100 group-focus-within/detail:[clip-path:inset(0_0_0_0_round_5px)]",
  },
  {
    title: "Scalloped trouser hem",
    caption:
      "The trouser hem lands with a neat scallop that finishes the set cleanly.",
    src: "/instagram/signature-details/scalloped-trouser-hem.jpeg",
    alt: "Close-up of the scalloped trouser hem.",
    positionClass: "left-[40%] top-[83%]",
    wireClass:
      "right-1 top-0 h-px w-0 bg-[#6b7f74]/55 transition-all duration-500 group-hover/detail:w-24 group-focus-within/detail:w-24",
    wireVerticalClass:
      "right-[6.25rem] -top-10 h-0 w-px bg-[#6b7f74]/35 transition-all duration-500 group-hover/detail:h-10 group-focus-within/detail:h-10",
    panelClass:
      "right-[4.25rem] -top-28 -translate-x-3 [clip-path:inset(0_0_0_100%_round_5px)] group-hover/detail:translate-x-0 group-hover/detail:opacity-100 group-hover/detail:[clip-path:inset(0_0_0_0_round_5px)] group-focus-within/detail:translate-x-0 group-focus-within/detail:opacity-100 group-focus-within/detail:[clip-path:inset(0_0_0_0_round_5px)]",
    mobilePanelClass:
      "-top-28 right-0 translate-y-2 [clip-path:inset(0_0_0_100%_round_5px)] group-hover/detail:translate-y-0 group-hover/detail:opacity-100 group-hover/detail:[clip-path:inset(0_0_0_0_round_5px)] group-focus-within/detail:translate-y-0 group-focus-within/detail:opacity-100 group-focus-within/detail:[clip-path:inset(0_0_0_0_round_5px)]",
  },
] as const;

export function SignatureSection() {
  return (
    <section className="mx-auto max-w-330 pt-8">
      <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start gap-[clamp(1.5rem,4vw,2.2rem)] max-[1120px]:grid-cols-1">
        <RevealItem
          delay={0.06}
          x={-42}
          y={10}
          scaleFrom={0.98}
          className="group/signature relative max-w-[28rem] max-sm:mx-auto max-sm:w-full"
        >
          <div className="relative mx-auto max-w-130 overflow-visible max-sm:max-w-none max-sm:overflow-hidden">
            <EditorialImage
              src="/instagram/signature-details/interactive-detail-study.png"
              alt="Own Adaa model in a sage kurta and dark trousers standing inside an editorial archway."
              sizes="(max-width: 1080px) 100vw, 45vw"
              hoverVariant="zoom"
              className="group relative z-0 aspect-[0.78] w-full rotate-2 max-sm:rotate-0 rounded-none!"
              imageClassName="object-center scale-[1.01] group-hover:scale-[1.04] rounded-none!"
              overlayClassName="from-[rgba(230,237,230,0.38)] via-[rgba(230,237,230,0.08)] to-transparent group-hover:opacity-100 rounded-none!"
              frameClassName="border-none"
            />
            <div className="pointer-events-none absolute -right-[8%] top-[2.7%] z-20 h-5 w-16 rotate-[60deg] bg-[rgba(216,197,157,0.86)]" />
            <div className="pointer-events-none absolute -left-[8%] bottom-[2.7%] z-20 h-5 w-16 rotate-[60deg] bg-[rgba(216,197,157,0.86)]" />

            <div className="absolute inset-0 z-30">
              {detailStudies.map((detail) => (
                <div
                  key={detail.title}
                  className={`group/detail absolute ${detail.positionClass}`}
                >
                  <button
                    type="button"
                    aria-label={`Reveal ${detail.title}`}
                    className="relative z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6b7f74] shadow-[0_0_0_5px_rgba(248,244,236,0.94)] transition duration-300 group-hover/detail:scale-110 focus-visible:scale-110 focus-visible:outline-none max-md:h-3 max-md:w-3 max-md:shadow-[0_0_0_4px_rgba(248,244,236,0.94)]"
                  />

                  {/* Desktop: wires + panel */}
                  <div
                    className={`pointer-events-none absolute max-md:hidden ${detail.wireClass}`}
                  />
                  <div
                    className={`pointer-events-none absolute max-md:hidden ${detail.wireVerticalClass}`}
                  />
                  <div
                    className={`absolute z-20 w-48 opacity-0 transition-[clip-path,opacity,transform] duration-500 max-md:hidden ${detail.panelClass}`}
                  >
                    <article className="overflow-hidden rounded border border-[#5f7268]/15 bg-[#f8f5ee]/98 p-1 shadow-[0_10px_22px_rgba(0,0,0,0.05)]">
                      <div className="relative aspect-square overflow-hidden rounded bg-[#ece6da]">
                        <Image
                          src={detail.src}
                          alt={detail.alt}
                          fill
                          sizes="176px"
                          unoptimized={siteConfig.media.unoptimizedImages}
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="mt-1.5 px-1">
                        <p className="text-[0.86rem] font-medium leading-tight text-[#1b231e]">
                          {detail.title}
                        </p>
                        <p className="mt-1 text-[0.72rem] leading-[1.45] text-[#6b756f]">
                          {detail.caption}
                        </p>
                      </div>
                    </article>
                  </div>

                  {/* Mobile: panel anchored left-0 or right-0, always inside image */}
                  <div
                    className={`absolute z-20 w-28 opacity-0 transition-[clip-path,opacity,transform] duration-500 md:hidden ${detail.mobilePanelClass}`}
                  >
                    <article className="overflow-hidden rounded border border-[#5f7268]/15 bg-[#f8f5ee]/98 p-1 shadow-[0_10px_22px_rgba(0,0,0,0.08)]">
                      <div className="relative aspect-square overflow-hidden rounded bg-[#ece6da]">
                        <Image
                          src={detail.src}
                          alt={detail.alt}
                          fill
                          sizes="112px"
                          unoptimized={siteConfig.media.unoptimizedImages}
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-1 px-0.5">
                        <p className="text-[0.65rem] font-medium leading-tight text-[#1b231e]">
                          {detail.title}
                        </p>
                        <p className="mt-0.5 text-[0.58rem] leading-[1.35] text-[#6b756f]">
                          {detail.caption}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealItem>

        <div className="pt-1 max-sm:pt-0">
          <RevealItem delay={0.12} x={38} y={8}>
            <p className="text-[0.74rem] font-bold uppercase tracking-[0.22em] eyebrow-label">
              Signature Language
            </p>
            <h3 className="[font-family:var(--font-editorial)] text-[clamp(2rem,3.5vw,3.1rem)] font-semibold leading-[0.99] tracking-[-0.035em] text-[var(--ink)]">
              The signature sits in how the garment is finished, not just how it
              is photographed.
            </h3>
          </RevealItem>

          <div className="mt-6 flex flex-wrap gap-2">
            {signatureBlocks.map((item, index) => {
              const Icon = item.Icon;
              return (
                <RevealItem
                  key={item.title}
                  delay={0.16 + index * 0.06}
                  x={index % 2 === 0 ? 18 : -18}
                  y={12}
                  scaleFrom={0.98}
                >
                  <div className="group relative border-b border-[#5f7268]/12 pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5f7268]/12 bg-[#f6f2ea] text-[var(--accent)]">
                          <Icon size={20} strokeWidth={1.7} />
                        </div>
                        <div>
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                            {item.title}
                          </p>
                          <p className="mt-2 max-w-[28rem] text-[0.92rem] leading-[1.7] text-[#5c6962]">
                            {item.copy}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)]/30 transition-all duration-500 group-hover:w-full" />
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
