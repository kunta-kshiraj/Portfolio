/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sfpro: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
    }
  },
  plugins: []
}