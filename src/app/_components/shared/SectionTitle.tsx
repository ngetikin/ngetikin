export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{subtitle}</p>
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
    </div>
  );
}
