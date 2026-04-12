import Link from "next/link";
import { business, siteUrl } from "../../lib/site";

export const metadata = {
  title: "Hakkımızda",
  description:
    "Metropol Dekorasyon: 20 yılı aşkın tecrübe ile İstanbul’da boya, alçıpan, duvar çıtası ve gergi tavan. Müşteri odaklı, şeffaf süreç.",
  alternates: { canonical: `${siteUrl}/hakkimizda` },
};

const paragraphs = [
  "20 yılı aşkın tecrübemizle boya, alçı, duvar çıtası ve dekorasyon alanlarında yaşam alanlarınıza değer katıyoruz. Her projeye titizlikle yaklaşarak estetik, kalite ve dayanıklılığı bir arada sunuyoruz.",
  "Müşteri memnuniyetini ön planda tutan anlayışımızla, hayal ettiğiniz mekânları gerçeğe dönüştürmek için profesyonel çözümler üretiyoruz. Detaylara verdiğimiz önem ve işimize duyduğumuz özen sayesinde, yaşam alanlarınızı modern ve şık bir görünüme kavuşturuyoruz.",
  "Güven, kalite ve tecrübenin buluştuğu noktadayız.",
];

export default function AboutPage() {
  return (
    <div className="md-container py-12 lg:py-16">
      <p className="text-md-terracotta-dark text-sm font-semibold">Kurumsal</p>
      <h1 className="font-display text-md-ink mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Hakkımızda
      </h1>
      <div className="md-prose mt-8">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/hizmetler" className="md-btn-primary">
          Hizmetler
        </Link>
        <Link href="/iletisim" className="md-btn-outline">
          İletişim
        </Link>
      </div>
      <dl className="border-md-sand bg-md-card text-md-muted mt-12 grid gap-4 rounded-2xl border p-6 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-md-ink font-medium">İşletme</dt>
          <dd>{business.name}</dd>
        </div>
        <div>
          <dt className="text-md-ink font-medium">Adres</dt>
          <dd>
            {business.address.streetAddress}, {business.address.addressLocality}
          </dd>
        </div>
        <div>
          <dt className="text-md-ink font-medium">Hizmet bölgesi</dt>
          <dd>İstanbul geneli</dd>
        </div>
        <div>
          <dt className="text-md-ink font-medium">Çalışma saatleri</dt>
          <dd>Haftanın her günü 08:00 – 17:00</dd>
        </div>
      </dl>
    </div>
  );
}
