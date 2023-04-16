/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: {
          bg: '#333143',
          title: '#f2ece1',
          subtitle: '#95a8aa',
          category: '#819088',
          divider: '#48525f',
          menu: '#f9fdfc',
          atc: {
            l_border: '#1abaf4',
            bg: '#304754',
            menu: '#ccd7d7',
          },
          hv: {
            border: '#989898'
          },
        },
      },
    },
  },
  plugins: [],
}
