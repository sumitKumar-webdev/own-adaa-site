import { EditorialImage } from "../home/EditorialImage";

type AtelierFrameCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  index: number;
  className?: string;
};

export function AtelierFrameCard({
  title,
  description,
  image,
  alt,
  index,
  className = "",
}: AtelierFrameCardProps) {
  return (
    <article
      className={`group relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[28px] border border-[rgba(22,31,27,0.08)] bg-[linear-gradient(180deg,rgba(252,248,241,0.96),rgba(247,241,232,0.9))] p-[0.38rem] shadow-[0_14px_34px_rgba(17,17,17,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[var(--accent-deep)]/16 hover:shadow-[0_22px_44px_rgba(17,17,17,0.08)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-[18%] top-0 h-16 rounded-full bg-white/40 blur-2xl" />

      <div className="relative flex h-full flex-col rounded-[24px] border border-black/6 bg-[rgba(255,252,246,0.82)] p-3">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />

        <EditorialImage
          src={image}
          alt={alt}
          sizes="(max-width: 980px) 100vw, 24vw"
          hoverVariant="none"
          className="aspect-[0.96] w-full shrink-0 overflow-hidden rounded-[20px]"
          imageClassName="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />

        <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[0.64rem] font-bold uppercase tracking-[0.24em] text-[var(--accent-deep)]">
              Frame {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-3 [font-family:var(--font-editorial)] text-[1.5rem] leading-[1.02] tracking-[-0.03em] text-[var(--ink)] max-md:text-[1.35rem]">
            {title}
          </h3>

          <p className="mt-3 flex-1 text-[0.92rem] leading-[1.72] text-[color:rgba(49,58,53,0.72)]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
