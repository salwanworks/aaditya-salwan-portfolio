import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  id?: string;
};

export default function SectionHeading({ index, eyebrow, title, lead, id }: Props) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] text-slate-500">{index}</span>
        <span className="h-px w-8 bg-signal/50" aria-hidden />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-[2.6rem] md:leading-[1.1]"
      >
        {title}
      </h2>
      {lead && <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-slate-400">{lead}</p>}
    </Reveal>
  );
}
