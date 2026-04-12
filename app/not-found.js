import Link from "next/link";

export const metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="md-container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-md-terracotta-dark text-sm font-semibold tracking-wide">404</p>
      <h1 className="font-display text-md-ink mt-2 text-3xl font-semibold sm:text-4xl">
        Aradığınız sayfayı bulamadık
      </h1>
      <p className="text-md-muted mx-auto mt-4 max-w-md text-sm sm:text-base">
        Bağlantı güncellenmiş veya kaldırılmış olabilir. Ana sayfadan devam edebilir veya
        iletişime geçebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="md-btn-primary">
          Ana sayfa
        </Link>
        <Link href="/iletisim" className="md-btn-outline">
          İletişim
        </Link>
      </div>
    </div>
  );
}
