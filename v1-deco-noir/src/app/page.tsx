import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Gem,
  Zap,
  Camera,
  Handshake,
  BadgeEuro,
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

const valueIcons = [ShieldCheck, Gem, Zap];
const processIcons = [Camera, BadgeEuro, Handshake, Zap];

export default function Home() {
  return (
    <main className="overflow-hidden bg-noir-950 bg-noise">
      {/* ============ HERO ============ */}
      <section id="inicio" className="relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/fotos/hero.jpg"
            alt="Interior do antiquário Nuno Neves"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir-950/85 via-noir-950/75 to-noir-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(7,6,8,0.85)_100%)]" />
        </div>

        {/* Sunburst déco atrás do título */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 sunburst opacity-70" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 text-center">
          <div data-reveal className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold-500/60" />
            <span className="label-kicker">Antiguidades em Lisboa · desde há 30 anos</span>
            <span className="h-px w-12 bg-gold-500/60" />
          </div>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="text-balance font-display text-4xl font-bold leading-[1.12] text-gold-100 sm:text-5xl md:text-6xl"
          >
            Compramos a <span className="shimmer-gold">história</span>
            <br />
            que guarda em casa
          </h1>

          <p
            data-reveal
            data-reveal-delay="160"
            className="mx-auto mt-7 max-w-xl font-serif text-xl italic text-gold-100/80 sm:text-2xl"
          >
            Avaliação gratuita, pagamento justo e imediato. Mais de 100.000 peças
            avaliadas com rigor e discrição.
          </p>

          <div
            data-reveal
            data-reveal-delay="240"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Pedir avaliação grátis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#categorias" className="btn-ghost">
              O que compramos
            </a>
          </div>
        </div>

        <a
          href="#categorias"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold-400"
          aria-label="Descer"
        >
          <ChevronDown className="h-7 w-7 animate-bob" />
        </a>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative border-y border-gold-800/40 bg-noir-900">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-y-8 px-6 py-12 md:grid-cols-4 md:divide-x md:divide-gold-800/40">
          {STATS.map((s, i) => (
            <div key={i} data-reveal data-reveal-delay={`${i * 80}`} className="px-4 text-center">
              <div className="font-display text-3xl font-bold text-gold sm:text-4xl">{s.value}</div>
              <div className="mt-2 font-sans text-[0.72rem] uppercase tracking-wider2 text-gold-100/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CATEGORIAS ============ */}
      <section id="categorias" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-container px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span data-reveal className="label-kicker">
              O que compramos
            </span>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="mt-4 font-display text-3xl font-bold leading-tight text-gold-100 sm:text-4xl md:text-5xl"
            >
              De uma única peça ao <span className="text-gold">recheio completo</span>
            </h2>
            <p data-reveal data-reveal-delay="140" className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-gold-100/65">
              O que vê é apenas uma amostra. Recebemos constantemente novas peças de
              recheios de casas, heranças e coleções privadas.
            </p>
            <div data-reveal data-reveal-delay="200" className="deco-rule mx-auto mt-7">
              <i />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {CATEGORIES.map((c, i) => (
              <article
                key={c.name}
                data-reveal
                data-reveal-delay={`${(i % 4) * 70}`}
                className="group relative aspect-[4/5] overflow-hidden frame-deco transition-shadow duration-500 hover:shadow-[0_28px_70px_-30px_rgba(216,183,102,0.5)]"
              >
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/35 to-transparent transition-opacity duration-500 group-hover:from-noir-950/95" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight text-gold-100">
                    {c.name}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden font-sans text-xs leading-relaxed text-gold-100/70 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {c.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESSO ============ */}
      <section id="processo" className="relative border-y border-gold-800/30 bg-noir-900 py-24 sm:py-32">
        <div className="mx-auto max-w-container px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span data-reveal className="label-kicker">
              Como funciona
            </span>
            <h2 data-reveal data-reveal-delay="80" className="mt-4 font-display text-3xl font-bold text-gold-100 sm:text-4xl md:text-5xl">
              Simples, rápido e <span className="text-gold">transparente</span>
            </h2>
            <div data-reveal data-reveal-delay="160" className="deco-rule mx-auto mt-7">
              <i />
            </div>
          </div>

          <div className="mt-16 grid gap-px md:grid-cols-4">
            {PROCESS.map((p, i) => {
              const Icon = processIcons[i];
              return (
                <div
                  key={p.num}
                  data-reveal
                  data-reveal-delay={`${i * 90}`}
                  className="group relative px-6 py-8 text-center"
                >
                  <span className="block font-display text-5xl font-bold text-gold-800 transition-colors duration-500 group-hover:text-gold-600">
                    {p.num}
                  </span>
                  <Icon className="mx-auto -mt-7 mb-4 h-9 w-9 text-gold-400" strokeWidth={1.3} />
                  <h3 className="font-display text-lg font-semibold text-gold-100">{p.title}</h3>
                  <p className="mx-auto mt-3 max-w-[15rem] font-sans text-sm leading-relaxed text-gold-100/60">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SOBRE ============ */}
      <section id="sobre" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-container items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left" className="relative">
            <div className="frame-deco relative aspect-[4/5] overflow-hidden">
              <Image
                src="/fotos/cat-sobre-nos-foto.jpeg"
                alt="Acervo do antiquário Nuno Neves"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden bg-noir-950 px-7 py-5 frame-deco sm:block">
              <div className="font-display text-3xl font-bold text-gold">+30</div>
              <div className="font-sans text-[0.65rem] uppercase tracking-wider2 text-gold-100/60">
                anos de história
              </div>
            </div>
          </div>

          <div data-reveal="right">
            <span className="label-kicker">Sobre a casa</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-gold-100 sm:text-4xl">
              Uma referência no mercado das <span className="text-gold">antiguidades</span>
            </h2>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-gold-100/70">
              <p>
                Há mais de três décadas que a {COMPANY.fullName} compra mobiliário,
                porcelanas, pratas, arte sacra, coleções e recheios de casa por todo o país,
                com base em Lisboa.
              </p>
              <p>
                Um negócio de família, hoje em duas gerações, construído sobre a mesma
                promessa de sempre: avaliação séria, preço justo e pagamento na hora.
              </p>
            </div>

            <div className="mt-9 space-y-5">
              {VALUES.map((v, i) => {
                const Icon = valueIcons[i];
                return (
                  <div key={v.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center border border-gold-600/40">
                      <Icon className="h-5 w-5 text-gold-400" strokeWidth={1.4} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-gold-100">{v.title}</h3>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-gold-100/60">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {ACQUISITIONS.map((a) => (
                <span
                  key={a}
                  className="border border-gold-600/30 px-4 py-1.5 font-sans text-xs uppercase tracking-wider text-gold-200/80"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden border-y border-gold-700/40 bg-noir-900 py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 sunburst opacity-50" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 data-reveal className="font-display text-3xl font-bold leading-tight text-gold-100 sm:text-4xl">
            Tem peças antigas para vender?
          </h2>
          <p data-reveal data-reveal-delay="80" className="mx-auto mt-4 max-w-lg font-serif text-xl italic text-gold-100/75">
            Envie-nos uma fotografia. Respondemos no próprio dia, sem compromisso.
          </p>
          <div data-reveal data-reveal-delay="160" className="mt-8 flex justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Falar agora no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ CONTACTOS ============ */}
      <section id="contactos" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-container gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left">
            <span className="label-kicker">Contactos</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-gold-100 sm:text-4xl">
              Vamos conversar sobre as suas <span className="text-gold">peças</span>
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-gold-100/65">
              {COMPANY.location}
            </p>

            <div className="mt-9 space-y-5">
              <a href={`tel:${COMPANY.phonePrimaryTel}`} className="flex items-center gap-4 group">
                <span className="flex h-11 w-11 flex-none items-center justify-center border border-gold-600/40">
                  <Phone className="h-5 w-5 text-gold-400" strokeWidth={1.4} />
                </span>
                <span>
                  <span className="block font-display text-lg text-gold-100 transition-colors group-hover:text-gold-300">
                    {COMPANY.phonePrimary}
                  </span>
                  <span className="font-sans text-sm text-gold-100/55">{COMPANY.phoneSecondary}</span>
                </span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group">
                <span className="flex h-11 w-11 flex-none items-center justify-center border border-gold-600/40">
                  <Mail className="h-5 w-5 text-gold-400" strokeWidth={1.4} />
                </span>
                <span className="font-display text-base text-gold-100 transition-colors group-hover:text-gold-300 break-all">
                  {COMPANY.email}
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center border border-gold-600/40">
                  <Clock className="h-5 w-5 text-gold-400" strokeWidth={1.4} />
                </span>
                <span className="font-display text-base text-gold-100">{COMPANY.hours}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center border border-gold-600/40">
                  <MapPin className="h-5 w-5 text-gold-400" strokeWidth={1.4} />
                </span>
                <span className="font-display text-base text-gold-100">{COMPANY.region}</span>
              </div>
            </div>
          </div>

          <div data-reveal="right" className="frame-deco bg-noir-900/60 p-7 sm:p-9">
            <h3 className="mb-6 font-display text-xl font-semibold text-gold-100">
              Peça a sua avaliação gratuita
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-gold-800/40 bg-noir-950 py-14">
        <div className="mx-auto max-w-container px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="relative inline-flex">
              <span
                aria-hidden
                className="logo-halo absolute -inset-5 rounded-full bg-gold-500/25 blur-2xl"
              />
              <Image
                src="/fotos/logo.png"
                alt={COMPANY.fullName}
                width={176}
                height={176}
                className="relative h-40 w-40 rounded-full object-cover ring-1 ring-gold-600/60"
              />
            </span>
            <p className="max-w-md font-serif text-lg italic text-gold-100/70">
              “{COMPANY.tagline}”
            </p>
            <div className="hairline max-w-xs" />
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm text-gold-100/60">
              <a href={`tel:${COMPANY.phonePrimaryTel}`} className="hover:text-gold-200">
                {COMPANY.phonePrimary}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-gold-200">
                {COMPANY.email}
              </a>
              <span>{COMPANY.region}</span>
            </div>
            <p className="mt-2 font-sans text-xs text-gold-100/35">
              © {new Date().getFullYear()} {COMPANY.fullName} — Antiguidades e Velharias. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
