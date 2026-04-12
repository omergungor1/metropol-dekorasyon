"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { searchIndex } from "../lib/nav";
import { bolgeler } from "../lib/bolgeler";
import { blogPosts } from "../data/blog";

const extra = [
  ...bolgeler.map((b) => ({
    href: `/bolgeler/${b.slug}`,
    title: `${b.name} — boya ve dekorasyon`,
    keywords: b.headline,
  })),
  ...blogPosts.map((p) => ({
    href: `/blog/${p.slug}`,
    title: p.title,
    keywords: p.description,
  })),
];

const allItems = [...searchIndex, ...extra];

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState("");

  const handleClose = useCallback(() => {
    setQ("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, handleClose]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return allItems.slice(0, 8);
    return allItems.filter((item) => {
      const hay = `${item.title} ${item.keywords}`.toLowerCase();
      return hay.includes(t);
    });
  }, [q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-black/40 p-4 pt-24 sm:pt-28"
      role="dialog"
      aria-modal="true"
      aria-label="Site içi arama"
      onClick={handleClose}
    >
      <div
        className="bg-md-card border-md-sand w-full max-w-lg rounded-2xl border shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-md-sand flex items-center gap-2 border-b px-4 py-3">
          <span className="text-md-muted text-sm" aria-hidden>
            ⌕
          </span>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Sayfa veya konu ara…"
            className="text-md-ink placeholder:text-md-muted/70 min-w-0 flex-1 bg-transparent text-sm outline-none"
          />
          <button
            type="button"
            onClick={handleClose}
            className="text-md-muted hover:text-md-ink rounded-full px-2 py-1 text-xs font-medium"
          >
            Kapat
          </button>
        </div>
        <ul className="max-h-80 overflow-y-auto py-2 text-sm">
          {results.length === 0 ? (
            <li className="text-md-muted px-4 py-3">Sonuç bulunamadı.</li>
          ) : (
            results.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleClose}
                  className="hover:bg-md-cream block px-4 py-2.5"
                >
                  <span className="text-md-ink font-medium">{item.title}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
