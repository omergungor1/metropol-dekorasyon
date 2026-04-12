import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import AppChrome from "../components/AppChrome";
import Footer from "../components/Footer";
import PhoneCtaBanner from "../components/PhoneCtaBanner";
import WhatsAppFloat from "../components/WhatsAppFloat";
import JsonLd from "../components/JsonLd";
import { business, siteUrl } from "../lib/site";
import { ogShareDescription, ogShareTitle } from "../lib/shareMeta";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  description: business.description,
  url: siteUrl,
  telephone: business.phoneTel,
  email: business.email,
  image: `${siteUrl}${business.logoPath}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    addressCountry: business.address.addressCountry,
  },
  areaServed: { "@type": "City", name: "İstanbul" },
  openingHours: "Mo-Su 08:00-17:00",
  sameAs: [business.instagram],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: business.name,
  title: {
    default: ogShareTitle,
    template: `%s | ${business.name}`,
  },
  description: ogShareDescription,
  keywords: [
    "İstanbul boya",
    "İstanbul iç cephe boya",
    "duvar çıtası",
    "gergi tavan",
    "alçıpan",
    "Metropol Dekorasyon",
    "Bağcılar dekorasyon",
    "Göztepe boya ustası",
  ],
  alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: siteUrl,
      siteName: business.name,
      title: ogShareTitle,
      description: ogShareDescription,
    },
  twitter: {
    card: "summary_large_image",
    title: ogShareTitle,
    description: ogShareDescription,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${dmSans.variable} ${fraunces.variable} h-full scroll-smooth`}
    >
      <body className="text-md-ink flex min-h-full flex-col antialiased">
        <JsonLd data={orgJsonLd} />
        <AppChrome />
        <main className="flex-1">{children}</main>
        <PhoneCtaBanner />
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
