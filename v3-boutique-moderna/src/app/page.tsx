import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Gem,
  Zap,
  Camera,
  Handshake,
  BadgeEuro,
  Check,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CountUp from "@/components/CountUp";
import {
  COMPANY,
  STATS,
  CATEGORIES,
  PROCESS,
  VALUES,
  ACQUISITIONS,
  WHATSAPP_URL,
} from "@/lib/constants";

const valueIcons = [ShieldCheck, Gem, Zap];
const processIcons = [Camera, BadgeEuro, Handshake, Zap];

// Padrão bento: cada card recebe um span de colunas/linhas para um mosaico dinâmico.
// 12 categorias num grid de 6 colunas (desktop).
const bento = [
  "sm:col-span-4 lg:col-span-3 lg:row-span-2", // 0 Mobiliário — grande
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-2 lg:col-span-1",
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-2 lg:col-span-2 lg:row-span-2", // 4 Arte — alto
  "sm:col-span-2 lg:col-span-1",
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-2 lg:col-span-2 lg:row-span-2", // 7 Colecionismo — alto
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-2 lg:col-span-2",
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-forest-950 bg-grain">
      {/* ============ HERO ============ */}
      <section
        id="inicio"
        data-spotlight
        className="relative flex min-h-screen items-center pt-28 pb-16 sm:pt-32"
      >
        <div className="absolute inset-0">
          <Image
            src="/fotos/hero.jpg"
            alt="Interior do antiquário Nuno Neves"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/85 to-forest-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/70" />
        </div>

        {/* Holofote esmeralda que segue o ponteiro (desktop) */}
        <span aria-hidden className="fx-spot" />

        {/* Glows radiais ambientais */}
        <div className="glow-breathe pointer-events-none absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-500/15 blur-[130px]" />
        <div
          className="glow-breathe pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-champagne-300/10 blur-[120px]"
          style={{ animationDelay: "-4.5s" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-container px-5 sm:px-6">
          <div className="max-w-2xl">
            <div
              data-reveal
              className="glass-soft inline-flex items-center gap-2.5 rounded-full px-4 py-2"
            >
              <Sparkles className="h-4 w-4 text-champagne-300" strokeWidth={1.6} />
              <span className="font-sans text-[0.72rem] font-medium uppercase tracking-wider2 text-emerald-200">
                Antiguidades em Lisboa · desde há 30 anos
              </span>
            </div>

            <h1
              data-reveal
              data-reveal-delay="80"
              className="mt-7 text-balance font-display text-[2.7rem] font-semibold leading-[1.05] tracking-tightest text-ink-100 sm:text-6xl md:text-[4.3rem]"
            >
              Compramos a{" "}
              <span className="shimmer-emerald">história</span>
              <br className="hidden sm:block" /> que guarda{" "}
              <span className="font-serif italic text-champagne-200">em casa</span>
            </h1>

            <p
              data-reveal
              data-reveal-delay="160"
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-200/85"
            >
              Avaliação gratuita, pagamento justo e imediato. Mais de 100.000
              peças avaliadas com rigor e discrição, por uma casa de família com
              três décadas de mercado.
            </p>

            <div
              data-reveal
              data-reveal-delay="240"
              className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <span data-magnetic className="inline-flex">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Pedir avaliação grátis
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </span>
              <a href="#categorias" className="btn-glass">
                O que compramos
              </a>
            </div>

            {/* Badges de confiança */}
            <div
              data-reveal
              data-reveal-delay="320"
              className="mt-9 flex flex-wrap gap-2.5"
            >
              {["Avaliação grátis", "Pagamento imediato", "+30 anos", "Todo o país"].map(
                (b) => (
                  <span key={b} className="chip">
                    <Check className="h-3.5 w-3.5 text-emerald-300" strokeWidth={2.4} />
                    {b}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <a
          href="#categorias"
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-emerald-300/80"
          aria-label="Descer"
        >
          <ChevronDown className="h-7 w-7 animate-bob" />
        </a>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative -mt-px">
        <div className="mx-auto max-w-container px-5 sm:px-6">
          <div
            data-reveal="scale"
            className="glass grid grid-cols-2 gap-y-8 rounded-4xl px-6 py-10 sm:py-12 md:grid-cols-4"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={`${i * 80}`}
                className="relative px-4 text-center md:border-l md:border-emerald-600/15 md:first:border-l-0"
              >
                <div className="font-display text-3xl font-semibold text-champagne sm:text-[2.6rem]">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-1.5 font-sans text-[0.72rem] font-medium uppercase tracking-wider2 text-ink-300">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIAS (bento) ============ */}
      <section id="categorias" className="relative py-24 sm:py-32">
        <div className="ambient-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-container px-5 sm:px-6">
          <div className="max-w-2xl">
            <span data-reveal className="kicker">
              O que compramos
            </span>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-4xl md:text-5xl"
            >
              De uma única peça ao{" "}
              <span className="text-champagne">recheio completo</span>
            </h2>
            <p
              data-reveal
              data-reveal-delay="140"
              className="mt-5 max-w-xl font-sans text-base leading-relaxed text-ink-300"
            >
              O que vê é apenas uma amostra. Recebemos constantemente novas peças
              de recheios de casas, heranças e coleções privadas.
            </p>
          </div>

          <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-3.5 sm:grid-cols-6 sm:gap-4">
            {CATEGORIES.map((c, i) => (
              <article
                key={c.name}
                data-reveal
                data-glare
                data-reveal-delay={`${(i % 4) * 70}`}
                className={`group relative overflow-hidden rounded-3xl border border-emerald-600/15 bg-forest-900 shadow-glass transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-glow-emerald ${
                  bento[i] ?? "sm:col-span-2 lg:col-span-2"
                }`}
              >
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 22vw"
                  className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/35 to-transparent transition-opacity duration-500 group-hover:from-forest-950/95" />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                />
                <span aria-hidden className="fx-glare" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-tight text-ink-100">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 max-h-0 overflow-hidden font-sans text-xs leading-relaxed text-ink-200/80 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                      {c.desc}
                    </p>
                  </div>
                  <span className="flex h-8 w-8 flex-none translate-y-1 items-center justify-center rounded-full border border-emerald-400/30 bg-forest-900/60 text-emerald-200 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESSO (timeline horizontal) ============ */}
      <section id="processo" className="relative py-24 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
        <div className="mx-auto max-w-container px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span data-reveal className="kicker justify-center">
              Como funciona
            </span>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl md:text-5xl"
            >
              Simples, rápido e{" "}
              <span className="text-emerald-grad">transparente</span>
            </h2>
          </div>

          <div className="relative mt-16">
            {/* conector horizontal */}
            <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-emerald-600/10 via-emerald-500/40 to-emerald-600/10 md:block" />
            <div className="grid gap-5 md:grid-cols-4 md:gap-6">
              {PROCESS.map((p, i) => {
                const Icon = processIcons[i];
                return (
                  <div
                    key={p.num}
                    data-reveal
                    data-reveal-delay={`${i * 90}`}
                    className="group relative"
                  >
                    <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/30 bg-forest-850 text-emerald-300 shadow-glow-emerald transition-all duration-500 group-hover:-translate-y-1 group-hover:text-emerald-200">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-champagne-200 to-champagne-400 font-display text-[0.7rem] font-bold text-forest-950">
                        {p.num}
                      </span>
                    </div>
                    <div className="glass mt-5 rounded-3xl p-6 text-center transition-all duration-500 group-hover:border-emerald-400/30">
                      <h3 className="font-display text-lg font-semibold text-ink-100">
                        {p.title}
                      </h3>
                      <p className="mt-2.5 font-sans text-sm leading-relaxed text-ink-300">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOBRE ============ */}
      <section id="sobre" className="relative py-24 sm:py-32">
        <div className="ambient-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-container items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Coluna imagem — assimétrica, sobreposições */}
          <div data-reveal="left" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-emerald-600/20 shadow-glass">
              <Image
                src="/fotos/cat-sobre-nos-foto.jpeg"
                alt="Acervo do antiquário Nuno Neves"
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            </div>
            {/* Card flutuante de vidro */}
            <div className="glass absolute -bottom-6 -right-3 rounded-3xl px-7 py-5 shadow-glow-champagne sm:-right-6">
              <div className="font-display text-4xl font-semibold text-champagne">
                +30
              </div>
              <div className="font-sans text-[0.65rem] font-medium uppercase tracking-wider2 text-ink-300">
                anos de história
              </div>
            </div>
            {/* glow por detrás */}
            <div className="pointer-events-none absolute -left-10 -top-10 -z-10 h-48 w-48 rounded-full bg-emerald-500/20 blur-[90px]" />
          </div>

          <div data-reveal="right">
            <span className="kicker">Sobre a casa</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-4xl">
              Uma referência no mercado das{" "}
              <span className="text-champagne">antiguidades</span>
            </h2>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink-200/80">
              <p>
                Há mais de três décadas que a {COMPANY.fullName} compra
                mobiliário, porcelanas, pratas, arte sacra, coleções e recheios
                de casa por todo o país, com base em Lisboa.
              </p>
              <p>
                Um negócio de família, hoje em duas gerações, construído sobre a
                mesma promessa de sempre: avaliação séria, preço justo e
                pagamento na hora.
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {VALUES.map((v, i) => {
                const Icon = valueIcons[i];
                return (
                  <div
                    key={v.title}
                    className="glass-soft rounded-2xl p-5 transition-colors duration-300 hover:border-emerald-400/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink-100">
                      {v.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-ink-300">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {ACQUISITIONS.map((a) => (
                <span key={a} className="chip">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne-300" />
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-container px-5 sm:px-6">
          <div
            data-spotlight
            className="glass relative overflow-hidden rounded-4xl px-7 py-14 text-center shadow-glass sm:px-12 sm:py-16"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-champagne-300/12 blur-[110px]" />
            <span aria-hidden className="fx-spot" />
            <div className="relative z-10">
              <h2
                data-reveal
                className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink-100 sm:text-4xl"
              >
                Tem peças antigas para vender?
              </h2>
              <p
                data-reveal
                data-reveal-delay="80"
                className="mx-auto mt-4 max-w-lg font-serif text-xl italic text-ink-200/85"
              >
                Envie-nos uma fotografia. Respondemos no próprio dia, sem
                compromisso.
              </p>
              <div
                data-reveal
                data-reveal-delay="160"
                className="mt-8 flex justify-center"
              >
                <span data-magnetic className="inline-flex">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Falar agora no WhatsApp
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACTOS ============ */}
      <section id="contactos" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-container gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div data-reveal="left">
            <span className="kicker">Contactos</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink-100 sm:text-4xl">
              Vamos conversar sobre as suas{" "}
              <span className="text-emerald-grad">peças</span>
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink-300">
              {COMPANY.location}
            </p>

            <div className="mt-9 space-y-3.5">
              <a
                href={`tel:${COMPANY.phonePrimaryTel}`}
                className="glass-soft group flex items-center gap-4 rounded-2xl p-4 transition-colors duration-300 hover:border-emerald-400/30"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block font-display text-lg font-medium text-ink-100 transition-colors group-hover:text-emerald-200">
                    {COMPANY.phonePrimary}
                  </span>
                  <span className="font-sans text-sm text-ink-300">
                    {COMPANY.phoneSecondary}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="glass-soft group flex items-center gap-4 rounded-2xl p-4 transition-colors duration-300 hover:border-emerald-400/30"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="break-all font-display text-base font-medium text-ink-100 transition-colors group-hover:text-emerald-200">
                  {COMPANY.email}
                </span>
              </a>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="glass-soft flex items-center gap-4 rounded-2xl p-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    <Clock className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-sans text-sm font-medium text-ink-100">
                    {COMPANY.hours}
                  </span>
                </div>
                <div className="glass-soft flex items-center gap-4 rounded-2xl p-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-sans text-sm font-medium text-ink-100">
                    {COMPANY.region}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal="right" className="glass rounded-4xl p-6 shadow-glass sm:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold text-ink-100">
              Peça a sua avaliação gratuita
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative border-t border-emerald-600/15 py-14">
        <div className="mx-auto max-w-container px-5 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="relative inline-flex">
              <span className="glow-breathe absolute -inset-5 rounded-3xl bg-emerald-500/25 blur-xl" />
              <Image
                src="/fotos/brand.png"
                alt={COMPANY.fullName}
                width={330}
                height={220}
                className="relative h-32 w-auto object-contain drop-shadow-[0_10px_36px_rgba(0,0,0,0.55)]"
              />
            </span>
            <p className="max-w-md font-serif text-lg italic text-ink-200/80">
              “{COMPANY.tagline}”
            </p>
            <div className="hairline max-w-xs" />
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm text-ink-300">
              <a
                href={`tel:${COMPANY.phonePrimaryTel}`}
                className="transition-colors hover:text-emerald-200"
              >
                {COMPANY.phonePrimary}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-emerald-200"
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
