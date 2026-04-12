import { business, siteUrl, telLink, waLink } from "../../lib/site";

export const metadata = {
  title: "İletişim",
  description:
    "Metropol Dekorasyon iletişim: telefon, WhatsApp, e-posta ve Bağcılar Göztepe adresi. İstanbul geneli ücretsiz keşif talebi.",
  alternates: { canonical: `${siteUrl}/iletisim` },
};

export default function ContactPage() {
  return (
    <div className="md-container py-12 lg:py-16">
      <h1 className="font-display text-md-ink text-3xl font-semibold tracking-tight sm:text-4xl">
        İletişim
      </h1>
      <p className="text-md-muted mt-3 max-w-2xl text-sm sm:text-base">
        Projeleriniz için telefon veya WhatsApp üzerinden hızlı dönüş sağlıyoruz. Keşif
        ve teklif taleplerinizi iletebilirsiniz.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="border-md-sand bg-md-card space-y-4 rounded-2xl border p-6 shadow-sm">
          <h2 className="font-display text-md-ink text-lg font-semibold">
            Hızlı iletişim
          </h2>
          <ul className="text-md-muted space-y-3 text-sm">
            <li>
              <span className="text-md-ink font-medium">Telefon: </span>
              <a href={telLink()} className="text-md-terracotta-dark font-semibold hover:underline">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="text-md-ink font-medium">WhatsApp: </span>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md-terracotta-dark font-semibold hover:underline"
              >
                Mesaj gönder
              </a>
            </li>
            <li>
              <span className="text-md-ink font-medium">E-posta: </span>
              <a href={`mailto:${business.email}`} className="hover:underline">
                {business.email}
              </a>
            </li>
            <li>
              <span className="text-md-ink font-medium">Adres: </span>
              {business.address.streetAddress}, {business.address.addressLocality}
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            <a href={telLink()} className="md-btn-primary text-xs">
              Hemen ara
            </a>
            <a
              href={waLink("Merhaba, keşif ve teklif almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="md-btn-outline text-xs"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="border-md-sand overflow-hidden rounded-2xl border bg-white shadow-sm">
          <iframe
            title="Metropol Dekorasyon konum"
            className="h-80 w-full lg:h-full lg:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              business.mapQuery,
            )}&output=embed`}
          />
        </div>
      </div>
    </div>
  );
}
