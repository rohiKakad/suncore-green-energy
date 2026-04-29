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
        // Olive green from "Green Energy" text & ground arc
        olive: {
          50:  '#F4F7EC',
          100: '#E2EBC8',
          200: '#C5D791',
          300: '#A8C35A',
          400: '#7FA832',
          500: '#6B8E23',   // exact "Green Energy" olive
          600: '#5A7A1E',
          700: '#476018',
          800: '#344712',
          900: '#222E0B',
        },
        // Steel blue from solar panel
        panel: {
          400: '#4A7FA8',
          500: '#2D5F8A',   // solar panel blue
          600: '#1E4A6E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
