import { Award, ExternalLink, Linkedin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkButton from "@/components/ui/LinkButton";
import { certifications } from "@/data/profile";
import { hasUrl } from "@/lib/links";

export default function Certifications() {
  return (
    <section id="certifications" className="page py-24 md:py-32" aria-labelledby="cert-title">
      <SectionHeading
        id="cert-title"
        index="06"
        eyebrow="Certifications"
        title={
          <>
            Coursework beyond the classroom. <span className="text-slate-500">IIT Madras, IIT Kharagpur, IIT Bombay and MongoDB.</span>
          </>
        }
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const certLink = hasUrl(c.certificateUrl) ? c.certificateUrl : "";
          const postLink = !certLink && hasUrl(c.linkedinPostUrl) ? c.linkedinPostUrl : "";
          return (
            <li key={c.name}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <article className="surface group relative flex h-full flex-col overflow-hidden p-6 transition-colors hover:border-white/15">
                  <span
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet/[0.08] blur-2xl transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-ink-950 px-2 py-1 font-mono text-[10.5px] uppercase tracking-wider text-slate-300">
                      <Award className="h-3 w-3 text-violet" aria-hidden />
                      {c.platform}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">{c.category}</span>
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold leading-snug text-white">{c.name}</h3>
                  <p className="mt-1.5 text-[13.5px] text-slate-400">{c.issuer}</p>
                  <div className="mt-auto pt-6 empty:hidden">
                    <LinkButton href={certLink} label={`View certificate: ${c.name}`}>
                      View Certificate <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </LinkButton>
                    <LinkButton href={postLink} label={`View LinkedIn post: ${c.name}`}>
                      <Linkedin className="h-3.5 w-3.5" aria-hidden /> View on LinkedIn
                    </LinkButton>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
