export function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0a1422]/70 px-3 py-2">
      <span className="text-slate-200">{label}</span>
      <span className="text-cyan-100">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block transition-transform duration-150 hover:-translate-y-0.5">
      {content}
    </a>
  ) : (
    content
  );
}
