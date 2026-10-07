import { socialLinks } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[13px] font-semibold tracking-[0.25em] text-white">AADITYA SALWAN</p>
          <p className="mt-1.5 text-[13.5px] text-slate-500">Building intelligent systems, one project at a time.</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <nav aria-label="Footer" className="flex gap-5 text-[13.5px] text-slate-400">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href={socialLinks.email} className="hover:text-white">
              Email
            </a>
          </nav>
          <p className="font-mono text-[11.5px] text-slate-600">© 2026 Aaditya Salwan</p>
        </div>
      </div>
    </footer>
  );
}
