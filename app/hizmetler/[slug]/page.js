import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { getAllHizmetSlugs, getHizmetBySlug } from "../../../lib/hizmetler";
import { business, siteUrl, waLink, telLink } from "../../../lib/site";

export function generateStaticParams() {
  return getAllHizmetSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const h = getHizmetBySlug(slug);
  if (!h) return {};
  return {
    title: h.title,
    description: h.summary,
    alternates: { canonical: `${siteUrl}/hizmetler/${h.slug}` },
    openGraph: {
      title: h.title,
      description: h.summary,
      images: [{ url: h.image, alt: h.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const h = getHizmetBySlug(slug);
  if (!h) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h.title,
    description: h.summary,
    provider: { "@type": "HomeAndConstructionBusiness", name: business.name, url: siteUrl },
    areaServed: { "@type": "City", name: "İstanbul" },
    image: `${siteUrl}${h.image}`,
  };

  return (
    <div className="md-container py-12 lg:py-16">
      <JsonLd data={jsonLd} />
      <nav className="text-md-muted text-xs">
        <Link href="/" className="hover:text-md-terracotta-dark">
          Ana sayfa
        </Link>
        <span className="mx-1">/</span>
        <Link href="/hizmetler" className="hover:text-md-terracotta-dark">
          Hizmetler
        </Link>
        <span className="mx-1">/</span>
        <span className="text-md-ink">{h.shortTitle}</span>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="border-md-sand relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white shadow-sm">
          <Image
            src={h.image}
            alt={h.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="font-display text-md-ink text-3xl font-semibold tracking-tight sm:text-4xl">
            {h.title}
          </h1>
          <p className="text-md-muted mt-4 text-sm leading-relaxed sm:text-base">
            {h.summary}
          </p>
          <p className="text-md-muted mt-4 text-sm leading-relaxed sm:text-base">
            {h.districtsIntro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={telLink()} className="md-btn-primary text-xs sm:text-sm">
              Hemen ara
            </a>
            <a
              href={waLink(`${h.shortTitle} için bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="md-btn-outline text-xs sm:text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="md-prose mt-12 max-w-none">
        {h.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/hizmetler" className="md-btn-outline">
          Tüm hizmetler
        </Link>
        <Link href="/iletisim" className="md-btn-primary">
          İletişim
        </Link>
      </div>
    </div>
  );
}
