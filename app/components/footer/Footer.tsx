import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "../../site-config";
import { RevealItem } from "../home/RevealItem";
import { InstagramIcon, WhatsAppIcon } from "../home/SocialIcons";

export function Footer() {
  const footerLinks = siteConfig.navigation;

  return (
    <footer className="mx-auto mt-14 border-t border-black/10 pt-8">
      <div className="grid gap-8 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,252,245,0.82),rgba(245,237,221,0.62))] px-5 py-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)] md:grid-cols-[minmax(0,1fr)_auto] md:px-7">
        <RevealItem delay={0.06} x={-24} y={12} className="max-w-[28rem]">
          <Link href="/#top" className="inline-flex items-center gap-3">
            <Image
              src="/brand-mark.avif"
              alt={siteConfig.brand.logoAlt}
              width={46}
              height={46}
              unoptimized={siteConfig.media.unoptimizedImages}
              className="rounded-full"
            />
            <div className="grid">
              <span className="[font-family:var(--font-editorial)] text-[1.35rem] tracking-[0.04em] text-[var(--ink)]">
                {siteConfig.brand.name}
              </span>
              <span className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                {siteConfig.brand.tagline}
              </span>
            </div>
          </Link>

          <p className="mt-4 max-w-[24rem] text-[0.96rem] leading-[1.8] text-[var(--ink-soft)]">
            {siteConfig.brand.description}
          </p>
        </RevealItem>

        <RevealItem
          delay={0.12}
          x={28}
          y={10}
          className="grid gap-6 md:justify-items-end"
        >
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-3 text-[0.74rem] font-semibold uppercase tracking-[0.18em]"
          >
            {footerLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[var(--ink-soft)] transition duration-200 hover:text-[var(--accent-deep)]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-3">
            <p className="w-full text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)] md:text-right">
              {siteConfig.footer.orderLine}
            </p>
            <a
              href={siteConfig.social.instagram.href}
              target="_blank"
              rel="noreferrer"
              className="button-shimmer button-shimmer--accent inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#9a063b_0%,#bf0d4d_55%,#d53870_100%)] px-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#fffaf4] shadow-[0_14px_28px_rgba(191,13,77,0.16)] transition duration-200 hover:-translate-y-px"
            >
              <span className="button-shimmer__label inline-flex items-center gap-2">
                <InstagramIcon className="py-2 w-[1.12rem]" />
                {siteConfig.social.instagram.label}
              </span>
            </a>
            <a
              href={siteConfig.social.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="button-shimmer button-shimmer--soft inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[var(--ink)] transition duration-200 hover:-translate-y-px hover:border-[var(--accent)]/30"
            >
              <span className="button-shimmer__label inline-flex items-center gap-2">
                <WhatsAppIcon className="py-2 w-[1.12rem]" />
                {siteConfig.social.whatsapp.label}
              </span>
            </a>
          </div>
        </RevealItem>
      </div>

      <RevealItem
        delay={0.18}
        y={18}
        className="flex flex-col gap-2 px-1 pb-3 pt-4 text-[0.72rem] uppercase tracking-[0.16em] text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between"
      >
        <span>{siteConfig.brand.copyright}</span>
        <span>{siteConfig.footer.closingLine}</span>
      </RevealItem>
    </footer>
  );
}
