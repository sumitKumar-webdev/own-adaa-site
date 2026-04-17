"use client";

import { usePathname, useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode } from "react";

import { scrollToSection } from "../scrollToSection";

const PENDING_SCROLL_KEY = "own-adaa-pending-scroll-target";

type ScrollNavLinkProps = {
  targetId: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function ScrollNavLink({
  targetId,
  className,
  ariaLabel,
  children,
  onNavigate,
}: ScrollNavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onNavigate?.();

    if (pathname === "/") {
      scrollToSection(targetId);
      return;
    }

    window.sessionStorage.setItem(PENDING_SCROLL_KEY, targetId);
    router.push("/");
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}

export { PENDING_SCROLL_KEY };
