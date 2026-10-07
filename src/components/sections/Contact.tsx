import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { profile, resume, socialLinks } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="page pb-24 pt-8 md:pb-32" aria-labelledby="contact-title">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-850 px-6 py-14 md:px-14 md:py-20">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
          <div
            className="pointer-events-none absolute -bottom-40 -right-24 h-[380px] w-[520px] rounded-full bg-signal/[0.08] blur-[110px]"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <p className="eyebrow">08 · Contact</p>
            <h2
              id="contact-title"
              className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-[3.4rem] md:leading-[1.05]"
            >
              Let&apos;s build something intelligent.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-slate-300">
              Interested in AI/ML, computer vision, software engineering, or building something ambitious?
              Let&apos;s connect.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={socialLinks.email} className="btn-primary px-5 py-3">
                <Mail className="h-4 w-4" aria-hidden /> Email Me
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-3">
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-3">
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
              <a href={resume.url} download={resume.downloadName} className="btn-ghost px-5 py-3">
                <Download className="h-4 w-4" aria-hidden /> Resume
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-6 font-mono text-[13.5px] text-slate-400 sm:flex-row sm:gap-8">
              <a href={socialLinks.email} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-slate-500" aria-hidden /> {profile.email}
              </a>
              <a href={socialLinks.phone} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-slate-500" aria-hidden /> {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
