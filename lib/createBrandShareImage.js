/* eslint-disable @next/next/no-img-element -- Satori OG görseli; next/image kullanılamaz */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { business } from "./site";
import { ogImageTagline } from "./shareMeta";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/**
 * Sosyal paylaşım kartı (1200×630): logo + marka metinleri.
 * Sistem fontları (Türkçe glifler sunucuda mevcut fontlarla çizilir).
 */
export async function createBrandShareImage() {
  const logoPath = join(process.cwd(), "public", "logo.png");
  const logoBuf = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuf.toString("base64")}`;

  const fontFamily =
    'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          background: "linear-gradient(135deg, #f7f3ec 0%, #e8dfd2 45%, #f7f3ec 100%)",
          padding: 56,
          gap: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 260,
            height: 260,
            borderRadius: 24,
            background: "#ffffff",
            boxShadow: "0 8px 32px rgba(31,31,31,0.08)",
          }}
        >
          <img
            src={logoSrc}
            width={200}
            height={200}
            alt=""
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: 720,
            gap: 14,
          }}
        >
          <span
            style={{
              fontFamily,
              fontSize: 52,
              fontWeight: 700,
              color: "#1f1f1f",
              lineHeight: 1.12,
              letterSpacing: -0.5,
            }}
          >
            {business.name}
          </span>
          <span
            style={{
              fontFamily,
              fontSize: 28,
              fontWeight: 600,
              color: "#944b38",
              lineHeight: 1.2,
            }}
          >
            {business.slogan}
          </span>
          <span
            style={{
              fontFamily,
              fontSize: 24,
              fontWeight: 500,
              color: "#5c574f",
              lineHeight: 1.4,
              marginTop: 8,
            }}
          >
            {ogImageTagline}
          </span>
          <span
            style={{
              fontFamily,
              fontSize: 22,
              fontWeight: 600,
              color: "#4a5c49",
              marginTop: 12,
            }}
          >
            metropoldekor.com · İstanbul geneli hizmet
          </span>
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
    },
  );
}
