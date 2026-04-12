import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { bolgeler, getAllBolgeSlugs, getBolgeBySlug } from "../../../lib/bolgeler";
import { business, siteUrl, telLink, waLink } from "../../../lib/site";

export function generateStaticParams() {
  return getAllBolgeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const b = getBolgeBySlug(slug);
  if (!b) return {};
  const title = `${b.headline} | ${business.name}`;
  const description = `${b.name} ilçesinde boya, badana, duvar çıtası, gergi tavan ve alçıpan. ${business.phoneDisplay} ile hemen iletişime geçin.`;
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/bolgeler/${b.slug}` },
  };
}

export default async function DistrictPage({ params }) {
  const { slug } = await params;
  const b = getBolgeBySlug(slug);
  if (!b) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${b.headline} — ${business.name}`,
    description: b.paragraph,
    url: `${siteUrl}/bolgeler/${b.slug}`,
  };

  return (
    <div className="md-container py-12 lg:py-16">
      <JsonLd data={jsonLd} />
      <nav className="text-md-muted text-xs">
        <Link href="/" className="hover:text-md-terracotta-dark">
          Ana sayfa
        </Link>
        <span className="mx-1">/</span>
        <span className="text-md-ink">Bölgeler</span>
        <span className="mx-1">/</span>
        <span className="text-md-ink">{b.name}</span>
      </nav>
      <h1 className="font-display text-md-ink mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        {b.headline}
      </h1>
      <p className="text-md-muted mt-4 max-w-3xl text-sm leading-relaxed sm:text-base">
        {b.paragraph} İstanbul genelinde aynı kalite ve şeffaf teklif yaklaşımıyla
        çalışıyoruz.
      </p>
      <ul className="text-md-muted mt-6 list-disc space-y-2 pl-5 text-sm sm:text-base">
        <li>İç cephe boya ve badana</li>
        <li>Dekoratif duvar çıtası</li>
        <li>Gergi tavan uygulamaları</li>
        <li>Alçıpan bölme ve asma tavan</li>
      </ul>
      <div className="mt-8 flex flex-wrap gap-2">
        <a href={telLink()} className="md-btn-primary">
          {business.phoneDisplay} — ara
        </a>
        <a
          href={waLink(`${b.name} için keşif talep ediyorum.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="md-btn-outline"
        >
          WhatsApp
        </a>
      </div>
      <p className="text-md-muted mt-8 text-sm">
        Diğer ilçeler:{" "}
        {bolgeler
          .filter((x) => x.slug !== b.slug)
          .slice(0, 6)
          .map((x, i, arr) => (
            <span key={x.slug}>
              <Link href={`/bolgeler/${x.slug}`} className="text-md-terracotta-dark hover:underline">
                {x.name}
              </Link>
              {i < arr.length - 1 ? ", " : ""}
            </span>
          ))}
        {" · "}
        <Link href="/hizmetler" className="text-md-terracotta-dark hover:underline">
          Tüm hizmetler
        </Link>
      </p>
    </div>
  );
}
