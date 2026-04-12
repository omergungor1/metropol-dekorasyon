import Image from "next/image";

const logos = [
  { src: "/ortaklarimiz/eca.jpg", alt: "ECA" },
  { src: "/ortaklarimiz/kale.jpg", alt: "Kale" },
  { src: "/ortaklarimiz/vitra.webp", alt: "Vitra" },
  { src: "/ortaklarimiz/creavit.png", alt: "Creavit" },
  { src: "/ortaklarimiz/eca.jpg", alt: "ECA" },
  { src: "/ortaklarimiz/kale.jpg", alt: "Kale" },
  { src: "/ortaklarimiz/vitra.webp", alt: "Vitra" },
  { src: "/ortaklarimiz/creavit.png", alt: "Creavit" },
  { src: "/ortaklarimiz/eca.jpg", alt: "ECA" },
  { src: "/ortaklarimiz/kale.jpg", alt: "Kale" },
  { src: "/ortaklarimiz/vitra.webp", alt: "Vitra" },
  { src: "/ortaklarimiz/creavit.png", alt: "Creavit" },
];

export default function PartnersMarquee() {
  const track = [...logos, ...logos];
  return (
    <section className="border-md-sand bg-white/70 py-10">
      <div className="md-container mb-6 text-center">
        <h2 className="font-display text-md-ink text-2xl font-semibold tracking-tight">
          Çözüm ortaklarımız
        </h2>
        <p className="text-md-muted mx-auto mt-2 max-w-2xl text-sm">
          Onlarca seçkin markanın ürün ve sistemleriyle yaşam alanlarınıza sürdürülebilir,
          garantili çözümler sunuyoruz.
        </p>
      </div>
      <div className="md-marquee overflow-hidden">
        <div className="md-marquee-track items-center gap-16 px-8">
          {track.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="border-md-sand relative h-14 w-36 shrink-0 rounded-xl border bg-white px-4 py-2"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-2"
                sizes="144px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
