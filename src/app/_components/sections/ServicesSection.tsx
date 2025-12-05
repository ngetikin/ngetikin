import Link from "next/link";
import type { CompanyProfile } from "@/lib/companyProfile";
import { SectionTitle } from "../shared/SectionTitle";

export function ServicesSection({
  packages,
}: {
  packages: CompanyProfile["packages"];
}) {
  return (
    <section id="services" className="space-y-6">
      <SectionTitle
        title="Paket Layanan"
        subtitle="Pilih jalur yang sesuai kebutuhan"
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article
            key={pkg.title}
            className="flex relative flex-col gap-5 p-6 h-full rounded-2xl border transition-transform duration-200 hover:-translate-y-1 card-anim group border-white/10 bg-white/5 shadow-[0_24px_80px_-60px_rgba(0,245,212,0.6)] hover:border-cyan-300/60"
          >
            <div className="absolute inset-0 bg-gradient-to-br via-transparent rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 from-cyan-400/5 to-emerald-400/10" />
            <div className="flex relative gap-3 justify-between items-start">
              <div className="space-y-1">
                <p className="text-cyan-200 uppercase text-[11px] tracking-[0.22em]">
                  Paket
                </p>
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {pkg.title}
                </h3>
                <p className="text-sm text-cyan-100/90">
                  {pkg.summary || pkg.title}
                </p>
              </div>
            </div>
            <div className="text-xs text-cyan-200 uppercase tracking-[0.12em]">
              Termasuk
            </div>
            <ul className="relative space-y-2 text-sm text-slate-200">
              {pkg.highlights.slice(0, 6).map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="inline-block mt-1 w-2 h-2 bg-cyan-300 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {pkg.price && (
              <span className="py-2 px-3 text-sm font-semibold leading-tight text-cyan-100 rounded-xl shadow-inner bg-cyan-400/15 shadow-cyan-500/20">
                {pkg.price}
              </span>
            )}

            <div className="flex justify-center items-center relative gap-3 mt-auto text-sm">
              <a
                className="flex-1 py-2 px-4 font-semibold text-center bg-cyan-400 rounded-full transition-transform duration-200 hover:bg-cyan-300 hover:-translate-y-0.5 text-slate-900 hover:text-slate-900"
                href="https://wa.me/6285117121912"
                target="_blank"
                rel="noreferrer"
              >
                Konsultasi Paket
              </a>
              <Link
                className="py-2 px-4 text-center text-cyan-100 rounded-full border transition-transform duration-200 hover:border-cyan-200 hover:-translate-y-0.5 border-white/20"
                href="#contact"
              >
                Detail
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
