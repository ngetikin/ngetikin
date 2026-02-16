/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        cyan: '#2EE6E6',
        white: '#FFFFFF',
        darkNavy: '#0B1220',

        // Secondary Colors
        softGray: '#A0A7B4',
        darkGray: '#1C2433',
      },
      fontFamily: {
        spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};