import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fluxo Odonto | Sistema Inteligente de Crescimento para Clínicas",
  description:
    "Não somos agência. Somos tecnologia. Utilizamos Inteligência Artificial, SEO, automação e tráfego pago para transformar sua clínica odontológica em uma operação digital de alta performance.",
  keywords: [
    "marketing odontológico",
    "crescimento de consultório",
    "inteligência artificial odontologia",
    "fluxo odonto",
    "pacientes de implantes",
    "alinhadores invisíveis",
    "gestão de tráfego odontologia",
  ],
  authors: [{ name: "Fluxo Odonto", url: "https://fluxoodonto.com.br" }],
  openGraph: {
    title: "Fluxo Odonto | Sistema Inteligente de Crescimento para Clínicas",
    description:
      "Transforme sua clínica em uma operação digital de alta performance com Inteligência Artificial, automação e aquisição de pacientes de alto ticket.",
    url: "https://fluxoodonto.com.br",
    siteName: "Fluxo Odonto",
    images: [
      {
        url: "/dashboard.png",
        width: 1200,
        height: 630,
        alt: "FlowOS Dashboard Preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluxo Odonto | Sistema Inteligente de Crescimento",
    description:
      "Tecnologia, automação e inteligência artificial para crescimento de clínicas odontológicas.",
    images: ["/dashboard.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} dark scroll-smooth`}>
      <body className="font-sans antialiased bg-bg-dark text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
