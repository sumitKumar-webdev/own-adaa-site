"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ComingSoonPage() {
  const reduceMotion = useReducedMotion();

  const badgeMotion = reduceMotion
    ? {}
    : {
        animate: {
          y: [0, -10, 0],
          scale: [1, 1.06, 1],
          opacity: [0.75, 1, 0.75],
        },
        transition: {
          duration: 4.2,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  const ringMotion = reduceMotion
    ? {}
    : {
        animate: {
          scale: [1, 1.18, 1],
          opacity: [0.18, 0.05, 0.18],
        },
        transition: {
          duration: 4.2,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  const textMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      };

  const subTextMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 1.2,
          delay: 0.16,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)] px-4">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(191,13,77,0.08)_0%,rgba(191,13,77,0.03)_35%,transparent_72%)]" />
      </div>

      <div className="relative text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full border border-[rgba(191,13,77,0.18)]"
              {...ringMotion}
            />
            <motion.span
              className="absolute inset-[0.45rem] rounded-full border border-[rgba(191,13,77,0.1)]"
              {...ringMotion}
            />
            <motion.div
              className="relative h-3.5 w-3.5 rounded-full bg-[var(--accent)] shadow-[0_0_24px_rgba(191,13,77,0.45)]"
              {...badgeMotion}
            />
          </div>
        </div>

        <motion.p
          className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]"
          {...textMotion}
        >
          Own Adaa
        </motion.p>

        <motion.h1
          className="[font-family:var(--font-editorial)] text-[clamp(4.5rem,11vw,8.5rem)] leading-[0.88] tracking-[-0.06em] text-[var(--ink)]"
          {...textMotion}
        >
          Coming Soon
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-[34rem] text-[clamp(0.98rem,1.8vw,1.15rem)] leading-7 text-[var(--ink-soft)]"
          {...subTextMotion}
        >
          A new expression of Indo-Western elegance is on its way.
        </motion.p>
      </div>
    </main>
  );
}