"use client";

import { motion } from "framer-motion";
import { Gauge, Search, Zap } from "lucide-react";

/** The Fruit Ninja profiling story: ~7–8 FPS with PyAutoGUI → ~30 FPS with win32api.SetCursorPos. */
export default function PerfStory({ compact = false }: { compact?: boolean }) {
  const bars = [
    { label: "PyAutoGUI cursor movement", value: "~7–8 FPS", pct: 25, tone: "bg-fault/80", text: "text-fault" },
    { label: "win32api.SetCursorPos", value: "~30 FPS", pct: 100, tone: "bg-signal", text: "text-signal" },
  ];

  return (
    <div className="rounded-xl border border-white/[0.08] bg-ink-950/70 p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">
          <Gauge className="h-4 w-4 text-signal" aria-hidden />
          Performance story
        </p>
        <span className="font-mono text-[11px] text-slate-500">frames per second</span>
      </div>

      <div className="mt-5 space-y-4">
        {bars.map((b, i) => (
          <div key={b.label}>
            <div className="flex items-baseline justify-between gap-3">
              <code className="truncate font-mono text-[12.5px] text-slate-300">{b.label}</code>
              <span className={`shrink-0 font-mono text-[15px] font-semibold ${b.text}`}>{b.value}</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                className={`h-full rounded-full ${b.tone}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${b.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      {!compact && (
        <ol className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Search, k: "Profile", v: "Hand processing took ~20 ms — tracking wasn't the problem." },
            { icon: Gauge, k: "Bottleneck", v: "PyAutoGUI cursor movement held the loop at ~7–8 FPS." },
            { icon: Zap, k: "Fix", v: "Lower-overhead win32api.SetCursorPos → ~30 FPS." },
          ].map(({ icon: Icon, k, v }, i) => (
            <li key={k} className="rounded-lg border border-white/[0.06] bg-ink-850 p-3.5">
              <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-slate-500">
                <span className="text-signal/80">0{i + 1}</span>
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {k}
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">{v}</p>
            </li>
          ))}
        </ol>
      )}

      {!compact && (
        <pre className="mt-4 overflow-x-auto rounded-lg border border-white/[0.06] bg-[#05070C] p-3.5 font-mono text-[12.5px] leading-relaxed">
          <code>
            <span className="text-slate-500"># cursor positioning</span>
            {"\n"}
            <span className="text-fault">- pyautogui.moveTo(x, y)</span>
            {"\n"}
            <span className="text-signal">+ win32api.SetCursorPos((x, y))</span>
          </code>
        </pre>
      )}
    </div>
  );
}
