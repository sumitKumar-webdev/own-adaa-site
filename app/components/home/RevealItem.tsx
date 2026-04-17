"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealItemProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  x?: number;
  y?: number;
  scaleFrom?: number;
};

export function RevealItem({
  children,
  delay = 0,
  className,
  x = 0,
  y = 28,
  scaleFrom = 1,
}: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const isInView = useInView(ref, { amount: 0.18, margin: "0px 0px -8% 0px" });

  useEffect(() => {
    if (isInView) {
      setHasEnteredView(true);
    }
  }, [hasEnteredView, isInView]);

  useEffect(() => {
    if (hasEnteredView) {
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    const checkViewport = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isVisibleNow =
        rect.bottom >= viewportHeight * 0.08 && rect.top <= viewportHeight * 0.92;

      if (isVisibleNow) {
        setHasEnteredView(true);
      }
    };

    checkViewport();
    const rafId = window.requestAnimationFrame(checkViewport);
    const timeoutId = window.setTimeout(checkViewport, 180);

    window.addEventListener("scroll", checkViewport, { passive: true });
    window.addEventListener("resize", checkViewport);
    window.addEventListener("pageshow", checkViewport);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", checkViewport);
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("pageshow", checkViewport);
    };
  }, [hasEnteredView]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y, scale: scaleFrom }}
      animate={
        hasEnteredView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x, y, scale: scaleFrom }
      }
      transition={{
        duration: 0.78,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
