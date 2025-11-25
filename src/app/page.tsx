// Client component to enable animations
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { animate, stagger } from "motion";
import { gsap } from "gsap";

const services = [
  {
    title: "Pembuatan Web Aplikasi",
    detail: "Company profile, landing page, dan custom web system siap produksi.",
  },
  {
    title: "Maintenance & Optimization",
    detail: "Kinerja, keamanan, dan SEO dijaga agar aplikasi tetap prima.",
  },
  {
    title: "Konsultasi Digital",
    detail: "Pendampingan strategi produk dan teknologi sebelum eksekusi.",
  },
];

const developing = ["SaaS (Software as a Service)", "Vertical Software", "Advanced Project Templates"];

const values = [
  "Code Together, Grow Together",
  "Satu Visi, Banyak Eksekusi",
  "Kolaborasi = Kekuatan",
  "Transparan & Jujur",
  "Belajar Tiap Proyek",
  "Fun tapi Fokus",
];

const workflow = [
  "Konsultasi Awal",
  "Ideasi & Perancangan",
  "Development",
  "Testing & Review",
  "Delivery & Support",
];

const timeline = [
  { year: "2025", text: "Berdirinya Ngetikin sebagai studio digital." },
  { year: "2026", text: "Portofolio klien pertama dan penguatan tim inti." },
  { year: "2027", text: "Produk SaaS aktif dengan portofolio internasional." },
];

const team = [
  { name: "M. Ridho Haris Muzaki", role: "Founder & CEO (Cemy / Osiic)" },
  { name: "I Gede Shaka Pratama", role: "Co-Founder (Jukutpremium / Everezsky)" },
  { name: "Kadek Ayu Dea Permatasar", role: "Co-Founder (YunZu)" },
];

const socials = [
  { label: "Discord", href: "https://dsc.gg/ngetikin" },
  { label: "Email", href: "mailto:ngetikin.agency@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/6285117121912" },
  { label: "Website", href: "https://ngetikin.vercel.app" },
  { label: "Instagram", href: "https://www.instagram.com/ngetikin" },
  { label: "TikTok", href: "https://www.tiktok.com/@ngetikin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ngetikin" },
  { label: "Linktree", href: "https://linktr.ee/ngetikin" },
];

