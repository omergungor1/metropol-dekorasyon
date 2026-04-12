"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { business, telLink, waLink } from "../lib/site";
import { mainNav } from "../lib/nav";
import SearchModal from "./SearchModal";

function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5.5h3l2 5-2.2 1.1a9 9 0 004.6 4.6L13 14l5 2v3a1.5 1.5 0 01-1.4 1.5C8.6 20.5 3.5 15.4 3.5 6.9A1.5 1.5 0 015 5.5z"
      />
    </svg>
  );
}

function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="11" cy="11" r="6.5" strokeWidth="1.7" />
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        d="M16 16l4.5 4.5"
      />
    </svg>
  );
}

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.7" strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
    </svg>
  );
}

export default function AppChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="border-md-sand/80 bg-md-cream/90 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="md-container flex min-h-16 items-center justify-between gap-2 py-2 sm:gap-3 lg:h-16 lg:py-0">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2 lg:gap-3">
            <button
              type="button"
              className="text-md-ink hover:bg-md-sand/60 -ml-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <IconMenu className="h-6 w-6" />
              <span className="sr-only">Menü</span>
            </button>
            <Link
              href="/"
              className="flex min-w-0 items-center gap-1.5 sm:gap-2 lg:gap-2.5"
            >
              <Image
                src={business.logoPath}
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 shrink-0 rounded-md object-contain"
                priority
              />
              <span className="text-md-ink text-sm font-semibold leading-snug tracking-tight sm:text-base">
                {business.name.split(/\s+/).filter(Boolean).map((word, index) => (
                  <span key={index} className="block lg:inline">
                    {index > 0 ? <span className="hidden lg:inline"> </span> : null}
                    {word}
                  </span>
                ))}
              </span>
            </Link>
          </div>

          <nav
            className="text-md-muted hidden items-center gap-6 text-sm font-medium lg:flex"
            aria-label="Ana menü"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-md-terracotta-dark transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-md-ink hover:bg-md-sand/60 hidden h-10 w-10 items-center justify-center rounded-full sm:inline-flex lg:inline-flex"
              aria-label="Ara"
            >
              <IconSearch className="h-5 w-5" />
            </button>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md-sage-dark hover:bg-md-sand/60 hidden h-10 w-10 items-center justify-center rounded-full sm:inline-flex"
              aria-label="WhatsApp"
            >
              <IconWhatsApp className="h-5 w-5" />
            </a>
            <a
              href={telLink()}
              className="md-btn-primary hidden px-4 py-2 text-xs sm:inline-flex"
            >
              <IconPhone className="h-4 w-4" />
              Ara
            </a>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav"
            className="border-md-sand border-t bg-white/95 lg:hidden"
          >
            <nav className="md-container flex flex-col gap-1 py-3 text-sm font-medium">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-md-terracotta-dark rounded-lg px-2 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-wrap gap-2">
                <a href={telLink()} className="md-btn-primary text-xs">
                  Hemen ara
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md-btn-outline text-xs"
                >
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        ) : null}
      </header>

      <div className="fixed right-3 bottom-[max(1rem,env(safe-area-inset-bottom,0px))] z-40 flex flex-col gap-2 sm:hidden">
        <a
          href={telLink()}
          className="bg-md-terracotta hover:bg-md-terracotta-dark shadow-md flex h-12 w-12 items-center justify-center rounded-full text-white transition"
          aria-label={`Telefon ile ara: ${business.phoneDisplay}`}
        >
          <IconPhone className="h-5 w-5" />
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-md flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:brightness-95"
          aria-label="WhatsApp"
        >
          <IconWhatsApp className="h-6 w-6" />
        </a>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
