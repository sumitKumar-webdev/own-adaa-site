import React from "react";

const TextNote = ({
  title,
  desc,
  className,
  preserveMobilePosition = false,
}: {
  title: string;
  desc: string;
  className?: string;
  preserveMobilePosition?: boolean;
}) => {
  return (
    <div
      className={`absolute max-w-60 rounded-2xl border border-black/10 bg-[rgb(255,252,245)] p-2 md:p-4 shadow-[0_16px_34px_rgba(17,17,17,0.08)] ${
        preserveMobilePosition ? "" : "max-sm:static max-sm:mt-2 max-sm:max-w-none"
      } ${className}`}
    >
      <span className="text-[0.5rem] md:text-[0.7rem] font-bold uppercase tracking-[0.22em] text-(--accent-deep)">
        {title}
      </span>
      <p className="mt-2 [font-family:var(--font-editorial)] text-[0.875rem] md:text-[1.5rem] leading-[1.02] tracking-[-0.03em] text-[var(--ink)]">
        {desc}
      </p>
    </div>
  );
};

export default TextNote;
