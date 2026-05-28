"use client";

import { useEffect, useRef, useState } from "react";

// Count-up que respeita o padrão da casa: visible-by-default + IO + fallback 3500ms.
// O valor final é renderizado no servidor (sem JS continua a ver-se); ao entrar no
// viewport anima de 0 até ao valor. Parser robusto para "+30", "+100.000", "100%", "24h".
export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const m = value.match(/^(\D*)([\d.,]+)(\D*)$/);
    if (!m) return;
    const prefix = m[1];
    const target = parseInt(m[2].replace(/[.,]/g, ""), 10);
    const suffix = m[3];
    if (!Number.isFinite(target)) return;

    const format = (n: number) =>
      prefix +
      (target >= 1000
        ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        : String(n)) +
      suffix;

    let started = false;
    let done = false;
    let safety = 0;
    const duration = 1500;
    const finish = () => {
      if (done) return;
      done = true;
      setDisplay(value);
    };
    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const tick = (now: number) => {
        if (done) return;
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(format(Math.round(eased * target)));
        if (p < 1) requestAnimationFrame(tick);
        else finish();
      };
      setDisplay(format(0));
      requestAnimationFrame(tick);
      // Rede de segurança: se o rAF não avançar (headless, tab em fundo),
      // garante que o valor final aparece em vez de ficar preso em 0.
      safety = window.setTimeout(finish, duration + 800);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    const fallback = window.setTimeout(run, 3500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      window.clearTimeout(safety);
    };
  }, [value]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
    </span>
  );
}
