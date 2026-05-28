"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsappButton() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t1 = window.setTimeout(() => setTip(true), 1200);
    const t2 = window.setTimeout(() => setTip(false), 1200 + 4000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [show]);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-[60] flex items-center transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span
        className={`mr-3 hidden whitespace-nowrap rounded-full bg-noir-900 px-4 py-2 font-sans text-sm text-gold-100 shadow-lg ring-1 ring-gold-600/40 transition-all duration-300 sm:block ${
          tip ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-3 opacity-0"
        }`}
      >
        Avaliação gratuita e imediata
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] ring-2 ring-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.05 31.31l6.137-1.963A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.598c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.703-1.948-7.73-6.728-7.965-7.038-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.396.844-.576 1.296-.576.146 0 .278.008.398.014.47.02.706.048 1.016.79.386.93 1.328 3.226 1.44 3.46.114.234.228.55.07.86-.148.32-.278.46-.512.736-.234.276-.456.49-.69.79-.214.26-.456.54-.184 1.01.272.46 1.21 1.994 2.598 3.23 1.79 1.594 3.264 2.088 3.784 2.306.388.16.85.124 1.132-.18.358-.388.8-1.032 1.25-1.668.32-.456.724-.512 1.148-.354.432.148 2.72 1.282 3.19 1.516.47.234.78.348.894.542.112.194.112 1.12-.274 2.21Z" />
        </svg>
      </span>
    </a>
  );
}
