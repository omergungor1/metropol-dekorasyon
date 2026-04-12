import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { getAllPostSlugs, getPostBySlug } from "../../../data/blog";
import { business, siteUrl } from "../../../lib/site";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      title: post.title,
      description: post.description,
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: business.name },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: { "@type": "ImageObject", url: `${siteUrl}${business.logoPath}` },
    },
    image: [`${siteUrl}${post.coverImage}`],
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <article className="md-container py-12 lg:py-16">
      <JsonLd data={jsonLd} />
      <nav className="text-md-muted text-xs">
        <Link href="/" className="hover:text-md-terracotta-dark">
          Ana sayfa
        </Link>
        <span className="mx-1">/</span>
        <Link href="/blog" className="hover:text-md-terracotta-dark">
          Blog
        </Link>
        <span className="mx-1">/</span>
        <span className="text-md-ink line-clamp-1">{post.title}</span>
      </nav>
      <header className="mt-6 max-w-3xl">
        <time
          dateTime={post.publishedAt}
          className="text-md-muted text-xs font-semibold uppercase tracking-wide"
        >
          {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="font-display text-md-ink mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="text-md-muted mt-3 text-sm sm:text-base">{post.description}</p>
      </header>
      <div className="border-md-sand relative mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl border bg-white shadow-sm">
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          priority
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="md-prose mt-10 max-w-3xl">
        {post.body.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/blog" className="md-btn-outline">
          ← Blog listesi
        </Link>
      </div>
    </article>
  );
}
