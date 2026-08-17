import type { Metadata, Viewport } from "next";

import { SiteBackground } from "@/components/layout/SiteBackground";
import { DesktopContactRail } from "@/components/layout/DesktopContactRail";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { Toaster } from "@/components/ui/sonner";
import { shippingPoints, site } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "Tâm Táo CNC",
    template: "%s | Tâm Táo CNC",
  },
  description:
    "Tâm Táo CNC nhận độ SIM vật lý, eSIM, EID, CNC máy iPhone lock, sửa chữa linh kiện và thay pin dung lượng cao tại TP HCM. Bảo hành 12 tháng, nhận máy toàn quốc qua chành xe.",
  authors: [{ name: site.owner }],
  creator: site.owner,
  publisher: site.name,
  category: "technology",
  classification: "Dịch vụ sửa chữa điện thoại, độ SIM iPhone lock, thay pin iPhone",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "độ SIM iPhone lock",
    "CNC máy lock",
    "up ổ EID",
    "eSIM iPhone lock",
    "thay pin iPhone dung lượng cao",
    "Tâm Táo CNC",
    "thay pin iPhone TP HCM",
    "độ eSIM iPhone lock",
    "CNC iPhone lock Sài Gòn",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.name,
    url: site.url,
    title: "Tâm Táo CNC | Độ SIM iPhone Lock, CNC, Thay Pin TP HCM",
    description:
      "Độ SIM vật lý, eSIM, EID, CNC máy iPhone lock và thay pin dung lượng cao. Bảo hành 12 tháng, giá sỉ cho thợ và chủ tiệm.",
    countryName: "Vietnam",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tâm Táo CNC — độ SIM iPhone lock, CNC, thay pin tại TP HCM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tâm Táo CNC | Độ SIM iPhone Lock, CNC, Thay Pin TP HCM",
    description:
      "Độ SIM vật lý, eSIM, EID, CNC máy iPhone lock và thay pin dung lượng cao tại TP HCM.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "vi-VN",
  description:
    "Website của Tâm Táo CNC chuyên độ SIM iPhone lock, CNC máy lock, sửa chữa linh kiện và thay pin iPhone dung lượng cao.",
  publisher: {
    "@type": "Organization",
    name: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <SiteBackground />
          <div className="relative z-10">
            <a
              href="#noi-dung"
              className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-neon focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              Bỏ qua điều hướng, tới nội dung chính
            </a>

            <SiteHeader />
            <DesktopContactRail />
            <main id="noi-dung" className="pb-16 md:pb-0">
              {children}
            </main>
            <SiteFooter />
            <MobileActionBar />
            <Toaster />
          </div>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
