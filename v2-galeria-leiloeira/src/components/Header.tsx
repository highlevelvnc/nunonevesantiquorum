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
          ? "border-b border-ink-900/10 bg-ivory-100/92 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label={COMPANY.fullName}
        >
          <Image
            src="/fotos/logo.png"
            alt={COMPANY.fullName}
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-ink-900/10"
            priority
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-base font-semibold tracking-wide2 text-ink-900">
              Nuno Neves
            </span>
            <span className="mt-1 font-sans text-[0.58rem] uppercase tracking-widest3 text-brass-500">
              Antiquorum
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-sans text-[0.72rem] uppercase tracking-wider3 text-ink-700 transition-colors hover:text-ink-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${COMPANY.phonePrimaryTel}`}
            className="hidden items-center gap-2 font-sans text-sm tracking-wide text-ink-800 transition-colors hover:text-brass-500 xl:flex"
          >
            <Phone className="h-4 w-4 text-brass-400" strokeWidth={1.6} />
            {COMPANY.phonePrimary}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink hidden sm:inline-flex"
          >
            Avaliação grátis
          </a>
          <button
            onClick={() => setOpen(true)}
            className="text-ink-900 lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-7 w-7" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-ivory-100 transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-900/10 px-5 py-5">
          <span className="font-display text-base font-semibold tracking-wide2 text-ink-900">
            Nuno Neves Antiquorum
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-ink-900"
            aria-label="Fechar menu"
          >
            <X className="h-7 w-7" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-8 pt-16">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 font-display text-3xl text-ink-900"
            >
              <span className="lot-number text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-ink mt-6"
          >
            Pedir avaliação grátis
          </a>
        </nav>
      </div>
    </header>
  );
}
