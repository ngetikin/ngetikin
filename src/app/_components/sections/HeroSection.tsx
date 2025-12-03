import Image from "next/image";
import type { CompanyProfile } from "@/lib/companyProfile";

export function HeroSection({ profile }: { profile: CompanyProfile }) {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-12 shadow-2xl sm:px-12"
      id="hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,245,212,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(0,122,255,0.18),transparent_36%)]" />
      <div className="relative flex flex-col gap-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-cyan-200">
            Digital Web Studio
          </div>
          <h1 className="hero-title font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="block text-cyan-300">{profile.tagline}</span>
          </h1>
          <p className="hero-sub max-w-2xl text-lg leading-relaxed text-slate-200">{profile.heroPitch}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/6285117121912"
              className="cta-primary rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 hover:text-slate-900 shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
              target="_blank"
              rel="noreferrer"
            >
              Chat WhatsApp
            </a>
            <a
              href="mailto:ngetikin.agency@gmail.com"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
            >
              Email Kami
            </a>
          </div>
          <div className="badge-row flex flex-wrap gap-3 text-xs text-cyan-100/80">
            <span className="chip rounded-full border border-white/15 px-3 py-1">Landing page & profile</span>
            <span className="chip rounded-full border border-white/15 px-3 py-1">Harga ramah UMKM</span>
            <span className="chip rounded-full border border-white/15 px-3 py-1">Kolaborasi langsung founder</span>
          </div>
        </div>

        <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1d2f] via-[#0c1a29] to-[#0d2136] p-6 shadow-[0_24px_96px_-48px_rgba(0,245,212,0.45)]">
          <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
            <div className="floating-cube cube-1" />
            <div className="floating-cube cube-2" />
            <div className="floating-cube cube-3" />
          </div>
          <div className="relative flex items-center gap-3">
            <Image src="/ngetikin-logo.svg" alt="Ngetikin logo" width={48} height={48} />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Snapshot</p>
              <p className="text-sm text-slate-200">Berbasis remote • Sejak 2025</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-slate-200">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-cyan-200">Visi</p>
              <p className="font-medium text-white">{profile.vision}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase text-cyan-200">Misi</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-200">
                {profile.missions.slice(0, 3).map((misi) => (
                  <li key={misi}>{misi}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
