import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../data/blog";
import { siteUrl } from "../../lib/site";

export const metadata = {
  title: "Blog",
  description:
    "İstanbul boya, duvar çıtası, gergi tavan ve alçıpan hakkında ipuçları ve rehber yazıları. Metropol Dekorasyon blog.",
  alternates: { canonical: `${siteUrl}/blog` },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  );

  return (
    <div className="md-container py-12 lg:py-16">
      <h1 className="font-display text-md-ink text-3xl font-semibold tracking-tight sm:text-4xl">
        Blog
      </h1>
      <p className="text-md-muted mt-3 max-w-2xl text-sm sm:text-base">
        Dekorasyon ve boya kararlarınızı kolaylaştırmak için hazırladığımız SEO uyumlu
        rehber içerikleri.
      </p>
      <ul className="mt-10 grid gap-8 lg:grid-cols-2">
        {sorted.map((post) => (
          <li key={post.slug}>
            <article className="border-md-sand bg-md-card flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9]">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <time
                  dateTime={post.publishedAt}
                  className="text-md-muted text-xs font-medium"
                >
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="font-display text-md-ink text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-md-terracotta-dark transition"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-md-muted text-sm leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-md-terracotta-dark mt-auto text-sm font-semibold"
                >
                  Devamını oku →
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
