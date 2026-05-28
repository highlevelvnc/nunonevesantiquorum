"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
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
        scrolled
          ? "bg-noir-950/90 backdrop-blur-md py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center" aria-label={COMPANY.fullName}>
          <span className="relative inline-flex">
            <span
              aria-hidden
              className="absolute -inset-2 rounded-2xl bg-gold-500/20 blur-lg"
            />
            <Image
              src="/fotos/brand.png"
              alt={COMPANY.fullName}
              width={300}
              height={200}
              className="relative h-16 w-auto object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] sm:h-[4.75rem]"
              priority
            />
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-sans text-[0.8rem] uppercase tracking-wider2 text-gold-100/80 transition-colors hover:text-gold-200"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY.phonePrimaryTel}`}
            className="hidden items-center gap-2 font-sans text-sm tracking-wide text-gold-100 transition-colors hover:text-gold-300 xl:flex"
          >
            <Phone className="h-4 w-4 text-gold-500" />
            {COMPANY.phonePrimary}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold hidden sm:inline-flex">
            Avaliação grátis
          </a>
          <button
            onClick={() => setOpen(true)}
            className="text-gold-200 lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-noir-950/98 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="font-display text-base tracking-wider2 text-gold-200">NUNO NEVES</span>
          <button onClick={() => setOpen(false)} className="text-gold-200" aria-label="Fechar menu">
            <X className="h-7 w-7" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-7 pt-16">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl tracking-wider text-gold-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-6"
          >
            Pedir avaliação grátis
          </a>
        </nav>
      </div>
    </header>
  );
}
