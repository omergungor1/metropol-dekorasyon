export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://metropoldekor.com";

export const business = {
  name: "Metropol Dekorasyon",
  legalName: "Metropol Dekorasyon",
  slogan: "Zevkinize yakışan detaylar",
  sector: "Dekorasyon",
  description:
    "İstanbul genelinde iç cephe boya, duvar çıtası, gergi tavan ve alçıpan uygulamalarında 20 yılı aşkın tecrübe.",
  address: {
    streetAddress: "Göztepe, Bağcılar",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  phoneDisplay: "0537 283 60 36",
  phoneTel: "+905372836036",
  /** wa.me için ülke kodlu, sadece rakam */
  phoneWa: "905372836036",
  email: "erdennecip85@gmail.com",
  instagram: "https://www.instagram.com/necip_erdem52?igsh=MWdtZXhvaGZ2bGZoNA==",
  logoPath: "/logo.png",
  mapQuery: "Bağcılar Göztepe İstanbul",
};

export function waLink(text = "Merhaba, bilgi almak istiyorum.") {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${business.phoneWa}?text=${encoded}`;
}

export function telLink() {
  return `tel:${business.phoneTel}`;
}
