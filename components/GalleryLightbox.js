"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function GalleryLightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-stretch justify-center bg-black/90 p-0 sm:items-center sm:bg-black/70 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Galeri görseli"
      onClick={onClose}
    >
      <div
        className="relative flex h-full min-h-0 w-full max-w-5xl flex-col overflow-hidden rounded-none bg-black shadow-2xl sm:h-auto sm:max-h-[min(92vh,900px)] sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-3 sm:top-3"
          aria-label="Kapat"
        >
          <IconClose className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-3"
          aria-label="Önceki"
        >
          <IconChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-3"
          aria-label="Sonraki"
        >
          <IconChevronRight className="h-6 w-6" />
        </button>

        {/* Mobilde: footer dışındaki tüm yükseklik medyaya (flex-1). Masaüstünde: klasik 16:9 */}
        <div className="relative min-h-0 w-full flex-1 bg-black sm:aspect-video sm:flex-none">
          <div className="absolute inset-0">
            {item.type === "video" ? (
              <video
                src={item.src}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-white/10 bg-black px-3 py-2.5 text-xs text-white/80 sm:px-4 sm:py-3 sm:text-sm">
          <span className="line-clamp-1">{item.alt}</span>
          <span className="shrink-0">
            {index + 1}/{items.length}
          </span>
        </div>
      </div>
    </div>
  );
}

