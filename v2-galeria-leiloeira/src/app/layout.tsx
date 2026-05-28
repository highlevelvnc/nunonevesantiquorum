import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsappButton from "@/components/WhatsappButton";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { COMPANY } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
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
  themeColor: "#f8f4ec",
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
      className={`${playfair.variable} ${cormorant.variable} ${workSans.variable}`}
    >
      <body className="bg-ivory-100 font-sans text-ink-900 antialiased">
        <Header />
        {children}
        <WhatsappButton />
        <ScrollRevealInit />
      </body>
    </html>
  );
}
