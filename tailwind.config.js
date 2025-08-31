/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: "#F5EBDD",   // fundo
          DEFAULT: "#D6BFA7", // caixas/divs
          dark: "#8B5E3C",    // botões
          rich: "#4B2E1E",    // texto
        }
      }
    },
  },
  plugins: [],
}

