import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PROJECTS } from '../content/projects';
import Button from './Button';
import { trackContactButtonClick } from '../lib/analytics/events';

export default function Portfolio() {
  const location = useLocation();

  return (
    <section id="projects" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Selected projects</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Case studies built to convert trust, not just decorate the homepage.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Each featured project now links into a dedicated case-study page so visitors and search engines can
              understand the problem, the solution, and the delivery scope.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={() =>
              trackContactButtonClick({
                cta_location: 'projects_section',
                cta_label: 'project_consultation',
                page_type: location.pathname === '/' ? 'home' : 'site',
                page_path: location.pathname,
                section_id: 'projects',
              })
            }
          >
            <Button variant="outline">Discuss a similar project</Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  {project.role}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{project.shortTitle}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    {project.duration}
                  </span>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-600">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                  >
                    View case study
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  {project.links.web ? (
                    <a
                      href={project.links.web}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      Live project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
