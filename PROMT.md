Berikut adalah contoh **prompt komprehensif** yang bisa Anda berikan kepada AI Agent (misal Codex) untuk membangun landing page Next.js modern berestetika teknologi sesuai profil perusahaan **Ngetikin**. Prompt ini mencakup elemen desain, struktur halaman, warna, serta referensi gaya dari beberapa situs teknologi seperti GitHub, Replit, Motion.dev, dan Redis.io.

---

## Prompt untuk AI Agent Codex

> **Project**: Landing Page Ngetikin dengan Next.js
> **Tema/Aesthetic**: Modern technology, dark theme dengan aksen biru–hitam.
> **Framework**: Next.js (versi terbaru, gunakan App Router), TypeScript, Tailwind CSS (atau CSS Modules) untuk styling.

### 🎨 1. Desain & Nuansa

* Gunakan **warna dominan biru gelap dan hitam** untuk memberikan kesan modern dan profesional. Warna biru bisa mengambil inspirasi dari palet biru teknologi (mis. `#0e70b8` untuk aksen, `#0a192f` atau hitam untuk latar).
* **Hero section** harus menonjol seperti homepage Replit yang menampilkan judul besar dan tagline yang mencolok. Tampilkan judul “Ngetikin” dan tagline “Make Your App Come True” dengan font besar dan kontras tinggi.
* Sertakan **call-to-action** (CTA) berupa tombol berwarna biru terang yang mengarahkan ke bagian kontak/WhatsApp/email, terinspirasi dari ajakan “Try Redis for free” pada website Redis.io.
* Gunakan latar belakang gelap dengan **gradien halus atau pola abstrak** agar tampak dinamis. Anda bisa menambahkan animasi halus (framer-motion) terinspirasi dari efek animasi pada Motion.dev.
* Secara keseluruhan, buat layout simpel, responsif, dan mudah dinavigasi, dengan tampilan bersih seperti GitHub/Redis yang menonjolkan konten utama.

### 📄 2. Struktur Halaman

Buat landing page dengan section terpisah berikut:

1. **Hero (Cover)**

   * Judul: **“NGETIKIN”**
   * Tagline: **“Make Your App Come True”**
   * Singkat tentang jasa (“Butuh website keren? Kami bantu dari desain hingga online”) seperti di linktree.
   * CTA: tombol “Hubungi Kami” yang scroll ke bagian kontak.

2. **Tentang Kami (About)**

   * Ceritakan pendirian Ngetikin pada **13 Agustus 2025**, fokus awal pada pengembangan aplikasi web (company profile, landing page, web system), serta rencana mengembangkan SaaS, vertical software, dan advanced project templates.
   * Jelaskan bahwa perusahaan terbuka untuk eksplorasi teknologi AI dan Blockchain.
   * Tonjolkan semangat membangun tim solid dan portofolio berharga.

3. **Visi & Misi**

   * Visi: Menjadi solusi utama dalam pengembangan aplikasi digital yang inovatif dan berkelanjutan.
   * Misi: 4 poin (mengembangkan produk inovatif, layanan berkualitas dengan komunikasi transparan, membangun tim solid, menjadikan proyek sebagai peluang portofolio).

4. **Nilai Utama (Core Values)**

   * List poin-poin: *Code Together, Grow Together*, *Satu Visi, Banyak Eksekusi*, *Kolaborasi = Kekuatan*, *Transparan & Jujur*, *Belajar Tiap Proyek*, *Fun tapi Fokus*.

5. **Layanan (Our Services)**

   * **Saat Ini**: Pembuatan web aplikasi (company profile, landing page, custom system), maintenance & optimization (performance, security, SEO), konsultasi digital.
   * **Dalam Pengembangan**: SaaS, vertical software, advanced project templates.
   * Gunakan ikon sederhana untuk tiap layanan, berwarna biru atau putih.

6. **Keunggulan (Why Us)**

   * Tim solid berdasarkan trust & people-first, bukan sekadar skill.
   * Fokus jangka panjang pada produk & portofolio berkelanjutan.
   * Pendekatan layanan transparan dan mengutamakan kepuasan klien.

