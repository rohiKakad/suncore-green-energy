/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary – deep blue from "Suncore" text
        brand: {
          50:  '#EBF4FB',
          100: '#C8E0F4',
          200: '#91C2E9',
          300: '#5AA3DE',
          400: '#2E7FC0',
          500: '#1E5C8E',   // exact "Suncore" blue
          600: '#174D78',
          700: '#113D60',
          800: '#0C2E48',
          900: '#071E30',
        },
        // Sun / accent – amber orange from the sun rays
        sun: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F5A623',   // exact sun orange
          500: '#E8960F',
          600: '#C97D08',
          700: '#A66405',
          800: '#7D4B03',
          900: '#543202',
        },
        // Solar-tile blues from the logo panel (light top → deep bottom)
        panel: {
          50:  '#E6F4FC',
          100: '#C2E4F7',
          300: '#5FBEEC',
          400: '#29A6E4',
          500: '#1A8BD4',   // mid tile blue
          600: '#1A6BB8',
          700: '#1A4E9C',   // deepest tile blue
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
