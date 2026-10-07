import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="page py-24 md:py-32" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        index="01"
        eyebrow="About"
        title={
          <>
            Engineering + research, <span className="text-slate-500">applied to systems that see, sense and respond.</span>
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-pretty text-[17px] leading-[1.75] text-slate-300 md:text-lg">{profile.about}</p>

          <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Interests</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.interests.map((i) => (
              <li
                key={i}
                className="rounded-full border border-white/[0.09] bg-ink-850 px-3.5 py-1.5 text-[13.5px] text-slate-200 transition-colors hover:border-signal/40 hover:text-white"
              >
                {i}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="grid content-start gap-3">
          <div className="surface p-5">
            <div className="flex items-center gap-2 text-slate-400">
              <Sparkles className="h-4 w-4 text-signal" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Current focus</span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-200">
              {profile.focus.join(" · ")}
            </p>
          </div>
          <div className="surface p-5">
            <div className="flex items-center gap-2 text-slate-400">
              <GraduationCap className="h-4 w-4 text-violet" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Education</span>
            </div>
            <p className="mt-3 text-[15px] text-slate-200">{education.degree}</p>
            <p className="text-[13.5px] text-slate-400">
              {education.institution}, {education.college}
            </p>
            <div className="mt-4 flex items-baseline justify-between border-t border-white/[0.06] pt-3">
              <span className="text-[13px] text-slate-500">CGPA ({education.cgpaNote})</span>
              <span className="font-mono text-[15px] text-white">{education.cgpa}</span>
            </div>
          </div>
          <div className="surface flex items-center gap-2 p-5 text-[14px] text-slate-300">
            <MapPin className="h-4 w-4 text-slate-500" aria-hidden />
            Based in {profile.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
