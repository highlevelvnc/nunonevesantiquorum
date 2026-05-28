import type { Metadata, Viewport } from "next";
import { Cinzel, Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsappButton from "@/components/WhatsappButton";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import ScrollProgress from "@/components/ScrollProgress";
import TechFX from "@/components/TechFX";
import Loader from "@/components/Loader";
import { COMPANY } from "@/lib/constants";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nunonevesantiquorum.pt"),
  title: {
    default: "Nuno Neves Antiquorum — Compra de Antiguidades em Lisboa",
    template: "%s · Nuno Neves Antiquorum",
  },
  description:
    "Há mais de 30 anos a comprar antiguidades e velharias em Lisboa e em todo o país. Mobiliário, porcelanas, pratas, arte sacra e coleções. Avaliação gratuita e pagamento imediato.",
  keywords: [
    "antiguidades Lisboa",
    "compra de antiguidades",
    "velharias",
    "avaliação de antiguidades",
    "recheios de casa",
    "heranças",
    "mobiliário antigo",
    "pratas",
    "porcelanas",
    "arte sacra",
  ],
  authors: [{ name: COMPANY.fullName }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: COMPANY.fullName,
    title: "Nuno Neves Antiquorum — Compra de Antiguidades em Lisboa",
    description:
      "Compramos a história que guarda em casa. Avaliação gratuita, pagamento justo e imediato.",
    images: ["/fotos/hero.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070608",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-PT"
      className={`${cinzel.variable} ${jost.variable} ${cormorant.variable}`}
    >
      <body className="bg-noir-950 font-sans antialiased">
        <Loader />
        <ScrollProgress />
        <Header />
        {children}
        <WhatsappButton />
        <ScrollRevealInit />
        <TechFX />
      </body>
    </html>
  );
}
