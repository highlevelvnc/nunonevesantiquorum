"use client";

import { useEffect } from "react";

// Camada de efeitos "tech" — aditiva e robusta:
//  • [data-glare]     → luz radial a seguir o ponteiro sobre cards (via --mx/--my + classe)
//  • [data-spotlight] → holofote radial a seguir o cursor numa secção
//  • [data-magnetic]  → atracção suave do elemento ao cursor (wrapper do CTA)
//
// Só activa em ponteiro fino (desktop) e respeita prefers-reduced-motion.
// Glare/spotlight só mexem em custom properties (--mx/--my) + uma classe — NUNCA tocam em
// opacity/transform, por isso não colidem com o padrão data-reveal. O efeito magnético actua
// em wrappers próprios (sem data-reveal). Tudo via rAF e com cleanup no unmount.
export default function TechFX() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reduce) return;

    const cleanups: Array<() => void> = [];

    // ---- Luz a seguir o ponteiro (glare em cards + spotlight em secções) ----
    const bindPointerLight = (el: HTMLElement, onClass: string) => {
      let raf = 0;
      let mx = 50;
      let my = 50;
      const apply = () => {
        raf = 0;
        el.style.setProperty("--mx", `${mx}%`);
        el.style.setProperty("--my", `${my}%`);
      };
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        mx = ((e.clientX - r.left) / r.width) * 100;
        my = ((e.clientY - r.top) / r.height) * 100;
        if (!raf) raf = requestAnimationFrame(apply);
      };
      const onEnter = (e: PointerEvent) => {
        onMove(e);
        el.classList.add(onClass);
      };
      const onLeave = () => {
        el.classList.remove(onClass);
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      };
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        el.classList.remove(onClass);
        if (raf) cancelAnimationFrame(raf);
      });
    };

    document
      .querySelectorAll<HTMLElement>("[data-glare]")
      .forEach((el) => bindPointerLight(el, "fx-glare-on"));
    document
      .querySelectorAll<HTMLElement>("[data-spotlight]")
      .forEach((el) => bindPointerLight(el, "fx-spot-on"));

    // ---- Magnético (wrapper do CTA segue ligeiramente o cursor) ----
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic || "") || 0.32;
      let raf = 0;
      let x = 0;
      let y = 0;
      const apply = () => {
        raf = 0;
        el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
      };
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        x = (e.clientX - (r.left + r.width / 2)) * strength;
        y = (e.clientY - (r.top + r.height / 2)) * strength;
        if (!raf) raf = requestAnimationFrame(apply);
      };
      const onEnter = () => {
        el.style.transition = "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)";
      };
      const onLeave = () => {
        el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
        x = 0;
        y = 0;
        el.style.transform = "translate(0px, 0px)";
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      };
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        el.style.transform = "";
        el.style.transition = "";
        if (raf) cancelAnimationFrame(raf);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
