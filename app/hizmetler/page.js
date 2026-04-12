import Image from "next/image";
import Link from "next/link";
import { hizmetler } from "../../lib/hizmetler";
import { siteUrl } from "../../lib/site";

export const metadata = {
  title: "Hizmetler",
  description:
    "İstanbul iç cephe boya, duvar çıtası, gergi tavan ve alçıpan uygulamaları. Metropol Dekorasyon ile keşif ve teklif.",
  alternates: { canonical: `${siteUrl}/hizmetler` },
};

export default function ServicesIndexPage() {
  return (
    <div className="md-container py-12 lg:py-16">
      <h1 className="font-display text-md-ink text-3xl font-semibold tracking-tight sm:text-4xl">
        Hizmetlerimiz
      </h1>
      <p className="text-md-muted mt-3 max-w-2xl text-sm sm:text-base">
        İstanbul genelinde boya, dekoratif duvar çıtası, gergi tavan ve alçıpan sistemlerinde
        uçtan uca çözüm: keşif, malzeme önerisi, uygulama ve teslim.
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {hizmetler.map((h) => (
          <li key={h.slug}>
            <Link
              href={`/hizmetler/${h.slug}`}
              className="border-md-sand bg-md-card group flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={h.image}
                  alt={h.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h2 className="font-display text-md-ink text-lg font-semibold">{h.title}</h2>
                <p className="text-md-muted text-sm leading-relaxed">{h.summary}</p>
                <span className="text-md-terracotta-dark mt-auto text-sm font-semibold">
                  İncele →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
