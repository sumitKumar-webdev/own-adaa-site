type TapedTextNoteProps = {
  title: string;
  desc: string;
  className?: string;
  tapeClassName?: string;
};

const TapedTextNote = ({
  title,
  desc,
  className = "",
  tapeClassName = "",
}: TapedTextNoteProps) => {
  return (
    <div
      className={`absolute max-w-60 rounded-[1.7rem] border border-black/10 bg-[rgba(255,252,245,0.97)] px-4 pb-4 pt-5 shadow-[0_20px_42px_rgba(17,17,17,0.08)] ${className}`}
    >
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] bg-[rgba(216,197,157,0.82)] shadow-[0_7px_18px_rgba(17,17,17,0.08)] ${tapeClassName}`}
      />

      <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[var(--accent-deep)]">
        {title}
      </span>
      <p className="mt-2 [font-family:var(--font-editorial)] text-[1.1rem] leading-[1.02] tracking-[-0.03em] text-[var(--ink)] md:text-[1.35rem]">
        {desc}
      </p>
    </div>
  );
};

export default TapedTextNote;