export default function Home() {
  useEffect(() => {
    // Hero entrance
    animate(
      ".hero-title",
      { opacity: [0, 1], y: [12, 0] },
      { duration: 0.8, easing: "ease-out" },
    );
    // CTA gentle float
    animate(
      ".cta-primary",
      { y: [0, -2, 0] },
      { duration: 1.8, easing: "ease-in-out", repeat: Infinity },
    );
    // Snapshot rows
    animate(
      ".snap-card .row-anim",
      { opacity: [0, 1], x: [-12, 0] },
      { delay: stagger(0.08), duration: 0.5, easing: "ease-out" },
    );
    // Section cards entrance
    gsap.from(".section-card", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.08,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute top-10 -left-24 w-72 h-72 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute right-0 top-40 w-80 h-80 rounded-full bg-blue-700/20 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#050910]/80 backdrop-blur">
        <div className="flex justify-between items-center py-4 px-6 mx-auto max-w-6xl">
          <div className="font-semibold tracking-tight text-white">Ngetikin</div>
          <nav className="flex gap-4 items-center text-sm text-slate-300">
            <a className="hover:text-white" href="#services">
              Layanan
            </a>
            <a className="hover:text-white" href="#workflow">
              Proses
            </a>
            <a className="hover:text-white" href="#contact">
              Kontak
            </a>
            <Link
              className="rounded-full bg-[#12a8ff] px-4 py-2 font-medium text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#5dd6ff]"
              href="#contact"
            >
              Hubungi Kami
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:gap-20 sm:py-20">
        <section
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 px-6 py-12 shadow-2xl sm:px-12"
          id="hero"
        >
          <div className="absolute inset-0 bg-gradient-to-br via-transparent from-white/5 to-cyan-500/10" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200">
                Modern Tech Studio
              </div>
              <h1 className="hero-title font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Ngetikin
                <span className="block text-[#5dd6ff]">Make Your App Come True</span>
              </h1>
              <p className="max-w-2xl text-lg leading-[1.6] text-slate-200">
                Studio digital berbasis kolaborasi yang membangun landing page, company profile, dan aplikasi web
                modern. Kami hadir dengan tim solid, pendekatan transparan, dan eksekusi yang rapi.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="cta-primary rounded-full bg-[#12a8ff] px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#5dd6ff]"
                >
                  Mulai Diskusi
                </Link>
                <a
                  href="https://wa.me/6285117121912"
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#12a8ff] hover:text-[#12a8ff]"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Kami
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="py-1 px-3 rounded-full border border-white/10">AI & Blockchain curious</span>
                <span className="py-1 px-3 rounded-full border border-white/10">Focused on web apps</span>
                <span className="py-1 px-3 rounded-full border border-white/10">Collaborative & transparent</span>
              </div>
            </div>
            <div className="snap-card section-card glass relative overflow-hidden rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_96px_-48px_rgba(18,168,255,0.65)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(18,168,255,0.18),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(93,214,255,0.14),transparent_32%)]" />
              <div className="relative flex items-center justify-between gap-3">
                <div className="text-xs uppercase tracking-[0.18em] text-[#5dd6ff]">Snapshot</div>
                <span className="rounded-full border border-[#12a8ff]/40 bg-[#12a8ff]/12 px-3 py-1 text-[11px] font-semibold text-[#b7e7ff]">
                  Live • 2025
                </span>
              </div>

              <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                <StatCard title="Didirikan" value="13 Agustus 2025" />
                <StatCard title="Fokus" value="Landing page • company profile • web system" />
                <StatCard title="Eksplorasi" value="SaaS • AI • Blockchain • vertical software" />
                <StatCard title="Moto" value="Code Together, Grow Together" />
                <StatCard title="Kontak" value="ngetikin.agency@gmail.com" full />
              </div>

              <div className="relative mt-[22px] grid grid-cols-2 gap-[13px] text-xs text-slate-300">
                <Badge>Performance Ready</Badge>
                <Badge>Design → Deploy</Badge>
                <Badge>People First</Badge>
                <Badge>Transparent Delivery</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]" id="about">
          <div className="space-y-4">
            <SectionTitle title="Tentang Kami" subtitle="Studio digital untuk produk web modern" />
            <p className="text-slate-200">
              Ngetikin lahir untuk menghadirkan aplikasi web yang rapi, fungsional, dan siap tumbuh. Kami menyukai
              kolaborasi, menjaga komunikasi transparan, dan selalu belajar dari setiap proyek demi portofolio yang
              berkelanjutan.
            </p>
            <div className="section-card glass rounded-2xl p-5 text-sm text-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_80px_-50px_rgba(18,168,255,0.7)]">
              <div className="font-semibold text-white">Visi</div>
              <p className="mt-1">Menjadi solusi utama pengembangan aplikasi digital yang inovatif dan berkelanjutan.</p>
              <div className="mt-4 font-semibold text-white">Misi</div>
              <ul className="grid gap-2 mt-2 text-slate-200">
                <li>1. Mengembangkan produk relevan untuk bisnis & komunitas.</li>
                <li>2. Layanan berkualitas dengan komunikasi transparan.</li>
                <li>3. Membangun tim solid lewat mentoring & kolaborasi.</li>
                <li>4. Tiap proyek jadi peluang portofolio berharga.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <SectionTitle title="Nilai Utama" subtitle="Cara kami bekerja" />
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="section-card glass rounded-xl px-4 py-3 text-sm text-slate-100 transition-transform duration-200 hover:-translate-y-1 hover:border-[#12a8ff]"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6" id="services">
          <SectionTitle title="Layanan" subtitle="Siap pakai & dalam pengembangan" />
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="section-card glass rounded-2xl border border-white/10 p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-[#12a8ff] hover:shadow-[0_20px_80px_-50px_rgba(18,168,255,0.9)]"
              >
                <div className="text-base font-semibold text-white">{service.title}</div>
                <p className="mt-2 text-sm text-slate-300">{service.detail}</p>
              </div>
            ))}
          </div>
          <div className="glass flex flex-wrap gap-2 rounded-2xl border border-dashed border-cyan-400/40 p-4 text-sm text-slate-200">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-100">Dalam Pengembangan</span>
            {developing.map((item) => (
              <span key={item} className="py-1 px-3 rounded-full border border-white/10">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]" id="why-us">
          <div className="space-y-4">
            <SectionTitle title="Keunggulan" subtitle="Kenapa bermitra dengan kami" />
            <div className="section-card glass space-y-3 rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_80px_-50px_rgba(18,168,255,0.7)]">
              <Bullet>Tim solid berbasis trust & people-first, bukan sekadar skill.</Bullet>
              <Bullet>Fokus jangka panjang pada produk & portofolio berkelanjutan.</Bullet>
              <Bullet>Pendekatan layanan terbuka, transparan, dan berorientasi kepuasan klien.</Bullet>
            </div>
          </div>
          <div className="space-y-4">
            <SectionTitle title="Proses Kerja" subtitle="Ringkas dan terukur" id="workflow" />
            <div className="glass grid gap-4 rounded-2xl p-6">
              {workflow.map((step, idx) => (
                <div
                  key={step}
                  className="section-card flex items-center gap-3 rounded-xl border border-white/5 p-3 text-sm text-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:border-[#12a8ff]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                    {idx + 1}
                  </div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]" id="team">
          <div className="space-y-4">
            <SectionTitle title="Tim Kami" subtitle="Inti penggerak Ngetikin" />
            <div className="grid gap-3">
              {team.map((person) => (
                <div
                  key={person.name}
                  className="section-card glass flex items-center gap-4 rounded-2xl p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-[#12a8ff]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-white">
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{person.name}</div>
                    <div className="text-sm text-slate-300">{person.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-[18px]">
            <SectionTitle title="Klien & Partner" subtitle="Masih terbuka untuk kolaborasi" />
            <div className="section-card glass rounded-2xl p-5 text-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:border-[#12a8ff]">
              Belum ada klien atau partner resmi — kami terbuka untuk individu, komunitas, maupun perusahaan yang
              ingin berkolaborasi.
            </div>
            <div className="pt-3" />
            <SectionTitle title="Portofolio" subtitle="Sedang disiapkan" />
            <div className="section-card glass rounded-2xl p-5 text-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:border-[#12a8ff]">
              Project pertama sedang dalam tahap pengembangan. Portofolio resmi akan segera hadir.
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" id="targets">
          <div className="space-y-4">
            <SectionTitle title="Pencapaian & Target" subtitle="Roadmap singkat" />
            <div className="glass grid gap-3 rounded-2xl p-6">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="section-card flex items-start gap-3 rounded-xl border border-white/5 p-3 transition-transform duration-200 hover:-translate-y-1 hover:border-[#12a8ff]"
                >
                  <div className="text-lg font-semibold text-[#5dd6ff]">{item.year}</div>
                  <div className="text-slate-200">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <SectionTitle title="Teknologi & Eksplorasi" subtitle="Selalu relevan" />
            <div className="section-card glass rounded-2xl p-5 text-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:border-[#12a8ff]">
              Kami siap mengeksplorasi AI, Blockchain, dan teknologi web terbaru untuk menghadirkan solusi yang
              relevan dengan kebutuhan klien serta masa depan produk digital.
            </div>
          </div>
        </section>

        <section className="space-y-[22px]" id="contact">
          <SectionTitle title="Kontak" subtitle="Mulai wujudkan aplikasi Anda" />
          <div className="glass grid gap-4 rounded-2xl p-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard title="Discord" value="dsc.gg/ngetikin" href="https://dsc.gg/ngetikin" />
            <ContactCard title="Email" value="ngetikin.agency@gmail.com" href="mailto:ngetikin.agency@gmail.com" />
            <ContactCard title="WhatsApp" value="+62 851-1712-1912" href="https://wa.me/6285117121912" />
            <ContactCard title="Website" value="ngetikin.vercel.app" href="https://ngetikin.vercel.app" />
          </div>
          <div className="flex flex-wrap gap-[13px] text-sm text-slate-200">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-white/10 px-4 py-2 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#12a8ff] hover:text-[#12a8ff]"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="glass flex flex-col gap-3 rounded-2xl border border-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-lg font-semibold text-white">Siap mulai?</div>
              <p className="text-sm text-slate-300">Hubungi kami lewat email atau WhatsApp untuk konsultasi cepat.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:ngetikin.agency@gmail.com"
                className="rounded-full bg-[#12a8ff] px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#5dd6ff]"
              >
                Email Kami
              </a>
              <a
                href="https://wa.me/6285117121912"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#12a8ff] hover:text-[#12a8ff]"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 px-6 border-t border-white/5 bg-[#04070e]/80">
        <div className="flex flex-col gap-3 mx-auto max-w-6xl text-sm sm:flex-row sm:justify-between sm:items-center text-slate-400">
          <span>© {new Date().getFullYear()} Ngetikin. Make Your App Come True.</span>
          <span>Kolaborasi, transparansi, dan produk yang siap jalan.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ title, subtitle, id }: { title: string; subtitle?: string; id?: string }) {
  return (
    <div className="space-y-[8px]" id={id}>
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="text-sm text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function StatCard({ title, value, full }: { title: string; value: string; full?: boolean }) {
  return (
    <div
      className={`row-anim relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/6 via-white/4 to-white/8 px-4 py-4 text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#12a8ff]/70 ${
        full ? "col-span-2" : ""
      }`}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(93,214,255,0.25),transparent_35%)]" />
      <div className="relative text-xs uppercase tracking-[0.18em] text-[#9ccff5]">{title}</div>
      <div className="relative mt-2 font-display text-base font-semibold leading-tight text-white">{value}</div>
    </div>
  );
}
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-2 px-3 text-center uppercase rounded-full border border-white/10 text-[11px] tracking-[0.08em] text-slate-200">
      {children}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 text-slate-200">
      <span className="inline-block mt-1.5 w-2 h-2 rounded-full bg-[#12a8ff]" />
      <span>{children}</span>
    </div>
  );
}

function ContactCard({ title, value, href }: { title: string; value: string; href: string }) {
  return (
    <a
      className="glass flex flex-col gap-1 rounded-xl border border-white/10 p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#12a8ff]"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="text-xs uppercase tracking-[0.15em] text-slate-400">{title}</div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </a>
  );
}
