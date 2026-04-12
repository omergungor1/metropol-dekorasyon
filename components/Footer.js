import Image from "next/image";
import Link from "next/link";
import { business, telLink, waLink } from "../lib/site";
import { bolgeler } from "../lib/bolgeler";

function IconInsta(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm4.5 3.5A4.5 4.5 0 1112 17a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 109.5 12 2.5 2.5 0 0012 7.5zm5-2.75a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  );
}

function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
      />
      <circle cx="12" cy="11" r="2.2" strokeWidth="1.7" />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5h16v11H4v-11z"
      />
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7l8 6 8-6"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-md-sand bg-md-ink text-white">
      <div className="md-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={business.logoPath}
              alt={business.name}
              width={48}
              height={48}
              className="h-11 w-11 rounded-md bg-white/90 object-contain p-1"
            />
            <div>
              <p className="font-semibold">{business.name}</p>
              <p className="text-xs text-white/70">{business.slogan}</p>
            </div>
          </Link>
          <p className="text-sm text-white/75">
            İstanbul genelinde boya, alçıpan, duvar çıtası ve gergi tavan uygulamalarında
            profesyonel ekip.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wide">
            İletişim
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href={telLink()} className="hover:text-white">
                Tel: {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                Hemen bize yazın!
              </a>
            </li>
            <li>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <IconInsta className="h-5 w-5" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <IconMail className="h-5 w-5 shrink-0" />
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  business.mapQuery,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <IconPin className="h-5 w-5 shrink-0" />
                İstanbul — {business.address.streetAddress}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wide">
            Hizmetlerimiz
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/hizmetler/istanbul-ic-cephe-boya" className="hover:text-white">
                Boya uygulamaları
              </Link>
            </li>
            <li>
              <Link href="/hizmetler/istanbul-duvar-citasi" className="hover:text-white">
                Dekorasyon çıtası
              </Link>
            </li>
            <li>
              <Link href="/hizmetler/istanbul-gergi-tavan" className="hover:text-white">
                Gergi tavan
              </Link>
            </li>
            <li>
              <Link href="/hizmetler/istanbul-alcipan" className="hover:text-white">
                Alçıpan sistemleri
              </Link>
            </li>
          </ul>

          <p className="font-display mt-6 text-sm font-semibold tracking-wide">
            Kurumsal
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-white">
                Ana sayfa
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="hover:text-white">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-white">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/gizlilik-politikasi" className="hover:text-white">
                Gizlilik politikası
              </Link>
            </li>
            <li>
              <Link href="/kisisel-verilerin-korunmasi" className="hover:text-white">
                Kişisel verilerin korunması
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wide">
            Bölgeler
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-white/75 sm:text-sm">
            {bolgeler.map((b) => (
              <li key={b.slug}>
                <Link href={`/bolgeler/${b.slug}`} className="hover:text-white">
                  {b.headline} — {business.phoneDisplay}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/55">
            Tüm hizmetler:{" "}
            <Link href="/hizmetler" className="underline-offset-2 hover:text-white hover:underline">
              Hizmetler sayfası
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/55">
        © {new Date().getFullYear()} {business.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
