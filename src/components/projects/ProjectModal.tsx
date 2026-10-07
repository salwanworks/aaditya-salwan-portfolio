"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, X } from "lucide-react";
import type { Project } from "@/data/profile";
import { hasUrl } from "@/lib/links";
import LinkButton from "@/components/ui/LinkButton";
import PerfStory from "./PerfStory";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/[0.06] pt-6">
      <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">{title}</h4>
      <div className="mt-3 text-[15px] leading-relaxed text-slate-300">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-slate-500" aria-hidden />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const d = project.detail;
  const hasLinks = hasUrl(project.githubUrl) || hasUrl(project.linkedinPostUrl);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (!f.length) return;
        const first = f[0],
          last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-modal-title`}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-white/10 bg-ink-900 sm:rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.06] bg-ink-900/95 px-6 py-5 backdrop-blur md:px-8">
          <div>
            <p className="eyebrow">Case study</p>
            <h3 id={`${project.id}-modal-title`} className="mt-1.5 text-xl font-semibold text-white md:text-2xl">
              {project.title}
              <span className="text-slate-500"> — {project.subtitle}</span>
            </h3>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-white/25 hover:text-white"
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-6 px-6 py-6 md:px-8 md:py-8">
          <p className="text-[16px] leading-relaxed text-slate-300">{project.description}</p>

          {project.id === "fruit-ninja" && <PerfStory />}

          <Block title="Problem">{d.problem}</Block>
          <Block title="Solution">{d.solution}</Block>
          <Block title="Technology">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Block>
          <Block title="Technical implementation">
            <List items={d.implementation} />
          </Block>
          <Block title="Challenges">
            <List items={d.challenges} />
          </Block>
          <Block title="Results">
            <List items={d.results} />
          </Block>
          {hasLinks && (
            <Block title="Links">
              <div className="flex flex-wrap gap-2">
                <LinkButton href={project.githubUrl} className="btn-ghost">
                  <Github className="h-4 w-4" aria-hidden /> GitHub
                </LinkButton>
                <LinkButton href={project.linkedinPostUrl} className="btn-ghost">
                  <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn Post
                </LinkButton>
              </div>
            </Block>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
