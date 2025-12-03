export const metadata = {
  title: "Kebijakan Privasi | Ngetikin",
};

import { HeaderBar } from "../_components/sections/HeaderBar";
import { FooterBar } from "../_components/sections/FooterBar";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="hero-bg pointer-events-none" aria-hidden />
      <HeaderBar />
      <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
        <h1 className="text-3xl font-semibold">Kebijakan Privasi Ngetikin</h1>
        <p className="text-slate-300">Terakhir diperbarui: 3 Desember 2025</p>
        <div className="space-y-4 text-slate-200">
          <p>
            Kami menghargai privasi Anda. Kebijakan ini menjelaskan cara kami mengumpulkan, menggunakan, dan melindungi
            data pribadi saat Anda berinteraksi dengan Ngetikin.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Data yang dikumpulkan: nama, email, nomor telepon, detail proyek yang Anda berikan.</li>
            <li>Penggunaan: komunikasi proyek, penawaran, dan pengelolaan kontrak.</li>
            <li>Penyimpanan: data disimpan dengan akses terbatas; kami tidak menjual atau membagikan kepada pihak ketiga.</li>
            <li>Kuki/analitik: saat ini kami tidak memasang pelacakan pihak ketiga.</li>
            <li>Hak Anda: minta koreksi atau penghapusan data via ngetikin.agency@gmail.com.</li>
          </ul>
          <p>
            Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan data sesuai kebijakan ini. Jika
            ada perubahan materi, kami akan memperbarui tanggal berlaku di halaman ini.
          </p>
        </div>
      </main>
      <FooterBar />
    </div>
  );
}
