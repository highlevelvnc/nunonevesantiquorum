import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsappButton from "@/components/WhatsappButton";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import { COMPANY } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
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
  themeColor: "#08120d",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${fraunces.variable}`}
    >
      <body className="bg-forest-950 font-sans antialiased">
        <Loader />
        <ScrollProgress />
        <Header />
        {children}
        <WhatsappButton />
        <ScrollRevealInit />
      </body>
    </html>
  );
}
