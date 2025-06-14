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
        amber: {
          '300': '#fcd34d',
          '400': '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate[700]'),
            '--tw-prose-headings': theme('colors.slate[900]'),
            '--tw-prose-lead': theme('colors.slate[600]'),
            '--tw-prose-links': theme('colors.accent[600]'),
            '--tw-prose-bold': theme('colors.slate[900]'),
            '--tw-prose-counters': theme('colors.slate[500]'),
            '--tw-prose-bullets': theme('colors.slate[300]'),
            '--tw-prose-hr': theme('colors.slate[200]'),
            '--tw-prose-quotes': theme('colors.slate[600]'),
            '--tw-prose-quote-borders': theme('colors.slate[300]'),
            '--tw-prose-captions': theme('colors.slate[500]'),
            '--tw-prose-code': theme('colors.accent[700]'),
            '--tw-prose-pre-code': theme('colors.slate[200]'),
            '--tw-prose-pre-bg': theme('colors.slate[800]'),
            '--tw-prose-th-borders': theme('colors.slate[300]'),
            '--tw-prose-td-borders': theme('colors.slate[200]'),
            'code:not(pre code)': {
              backgroundColor: theme('colors.accent[100]'),
              color: theme('colors.accent[700]'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            'a': {
              fontWeight: '500',
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.accent[700]'),
                textDecoration: 'underline',
              },
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.slate[300]'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.slate[400]'),
            '--tw-prose-links': theme('colors.accent[300]'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.slate[400]'),
            '--tw-prose-bullets': theme('colors.slate[600]'),
            '--tw-prose-hr': theme('colors.slate[700]'),
            '--tw-prose-quotes': theme('colors.slate[300]'),
            '--tw-prose-quote-borders': theme('colors.slate[700]'),
            '--tw-prose-captions': theme('colors.slate[400]'),
            '--tw-prose-code': theme('colors.amber[300]'),
            '--tw-prose-pre-code': theme('colors.slate[300]'),
            '--tw-prose-pre-bg': theme('colors.slate[900]'),
            '--tw-prose-th-borders': theme('colors.slate[600]'),
            '--tw-prose-td-borders': theme('colors.slate[700]'),
            'code:not(pre code)': {
              backgroundColor: theme('colors.amber[400] / 0.2'),
              color: theme('colors.amber[300]'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'a': {
              fontWeight: '500',
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.accent[200]'),
                textDecoration: 'underline',
              },
            },
          },
        },
      }),
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      },
      animationDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    function ({ addUtilities, theme, e }) {
      const delays = theme('animationDelay');
      const utilities = Object.entries(delays).map(([key, value]) => ({
        [`.${e(`animation-delay-${key}`)}`]: { 'animation-delay': value },
      }));
      addUtilities(utilities);
    },
  ],
  darkMode: 'class',
}