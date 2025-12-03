import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/lib/companyProfile";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ngetikin – Jasa Pembuatan Website Profesional & Terjangkau",
    template: "%s | Ngetikin",
  },
  description:
    "Studio web untuk UMKM, komunitas, dan brand baru: landing page, company profile, dan web custom dengan komunikasi langsung founder.",
  keywords: [
    "jasa pembuatan website",
    "landing page",
    "company profile",
    "web UMKM",
    "web agency",
    "Ngetikin",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Ngetikin – Jasa Pembuatan Website Profesional & Terjangkau",
    description:
      "Landing page, company profile, hingga web custom. Cepat, transparan, dan ramah UMKM.",
    url: BASE_URL,
    siteName: "Ngetikin",
    images: [
      {
        url: `${BASE_URL}/og-default.svg`,
        width: 1200,
        height: 630,
        alt: "Ngetikin digital web agency",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngetikin – Jasa Web untuk UMKM & Komunitas",
    description:
      "Website profesional, transparan, harga ramah. Hubungi langsung founder.",
    images: [`${BASE_URL}/og-default.svg`],
  },
  icons: {
    icon: "/ngetikin-logo.svg",
    shortcut: "/ngetikin-logo.svg",
    apple: "/ngetikin-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ngetikin",
    url: BASE_URL,
    logo: `${BASE_URL}/ngetikin-logo.svg`,
    sameAs: [
      "https://www.linkedin.com/company/ngetikin",
      "https://www.instagram.com/ngetikin",
      "https://www.tiktok.com/@ngetikin",
      "https://dsc.gg/ngetikin",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+62-851-1712-1912",
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["id", "en"],
      },
    ],
  };

  return (
    <html lang="id" className="bg-slate-950">
      <body className={`${sora.variable} ${spaceGrotesk.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
