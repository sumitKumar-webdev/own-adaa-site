import TextNote from "../Text Note/text-note";
import { EditorialImage } from "./EditorialImage";
import { RevealItem } from "./RevealItem";

const storyPillars = [
  {
    label: "Founded",
    value: "2024 by Sonali Agarwal",
  },
  {
    label: "Signature",
    value: "Indo-Western womenswear",
  },
  {
    label: "Debut chapter",
    value: "Chitra, inspired by Pattachitra",
  },
] as const;

const storyNotes = [
  "Hand-finished pieces with a more considered, small-batch approach.",
  "Cotton-linen blends, breathable fabrics, and sharper structured silhouettes.",
  "Designed for confident women who want tradition and modern edge in the same look.",
] as const;

export function StorySection() {
  return (
    <section id="story" className="mx-auto max-w-[1320px] py-10">
      <div className="grid grid-cols-[minmax(18rem,0.92fr)_minmax(0,1.08fr)] items-start gap-[clamp(1.5rem,4vw,3.5rem)] max-[1120px]:grid-cols-1">
        <RevealItem delay={0.06} className="relative">
          <div className="pointer-events-none absolute -left-4 top-8 h-[72%] w-[82%] rounded-[2rem] bg-[linear-gradient(180deg,rgba(191,13,77,0.08),rgba(191,13,77,0.02))] blur-2xl" />

          <div className="relative rounded-[34px] bg-[linear-gradient(180deg,rgba(255,252,245,0.88),rgba(245,237,221,0.72))] p-2 shadow-[0_20px_42px_rgba(17,17,17,0.06)] max-sm:rounded-[26px] max-sm:p-3">
            <EditorialImage
              src="/instagram/story-brand-red.avif"
              alt="Own Adaa model in a red look framed through a torn paper composition."
              sizes="(max-width: 1120px) 100vw, 36vw"
              hoverVariant="none"
              className="group aspect-[0.98] w-full bg-[rgba(248,239,229,0.94)]"
              imageClassName="object-cover object-center"
              overlayClassName="from-[rgba(248,239,229,0.18)] via-transparent to-transparent"
              frameClassName="border-[rgba(255,252,245,0.58)]"
            />

            <TextNote
              title="Brand essence"
              desc="Rebellious elegance with Indian soul."
              preserveMobilePosition
              className="-bottom-5 right-5 max-sm:-bottom-4 max-sm:right-3 max-sm:max-w-44 max-sm:p-3"
            />

            <TextNote
              title="Founded"
              desc="2024 by Sonali Agarwal."
              preserveMobilePosition
              className="-top-7 -left-3 max-sm:-top-5 max-sm:left-2 max-sm:max-w-44 max-sm:p-3"
            />
          </div>
        </RevealItem>

        <div className="pt-2">
          <RevealItem delay={0.12} className="max-w-[44rem]">
            <p className="eyebrow-label">Brand Story</p>
            <h2 className="section-title-lg">
              Own Adaa merges cultural craft with a bolder <span className="text-[var(--accent)]">Modern Attitude.</span> 
            </h2>
          </RevealItem>

          <div className="mt-6 grid gap-5">
            <RevealItem delay={0.18}>
              <p className="body-copy-regular m-0">
                Founded in 2024 by Sonali Agarwal, Own Adaa is an Indo-Western
                womenswear label built around the idea that elegance does not
                have to feel traditional in a predictable way. The brand brings
                Indian aesthetics, handcrafted detail, and contemporary
                silhouette into the same frame.
              </p>
            </RevealItem>
            <RevealItem delay={0.24}>
              <p className="body-copy-regular m-0">
                From saree-inspired drapes to statement dresses and coordinated
                sets, each piece is designed for modern, confident women who
                want versatility, polish, and individuality in equal measure.
                The result is clothing that feels rooted, expressive, and easy
                to own.
              </p>
            </RevealItem>
          </div>
        </div>
      </div>
    </section>
  );
}
