"use client";

import { motion } from "framer-motion";
import { Activity, BellRing, Building2, Calendar, MapPin, Radio, Server } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { drdo } from "@/data/profile";

const stages = [
  {
    icon: Server,
    title: "SNMP Agent",
    note: "Serves GET · GETNEXT · GETBULK",
    tone: "signal",
  },
  {
    icon: Radio,
    title: "Telemetry",
    note: "SNMPv2c over Python / PySNMP",
    tone: "slate",
  },
  {
    icon: Activity,
    title: "SNMP Manager",
    note: "Polls telemetry via SNMP GET",
    tone: "violet",
  },
  {
    icon: BellRing,
    title: "Fault / Alarm Monitoring",
    note: "Telemetry, fault & alarm handling",
    tone: "fault",
  },
] as const;

const toneCls: Record<string, string> = {
  signal: "text-signal border-signal/30 bg-signal/[0.06]",
  slate: "text-slate-300 border-white/15 bg-white/[0.03]",
  violet: "text-violet border-violet/30 bg-violet/[0.07]",
  fault: "text-fault border-fault/30 bg-fault/[0.07]",
};

function Connector({ i }: { i: number }) {
  return (
    <div className="relative flex items-center justify-center md:h-auto md:w-full" aria-hidden>
      {/* vertical on mobile, horizontal on desktop */}
      <div className="relative h-8 w-px bg-white/10 md:h-px md:w-full">
        <span className="packet packet-v md:hidden" style={{ animationDelay: `${i * 0.4}s` }} />
        <span className="packet packet-h hidden md:block" style={{ animationDelay: `${i * 0.4}s` }} />
      </div>
    </div>
  );
}

export default function Drdo() {
  return (
    <section
      id="drdo"
      className="relative scroll-mt-20 border-y border-white/[0.06] bg-ink-900/60 py-24 md:py-32"
      aria-labelledby="drdo-title"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="page relative">
        <SectionHeading
          id="drdo-title"
          index="02"
          eyebrow="Current role · DRDO Internship"
          title={
            <>
              {drdo.project}
              <span className="text-slate-500"> at DRDO&apos;s Defence Electronics Application Laboratory.</span>
            </>
          }
        />

        {/* Meta strip */}
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Building2, k: "Organisation", v: drdo.organization },
              { icon: Server, k: "Laboratory", v: drdo.lab },
              { icon: MapPin, k: "Location", v: drdo.location },
              { icon: Calendar, k: "Duration", v: drdo.duration },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="bg-ink-850 p-5">
                <dt className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-500">
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {k}
                </dt>
                <dd className="mt-2 text-[14.5px] leading-snug text-slate-100">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Telemetry pipeline */}
        <Reveal delay={0.05} className="mt-6">
          <div className="surface relative overflow-hidden p-5 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Local SNMPv2c telemetry setup
              </p>
              <p className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                Python · PySNMP
              </p>
            </div>

            <ol
              className="mt-8 flex flex-col items-stretch md:grid md:grid-cols-[1fr_56px_1fr_56px_1fr_56px_1fr] md:items-center"
              aria-label="Telemetry flow: SNMP Agent to Telemetry to SNMP Manager to Fault and Alarm Monitoring"
            >
              {stages.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title} className="contents">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                      className="rounded-xl border border-white/[0.08] bg-ink-950/70 p-4"
                    >
                      <span className={`inline-grid h-9 w-9 place-items-center rounded-lg border ${toneCls[s.tone]}`}>
                        <Icon className="h-[18px] w-[18px]" aria-hidden />
                      </span>
                      <p className="mt-3 text-[15px] font-medium text-white">{s.title}</p>
                      <p className="mt-1 font-mono text-[11.5px] leading-relaxed text-slate-400">{s.note}</p>
                    </motion.div>
                    {i < stages.length - 1 && <Connector i={i} />}
                  </li>
                );
              })}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/[0.06] pt-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Satellite-hub subsystems studied
              </span>
              <div className="flex flex-wrap gap-2">
                {drdo.subsystems.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-ink-950 px-2.5 py-1 font-mono text-[12px] text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Description + work */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="surface p-6 md:p-7">
            <p className="eyebrow">Project</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{drdo.project}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{drdo.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {drdo.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="surface p-6 md:p-7">
            <p className="eyebrow">Technical work</p>
            <ul className="mt-4 space-y-3.5">
              {drdo.work.map((w, i) => (
                <li key={w} className="flex gap-3.5 text-[15px] leading-relaxed text-slate-300">
                  <span className="mt-[3px] font-mono text-[11px] text-signal/80">{String(i + 1).padStart(2, "0")}</span>
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
