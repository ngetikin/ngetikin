// Data structure for NGETIKIN company profile
export interface Service {
  id: number;
  title: string;
  description: string;
  slug: string;
  details: string;
}

export interface AboutData {
  summary: string;
  description: string;
  vision: string;
  mission: string[];
  values: Array<{
    title: string;
    description: string;
  }>;
  history: Array<{
    year: string;
    event: string;
  }>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  discord: string;
  instagram: string;
  youtube: string;
  tiktok?: string;
  twitter?: string;
  threads?: string;
}

export interface CompanyData {
  about: AboutData;
  services: Service[];
  contact: ContactInfo;
  aboutPreview: {
    summary: string;
    description: string;
  };
}

export function getCompanyData(): CompanyData {
  return {
    about: {
      summary: "NGETIKIN adalah komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur, berbasis komitmen, dan keaktifan.",
      description: "Mengusung tagline 'Ilmu itu gratis, tapi harus dibayar dengan konsistensi.', NGETIKIN berfokus pada pemula 0, namun tetap terbuka untuk semua level. NGETIKIN percaya bahwa hambatan terbesar belajar coding bukan kurangnya materi, melainkan kurangnya konsistensi, disiplin, dan lingkungan belajar yang sehat.",
      vision: "Menjadi komunitas web development paling berdampak di Indonesia dalam membentuk developer yang konsisten, disiplin, dan siap bertumbuh jangka panjang.",
      mission: [
        "Menyediakan sistem pembelajaran web development yang terstruktur dan aplikatif.",
        "Membangun budaya belajar berbasis konsistensi dan keaktifan.",
        "Menjadi jembatan antara pembelajar dan dunia profesional secara realistis.",
        "Mengedukasi tanpa menjual mimpi instan atau overpromise karier."
      ],
      values: [
        {
          title: "Komitmen Lebih dari Bakat",
          description: "Konsistensi lebih penting daripada bakat."
        },
        {
          title: "Lingkungan Belajar Serius",
          description: "Lingkungan belajar yang disiplin, meskipun santai dalam komunikasi."
        },
        {
          title: "Belajar Melalui Praktik",
          description: "Praktik nyata lebih utama daripada teori semata."
        },
        {
          title: "Komunitas Di Atas Ego",
          description: "Tumbuh bersama, bukan pamer kemampuan."
        },
        {
          title: "Tanpa Janji Palsu",
          description: "Tidak menjual narasi cepat jago atau karier instan."
        }
      ],
      history: [
        {
          year: "2023",
          event: "NGETIKIN didirikan berdasarkan pengalaman langsung pendiri di dunia web development"
        },
        {
          year: "2024",
          event: "Peluncuran komunitas Discord dengan sistem pembelajaran terstruktur"
        },
        {
          year: "2025",
          event: "Peningkatan jumlah anggota aktif dan program mentoring"
        }
      ]
    },
    services: [
      {
        id: 1,
        title: "Program Fullstack Web Development",
        description: "Program pembelajaran terstruktur berbasis Discord untuk pemula hingga tingkat menengah.",
        slug: "fullstack-web-development",
        details: "Program lengkap yang mencakup HTML, CSS, JavaScript, React, Node.js, dan database. Didesain untuk pemula 0 dengan pendekatan 'learning by doing'."
      },
      {
        id: 2,
        title: "Weekly Challenge & Task",
        description: "Tantangan mingguan untuk meningkatkan keterampilan dan membangun portofolio.",
        slug: "weekly-challenge",
        details: "Tantangan praktis yang dirancang untuk menerapkan konsep yang telah dipelajari dalam proyek nyata."
      },
      {
        id: 3,
        title: "Mentoring 1-on-1",
        description: "Sesi mentoring pribadi untuk membantu perkembangan individu.",
        slug: "mentoring",
        details: "Sesi mentoring langsung dengan mentor berpengalaman untuk membantu menyelesaikan tantangan spesifik dan merancang jalur pembelajaran pribadi."
      },
      {
        id: 4,
        title: "Event & Workshop Intensif",
        description: "Event dan workshop berkala untuk memperdalam keterampilan tertentu.",
        slug: "event-workshop",
        details: "Workshop intensif yang membahas topik-topik spesifik dalam pengembangan web dengan pendekatan hands-on."
      },
      {
        id: 5,
        title: "Job & Project Board",
        description: "Platform untuk menghubungkan anggota dengan peluang kerja dan proyek.",
        slug: "job-project-board",
        details: "Platform eksklusif untuk anggota aktif yang mencari pekerjaan atau proyek freelance."
      }
    ],
    contact: {
      email: "ngetikin.community@gmail.com",
      phone: "+62 851-1712-1912",
      address: "Online Community, ngetikin.vercel.app",
      discord: "https://dsc.gg/ngetikin",
      instagram: "@ngetikin",
      youtube: "@ngetikinid",
      tiktok: "@ngetikin",
      twitter: "@ngetikin",
      threads: "@ngetikin"
    },
    aboutPreview: {
      summary: "NGETIKIN adalah komunitas web development berbasis Discord untuk Indonesia dengan sistem pembelajaran terstruktur, berbasis komitmen, dan keaktifan.",
      description: "Mengusung tagline 'Ilmu itu gratis, tapi harus dibayar dengan konsistensi.', NGETIKIN berfokus pada pemula 0, namun tetap terbuka untuk semua level."
    }
  };
}