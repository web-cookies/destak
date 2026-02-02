import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://destakmg.com.br"),
  title: {
    default: "Destak - Pinturas e Gesso | Drywall e Pintura em Uberlândia",
    template: "%s | Destak",
  },
  description: "Destak oferece serviços profissionais de pintura residencial e comercial, drywall, cimento queimado, texturas, papel de parede, forros, sancas, molduras e boisserie em Uberlândia, MG. Transforme seu ambiente com qualidade!",
  keywords: [
    "pintura residencial",
    "pintura comercial",
    "drywall",
    "gesso",
    "cimento queimado",
    "texturas",
    "papel de parede",
    "forros",
    "sancas",
    "molduras",
    "boisserie",
    "pintor em Uberlândia",
    "pintura Uberlândia",
    "drywall Uberlândia",
    "gesso Uberlândia",
    "Minas Gerais",
  ],
  authors: [{ name: "Destak" }],
  creator: "Destak",
  publisher: "Destak",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://destakmg.com.br",
    siteName: "Destak - Pinturas e Gesso",
    title: "Destak - Pinturas e Gesso | Drywall e Pintura em Uberlândia",
    description: "Serviços profissionais de pintura residencial e comercial, drywall, cimento queimado, texturas, papel de parede, forros, sancas, molduras e boisserie em Uberlândia, MG.",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Destak - Pinturas e Gesso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destak - Pinturas e Gesso | Drywall e Pintura em Uberlândia",
    description: "Serviços profissionais de pintura residencial e comercial, drywall, cimento queimado, texturas e muito mais em Uberlândia, MG.",
    images: ["/images/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione aqui quando tiver Google Search Console
    // google: "seu-codigo-de-verificacao",
  },
  alternates: {
    canonical: "https://destakmg.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
