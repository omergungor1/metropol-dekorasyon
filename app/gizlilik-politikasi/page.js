import { business, siteUrl } from "../../lib/site";

export const metadata = {
  title: "Gizlilik Politikası",
  description: `${business.name} gizlilik politikası ve çerez / veri işleme ilkeleri.`,
  alternates: { canonical: `${siteUrl}/gizlilik-politikasi` },
};

export default function PrivacyPage() {
  return (
    <div className="md-container py-12 lg:py-16">
      <h1 className="font-display text-md-ink text-3xl font-semibold tracking-tight">
        Gizlilik politikası
      </h1>
      <div className="md-prose mt-8">
        <p>
          Bu metin, {business.name} ({siteUrl}) web sitesini ziyaret ettiğinizde işlenen
          sınırlı veriler hakkında genel bilgilendirme sağlar. Detaylı talepleriniz için{" "}
          <a href={`mailto:${business.email}`} className="text-md-terracotta-dark font-medium hover:underline">
            {business.email}
          </a>{" "}
          adresinden bize ulaşabilirsiniz.
        </p>
        <h2>Toplanan veriler</h2>
        <p>
          İletişim için telefon veya e-posta kullanmanız halinde paylaştığınız ad, telefon
          ve mesaj içeriği iş süreçlerimiz kapsamında saklanabilir. Web sitesi barındırma
          sağlayıcınızın (ör. Vercel) teknik logları (IP, tarayıcı bilgisi) mevzuata uygun
          sürelerle tutulabilir.
        </p>
        <h2>Çerezler</h2>
        <p>
          Bu site temel düzeyde çalışır; üçüncü taraf reklam çerezleri kullanılmamaktadır.
          Harita gömme bileşenleri kendi gizlilik kurallarına tabidir.
        </p>
        <h2>Haklarınız</h2>
        <p>
          KVKK kapsamındaki talepleriniz için{" "}
          <a href="/kisisel-verilerin-korunmasi" className="text-md-terracotta-dark font-medium hover:underline">
            kişisel verilerin korunması
          </a>{" "}
          sayfamızı inceleyebilirsiniz.
        </p>
      </div>
    </div>
  );
}
