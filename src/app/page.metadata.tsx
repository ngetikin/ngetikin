import type { Metadata } from 'next';

export const homeMetadata: Metadata = {
  title: 'NGETIKIN - Web Dev Community',
  description: 'Komunitas web development berbasis Discord untuk mereka yang benar-benar mau belajar secara konsisten, disiplin, dan realistis.',
  keywords: ['web development', 'komunitas programming', 'belajar coding', 'discord community', 'konsistensi belajar'],
  openGraph: {
    title: 'NGETIKIN - Web Dev Community',
    description: 'Komunitas web development berbasis Discord untuk mereka yang benar-benar mau belajar secara konsisten, disiplin, dan realistis.',
    url: 'https://ngetikin.vercel.app',
    siteName: 'NGETIKIN',
    images: [
      {
        url: '/og-image.jpg', // Ganti dengan path gambar OpenGraph
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NGETIKIN - Web Dev Community',
    description: 'Komunitas web development berbasis Discord untuk mereka yang benar-benar mau belajar secara konsisten, disiplin, dan realistis.',
  },
  alternates: {
    canonical: 'https://ngetikin.vercel.app',
  },
};