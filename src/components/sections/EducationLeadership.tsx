import { GraduationCap, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { education, leadership } from "@/data/profile";

export default function EducationLeadership() {
  return (
    <section className="page py-24 md:py-28" aria-label="Education and positions of responsibility">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div>
          <Reveal>
            <p className="eyebrow">Education</p>
          </Reveal>
          <Reveal delay={0.05} className="mt-5">
            <article className="surface relative overflow-hidden p-6 md:p-7">
              <GraduationCap className="absolute -right-3 -top-3 h-24 w-24 text-white/[0.03]" aria-hidden />
              <h2 className="text-xl font-semibold text-white">{education.institution}</h2>
              <p className="text-[14.5px] text-slate-400">{education.college}</p>
              <p className="mt-4 text-[15px] text-slate-200">{education.degree}</p>
              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.06]">
                <div className="bg-ink-950/80 p-4">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-slate-500">Duration</dt>
                  <dd className="mt-1.5 font-mono text-[15px] text-white">{education.duration}</dd>
                </div>
                <div className="bg-ink-950/80 p-4">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-slate-500">CGPA</dt>
                  <dd className="mt-1.5 font-mono text-[15px] text-white">
                    {education.cgpa}
                    <span className="block text-[11px] text-slate-500">{education.cgpaNote}</span>
                  </dd>
                </div>
              </dl>
            </article>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">Positions of Responsibility</p>
          </Reveal>
          <ul className="mt-5 space-y-3">
            {leadership.map((l, i) => (
              <li key={l.role}>
                <Reveal delay={0.05 + i * 0.06}>
                  <article className="surface flex gap-4 p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-ink-950 text-slate-400">
                      <Users className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[15.5px] font-medium text-white">{l.role}</h3>
                      <p className="text-[13px] text-slate-400">
                        {l.org} · {l.place}
                      </p>
                      <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{l.description}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
