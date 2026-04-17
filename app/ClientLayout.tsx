"use client";

import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

type ClientLayoutProps = {
  children: ReactNode;
};

const shellRoutes = new Set(["/"]);

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const showSiteShell = shellRoutes.has(pathname);

  return (
    <div className="flex min-h-full flex-col">
      <div
        key={pathname}
        className="relative flex-1 px-[clamp(1rem,2vw,2rem)] pb-16 pt-5"
      >
        <Header />
        {children}
        {showSiteShell && <Footer />}
      </div>
    </div>
  );
}
