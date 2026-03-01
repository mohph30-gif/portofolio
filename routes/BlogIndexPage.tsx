import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { BLOG_POSTS } from '../content/blog';
import { SITE_URL } from '../content/site';
import { createSeoMeta } from '../lib/seo/seo';

const meta = createSeoMeta({
  title: 'Blog | Flutter Developer Insights',
  description:
    'Articles about Flutter delivery, startup MVP decisions, Firebase, Supabase, and mobile app execution from a freelance Flutter developer.',
  canonical: `${SITE_URL}/blog`,
  keywords: ['flutter blog', 'mobile app development blog', 'startup mobile product articles'],
});

export default function BlogIndexPage() {
  return (
    <>
      <Seo meta={meta} />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Blog</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">Content built to attract the right search traffic over time.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            These posts support long-tail SEO around Flutter delivery, startup MVP work, backend choices, and product launch concerns.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500">
                  {post.publishedAt} • {post.readingTime}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{post.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-semibold text-emerald-600">
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
