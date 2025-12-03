import type { CompanyProfile } from "@/lib/companyProfile";
import { SectionTitle } from "../shared/SectionTitle";

export function AboutSection({ profile }: { profile: CompanyProfile }) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]" id="about">
      <div className="space-y-4">
        <SectionTitle title="Tentang Kami" subtitle="Studio web untuk UMKM, komunitas, dan brand baru" />
        <p className="leading-relaxed text-slate-200">{profile.about}</p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
          <p className="text-xs uppercase text-cyan-200">Nilai inti</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {profile.values.map((value) => (
              <div key={value} className="card-anim flex items-center gap-2 rounded-lg border border-white/10 bg-[#0a1422]/80 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(0,245,212,0.18)]" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <SectionTitle title="Target Klien" subtitle="Segmen yang paling terbantu" />
        <div className="grid gap-3">
          {profile.targets.map((target) => (
            <div key={target} className="card-anim flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-slate-100">{target}</span>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">Fokus</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
