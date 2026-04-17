import Image from "next/image";

import { RevealItem } from "./RevealItem";

const processNotes = [
  "Print and motif boards",
  "Silhouette sketching",
  "Fabric and fit decisions",
  "Hand-finished construction",
] as const;

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-[1320px] pt-10">
      <div className="relative overflow-hidden rounded-[34px] bg-[#161312] px-5 py-6 text-[#f6ecd9] shadow-[0_22px_48px_rgba(17,17,17,0.12)] md:px-6 max-sm:rounded-[26px]">
        <div className="grid grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-[clamp(1.5rem,4vw,3rem)] max-[1120px]:grid-cols-1">
          <div className="relative max-w-[32rem] pl-2 md:pl-6">
            <RevealItem delay={0.08} x={-34} y={10}>
              <p className="eyebrow-label relative !text-[#cbb17a]">
                Our Process
              </p>
              <h2 className="relative mt-2 [font-family:var(--font-editorial)] text-[clamp(2.5rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.04em] text-[#fff6e8]">
                From first thought to final stitch.
              </h2>
              <p className="relative mt-5 text-[1rem] leading-[1.9] text-[#e7dcc7] max-md:text-[0.97rem]">
                Every Own Adaa piece begins with references, motif studies,
                silhouette boards, and fabric decisions before it moves into
                sampling, fitting, and hand-finished execution.
              </p>
            </RevealItem>

            <div className="relative mt-8 grid gap-3">
              {processNotes.map((note, index) => (
                <RevealItem
                  key={note}
                  delay={0.14 + index * 0.05}
                  x={index % 2 === 0 ? -18 : 18}
                  y={12}
                >
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#efe2ca]">
                    <span className="h-2 w-2 rounded-full bg-[#d6ba83]" />
                    <span>{note}</span>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>

          <RevealItem
            delay={0.18}
            x={42}
            y={12}
            scaleFrom={0.985}
            className="relative mx-auto aspect-[0.94] w-full max-w-[38rem] min-h-[42rem] pr-0 md:pr-3 max-[1120px]:min-h-0"
          >
            <div className="absolute left-[1%] top-0 w-[54%] rotate-[-3deg] rounded-[1.35rem] bg-[#f8f0df] p-3 shadow-[0_18px_32px_rgba(0,0,0,0.28)] max-md:p-2">
              <div className="relative aspect-[0.74] overflow-hidden rounded-[0.9rem] max-md:rounded-[0.72rem]">
                <Image
                  src="/instagram/process-board-1.jpeg"
                  alt="Process board showing print planning and digital flat references."
                  fill
                  sizes="(max-width: 1120px) 42vw, 24vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="absolute right-[1%] top-[4%] w-[40%] rotate-[4deg] rounded-[1.2rem] bg-[#fbf5e8] p-3 shadow-[0_18px_32px_rgba(0,0,0,0.28)] max-md:p-2">
              <div className="relative aspect-[0.74] overflow-hidden rounded-[0.8rem] max-md:rounded-[0.7rem]">
                <Image
                  src="/instagram/process-board-2.jpeg"
                  alt="Chitra design note board with fit and fabric annotations."
                  fill
                  sizes="(max-width: 1120px) 32vw, 18vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="absolute left-[15%] top-[43%] w-[36%] rotate-[1deg] rounded-[1.15rem] bg-[#f7f0df] p-3 shadow-[0_18px_32px_rgba(0,0,0,0.28)] max-md:p-2">
              <div className="relative aspect-[0.74] overflow-hidden rounded-[0.8rem] max-md:rounded-[0.7rem]">
                <Image
                  src="/instagram/process-board-3.jpeg"
                  alt="Trouser detail study board with construction notes."
                  fill
                  sizes="(max-width: 1120px) 28vw, 15vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="absolute right-[4.5%] top-[39%] w-[46%] overflow-hidden rounded-[1.2rem] border border-white/55 bg-[#f7f1e6] p-2 shadow-[0_20px_36px_rgba(0,0,0,0.3)] max-md:border-white/35 max-md:p-1.5">
              <div className="relative aspect-[0.95] overflow-hidden rounded-[0.9rem] max-md:rounded-[0.72rem]">
                <Image
                  src="/instagram/process-board-4.jpeg"
                  alt="Close-up of stitching and garment construction in progress."
                  fill
                  sizes="(max-width: 1120px) 34vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-[33%] w-[44%] rotate-[-2deg] rounded-[1.15rem] bg-[#f8f0df] p-3 shadow-[0_18px_32px_rgba(0,0,0,0.28)] max-md:p-2">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[0.8rem] max-md:rounded-[0.7rem]">
                <Image
                  src="/instagram/process-board-5.jpeg"
                  alt="Design review board with sketches, references, and fabric swatches."
                  fill
                  sizes="(max-width: 1120px) 32vw, 18vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute left-[22%] -top-[1.7%] h-5 w-16 rotate-[-6deg] bg-[rgba(216,197,157,0.82)]" />
            <div className="pointer-events-none absolute right-[10%] top-[3%] h-5 w-12 rotate-[7deg] bg-[rgba(216,197,157,0.82)]" />
            <div className="pointer-events-none absolute left-[28%] top-[42%] h-5 w-12 rotate-[-4deg] bg-[rgba(216,197,157,0.82)]" />
            <div className="pointer-events-none absolute right-[16%] top-[38%] h-5 w-14 rotate-[5deg] bg-[rgba(216,197,157,0.82)]" />
            <div className="pointer-events-none absolute left-[47%] bottom-[39%] md:bottom-[45%] h-5 w-14 rotate-[-5deg] bg-[rgba(216,197,157,0.82)]" />
          </RevealItem>
        </div>
      </div>
    </section>
  );
}
