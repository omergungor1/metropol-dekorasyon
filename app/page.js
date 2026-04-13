import Image from "next/image";
import Link from "next/link";
import PartnersMarquee from "../components/PartnersMarquee";
import JsonLd from "../components/JsonLd";
import { business, siteUrl } from "../lib/site";
import { faqs } from "../lib/faqs";
import { getGalleryPreview } from "../lib/gallery";
import { hizmetler } from "../lib/hizmetler";
import { ogShareDescription, ogShareTitle } from "../lib/shareMeta";

export const metadata = {
  title: ogShareTitle,
  description: ogShareDescription,
  alternates: { canonical: "/" },
  openGraph: {
    url: siteUrl,
    title: ogShareTitle,
    description: ogShareDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: ogShareTitle,
    description: ogShareDescription,
  },
};

const heroKeywords = [
  "İstanbul iç cephe boya",
  "İstanbul duvar çıtası",
  "İstanbul iç mekan gergi tavan",
  "İstanbul alçıpan",
];

export default function HomePage() {
  const webJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: siteUrl,
    description: business.description,
    publisher: { "@type": "Organization", name: business.name },
  };
  const galleryPreview = getGalleryPreview(6);

  return (
    <>
      <JsonLd data={webJson} />
      <section className="from-md-cream via-white to-md-cream relative overflow-hidden bg-gradient-to-b">
        <div className="md-container grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <div className="space-y-6">
            <p className="text-md-terracotta-dark text-sm font-semibold tracking-wide">
              {business.slogan}
            </p>
            <h1 className="font-display text-md-ink text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
              İstanbul&apos;da boya, alçıpan, duvar çıtası ve gergi tavan hizmetlerinde profesyonel dekorasyon çözümleri

            </h1>
            <p className="text-md-muted max-w-xl text-sm leading-relaxed sm:text-base">
              {business.description} Telefon veya WhatsApp ile ücretsiz keşif talep
              edebilir, şeffaf metraj ve net süre bilgisi alabilirsiniz.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs font-medium text-white sm:text-sm">
              {heroKeywords.map((k) => (
                <li
                  key={k}
                  className="bg-md-sage-dark/90 rounded-full px-3 py-1.5 shadow-sm"
                >
                  {k}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/iletisim" className="md-btn-primary">
                Hemen fiyat al
              </Link>
              <Link href="/hizmetler" className="md-btn-outline">
                Hizmetleri incele
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="border-md-sand bg-md-card relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-lg">
              <Image
                src="/istanbul-gergi-tavan-uygulamasi.jpeg"
                alt="Metropol Dekorasyon İstanbul iç mekan uygulaması"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md-container py-14">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-md-ink text-2xl font-semibold tracking-tight sm:text-3xl">
            Hizmetlerimiz
          </h2>
          <p className="text-md-muted mt-2 text-sm sm:text-base">
            Her kalemde uzman ekip ve doğru malzeme seçimiyle, İstanbul&apos;un her iki
            yakasında aynı kalite standardı.
          </p>
        </div>
        <div className="flex flex-col gap-12 lg:gap-16">
          {hizmetler.map((h, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <div
                key={h.slug}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div
                  className={`border-md-sand relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white shadow-sm ${imageFirst ? "" : "lg:order-2"
                    }`}
                >
                  <Image
                    src={h.image}
                    alt={h.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center space-y-4 ${imageFirst ? "" : "lg:order-1"
                    }`}
                >
                  <h3 className="font-display text-md-ink text-xl font-semibold sm:text-2xl">
                    {h.title}
                  </h3>
                  <p className="text-md-muted text-sm leading-relaxed sm:text-base">
                    {h.summary}
                  </p>
                  <Link
                    href={`/hizmetler/${h.slug}`}
                    className="text-md-terracotta-dark inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  >
                    Detaylı bilgi
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="md-container pb-2 pt-4 sm:py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-md-ink text-2xl font-semibold tracking-tight sm:text-3xl">
              Örnek işlerimiz
            </h2>
            <p className="text-md-muted mt-2 text-sm sm:text-base">
              Gerçek uygulamalardan seçtiğimiz fotoğraf ve videolar. Tümünü görmek için galeriye
              geçebilirsiniz.
            </p>
          </div>
          <Link href="/galeri" className="md-btn-outline shrink-0 self-start sm:self-auto">
            Galeriyi aç
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreview.map((item) => (
            <Link
              key={item.src}
              href="/galeri"
              className="border-md-sand bg-md-card group relative overflow-hidden rounded-2xl border shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              aria-label={`Galeri: ${item.alt}`}
            >
              <div className="relative aspect-[4/3]">
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      preload="metadata"
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                          <span className="text-base leading-none">▶</span>
                        </span>
                        Video
                      </span>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                )}
              </div>
              <div className="p-4">
                <p className="text-md-muted text-sm leading-relaxed sm:text-base">{item.alt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-md-sand/60 border-y bg-white/80 py-14">
        <div className="md-container">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-md-ink text-2xl font-semibold tracking-tight sm:text-3xl">
                Sık sorulan sorular
              </h2>
              <p className="text-md-muted mt-2 text-sm sm:text-base">
                Kısa yanıtlar; tüm liste ve güncellemeler için S.S.S. sayfamıza göz atabilirsiniz.
              </p>
            </div>
            <Link href="/sss" className="md-btn-outline shrink-0 self-start sm:self-auto">
              Tüm sorular
            </Link>
          </div>
          <div className="mx-auto grid max-w-4xl gap-3 sm:gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="border-md-sand bg-md-card group rounded-2xl border px-4 py-3 shadow-sm open:shadow-md"
              >
                <summary className="text-md-ink cursor-pointer list-none text-sm font-medium marker:content-none sm:text-base [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex w-full items-center justify-between gap-2">
                    {item.q}
                    <span className="text-md-muted shrink-0 text-lg transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="text-md-muted mt-3 border-t border-dashed border-black/10 pt-3 text-sm leading-relaxed sm:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PartnersMarquee />
    </>
  );
}
