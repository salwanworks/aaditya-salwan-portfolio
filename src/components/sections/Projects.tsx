"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Linkedin, Maximize2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import HandTrackingVisual from "@/components/projects/HandTrackingVisual";
import HireOSVisual from "@/components/projects/HireOSVisual";
import PerfStory from "@/components/projects/PerfStory";
import ProjectModal from "@/components/projects/ProjectModal";
import { featuredProjects, otherProjects, type Project } from "@/data/profile";

function FeaturedCard({ p, flip, onOpen }: { p: Project; flip?: boolean; onOpen: () => void }) {
  return (
    <article className="group surface overflow-hidden transition-colors duration-300 hover:border-white/15">
      <div className={`grid lg:grid-cols-[1.05fr_1fr] ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {/* Visual */}
        <button
          type="button"
          onClick={onOpen}
          className="relative block aspect-[4/3] w-full overflow-hidden border-b border-white/[0.06] text-left lg:aspect-auto lg:min-h-[440px] lg:border-b-0"
          aria-label={`Open case study: ${p.title}`}
        >
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            {p.visual === "handtracking" ? (
              <div className="grid h-full place-items-center bg-[#0B1019]">
                <HandTrackingVisual className="h-full w-full" />
              </div>
            ) : (
              <div className="grid h-full place-items-center bg-[#090D15] p-5 sm:p-8">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-black/40">
                  <HireOSVisual />
                </div>
              </div>
            )}
          </div>
          <span className="absolute bottom-3 left-3 rounded border border-white/10 bg-ink-950/80 px-1.5 py-0.5 font-mono text-[10px] text-slate-400 backdrop-blur">
            illustration
          </span>
          <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-ink-950/70 text-slate-300 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" aria-hidden />
          </span>
        </button>

        {/* Content */}
        <div className="flex flex-col p-6 md:p-8">
          <p className="eyebrow">{p.visual === "handtracking" ? "Computer Vision" : "AI · Full-stack"}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-[28px]">{p.title}</h3>
          <p className="mt-1 text-[15px] text-slate-400">{p.subtitle}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{p.description}</p>

          {p.visual === "handtracking" ? (
            <div className="mt-6">
              <PerfStory compact />
            </div>
          ) : (
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-lg border border-white/[0.06] bg-ink-950/60 px-3 py-2.5 text-[13px] leading-snug text-slate-300"
                >
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
            <button type="button" onClick={onOpen} className="btn-primary">
              View case study
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </button>
            <LinkButton href={p.githubUrl} className="btn-ghost" label={`${p.title} on GitHub`}>
              <Github className="h-4 w-4" aria-hidden /> GitHub
            </LinkButton>
            <LinkButton href={p.linkedinPostUrl} className="btn-ghost" label={`${p.title} LinkedIn post`}>
              <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn Post
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="projects" className="page py-24 md:py-32" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        index="04"
        eyebrow="Featured Projects"
        title={
          <>
            Built, profiled, improved. <span className="text-slate-500">Select a project for the full case study.</span>
          </>
        }
      />

      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <FeaturedCard p={p} flip={i % 2 === 1} onOpen={() => setOpen(p)} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <h3 className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
          More work <span className="h-px flex-1 bg-white/[0.07]" aria-hidden />
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {otherProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="surface flex h-full flex-col p-6 transition-colors hover:border-white/15">
              <h4 className="text-[17px] font-semibold text-white">{p.title}</h4>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate-400">{p.description}</p>
              <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-1.5 text-[13.5px] text-slate-300 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-signal/70" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-5 empty:hidden">
                <LinkButton href={p.githubUrl}>
                  <Github className="h-3.5 w-3.5" aria-hidden /> GitHub
                </LinkButton>
                <LinkButton href={p.linkedinPostUrl}>
                  <Linkedin className="h-3.5 w-3.5" aria-hidden /> LinkedIn Post
                </LinkButton>
                <LinkButton href={p.liveUrl}>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden /> Live
                </LinkButton>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>{open && <ProjectModal project={open} onClose={close} />}</AnimatePresence>
    </section>
  );
}
