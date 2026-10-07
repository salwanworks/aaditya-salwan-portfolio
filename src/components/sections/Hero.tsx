"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import NodeField from "@/components/ui/NodeField";
import { education, profile, resume, socialLinks } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;
const item = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease },
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36" aria-labelledby="hero-title">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <NodeField />
      </div>
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-signal/[0.07] blur-[120px]"
        aria-hidden
      />

      <div className="page relative grid items-center gap-14 pb-20 md:pb-28 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div>
          <motion.a
            {...item(0)}
            href="#drdo"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-ink-850/80 py-1.5 pl-2 pr-3.5 text-[12.5px] text-slate-300 transition-colors hover:border-signal/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-signal">Now</span>
            <span>DRDO Intern · DEAL, Dehradun</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            {...item(0.08)}
            id="hero-title"
            className="mt-7 text-[clamp(2.75rem,7.2vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white"
          >
            Aaditya
            <br />
            Salwan<span className="text-signal">.</span>
          </motion.h1>

          <motion.p
            {...item(0.16)}
            className="mt-6 font-mono text-[13px] tracking-wide text-slate-300 sm:text-[14px]"
          >
            AI/ML Engineer <span className="text-signal/70">•</span> Computer Vision{" "}
            <span className="text-signal/70">•</span> Software Developer
          </motion.p>

          <motion.p
            {...item(0.24)}
            className="mt-6 max-w-[38rem] text-pretty text-lg leading-relaxed text-slate-300 md:text-[19px]"
          >
            {profile.intro}
          </motion.p>
          <motion.p {...item(0.3)} className="mt-3 max-w-[38rem] text-[15.5px] leading-relaxed text-slate-400">
            {profile.current}
          </motion.p>

          <motion.div {...item(0.38)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary px-5 py-3">
              View My Work
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-5 py-3"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              Connect on LinkedIn
            </a>
          </motion.div>

          <motion.div
            {...item(0.46)}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-400"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" aria-hidden />
              github.com/salwanworks
            </a>
            <a
              href={resume.url}
              download={resume.downloadName}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download résumé (PDF)
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10 bg-ink-850">
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              fill
              priority
              sizes="(min-width: 1024px) 380px, 340px"
              className="object-cover object-[50%_20%] brightness-[0.94]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
              <div>
                <p className="text-[14px] font-medium text-white">{profile.name}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[12px] text-slate-300">
                  <MapPin className="h-3 w-3" aria-hidden />
                  {profile.location}
                </p>
              </div>
              <p className="rounded-md border border-white/15 bg-ink-950/70 px-2 py-1 font-mono text-[10.5px] text-slate-300 backdrop-blur">
                B.E. CSE · {education.duration.replace(" – ", "–")}
              </p>
            </figcaption>
          </div>
          {/* viewfinder corners */}
          {[
            "left-[-10px] top-[-10px] border-l border-t",
            "right-[-10px] top-[-10px] border-r border-t",
            "bottom-[-10px] left-[-10px] border-b border-l",
            "bottom-[-10px] right-[-10px] border-b border-r",
          ].map((c) => (
            <span key={c} className={`absolute h-5 w-5 border-signal/60 ${c}`} aria-hidden />
          ))}
        </motion.figure>
      </div>
    </section>
  );
}
