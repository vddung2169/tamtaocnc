import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { Toaster } from "@/components/ui/sonner";
import { shippingPoints, site } from "@/data/site";

import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
  display: "swap",
});

const body = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-data",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tâm Táo CNC | Độ SIM iPhone Lock, CNC, Thay Pin TP HCM",
    template: "%s | Tâm Táo CNC",
  },
  description:
    "Tâm Táo CNC nhận độ SIM vật lý, eSIM, EID, CNC máy iPhone lock, sửa chữa linh kiện và thay pin dung lượng cao tại TP HCM. Bảo hành 12 tháng, nhận máy toàn quốc qua chành xe.",
  keywords: [
    "độ SIM iPhone lock",
    "CNC máy lock",
    "up ổ EID",
    "eSIM iPhone lock",
    "thay pin iPhone dung lượng cao",
    "Tâm Táo CNC",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.name,
    url: site.url,
    title: "Tâm Táo CNC | Độ SIM iPhone Lock, CNC, Thay Pin TP HCM",
    description:
      "Độ SIM vật lý, eSIM, EID, CNC máy iPhone lock và thay pin dung lượng cao. Bảo hành 12 tháng, giá sỉ cho thợ và chủ tiệm.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D0C" },
  ],
  colorScheme: "dark light",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description:
    "Xưởng độ SIM vật lý, eSIM, EID, CNC máy iPhone lock, sửa chữa linh kiện và thay pin dung lượng cao.",
  url: site.url,
  telephone: site.phoneIntl,
  founder: { "@type": "Person", name: site.owner },
  priceRange: "350000-1400000 VND",
  address: {
    "@type": "PostalAddress",
    streetAddress: "135 đường Lê Lợi",
    addressLocality: "Phường Hạnh Thông",
    addressRegion: "TP Hồ Chí Minh",
    addressCountry: "VN",
  },
  areaServed: [
    { "@type": "City", name: "Thành phố Hồ Chí Minh" },
    { "@type": "Country", name: "Việt Nam" },
  ],
  sameAs: [site.facebookHref],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phoneIntl,
      contactType: "customer service",
      availableLanguage: ["vi"],
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Độ SIM vật lý cho iPhone lock" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "CNC máy iPhone lock" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Up ổ EID, độ eSIM" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Thay pin iPhone dung lượng cao" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sửa chữa và thay thế linh kiện" } },
  ],
  // Nhận máy toàn quốc qua chành xe FuTa
  additionalProperty: shippingPoints.map((point) => ({
    "@type": "PropertyValue",
    name: point.label,
    value: point.address,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`dark ${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <a
            href="#noi-dung"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-neon focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Bỏ qua điều hướng, tới nội dung chính
          </a>

          <SiteHeader />
          <main id="noi-dung" className="pb-16 md:pb-0">
            {children}
          </main>
          <SiteFooter />
          <MobileActionBar />
          <Toaster />
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
