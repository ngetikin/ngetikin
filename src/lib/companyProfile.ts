export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "") || "https://ngetikin.vercel.app";

export type ServicePackage = {
  title: string;
  price: string;
  summary: string;
  highlights: string[];
};

export type CompanyProfile = {
  name: string;
  tagline: string;
  heroPitch: string;
  about: string;
  vision: string;
  missions: string[];
  values: string[];
  whyUs: string[];
  packages: ServicePackage[];
  contacts: { label: string; value: string; href?: string }[];
  targets: string[];
};

const profile: CompanyProfile = {
  name: "Ngetikin",
  tagline: "Jasa Pembuatan Website Profesional & Terjangkau",
  heroPitch: "Butuh website keren? Kami bantu dari desain hingga online!",
  about:
    "Ngetikin lahir untuk menghadirkan aplikasi web yang rapi, fungsional, dan siap tumbuh. Kami menyukai kolaborasi, menjaga komunikasi transparan, dan selalu belajar dari setiap proyek demi portofolio yang berkelanjutan.",
  vision:
    "Memberdayakan usaha kecil & menengah serta komunitas lokal agar memiliki kehadiran digital profesional, terjangkau, dan transparan.",
  missions: [
    "Menyediakan layanan pembuatan website (company profile, landing page, sistem sederhana) dengan harga terjangkau dan proses jelas.",
    "Menjamin integritas, kualitas, dan layanan yang jujur — memberi hasil nyata, bukan janji manis.",
    "Memberi pelayanan fleksibel dan personal: klien berbicara langsung dengan founder/dev.",
    "Membantu klien memperkuat brand dan pertumbuhan usaha dengan akses digital profesional.",
    "Terbuka untuk proyek custom dan permintaan spesifik sesuai kebutuhan klien.",
  ],
  values: [
    "Integritas & Kejujuran",
    "Kualitas & Profesionalitas",
    "Fleksibilitas & Kemudahan",
    "Harga Terjangkau & Ramah Pemula",
    "Dedikasi & Komitmen Pribadi",
  ],
  whyUs: [
    "Integritas & kejujuran di setiap proyek.",
    "Fokus pada usaha kecil & pemula — layanan & harga disesuaikan.",
    "Komunikasi langsung dengan founder/dev — tanpa birokrasi.",
    "Fleksibel & custom — siap bantu sesuai kebutuhan klien.",
    "Dedikasi tinggi untuk hasil terbaik — meskipun kecil, tetap serius.",
  ],
  packages: [
    {
      title: "Paket A — Landing / Company Profile Basic",
      price: "Rp 800.000 – Rp 1.500.000",
      summary:
        "Website satu halaman atau multi-halaman sederhana untuk profil & kontak cepat.",
      highlights: [
        "Desain UI/UX sederhana, statis",
        "Responsif mobile + desktop",
        "Opsional bantu domain & hosting",
        "Kontak via form/WA/email",
        "Waktu pengerjaan 1–2 minggu",
        "Maintenance ringan opsional",
      ],
    },
    {
      title: "Paket B — Full Website / Standard Business",
      price: "Rp 2.500.000 – Rp 6.000.000",
      summary:
        "Website lengkap untuk bisnis kecil–menengah dengan struktur utuh.",
      highlights: [
        "UI/UX sesuai branding",
        "Home / About / Services / Portfolio / Blog (opsional) / Contact",
        "CMS/panel admin jika perlu",
        "SEO dasar & optimasi performa",
        "Integrasi sosmed & kontak",
        "Dokumentasi & panduan sederhana",
      ],
    },
    {
      title: "Paket C — Custom Web / Sistem Khusus",
      price: "Mulai Rp 5.000.000 ke atas (nego)",
      summary: "Web atau web app kustom dengan fitur dinamis sesuai kebutuhan.",
      highlights: [
        "Full-stack dev (front-end + back-end)",
        "Desain & UX kustom sesuai fitur",
        "CMS/dashboard khusus",
        "Integrasi fitur tambahan (booking, user, e-commerce ringan)",
        "Optimasi performa, keamanan, responsif",
        "Testing, deployment, maintenance & dukungan",
      ],
    },
  ],
  contacts: [
    {
      label: "WhatsApp",
      value: "+62 851-1712-1912",
      href: "https://wa.me/6285117121912",
    },
    {
      label: "Email",
      value: "ngetikin.agency@gmail.com",
      href: "mailto:ngetikin.agency@gmail.com",
    },
    {
      label: "Discord",
      value: "dsc.gg/ngetikin",
      href: "https://dsc.gg/ngetikin",
    },
    {
      label: "Website",
      value: BASE_URL.replace(/^https?:\/\//, ""),
      href: BASE_URL,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/company/ngetikin",
      href: "https://www.linkedin.com/company/ngetikin",
    },
    {
      label: "Instagram",
      value: "@ngetikin",
      href: "https://www.instagram.com/ngetikin",
    },
    {
      label: "TikTok",
      value: "@ngetikin",
      href: "https://www.tiktok.com/@ngetikin",
    },
  ],
  targets: [
    "UMKM kecil – menengah",
    "Komunitas lokal/online",
    "Personal brand / usaha rumahan",
    "Bisnis baru tanpa kehadiran digital",
    "Klien yang butuh website sederhana & hemat anggaran",
  ],
};

export async function getCompanyProfile(): Promise<CompanyProfile> {
  return profile;
}
