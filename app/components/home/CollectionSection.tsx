import { collectionStories } from "./content";
import { ScrollNavLink } from "../ScrollNavLink";
import TapedTextNote from "../Text Note/taped-text-note";
import { EditorialImage } from "./EditorialImage";
import { RevealItem } from "./RevealItem";

const chapterThemes = [
  {
    cardClass:
      "bg-[linear-gradient(180deg,#18110f_0%,#241714_100%)] text-[#fff7ee]",
    eyebrowClass: "text-[#ddb87d]",
    pillClass: "bg-[rgba(221,184,125,0.14)] text-[#f4dcc0]",
    copyClass: "text-[#dfd3c2]",
    noteClass: "text-[#f2e4d3]",
    frameClass: "border-white/16",
  },
  {
    cardClass:
      "bg-[linear-gradient(180deg,rgba(240,246,251,0.98),rgba(228,238,247,0.94))] text-[var(--ink)]",
    eyebrowClass: "text-[#35577c]",
    pillClass: "bg-[rgba(53,87,124,0.1)] text-[#35577c]",
    copyClass: "text-[var(--ink-soft)]",
    noteClass: "text-[#35577c]",
    frameClass: "border-[rgba(255,255,255,0.66)]",
  },
  {
    cardClass:
      "bg-[linear-gradient(180deg,rgba(251,244,248,0.98),rgba(244,231,238,0.94))] text-[var(--ink)]",
    eyebrowClass: "text-[#8a4f6a]",
    pillClass: "bg-[rgba(138,79,106,0.1)] text-[#8a4f6a]",
    copyClass: "text-[var(--ink-soft)]",
    noteClass: "text-[#8a4f6a]",
    frameClass: "border-[rgba(255,255,255,0.72)]",
  },
] as const;

type ChapterCardProps = {
  index: number;
};

function ChapterCard({ index }: ChapterCardProps) {
  const story = collectionStories[index];
  const theme = chapterThemes[index];

  return (
    <article
      className={`group h-full overflow-hidden rounded-[28px] border border-black/8 p-3 shadow-[0_18px_36px_rgba(17,17,17,0.06)] max-sm:rounded-[22px] ${theme.cardClass}`}
    >
      <ScrollNavLink
        targetId="top"
        aria-label={story.title}
        className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-3"
      >
        <div className="flex items-center justify-between gap-3">
          <span
            className={`text-[0.68rem] font-bold uppercase tracking-[0.22em] ${theme.eyebrowClass}`}
          >
            Chapter {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${theme.pillClass}`}
          >
            {story.subtitle}
          </span>
        </div>

        <EditorialImage
          src={story.image}
          alt={story.alt}
          sizes="(max-width: 1120px) 100vw, 31vw"
          hoverVariant="zoom"
          className="aspect-[0.8] w-full rounded-[18px]"
          frameClassName={`${theme.frameClass} rounded-[18px]`}
        />

        <div className="grid content-start gap-3">
          <h3 className="max-w-[11ch] [font-family:var(--font-editorial)] text-[1.95rem] leading-[0.95] tracking-[-0.04em] md:text-[2.08rem]">
            {story.title}
          </h3>
          <p className={`text-[0.9rem] leading-[1.68] ${theme.copyClass}`}>
            {story.description}
          </p>
        </div>
      </ScrollNavLink>
    </article>
  );
}

export function CollectionSection() {
  return (
    <section id="collection" className="mx-auto max-w-[1320px] pt-10">
      <div className="relative mb-8 grid grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] items-end gap-6 max-[1120px]:grid-cols-1">
        <RevealItem delay={0.06} y={18} className="relative max-w-[48rem]">
          <p className="text-[0.74rem] font-bold uppercase tracking-[0.22em] text-[var(--accent-deep)]">
            Collection Chapters
          </p>
          <h2 className="[font-family:var(--font-editorial)] text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--ink)]">
            Three distinct looks, each presented as its own chapter.
          </h2>
        </RevealItem>
        <RevealItem
          delay={0.14}
          x={22}
          y={10}
          className="
    pointer-events-none
    hidden md:block
    md:absolute md:right-[2rem] lg:top-[0.8rem]
    z-10 h-0 w-0
  "
        >
          <TapedTextNote
            title="Collection Note"
            desc="One collection, shown through three moods so each look reads with its own identity."
            className="-right-5 top-0 w-[15.5rem] -rotate-[3.5deg]"
            tapeClassName="rotate-[1.5deg]"
          />
        </RevealItem>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
        <RevealItem
          delay={0.16}
          x={-28}
          y={14}
          scaleFrom={0.985}
          className="h-full"
        >
          <ChapterCard index={0} />
        </RevealItem>
        <RevealItem delay={0.22} y={20} scaleFrom={0.985} className="h-full">
          <ChapterCard index={1} />
        </RevealItem>
        <RevealItem
          delay={0.28}
          x={28}
          y={14}
          scaleFrom={0.985}
          className="h-full"
        >
          <ChapterCard index={2} />
        </RevealItem>
      </div>
    </section>
  );
}