7. **Tim Kami (Our Team)**

   * Founder & CEO: **M. Ridho Haris Muzaki** (alias Cemy/Osiic).
   * Co-Founder: **I Gede Shaka Pratama** (alias Jukutpremium/Everezsky), **Kadek Ayu Dea Permatasar** (alias YunZu).
   * Anda bisa menambahkan placeholder foto/avatar berbentuk lingkaran; gunakan teks jika gambar tak tersedia.

8. **Klien & Partner**

   * Tuliskan bahwa saat ini belum ada klien atau partner resmi, namun Ngetikin terbuka untuk kolaborasi dengan individu, komunitas, atau perusahaan.

9. **Portofolio**

   * Tempatkan placeholder dengan keterangan “Project pertama sedang dalam tahap pengembangan”.

10. **Proses Kerja (Workflow)**

    * Buat diagram langkah 1–5: Konsultasi Awal → Ideasi & Perancangan → Development → Testing & Review → Delivery & Support.
    * Beri ikon atau nomor besar agar alur mudah diikuti.

11. **Pencapaian & Target**

    * Tampilkan garis waktu (timeline) 2025–2027: 2025 berdirinya Ngetikin; 2026 membangun portofolio klien pertama; 2027 meluncurkan produk SaaS aktif dan portofolio internasional.

12. **Kontak**

    * Cantumkan:

      * **Discord**: tautan ke `https://dsc.gg/ngetikin`.
      * **Email**: `ngetikin.agency@gmail.com`.
      * **WhatsApp**: `+62 851‑1712‑1912`.
      * **Website**: tautan ke `https://ngetikin.vercel.app/`.
      * **Media sosial**: tautan ke Instagram, TikTok, dan LinkedIn.
    * Pastikan setiap ikon sosial dapat di-klik.
    * Sertakan CTA kedua (“Mulai Wujudkan App Lewat Email/WhatsApp”) dengan desain tombol mencolok.

13. **Closing**

    * Tutup dengan kalimat motivasional seperti: *“Ngetikin hadir untuk membantu mewujudkan ide digital menjadi aplikasi nyata. Bersama tim yang solid dan visi yang jelas, setiap proyek adalah langkah menuju inovasi. Mari ciptakan solusi, bangun inovasi, dan tumbuh bersama kami.”*

### 🧑‍💻 3. Implementasi Teknis

* **Project Setup**:

  * Inisialisasi proyek Next.js dengan TypeScript (`npx create-next-app@latest ngetikin-landing --typescript`).
  * Instal Tailwind CSS (`npm install tailwindcss postcss autoprefixer` dan inisialisasi konfigurasi).
* **Komponen & Halaman**:

  * Buat layout utama di `src/app/layout.tsx` dengan header dan footer.
  * Buat halaman `src/app/page.tsx` sebagai landing page, memecah setiap section menjadi komponen terpisah di folder `components` (mis. `Hero.tsx`, `About.tsx`, `Services.tsx`).
  * Gunakan Tailwind untuk styling; definisikan kelas warna khusus di `tailwind.config.js` agar mudah konsisten.
  * Tambahkan animasi scroll atau transition menggunakan `framer-motion` untuk elemen yang muncul saat discroll.
* **SEO & A11y**:

  * Tambahkan meta tags (title, description, Open Graph) di `src/app/head.tsx`.
  * Gunakan elemen `section`, `header`, `nav`, `main`, `footer` yang semantik.
  * Pastikan kontras warna memenuhi standar aksesibilitas.

### 📌 4. Inspirasi Referensi

* Desain hero dengan judul besar dan tagline kontras terinspirasi dari Replit yang menulis “Turn your ideas into apps”.
* Gunakan animasi halus seperti di Motion.dev untuk memberi kesan futuristik.
* Terapkan CTA jelas seperti “Try Redis for free” pada Redis.io, namun ubah menjadi ajakan untuk menghubungi Ngetikin.

---

Prompt di atas sudah mencakup rincian konten, struktur, desain, dan implementasi teknis yang diperlukan. Berikan prompt ini ke AI Agent Anda agar dapat menghasilkan kode Next.js yang memenuhi kebutuhan brand Ngetikin dengan nuansa modern dan profesional.

