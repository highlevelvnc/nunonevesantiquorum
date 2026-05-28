import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {
  COMPANY,
  STATS,
  CATEGORIES,
  PROCESS,
  VALUES,
  ACQUISITIONS,
  WHATSAPP_URL,
} from "@/lib/constants";

export default function Home() {
  return (
    <main className="bg-ivory-100">
      {/* ============ HERO ============ */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-ivory-100 pb-16 pt-36 sm:pb-24 sm:pt-44"
      >
        {/* filete superior decorativo */}
        <div className="pointer-events-none absolute inset-x-0 top-[5.5rem] mx-auto hidden h-px max-w-container bg-ink-900/10 lg:block" />

        <div className="mx-auto grid max-w-container items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Coluna texto */}
          <div className="relative">
            <span data-reveal className="kicker">
              Casa de antiguidades · Lisboa · há mais de 30 anos
            </span>

            <h1
              data-reveal
              data-reveal-delay="90"
              className="mt-7 text-balance font-display text-[2.7rem] font-medium leading-[1.05] tracking-[-0.01em] text-ink-950 sm:text-6xl lg:text-[4.4rem]"
            >
              Compramos a{" "}
              <span className="ed-underline italic text-oxblood-600">história</span>{" "}
              que guarda em casa.
            </h1>

            <p
              data-reveal
              data-reveal-delay="170"
              className="mt-8 max-w-prose2 text-pretty font-sans text-[1.05rem] leading-relaxed text-ink-600"
            >
              Há mais de três décadas a avaliar e adquirir mobiliário,
              porcelanas, pratas, arte e coleções inteiras. Avaliação gratuita,
              pagamento justo e imediato — com a discrição de uma casa de
              tradição.
            </p>

            <div
              data-reveal
              data-reveal-delay="240"
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink"
              >
                Pedir avaliação gratuita
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </a>
              <a href="#categorias" className="btn-outline">
                Ver o que compramos
              </a>
            </div>

            {/* meta tipo catálogo */}
            <dl
              data-reveal
              data-reveal-delay="320"
              className="mt-12 grid max-w-md grid-cols-3 gap-px border-t border-ink-900/10 pt-8 text-left"
            >
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label} className="pr-4">
                  <dt className="lot-number text-2xl text-ink-900 sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2 font-sans text-[0.62rem] uppercase leading-snug tracking-wider3 text-ink-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Coluna imagem — capa de catálogo emoldurada */}
          <div
            data-reveal="right"
            data-reveal-delay="120"
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="frame-fine">
              <div className="frame-fine__inner aspect-[4/5]">
                <Image
                  src="/fotos/hero.jpg"
                  alt="Interior do antiquário Nuno Neves, em Lisboa"
                  fill
                  priority
                  sizes="(max-width:1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* etiqueta de lote flutuante */}
            <div className="absolute -left-4 bottom-8 hidden bg-ivory-50 px-6 py-4 shadow-[0_24px_50px_-30px_rgba(20,18,16,0.5)] ring-1 ring-ink-900/10 sm:block">
              <span className="font-sans text-[0.58rem] uppercase tracking-widest3 text-brass-500">
                Acervo permanente
              </span>
              <span className="mt-1 block font-display text-lg italic text-ink-900">
                +100.000 peças
              </span>
            </div>
          </div>
        </div>

        <a
          href="#categorias"
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-ink-400 transition-colors hover:text-brass-500"
          aria-label="Descer"
        >
          <span className="font-sans text-[0.6rem] uppercase tracking-widest3">
            Explorar
          </span>
          <ChevronDown className="h-5 w-5 animate-bob" strokeWidth={1.4} />
        </a>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-ink-900/10 bg-ivory-50">
        <div className="mx-auto grid max-w-container grid-cols-2 px-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              data-reveal
              data-reveal-delay={`${i * 80}`}
              className={`flex flex-col items-center justify-center py-10 text-center md:py-14 ${
                i !== 0 ? "md:border-l md:border-ink-900/10" : ""
              } ${i % 2 !== 0 ? "border-l border-ink-900/10 md:border-l" : ""}`}
            >
              <div className="lot-number text-4xl text-ink-900 sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 max-w-[10rem] font-sans text-[0.62rem] uppercase leading-snug tracking-wider3 text-ink-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CATEGORIAS / DEPARTAMENTOS ============ */}
      <section id="categorias" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-container px-6">
          <div className="grid items-end gap-8 border-b border-ink-900/10 pb-10 md:grid-cols-[1fr_auto]">
            <div>
              <span data-reveal className="kicker">
                Departamentos
              </span>
              <h2
                data-reveal
                data-reveal-delay="80"
                className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.08] tracking-[-0.01em] text-ink-950 sm:text-5xl"
              >
                De uma única peça ao{" "}
                <span className="italic text-oxblood-600">
                  recheio completo
                </span>
              </h2>
            </div>
            <p
              data-reveal
              data-reveal-delay="140"
              className="max-w-sm font-sans text-sm leading-relaxed text-ink-600 md:text-right"
            >
              O que apresentamos é apenas uma amostra. Recebemos constantemente
              novas peças de recheios de casas, heranças e coleções privadas.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <article
                key={c.name}
                data-reveal
                data-reveal-delay={`${(i % 3) * 90}`}
                className="group"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative aspect-[5/6] overflow-hidden bg-ivory-200 shadow-[0_18px_40px_-30px_rgba(20,18,16,0.4)] transition-shadow duration-500 group-hover:shadow-[0_34px_64px_-30px_rgba(20,18,16,0.5)]">
                    <Image
                      src={c.img}
                      alt={c.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1300ms] ease-editorial group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivory-50/0 text-ivory-50 opacity-0 transition-all duration-500 group-hover:bg-ivory-50 group-hover:text-ink-900 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="lot-number text-base text-brass-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="link-underline font-display text-xl font-medium text-ink-950">
                        {c.name}
                      </h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-600">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESSO ============ */}
      <section
        id="processo"
        className="relative border-y border-ink-900/10 bg-ivory-50 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-container px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span data-reveal className="kicker kicker--center">
              Como funciona
            </span>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-[-0.01em] text-ink-950 sm:text-5xl"
            >
              Simples, rápido e{" "}
              <span className="ed-underline italic text-oxblood-600">
                transparente
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-y-12 md:grid-cols-4 md:gap-x-0">
            {PROCESS.map((p, i) => (
              <div
                key={p.num}
                data-reveal
                data-reveal-delay={`${i * 90}`}
                className={`relative px-2 md:px-8 ${
                  i !== 0 ? "md:border-l md:border-ink-900/10" : ""
                }`}
              >
                <span className="lot-number block text-5xl text-brass-300">
                  {p.num}
                </span>
                <div className="mt-5 h-px w-10 bg-oxblood-600/60" />
                <h3 className="mt-5 font-display text-xl font-medium text-ink-950">
                  {p.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink-600">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOBRE ============ */}
      <section id="sobre" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-container items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left" className="relative">
            <div className="frame-fine">
              <div className="frame-fine__inner aspect-[4/5]">
                <Image
                  src="/fotos/cat-sobre-nos-foto.jpeg"
                  alt="Acervo do antiquário Nuno Neves"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 hidden bg-oxblood-600 px-7 py-5 text-ivory-50 shadow-[0_24px_50px_-28px_rgba(92,42,38,0.7)] sm:block">
              <div className="font-display text-3xl font-semibold">+30</div>
              <div className="mt-1 font-sans text-[0.6rem] uppercase tracking-wider3 text-ivory-200/90">
                anos de história
              </div>
            </div>
          </div>

          <div data-reveal="right">
            <span className="kicker">A casa</span>
            <h2 className="mt-5 max-w-xl text-balance font-display text-4xl font-medium leading-[1.08] tracking-[-0.01em] text-ink-950 sm:text-5xl">
              Uma casa fundada há mais de{" "}
              <span className="italic text-oxblood-600">três décadas</span>
            </h2>
            <div className="mt-7 space-y-4 font-sans text-base leading-relaxed text-ink-600">
              <p>
                Há mais de trinta anos que a {COMPANY.fullName} compra
                mobiliário, porcelanas, pratas, arte sacra, coleções e recheios
                de casa por todo o país, com base em Lisboa.
              </p>
              <p>
                Um negócio de família, hoje em duas gerações, construído sobre a
                mesma promessa de sempre: avaliação séria, preço justo e
                pagamento na hora.
              </p>
            </div>

            <div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {VALUES.map((v, i) => (
                <div key={v.title} className="flex gap-6 py-5">
                  <span className="lot-number pt-1 text-lg text-brass-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink-950">
                      {v.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-ink-600">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <span className="font-sans text-[0.62rem] uppercase tracking-wider3 text-ink-500">
                Adquirimos
              </span>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {ACQUISITIONS.map((a) => (
                  <span
                    key={a}
                    className="border border-ink-900/15 px-4 py-1.5 font-sans text-xs tracking-wide text-ink-700"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-oxblood-600 py-20 text-ivory-50 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <span
            data-reveal
            className="font-sans text-[0.66rem] uppercase tracking-widest4 text-ivory-200/80"
          >
            Avaliação gratuita
          </span>
          <h2
            data-reveal
            data-reveal-delay="80"
            className="mt-5 font-display text-4xl font-medium leading-[1.1] sm:text-5xl"
          >
            Tem peças antigas para vender?
          </h2>
          <p
            data-reveal
            data-reveal-delay="150"
            className="mx-auto mt-5 max-w-lg font-serif text-xl italic text-ivory-100/85 sm:text-2xl"
          >
            Envie-nos uma fotografia. Respondemos no próprio dia, sem
            compromisso.
          </p>
          <div
            data-reveal
            data-reveal-delay="220"
            className="mt-9 flex justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ivory-100/40 bg-ivory-50 px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-ink-950 transition-all duration-500 hover:-translate-y-0.5 hover:bg-ivory-100"
            >
              Falar agora no WhatsApp
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ CONTACTOS ============ */}
      <section id="contactos" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-container gap-16 px-6 lg:grid-cols-2 lg:gap-24">
          <div data-reveal="left">
            <span className="kicker">Contactos</span>
            <h2 className="mt-5 max-w-md text-balance font-display text-4xl font-medium leading-[1.08] tracking-[-0.01em] text-ink-950 sm:text-5xl">
              Vamos conversar sobre as suas{" "}
              <span className="ed-underline italic text-oxblood-600">peças</span>
            </h2>
            <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-ink-600">
              {COMPANY.location}
            </p>

            <div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
              <a
                href={`tel:${COMPANY.phonePrimaryTel}`}
                className="group flex items-center gap-5 py-5"
              >
                <Phone
                  className="h-5 w-5 flex-none text-brass-400"
                  strokeWidth={1.4}
                />
                <span>
                  <span className="block font-display text-lg text-ink-950 transition-colors group-hover:text-oxblood-600">
                    {COMPANY.phonePrimary}
                  </span>
                  <span className="font-sans text-sm text-ink-500">
                    {COMPANY.phoneSecondary}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-center gap-5 py-5"
              >
                <Mail
                  className="h-5 w-5 flex-none text-brass-400"
                  strokeWidth={1.4}
                />
                <span className="break-all font-display text-base text-ink-950 transition-colors group-hover:text-oxblood-600">
                  {COMPANY.email}
                </span>
              </a>
              <div className="flex items-center gap-5 py-5">
                <Clock
                  className="h-5 w-5 flex-none text-brass-400"
                  strokeWidth={1.4}
                />
                <span className="font-display text-base text-ink-950">
                  {COMPANY.hours}
                </span>
              </div>
              <div className="flex items-center gap-5 py-5">
                <MapPin
                  className="h-5 w-5 flex-none text-brass-400"
                  strokeWidth={1.4}
                />
                <span className="font-display text-base text-ink-950">
                  {COMPANY.region}
                </span>
              </div>
            </div>
          </div>

          <div
            data-reveal="right"
            className="bg-ivory-50 p-7 ring-1 ring-ink-900/10 sm:p-10"
          >
            <h3 className="font-display text-2xl font-medium text-ink-950">
              Peça a sua avaliação gratuita
            </h3>
            <p className="mt-2 font-sans text-sm text-ink-500">
              Preencha os campos e abrimos a conversa no WhatsApp.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-ink-900/10 bg-ivory-50 py-16">
        <div className="mx-auto max-w-container px-6">
          <div className="flex flex-col items-center gap-7 text-center">
            <span className="relative inline-flex">
              <span
                aria-hidden
                className="logo-halo absolute -inset-5 rounded-full bg-[#c5a86c]/40 blur-2xl"
              />
              <Image
                src="/fotos/logo.png"
                alt={COMPANY.fullName}
                width={176}
                height={176}
                className="relative h-40 w-40 rounded-full object-cover ring-1 ring-ink-900/15"
              />
            </span>
            <p className="max-w-md font-serif text-xl italic text-ink-700">
              “{COMPANY.tagline}”
            </p>
            <div className="hairline max-w-xs" />
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-sans text-sm text-ink-600">
              <a
                href={`tel:${COMPANY.phonePrimaryTel}`}
                className="link-underline hover:text-oxblood-600"
              >
                {COMPANY.phonePrimary}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="link-underline hover:text-oxblood-600"
              >
                {COMPANY.email}
              </a>
              <span>{COMPANY.region}</span>
            </div>
            <p className="mt-2 font-sans text-xs text-ink-400">
              © {new Date().getFullYear()} {COMPANY.fullName} — Antiguidades e
              Velharias. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
