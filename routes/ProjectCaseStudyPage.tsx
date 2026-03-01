import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Seo from '../components/Seo';
import Contact from '../components/Contact';
import { getProjectBySlug } from '../content/projects';
import { SITE_URL } from '../content/site';
import { trackEvent } from '../lib/analytics/ga';
import { createSeoMeta } from '../lib/seo/seo';

export default function ProjectCaseStudyPage() {
  const { slug = '' } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) {
      return;
    }

    trackEvent('project_view', {
      project_slug: project.slug,
      project_title: project.title,
      page_type: 'project_case_study',
      page_path: `/projects/${project.slug}`,
    });
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const meta = createSeoMeta({
    title: project.seo.title,
    description: project.seo.description,
    canonical: `${SITE_URL}/projects/${project.slug}`,
    keywords: [project.shortTitle, ...project.techStack],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.summary,
      image: project.image.startsWith('http') ? project.image : `${SITE_URL}${project.image}`,
    },
  });

  return (
    <>
      <Seo meta={meta} />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Case study</p>
              <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">{project.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.techStack.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="h-[24rem] w-full rounded-[2rem] border border-slate-200 object-cover shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8 lg:col-span-1">
            <h2 className="text-2xl font-semibold text-slate-950">Project details</h2>
            <dl className="mt-6 space-y-4 text-sm text-slate-600">
              <div>
                <dt className="font-semibold text-slate-900">Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Timeline</dt>
                <dd>{project.duration}</dd>
              </div>
              {project.location ? (
                <div>
                  <dt className="font-semibold text-slate-900">Location</dt>
                  <dd>{project.location}</dd>
                </div>
              ) : null}
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              {Object.entries(project.links).map(([key, value]) =>
                value ? (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    Open {key}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null
              )}
            </div>
          </article>

          <div className="grid gap-6 lg:col-span-2">
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
              <h2 className="text-3xl font-semibold text-slate-950">Challenge</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{project.problem}</p>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
              <h2 className="text-3xl font-semibold text-slate-950">Solution</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{project.solution}</p>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
              <h2 className="text-3xl font-semibold text-slate-950">Responsibilities</h2>
              <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
                {project.responsibilities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
              <h2 className="text-3xl font-semibold text-slate-950">Impact</h2>
              <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
                {project.impact.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <Contact pageType="project_case_study" />
    </>
  );
}
