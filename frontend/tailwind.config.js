/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dull': 'var(--color-primary-dull)',
      },
      
    }, // 🛠️ this closing brace was missing
  },
  plugins: [],
}
