import { SectionTitle } from "../shared/SectionTitle";

export function WhySection({ reasons }: { reasons: string[] }) {
  return (
    <section id="why" className="space-y-6">
      <SectionTitle title="Kenapa Memilih Ngetikin" subtitle="Alasan klien nyaman bekerja dengan kami" />
      <div className="grid gap-4 md:grid-cols-2">
        {reasons.map((reason) => (
          <div key={reason} className="card-anim flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200">✓</div>
            <p className="text-slate-200">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
