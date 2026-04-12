import Link from "next/link";
import { business, siteUrl } from "../../lib/site";

export const metadata = {
  title: "Kişisel Verilerin Korunması",
  description: `${business.name} KVKK aydınlatma metni ve başvuru kanalları.`,
  alternates: { canonical: `${siteUrl}/kisisel-verilerin-korunmasi` },
};

export default function KvkkPage() {
  return (
    <div className="md-container py-12 lg:py-16">
      <h1 className="font-display text-md-ink text-3xl font-semibold tracking-tight">
        Kişisel verilerin korunması
      </h1>
      <div className="md-prose mt-8">
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, veri
          sorumlusu sıfatıyla {business.name} olarak kişisel verilerinizi aşağıdaki
          çerçevede işleyebiliriz.
        </p>
        <h2>İşlenme amaçları</h2>
        <p>
          Talebinizi yanıtlamak, keşif ve teklif süreçlerini yürütmek, sözleşme ilişkisi
          kurmanız halinde ifayı sağlamak ve yasal yükümlülükleri yerine getirmek.
        </p>
        <h2>Toplama yöntemi ve hukuki sebep</h2>
        <p>
          Telefon, WhatsApp, e-posta veya sözlü/yazılı kanallarla tarafınızca iletilen
          veriler; KVKK m.5/2 ve m.6 kapsamında sözleşmenin kurulması veya ifası, meşru
          menfaat ve açık rıza hukuki sebeplerine dayanarak işlenebilir.
        </p>
        <h2>Aktarım</h2>
        <p>
          Yurt içinde hizmet aldığımız iş ortaklarına (ör. barındırma, iletişim
          altyapısı) mevzuata uygun şekilde sınırlı aktarım yapılabilir.
        </p>
        <h2>Haklarınız</h2>
        <p>
          KVKK&apos;nın 11. maddesi uyarınca veri sorumlusuna başvurarak erişim,
          düzeltme, silme, itiraz taleplerinde bulunabilirsiniz. Başvurularınızı{" "}
          <a href={`mailto:${business.email}`} className="text-md-terracotta-dark font-medium hover:underline">
            {business.email}
          </a>{" "}
          adresine iletebilirsiniz.
        </p>
        <p>
          <Link href="/gizlilik-politikasi" className="text-md-terracotta-dark font-medium hover:underline">
            Gizlilik politikası
          </Link>
        </p>
      </div>
    </div>
  );
}
