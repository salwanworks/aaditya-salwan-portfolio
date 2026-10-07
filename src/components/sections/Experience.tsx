import { Briefcase } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section className="page py-24 md:py-28" aria-labelledby="exp-title">
      <SectionHeading id="exp-title" index="03" eyebrow="Experience" title="Where I've worked." />

      <ol className="relative space-y-5 border-l border-white/[0.08] pl-6 md:pl-10">
        {experience.map((e, i) => (
          <li key={e.role} className="relative">
            <span
              className={`absolute -left-[31px] top-7 grid h-3 w-3 place-items-center rounded-full border md:-left-[47px] ${
                e.highlight ? "border-signal bg-signal/30" : "border-slate-500 bg-ink-950"
              }`}
              aria-hidden
            />
            <Reveal delay={i * 0.06}>
              <article
                className={`surface p-6 transition-colors md:p-7 ${
                  e.highlight ? "border-signal/20 hover:border-signal/35" : "hover:border-white/15"
                }`}
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{e.role}</h3>
                    <p className="mt-1 text-[14.5px] text-slate-300">{e.organization}</p>
                    {e.unit && <p className="text-[13.5px] text-slate-400">{e.unit}</p>}
                  </div>
                  <div className="shrink-0 md:text-right">
                    <p className="font-mono text-[12.5px] text-slate-300">{e.duration}</p>
                    {e.location && <p className="text-[12.5px] text-slate-500">{e.location}</p>}
                    {e.highlight && (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider text-signal">
                        <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-slate-400">
                      <Briefcase className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-600" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
