import { AtelierFrameCard } from "../cards/AtelierFrameCard";
import { atelierFrames } from "./content";
import { RevealItem } from "./RevealItem";

export function AtelierSection() {
  return (
    <section id="atelier" className="mx-auto max-w-[1320px] pt-10">
      <div className="mb-8 grid grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)] items-end gap-6 max-[1120px]:grid-cols-1">
        <RevealItem delay={0.06} y={18}>
          <p className="text-[0.74rem] font-bold uppercase tracking-[0.22em] text-[var(--accent-deep)]">
            Atelier
          </p>
          <h2 className="[font-family:var(--font-editorial)] text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-[var(--ink)]">
            From{" "}
            <span className="text-[var(--accent)]">
              {" "}
              placement to finishing
            </span>
            , each frame brings the garment closer to its final expression.
          </h2>
        </RevealItem>
      </div>
      <div className="grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3">
        {atelierFrames.map((frame, index) => (
          <RevealItem
            key={frame.title}
            delay={0.12 + index * 0.08}
            x={index === 0 ? -24 : index === 1 ? 0 : 24}
            y={index === 1 ? 22 : 14}
            scaleFrom={0.985}
            className="h-full"
          >
            <AtelierFrameCard
              index={index}
              title={frame.title}
              description={frame.description}
              image={frame.image}
              alt={frame.alt}
            />
          </RevealItem>
        ))}
      </div>
    </section>
  );
}
