export const metadata = {
  title: "Syarat Layanan | Ngetikin",
};

import { HeaderBar } from "../_components/sections/HeaderBar";
import { FooterBar } from "../_components/sections/FooterBar";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="hero-bg pointer-events-none" aria-hidden />
      <HeaderBar />
      <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
        <h1 className="text-3xl font-semibold">Syarat Layanan Ngetikin</h1>
        <p className="text-slate-300">Terakhir diperbarui: 3 Desember 2025</p>
        <div className="space-y-4 text-slate-200">
          <p>
            Dengan menggunakan layanan Ngetikin, Anda menyetujui syarat ini. Jika mewakili organisasi, Anda
            menyatakan berwenang menyetujui atas nama organisasi.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pekerjaan dimulai setelah persetujuan scope dan pembayaran deposit 50%.</li>
            <li>Revisi minor hingga 2 kali per fase; perubahan besar bisa dikenakan biaya tambahan.</li>
            <li>Hak cipta aset final dialihkan setelah pembayaran lunas, kecuali font/lisensi pihak ketiga.</li>
            <li>Harga tidak termasuk domain/hosting kecuali tertulis sebaliknya.</li>
            <li>Kerahasiaan: Ngetikin menjaga data klien dan tidak membagikannya tanpa izin.</li>
            <li>Pembatalan setelah kickoff: deposit tidak dapat dikembalikan atas waktu yang sudah dikerjakan.</li>
          </ul>
          <p>Untuk pertanyaan, hubungi ngetikin.agency@gmail.com.</p>
        </div>
      </main>
      <FooterBar />
    </div>
  );
}
