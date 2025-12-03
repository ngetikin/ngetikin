You are given a dataset describing the digital agency “Ngetikin”. Build a modern website for this company using Next.js 14 with the App Router, TypeScript, Tailwind CSS, Framer Motion (motion.dev), GSAP (ScrollTrigger), and any other supporting libraries needed. The aesthetic should draw inspiration from Redis.io: dark blue/neon blue palette, bold hero headline, geometric/3‑D shapes, and interactive cards and sections.

1. Configure Tailwind to define a custom dark and neon blue colour palette. Set up global fonts (e.g. Inter or Poppins) in a layout component and apply the dark theme by default.
2. Create a home page (app/page.tsx) that includes:
   • A hero section with the company name and a short description; add animated geometric shapes (rotating cubes/spheres) in the background using CSS or react‑three‑fiber. Use Framer Motion for fade‑in/slide animations on headings and buttons.  
   • “Tentang Kami”, “Visi”, and “Misi” sections using the corresponding text from the dataset.  
   • A services section with three cards for Paket A, Paket B, and Paket C. Populate card titles, descriptions, and pricing from the dataset. Cards should scale on hover with Framer Motion and slide into view on scroll using GSAP ScrollTrigger.  
   • A “Kenapa Memilih Ngetikin” section listing the advantages (integritas, fokus pada usaha kecil, komunikasi langsung, fleksibilitas, dedikasi) with icons (e.g. from @heroicons/react).  
   • A team section listing each team member and role.  
   • A contact section with the Discord invite, email, WhatsApp, website, LinkedIn, Instagram, and TikTok links.

3. Read the dataset from a Markdown file (COMPANY_PROFILE.md) at build time. Use a parser such as remark or next-mdx-remote to convert it into structured data for the above sections.

4. Ensure the site is fully responsive (mobile and desktop) and uses semantic HTML (header, main, section, footer). Optimise images with next/image. Include SEO meta tags and a fixed navigation bar that smoothly scrolls to each section.

5. Provide any necessary configuration files (tailwind.config.ts, postcss.config.js), components, and a README with setup instructions (`npx create-next-app@latest`, `npm install tailwindcss postcss autoprefixer framer-motion gsap @react-three/fiber three @heroicons/react`).

The final output should be a complete, ready‑to‑run Next.js project that reflects the look and feel of Redis.io while faithfully presenting Ngetikin’s data. Use descriptive component names and organise the code cleanly.
