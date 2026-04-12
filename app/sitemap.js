import { blogPosts } from "../data/blog";
import { bolgeler } from "../lib/bolgeler";
import { getAllHizmetSlugs } from "../lib/hizmetler";
import { siteUrl } from "../lib/site";

const staticPaths = [
  "/",
  "/hakkimizda",
  "/iletisim",
  "/hizmetler",
  "/blog",
  "/sss",
  "/gizlilik-politikasi",
  "/kisisel-verilerin-korunmasi",
];

export default function sitemap() {
  const base = siteUrl.replace(/\/$/, "");
  const last = new Date();

  const entries = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: last,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const slug of getAllHizmetSlugs()) {
    entries.push({
      url: `${base}/hizmetler/${slug}`,
      lastModified: last,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  for (const b of bolgeler) {
    entries.push({
      url: `${base}/bolgeler/${b.slug}`,
      lastModified: last,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
