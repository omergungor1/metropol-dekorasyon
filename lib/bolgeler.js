export const bolgeler = [
  {
    slug: "sancaktepe",
    name: "Sancaktepe",
    headline: "Sancaktepe boya badana ustası",
    paragraph:
      "Sancaktepe’de iç cephe boya, badana ve dekorasyon işlerinde hızlı keşif ile net fiyat. Site içi ve müstakil konutlarda aynı kalite standardı.",
  },
  {
    slug: "pendik",
    name: "Pendik",
    headline: "Pendik boya badana ustası",
    paragraph:
      "Pendik ve çevresinde alçıpan asma tavan, duvar çıtası ve boya uygulamalarında deneyimli ekip. Ticari ve konut projelerine uygun iş programı.",
  },
  {
    slug: "kartal",
    name: "Kartal",
    headline: "Kartal boya badana ustası",
    paragraph:
      "Kartal’da iç cephe boya, gergi tavan ve duvar çıtası çözümleri. Yoğun yapı stoklarında kısa sürede teslim ve temiz saha disiplini.",
  },
  {
    slug: "atasehir",
    name: "Ataşehir",
    headline: "Ataşehir boya badana ustası",
    paragraph:
      "Ataşehir ofis ve rezidans projelerinde premium yüzey işleri. Renk ve malzeme danışmanlığı ile kurumsal görünüm.",
  },
  {
    slug: "uskudar",
    name: "Üsküdar",
    headline: "Üsküdar boya badana ustası",
    paragraph:
      "Üsküdar ve çevre mahallelerde iç mekan yenileme, boya ve dekoratif çıta uygulamaları. WhatsApp ile ön görüşme mümkündür.",
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    headline: "Ümraniye boya badana ustası",
    paragraph:
      "Ümraniye’de boya, alçıpan ve gergi tavan işlerinde İstanbul geneli ile aynı fiyat şeffaflığı ve garanti yaklaşımı.",
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    headline: "Bağcılar dekorasyon ve boya",
    paragraph:
      "Göztepe ve Bağcılar genelinde merkeze yakın ekip avantajı ile hızlı mobilizasyon. Yerinde keşif ve telefonla bilgi.",
  },
  {
    slug: "besiktas",
    name: "Beşiktaş",
    headline: "Beşiktaş iç cephe boya ve dekorasyon",
    paragraph:
      "Beşiktaş’ta tarihi bina ve yeni yapılarda dikkatli yüzey hazırlığı, doğru ürün seçimi ve estetik detaylar.",
  },
  {
    slug: "kadikoy",
    name: "Kadıköy",
    headline: "Kadıköy boya ve duvar çıtası",
    paragraph:
      "Kadıköy’de modern daire ve ofislerde duvar çıtası, boya ve gergi tavan kombinasyonları ile şık sonuçlar.",
  },
];

export function getBolgeBySlug(slug) {
  return bolgeler.find((b) => b.slug === slug) || null;
}

export function getAllBolgeSlugs() {
  return bolgeler.map((b) => b.slug);
}
