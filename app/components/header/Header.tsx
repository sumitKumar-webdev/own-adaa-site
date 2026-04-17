"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "../../site-config";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = siteConfig.navigation;
  const viewCollectionClassName =
    "button-shimmer button-shimmer--accent items-center justify-center rounded-full bg-[linear-gradient(135deg,#9a063b_0%,#bf0d4d_55%,#d53870_100%)] text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#fffaf4] shadow-[0_16px_32px_rgba(191,13,77,0.18)] transition-[transform,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:shadow-[0_18px_38px_rgba(191,13,77,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(191,13,77,0.26)] focus-visible:ring-offset-2";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  return (
    <header
      className={`sticky top-4 z-20 mx-auto mb-6 max-w-[1320px] transform-gpu transition-[transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-md:top-3 ${
        isScrolled ? "md:translate-y-1" : "md:translate-y-0"
      }`}
    >
      <div
        className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-0 border px-0 py-4 backdrop-blur-[10px] transform-gpu will-change-[transform,border-radius,padding,background-color,box-shadow] transition-[border-color,border-radius,background-color,box-shadow,padding,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:grid-cols-[auto_1fr_auto] ${
          isScrolled
            ? "scale-[0.992] rounded-[2rem] border-white/55 bg-[rgba(255,252,245,0.74)] px-3 py-3 shadow-[0_18px_40px_rgba(17,17,17,0.08)] backdrop-blur-xl max-md:rounded-[26px] md:rounded-full md:px-6"
            : "scale-100 border-transparent border-b-black/8 bg-transparent shadow-none max-md:rounded-[28px] max-md:border-black/8 max-md:bg-[rgba(255,252,245,0.92)] max-md:px-3 max-md:py-3 max-md:shadow-[0_16px_34px_rgba(17,17,17,0.06)]"
        }`}
      >
        <Link
          href="/#top"
          aria-label={siteConfig.brand.homeLabel}
          className="inline-flex min-w-0 items-center gap-2.5 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-sm:gap-2"
        >
          <Image
            src="/brand-mark.avif"
            alt={siteConfig.brand.logoAlt}
            width={52}
            height={52}
            unoptimized={siteConfig.media.unoptimizedImages}
            className={`h-[3rem] w-[3rem] rounded-full transform-gpu transition-[transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-sm:h-[2.65rem] max-sm:w-[2.65rem] ${
              isScrolled ? "scale-[0.94]" : "scale-100"
            }`}
            priority
          />
          <div className="grid min-w-0">
            <span
              className={`truncate [font-family:var(--font-editorial)] tracking-[0.04em] text-[var(--ink)] transform-gpu transition-[transform,font-size,letter-spacing] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-sm:text-[1.14rem] ${
                isScrolled
                  ? "translate-y-[-0.03rem] text-[1.28rem]"
                  : "translate-y-0 text-[1.4rem]"
              }`}
            >
              {siteConfig.brand.name}
            </span>
            <span className="truncate text-[0.76rem] uppercase tracking-[0.16em] text-[var(--ink-soft)] max-sm:hidden">
              {siteConfig.brand.tagline}
            </span>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden justify-center gap-[clamp(1rem,2vw,2rem)] text-[0.78rem] font-semibold uppercase tracking-[0.18em] md:flex"
        >
          {navigationItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="relative text-[var(--ink-soft)] transition duration-200 hover:text-[var(--ink)] after:absolute after:-bottom-[0.45rem] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/12 bg-white/70 text-[var(--ink)] transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:border-[var(--accent)]/30 md:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={2.1} />
          ) : (
            <Menu aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={2.1} />
          )}
        </button>

        <Link
          href={siteConfig.cta.href}
          className={`hidden lg:inline-flex ${viewCollectionClassName} ${
            isScrolled ? "min-h-[2.55rem] px-4" : "min-h-[2.8rem] px-5"
          }`}
        >
          <span className="button-shimmer__label">{siteConfig.cta.label}</span>
        </Link>

        <div
          className={`col-span-2 overflow-hidden transition-[max-height,opacity,padding,margin] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
            isMenuOpen
              ? "mt-3 max-h-80 border-t border-black/8 pt-3 opacity-100"
              : "mt-0 max-h-0 border-t border-transparent pt-0 opacity-0"
          }`}
        >
          <nav aria-label="Mobile primary" className="grid gap-2">
            {navigationItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-[2.85rem] items-center justify-center rounded-full border border-black/8 bg-white/55 px-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink)] transition-[transform,border-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[var(--accent)]/30 hover:text-[var(--accent-deep)]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
