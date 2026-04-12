import JsonLd from "../../components/JsonLd";
import { faqs } from "../../lib/faqs";
import { business, siteUrl } from "../../lib/site";

export const metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Metropol Dekorasyon S.S.S.: İstanbul boya, alçıpan, duvar çıtası ve gergi tavan süreleri, garanti ve keşif hakkında yanıtlar.",
  alternates: { canonical: `${siteUrl}/sss` },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="md-container py-12 lg:py-16">
      <JsonLd data={jsonLd} />
      <h1 className="font-display text-md-ink text-3xl font-semibold tracking-tight sm:text-4xl">
        Sık sorulan sorular
      </h1>
      <p className="text-md-muted mt-3 max-w-2xl text-sm sm:text-base">
        {business.name} hizmetleriyle ilgili merak edilen konuların kısa yanıtları.
      </p>
      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="border-md-sand bg-md-card group rounded-2xl border px-4 py-3 shadow-sm open:shadow-md"
          >
            <summary className="text-md-ink cursor-pointer list-none font-medium marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="inline-flex w-full items-center justify-between gap-2">
                {item.q}
                <span className="text-md-muted text-lg transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="text-md-muted mt-3 border-t border-dashed border-black/10 pt-3 text-sm leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
