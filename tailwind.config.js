/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',          // Si tienes un archivo HTML en la raíz del proyecto
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Apunta a todos los archivos .vue y .js en la carpeta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

