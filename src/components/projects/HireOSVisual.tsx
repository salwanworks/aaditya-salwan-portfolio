import { Check, FileText, Shield, User, Users } from "lucide-react";

/**
 * Illustrative interface for HireOS — portals, multi-round pipeline,
 * automated coding evaluation and offer-letter generation.
 * Not a screenshot; contains no real candidate data or scores.
 */
const rounds = ["Screening", "Coding", "Interview", "Offer"];

export default function HireOSVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex h-full w-full overflow-hidden bg-[#0B1019] text-left ${className}`}
      role="img"
      aria-label="Illustration of the HireOS interface showing Admin, HR and Candidate portals and a multi-round hiring pipeline."
    >
      {/* sidebar */}
      <div className="hidden w-[30%] shrink-0 flex-col gap-1.5 border-r border-white/[0.06] p-3 sm:flex">
        <p className="mb-2 font-mono text-[10px] font-semibold tracking-wider text-white">
          Hire<span className="text-violet">OS</span>
        </p>
        {[
          { i: Shield, t: "Admin" },
          { i: Users, t: "HR", active: true },
          { i: User, t: "Candidate" },
        ].map(({ i: Icon, t, active }) => (
          <div
            key={t}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] ${
              active ? "bg-violet/15 text-white" : "text-slate-500"
            }`}
          >
            <Icon className="h-3 w-3" aria-hidden /> {t} portal
          </div>
        ))}
        <div className="mt-auto rounded-md border border-white/[0.06] p-2">
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">Workflow</p>
          <div className="mt-1.5 h-1 rounded-full bg-white/[0.06]">
            <div className="h-1 w-3/5 rounded-full bg-violet/70" />
          </div>
        </div>
      </div>

      {/* main */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-medium text-slate-200">Multi-round assessment</p>
          <span className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[9px] text-slate-500">
            illustrative
          </span>
        </div>
        <div className="mt-3 grid flex-1 grid-cols-4 gap-1.5">
          {rounds.map((r, ci) => (
            <div key={r} className="flex flex-col gap-1.5 rounded-md bg-white/[0.025] p-1.5">
              <p className="truncate font-mono text-[8.5px] uppercase tracking-wider text-slate-500">{r}</p>
              {Array.from({ length: 3 - Math.floor(ci / 2) }).map((_, k) => (
                <div key={k} className="rounded border border-white/[0.06] bg-ink-850 p-1.5">
                  <div className="h-1.5 w-4/5 rounded-full bg-slate-600/60" />
                  <div className="mt-1 h-1 w-1/2 rounded-full bg-slate-700/60" />
                  {ci === 1 && (
                    <p className="mt-1.5 flex items-center gap-1 font-mono text-[7.5px] text-signal">
                      <Check className="h-2 w-2" aria-hidden /> auto-eval
                    </p>
                  )}
                  {ci === 3 && (
                    <p className="mt-1.5 flex items-center gap-1 font-mono text-[7.5px] text-violet">
                      <FileText className="h-2 w-2" aria-hidden /> offer letter
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-2.5 rounded-md border border-white/[0.06] bg-ink-850 p-2">
          <p className="font-mono text-[9px] text-slate-500">
            <span className="text-signal">$</span> evaluate --submission coding_round
            <span className="blink ml-0.5 inline-block h-2 w-1 translate-y-0.5 bg-signal" />
          </p>
        </div>
      </div>
    </div>
  );
}
