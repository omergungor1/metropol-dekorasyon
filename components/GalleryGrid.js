"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import GalleryLightbox from "./GalleryLightbox";

function IconPlay(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M9 7.5v9l8-4.5-8-4.5z" />
    </svg>
  );
}

export default function GalleryGrid({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const hasModal = openIndex >= 0;

  const onPrev = () =>
    setOpenIndex((i) => (i <= 0 ? items.length - 1 : i - 1));
  const onNext = () =>
    setOpenIndex((i) => (i >= items.length - 1 ? 0 : i + 1));

  const cards = useMemo(() => items || [], [items]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="border-md-sand bg-md-card group relative overflow-hidden rounded-2xl border text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            aria-label={`${item.type === "video" ? "Video" : "Görsel"} aç: ${item.alt}`}
          >
            <div className="relative aspect-[4/3]">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  preload="metadata"
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              )}

              {item.type === "video" ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      <IconPlay className="h-5 w-5" />
                    </span>
                    Video
                  </span>
                </div>
              ) : null}
            </div>
            <div className="p-4">
              <p className="text-md-muted text-sm leading-relaxed sm:text-base">
                {item.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {hasModal ? (
        <GalleryLightbox
          items={cards}
          index={openIndex}
          onClose={() => setOpenIndex(-1)}
          onPrev={onPrev}
          onNext={onNext}
        />
      ) : null}
    </>
  );
}

