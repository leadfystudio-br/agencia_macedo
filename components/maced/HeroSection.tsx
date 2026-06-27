"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { getMacedWhatsAppUrl, macedConfig, macedMessages } from "@/lib/maced";

export function MacedHeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10 sm:pt-36 sm:pb-24 lg:px-12">
      <div className="macedo-hero-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="macedo-hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="macedo-grid-bg pointer-events-none absolute inset-0 opacity-20" aria-hidden />

      <div className="relative mx-auto w-full max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-400">
            <Sparkles className="h-3.5 w-3.5 text-[#D00010]" aria-hidden />
            {macedConfig.tagline}
          </div>

          <h1 className="mx-auto mt-8 text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:mt-10 sm:text-[2.75rem]">
            {macedConfig.heroHeadline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:mt-8 sm:text-lg">
            {macedConfig.heroSubheadline}
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-[#D00010]/20 bg-[#D00010]/[0.06] px-6 py-5 text-left sm:mt-12 sm:px-8 sm:py-6">
            <p className="font-mono text-[10px] tracking-wider text-[#D00010] uppercase">
              {macedConfig.productsTeaserLabel}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
              {macedConfig.productsTeaser}
            </p>
          </div>

          <div id="contato" className="mt-12 flex flex-col items-center justify-center gap-4 sm:mt-14 sm:flex-row">
            <a
              href={getMacedWhatsAppUrl(macedMessages.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#D00010] px-8 text-sm font-semibold text-white shadow-[0_0_32px_-8px_rgba(208,0,16,0.65)] transition-all hover:bg-[#e80012] sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
            <a
              href={macedConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.02] px-8 text-sm font-medium text-neutral-300 transition-colors hover:border-white/20 hover:text-white sm:w-auto"
            >
              <InstagramIcon className="h-4 w-4" />
              {macedConfig.instagramHandle}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
