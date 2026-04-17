import { EditorialImage } from "./EditorialImage";
import { RevealItem } from "./RevealItem";

export function PressSection() {
  return (
    <section className="mx-auto max-w-[1320px] pt-10">
      <div className="rounded-[34px] bg-[linear-gradient(135deg,#121212_0%,#191919_100%)] px-[clamp(1rem,3vw,2rem)] py-12 text-[#fff8ef] max-sm:rounded-[26px] max-sm:py-8">
        <div className="grid grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] items-center gap-[clamp(1.5rem,4vw,3rem)] max-[1120px]:grid-cols-1">
          <RevealItem delay={0.08} x={-36} y={10}>
            <p className="text-[0.74rem] font-bold uppercase tracking-[0.22em] text-[#d6ba83]">
              Editorial Recognition
            </p>
            <h2 className="[font-family:var(--font-editorial)] text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-[#fff6e8]">
              Vogue spotlighted Own Adaa in a sharper monochrome story.
            </h2>
            <p className="mt-4 leading-[1.8] text-[#d6cdc0]">
              The Vogue post now works here as proof of the feature itself,
              giving the section a clearer editorial stamp instead of reading
              like a generic fashion block.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#efe2ca]">
              <span className="h-2 w-2 rounded-full bg-[#d6ba83]" />
              <span>Vogue India feature • Own Adaa</span>
            </div>
          </RevealItem>

          <div className="grid grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] items-center gap-4 max-[1120px]:grid-cols-1">
            <RevealItem delay={0.14} y={24} scaleFrom={0.985}>
              <EditorialImage
                src="/instagram/629828913_17875753473500312_2805026210741004260_n.jpeg"
                alt="Vogue India feature showing Own Adaa's Noir et Blanc jumpsuit."
                sizes="(max-width: 980px) 100vw, 24vw"
                hoverVariant="none"
                className="group aspect-[0.78] w-full bg-[rgba(255,255,255,0.04)]"
                frameClassName="border-white/18"
              />
            </RevealItem>

            <RevealItem delay={0.2} x={34} y={8} scaleFrom={0.99}>
              <EditorialImage
                src="/proof/vogue-proof.jpeg"
                alt="Screenshot of the Vogue India post featuring Own Adaa."
                sizes="(max-width: 980px) 100vw, 30vw"
                hoverVariant="none"
                className="group aspect-[0.7] w-full transition-[transform,border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:rounded-none hover:shadow-[0_32px_68px_rgba(17,17,17,0.18)]"
                frameClassName="transition-[border-radius] duration-500 group-hover:rounded-none"
              />
            </RevealItem>
          </div>
        </div>
      </div>
    </section>
  );
}
