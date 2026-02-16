import Section from "@/components/Section";
import { getCompanyData } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hubungi Kami - NGETIKIN Komunitas Web Development",
  description:
    "Hubungi NGETIKIN komunitas web development untuk informasi lebih lanjut tentang layanan, program, atau pertanyaan seputar pembelajaran pengembangan web.",
  keywords: [
    "kontak ngetikin",
    "hubungi komunitas",
    "informasi ngetikin",
    "email ngetikin",
    "discord ngetikin",
  ],
  openGraph: {
    title: "Hubungi Kami - NGETIKIN Komunitas Web Development",
    description:
      "Hubungi NGETIKIN komunitas web development untuk informasi lebih lanjut tentang layanan dan program kami.",
    url: "https://ngetikin.vercel.app/kontak",
    siteName: "NGETIKIN",
    images: [
      {
        url: "/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Hubungi Kami - NGETIKIN Komunitas Web Development",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubungi Kami - NGETIKIN Komunitas Web Development",
    description:
      "Hubungi NGETIKIN komunitas web development untuk informasi lebih lanjut tentang layanan dan program kami.",
  },
  alternates: {
    canonical: "https://ngetikin.vercel.app/kontak",
  },
};

export default function ContactPage() {
  const { contact } = getCompanyData();

  return (
    <main>
      <Section className="pt-32 pb-16 bg-darkNavy">
        <div className="container">
          <h1 className="mb-6 text-4xl font-bold text-center md:text-5xl">
            Hubungi Kami
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-center text-softGray">
            Punya pertanyaan tentang komunitas atau layanan kami? Silakan
            hubungi kami melalui informasi di bawah ini.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Informasi Kontak</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-cyan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-darkNavy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-softGray">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-cyan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-darkNavy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Telepon</h3>
                  <p className="text-softGray">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-cyan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-darkNavy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Alamat</h3>
                  <p className="text-softGray">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-cyan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-darkNavy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Discord</h3>
                  <p className="text-softGray">
                    <a
                      href={contact.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-cyan"
                    >
                      Gabung Server Discord
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="mb-4 text-2xl font-semibold">Ikuti Kami</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://instagram.com/${contact.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-darkGray hover:bg-cyan hover:text-darkNavy"
                >
                  Instagram
                </a>
                <a
                  href={`https://youtube.com/${contact.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-darkGray hover:bg-cyan hover:text-darkNavy"
                >
                  YouTube
                </a>
                <a
                  href={`https://tiktok.com/${contact.tiktok}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-darkGray hover:bg-cyan hover:text-darkNavy"
                >
                  TikTok
                </a>
                <a
                  href={`https://twitter.com/${contact.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-darkGray hover:bg-cyan hover:text-darkNavy"
                >
                  Twitter
                </a>
                <a
                  href={`https://threads.net/${contact.threads}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-darkGray hover:bg-cyan hover:text-darkNavy"
                >
                  Threads
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold">Kirim Pesan</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-3 px-4 w-full rounded-lg border focus:ring-2 focus:outline-none bg-darkGray border-darkNavy focus:ring-cyan"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="py-3 px-4 w-full rounded-lg border focus:ring-2 focus:outline-none bg-darkGray border-darkNavy focus:ring-cyan"
                  placeholder="Masukkan email Anda"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="py-3 px-4 w-full rounded-lg border focus:ring-2 focus:outline-none bg-darkGray border-darkNavy focus:ring-cyan"
                  placeholder="Subjek pesan"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="py-3 px-4 w-full rounded-lg border focus:ring-2 focus:outline-none bg-darkGray border-darkNavy focus:ring-cyan"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
