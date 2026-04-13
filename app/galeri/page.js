import Link from "next/link";
import GalleryGrid from "../../components/GalleryGrid";
import JsonLd from "../../components/JsonLd";
import { galleryItems } from "../../lib/gallery";
import { business, siteUrl } from "../../lib/site";

export const metadata = {
  title: "Galeri — Örnek İşler ve Referanslar",
  description:
    "Metropol Dekorasyon galeri: İstanbul’da gergi tavan, iç cephe boya ve dekorasyon örnek çalışmaları. Yılların tecrübesiyle gerçekleştirdiğimiz projelerden fotoğraf ve videolar; ücretsiz keşif ve teklif için iletişime geçin.",
  alternates: { canonical: `${siteUrl}/galeri` },
};

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${business.name} — Galeri`,
    description: metadata.description,
    url: `${siteUrl}/galeri`,
  };

  return (
    <div className="md-container py-12 lg:py-16">
      <JsonLd data={jsonLd} />
      <nav className="text-md-muted text-xs">
        <Link href="/" className="hover:text-md-terracotta-dark">
          Ana sayfa
        </Link>
        <span className="mx-1">/</span>
        <span className="text-md-ink">Galeri</span>
      </nav>

      <div className="mt-6 max-w-2xl">
        <h1 className="font-display text-md-ink text-3xl font-semibold tracking-tight sm:text-4xl">
          Örnek işlerimiz
        </h1>
        <div className="text-md-muted mt-4 space-y-3 text-sm leading-relaxed sm:text-base">
          <p>
            Aşağıda, <strong className="text-md-ink font-medium">yılların tecrübesiyle</strong>{" "}
            İstanbul genelinde gerçekleştirdiğimiz <strong className="text-md-ink font-medium">örnek
              çalışmalarımızdan</strong> bir seçki yer almaktadır. İstanbul gergi tavan montajı, iç cephe boya,
            duvar çıtası ve alçıpan gibi uygulamalarda Metropol Dekorasyon'un kalitesi ve tecrübesini tercih edebilirsiniz.
          </p>
          <p>
            Ev, ofis veya ticari mekânınız için benzer bir sonuç istiyorsanız ücretsiz keşif ve
            şeffaf teklif almak üzere telefon veya WhatsApp ile bize ulaşabilirsiniz.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <GalleryGrid items={galleryItems} />
      </div>
    </div>
  );
}

