import { Bot, Code2, Cpu, Database, Eye, Globe, Radio, Workflow } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/profile";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  ml: Cpu,
  cv: Eye,
  net: Radio,
  lang: Code2,
  auto: Bot,
  web: Globe,
  tools: Database,
  core: Workflow,
};

export default function Skills() {
  const primary = skillGroups.filter((g) => g.primary);
  const rest = skillGroups.filter((g) => !g.primary);

  return (
    <section id="skills" className="relative border-y border-white/[0.06] bg-ink-900/50 py-24 md:py-32" aria-labelledby="skills-title">
      <div className="page">
        <SectionHeading
          id="skills-title"
          index="05"
          eyebrow="Technical Skills"
          title={
            <>
              Toolkit. <span className="text-slate-500">Grouped by what I build with it.</span>
            </>
          }
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {primary.map((g, i) => {
            const Icon = icons[g.key];
            return (
              <Reveal key={g.key} delay={i * 0.06}>
                <div className="surface group h-full p-6 transition-colors hover:border-signal/25">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-signal/25 bg-signal/[0.07] text-signal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[11px] text-slate-600">{String(g.items.length).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-white">{g.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-white/[0.08] bg-ink-950/70 px-2.5 py-1.5 text-[13px] text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal/40 hover:text-white"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((g, i) => {
            const Icon = icons[g.key];
            return (
              <Reveal key={g.key} delay={0.1 + i * 0.05} className={g.key === "tools" ? "sm:col-span-2" : ""}>
                <div className="surface h-full p-5 transition-colors hover:border-white/15">
                  <h3 className="flex items-center gap-2 text-[14px] font-medium text-slate-200">
                    <Icon className="h-4 w-4 text-slate-500" />
                    {g.title}
                  </h3>
                  <ul className="mt-3.5 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <li key={s} className="chip transition-colors hover:border-white/20 hover:text-white">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
