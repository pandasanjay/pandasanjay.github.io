/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./requrement/**/*.{html,js,md}",
    "./gatsby-browser.js"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        primary: '#07689F',
        secondary: '#4285f4',
        dark: '#1f2937',
        accent: {
          DEFAULT: '#06b6d4',
          '50': '#ecfeff',
          '100': '#cffafe',
          '200': '#a5f3fc',
          '300': '#67e8f9',
          '400': '#22d3ee',
          '500': '#06b6d4',
          '600': '#0891b2',
          '700': '#0e7490',
          '800': '#155e75',
          '900': '#164e63',
          '950': '#083344',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e2e8f0',
            a: {
              color: '#06b6d4',
              '&:hover': {
                color: '#22d3ee',
              },
            },
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            code: {
              color: '#ffffff',
            },
            blockquote: {
              color: '#94a3b8',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}