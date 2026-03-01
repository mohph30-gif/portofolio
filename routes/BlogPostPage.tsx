import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { getBlogPostBySlug } from '../content/blog';
import { SITE_URL } from '../content/site';
import { createSeoMeta } from '../lib/seo/seo';

export default function BlogPostPage() {
  const { slug = '' } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const meta = createSeoMeta({
    title: post.seo.title,
    description: post.seo.description,
    canonical: `${SITE_URL}/blog/${post.slug}`,
    keywords: [post.title, 'flutter', 'mobile app development'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.publishedAt,
      description: post.excerpt,
    },
  });

  return (
    <>
      <Seo meta={meta} />
      <article className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Blog article</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">{post.title}</h1>
          <p className="mt-4 text-sm text-slate-500">
            {post.publishedAt} • {post.readingTime}
          </p>
          <p className="mt-6 text-xl leading-8 text-slate-600">{post.excerpt}</p>

          <div className="mt-12">
            {post.body.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-lg leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
