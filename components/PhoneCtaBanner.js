import Link from "next/link";
import { business, telLink, waLink } from "../lib/site";

export default function PhoneCtaBanner() {
  return (
    <section className="bg-md-sage-dark text-white">
      <div className="md-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-2">
          <p className="font-display text-2xl font-semibold tracking-tight">
            {business.slogan}
          </p>
          <p className="text-sm leading-relaxed text-white/85">
            İstanbul genelinde iç cephe boya, duvar çıtası, gergi tavan ve alçıpan
            için hemen fiyat alın veya detaylı bilgi için bizi arayın. Ücretsiz keşif
            ve şeffaf teklif.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap gap-2">
            <a href={telLink()} className="bg-md-terracotta hover:bg-md-terracotta-dark inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 5.5h3l2 5-2.2 1.1a9 9 0 004.6 4.6L13 14l5 2v3a1.5 1.5 0 01-1.4 1.5C8.6 20.5 3.5 15.4 3.5 6.9A1.5 1.5 0 015 5.5z"
                />
              </svg>
              Cep telefonu: {business.phoneDisplay}
            </a>
            <a
              href={waLink("Merhaba, detaylı bilgi ve fiyat almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#25D366]" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <Link
            href="/iletisim"
            className="text-xs font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            İletişim ve adres bilgisi
          </Link>
        </div>
      </div>
    </section>
  );
}
