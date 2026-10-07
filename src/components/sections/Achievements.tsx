import { ArrowUpRight, Linkedin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { achievements, socialLinks, timeline } from "@/data/profile";

const kindTone: Record<string, string> = {
  Project: "text-signal border-signal/25 bg-signal/[0.06]",
  Certification: "text-violet border-violet/25 bg-violet/[0.07]",
  Internship: "text-warn border-warn/25 bg-warn/[0.06]",
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative border-y border-white/[0.06] bg-ink-900/50 py-24 md:py-32"
      aria-labelledby="ach-title"
    >
      <div className="page">
        <SectionHeading
          id="ach-title"
          index="07"
          eyebrow="Achievements & Updates"
          title={
            <>
              Milestones, <span className="text-slate-500">as shared on LinkedIn.</span>
            </>
          }
          lead={
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-signal"
            >
              Follow along on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          }
        />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <li key={a.title} className={i === 0 ? "md:col-span-2" : ""}>
              <Reveal delay={(i % 3) * 0.05} className="h-full">
                <article className="surface flex h-full flex-col p-6 transition-colors hover:border-white/15">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`rounded-md border px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider ${kindTone[a.kind]}`}>
                      {a.kind}
                    </span>
                    {a.date && <time className="font-mono text-[11px] text-slate-500">{a.date}</time>}
                  </div>
                  {a.metric && (
                    <p className="mt-5 font-mono text-[22px] font-semibold tracking-tight text-white">{a.metric}</p>
                  )}
                  <h3 className={`${a.metric ? "mt-1" : "mt-5"} text-[15.5px] font-medium leading-snug text-slate-100`}>
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{a.description}</p>
                  <div className="mt-auto pt-5 empty:hidden">
                    <LinkButton href={a.postUrl} label={`View LinkedIn post: ${a.title}`}>
                      <Linkedin className="h-3.5 w-3.5" aria-hidden /> View LinkedIn Post
                    </LinkButton>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={0.1} className="h-full">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[180px] flex-col justify-between rounded-2xl border border-dashed border-white/[0.12] p-6 transition-colors hover:border-signal/40"
              >
                <Linkedin className="h-5 w-5 text-slate-400 transition-colors group-hover:text-signal" aria-hidden />
                <span>
                  <span className="block text-[15.5px] font-medium text-white">More updates on LinkedIn</span>
                  <span className="mt-1 inline-flex items-center gap-1 text-[13.5px] text-slate-400">
                    View full activity <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </span>
              </a>
            </Reveal>
          </li>
        </ul>

        {/* Timeline */}
        <Reveal className="mt-20">
          <h3 className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Progression <span className="h-px flex-1 bg-white/[0.07]" aria-hidden />
          </h3>
        </Reveal>
        <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
          {timeline.map((t, i) => (
            <li key={t.year} className="relative">
              <Reveal delay={i * 0.12}>
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      i === timeline.length - 1 ? "bg-signal shadow-[0_0_0_4px_rgba(45,212,191,0.15)]" : "bg-slate-500"
                    }`}
                    aria-hidden
                  />
                  <span className="font-mono text-2xl font-semibold text-white">{t.year}</span>
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent md:block" aria-hidden />
                </div>
                <ul className="mt-4 space-y-2 border-l border-white/[0.07] pl-5 md:ml-[4px]">
                  {t.items.map((it) => (
                    <li key={it} className="text-[14px] leading-relaxed text-slate-300">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
