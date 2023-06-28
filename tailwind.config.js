/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      height: {
        'fit-contend': 'fit-content',
      }
    },
  },
  plugins: [],
}

