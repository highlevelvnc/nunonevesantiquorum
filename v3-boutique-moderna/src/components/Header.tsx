"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL, COMPANY } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "glass py-2 shadow-glass"
              : "border border-transparent bg-transparent py-2"
          }`}
        >
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label={COMPANY.fullName}
          >
            <span className="relative">
              <span className="absolute -inset-2 rounded-full bg-emerald-500/25 blur-md" />
              <Image
                src="/fotos/logo.png"
                alt={COMPANY.fullName}
                width={88}
                height={88}
                className="relative h-20 w-20 rounded-full object-cover ring-1 ring-champagne-300/50"
                priority
              />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-xl font-semibold tracking-tight text-ink-100">
                Nuno Neves
              </span>
              <span className="font-sans text-[0.7rem] font-medium uppercase tracking-widest2 text-emerald-300">
                Antiquorum
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-sans text-[0.82rem] font-medium text-ink-200/85 transition-colors hover:text-ink-100"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-emerald-400 to-champagne-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${COMPANY.phonePrimaryTel}`}
              className="hidden items-center gap-2 font-sans text-sm font-medium text-ink-200 transition-colors hover:text-emerald-300 xl:flex"
            >
              <Phone className="h-4 w-4 text-emerald-400" strokeWidth={1.6} />
              {COMPANY.phonePrimary}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !px-5 !py-2.5 !text-sm sm:inline-flex"
            >
              Avaliação grátis
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-100 transition-colors hover:bg-forest-800/60 lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="ambient-glow absolute inset-0" />
        <div className="relative flex items-center justify-between px-6 py-5">
          <span className="font-display text-base font-semibold tracking-tight text-ink-100">
            Nuno Neves <span className="text-emerald-300">Antiquorum</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-100 transition-colors hover:bg-forest-800/60"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="relative flex flex-col items-center gap-7 pt-16">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-semibold tracking-tight text-ink-100 transition-colors hover:text-emerald-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6"
          >
            Pedir avaliação grátis
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </nav>
      </div>
    </header>
  );
}
