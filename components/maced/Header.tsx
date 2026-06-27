"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { MacedLogo } from "@/components/maced/Logo";
import { getMacedWhatsAppUrl, macedMessages } from "@/lib/maced";

export function MacedHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-12">
        <MacedLogo />

        <a
          href={getMacedWhatsAppUrl(macedMessages.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#D00010] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#e80012] sm:h-11 sm:px-5"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Chamar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
