import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fluxo Odonto | Crescimento para Clínicas Odontológicas",
  description: "Utilizamos tecnologia, SEO, automação e inteligência artificial para transformar clínicas odontológicas em operações digitais de alta performance.",
  openGraph: {
    title: "Fluxo Odonto | Tecnologia em Odontologia",
    description: "Crescimento inteligente para clínicas.",
    url: "https://fluxoodonto.com",
    siteName: "Fluxo Odonto",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fluxo Odonto",
    "url": "https://fluxoodonto.com",
    "logo": "https://fluxoodonto.com/logo.png",
    "description": "Utilizamos tecnologia, SEO, automação e inteligência artificial para transformar clínicas odontológicas em operações digitais de alta performance.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "SIKNODE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-21-96605-2646",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        {children}
      </body>
    </html>
  );
}
