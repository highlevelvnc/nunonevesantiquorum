"use client";

import { useEffect } from "react";

// Padrão obrigatório: visible-by-default + IntersectionObserver + fallback 3500ms.
// Elementos com [data-reveal] são escondidos via [data-revealed="false"] só em runtime;
// o IO marca "true" ao entrar no viewport e um timeout força "true" caso o IO falhe.
export default function ScrollRevealInit() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    els.forEach((el) => el.setAttribute("data-revealed", "false"));

    const reveal = (el: HTMLElement) => {
      const delay = el.dataset.revealDelay;
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.setAttribute("data-revealed", "true");
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Fallback: garante que a página nunca fica em branco (headless, tabs em background, IO falhado).
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.setAttribute("data-revealed", "true"));
    }, 3500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
