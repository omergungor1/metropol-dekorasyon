export const galleryItems = [
  {
    type: "image",
    src: "/gallery/istanbul-cita-1.jpeg",
    alt: "İstanbul çita uygulaması 1",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-2.jpeg",
    alt: "İstanbul çita uygulaması 2",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-3.jpeg",
    alt: "İstanbul çita uygulaması 3",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-4.jpeg",
    alt: "İstanbul çita uygulaması 4",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-5.jpeg",
    alt: "İstanbul çita uygulaması 5",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-6.jpeg",
    alt: "İstanbul çita uygulaması 6",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-7.jpeg",
    alt: "İstanbul çita uygulaması 7",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-8.jpeg",
    alt: "İstanbul çita uygulaması 8",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-9.jpeg",
    alt: "İstanbul çita uygulaması 9",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-10.jpeg",
    alt: "İstanbul çita uygulaması 10",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-11.jpeg",
    alt: "İstanbul çita uygulaması 11",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-12.jpeg",
    alt: "İstanbul çita uygulaması 12",
  },
  {
    type: "image",
    src: "/gallery/istanbul-cita-13.jpeg",
    alt: "İstanbul çita uygulaması 13",
  },
  {
    type: "video",
    src: "/gallery/istanbul-cita-14.mp4",
    alt: "İstanbul çita uygulaması video 1",
  },
  {
    type: "video",
    src: "/gallery/istanbul-cita-15.mp4",
    alt: "İstanbul çita uygulaması video 2",
  },
];

export function getGalleryPreview(count = 6) {
  return galleryItems.slice(0, Math.max(0, count));
}
