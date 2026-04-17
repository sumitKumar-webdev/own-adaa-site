import Link from "next/link";

import { siteConfig } from "./site-config";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] px-4 py-8">
      <div className="pointer-events-none absolute left-[-8rem] top-[-5rem] h-64 w-64 rounded-full bg-[rgba(191,13,77,0.08)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-7rem] right-[-6rem] h-72 w-72 rounded-full bg-[rgba(214,186,131,0.14)] blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <section className="w-full max-w-3xl rounded-[34px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,252,245,0.94),rgba(245,237,221,0.8))] p-6 shadow-[0_24px_52px_rgba(17,17,17,0.08)] md:p-10">
          <p className="text-[0.74rem] font-bold uppercase tracking-[0.24em] text-[var(--accent-deep)]">
            Error 404
          </p>
          <h1 className="mt-3 [font-family:var(--font-editorial)] text-[clamp(3.2rem,10vw,6rem)] leading-[0.9] tracking-[-0.05em] text-[var(--ink)]">
            Page not found.
          </h1>
          <p className="mt-5 max-w-[34rem] text-[1rem] leading-[1.8] text-[var(--ink-soft)]">
            The page you tried to open does not exist or may have been moved.
            Return to the main site or visit the upcoming page while this part
            of the experience is being prepared.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex min-h-[3.15rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,#9a063b_0%,#bf0d4d_55%,#d53870_100%)] px-6 text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[#fffaf4] shadow-[0_16px_34px_rgba(191,13,77,0.2)] transition-transform duration-300 hover:-translate-y-px"
            >
              Back Home
            </Link>
            <Link
              href="/coming-soon"
              className="inline-flex min-h-[3.15rem] items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[var(--ink)] transition-transform duration-300 hover:-translate-y-px hover:border-[var(--accent)]/30"
            >
              Coming Soon
            </Link>
          </div>

          <div className="mt-10 border-t border-black/8 pt-5 text-[0.78rem] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
            {siteConfig.brand.name} • {siteConfig.brand.tagline}
          </div>
        </section>
      </div>
    </main>
  );
}
