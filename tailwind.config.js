/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1128',
          deep: '#050A18',
          900: '#0A1128',
          800: '#111a3a',
          700: '#1b274d',
        },
        ivory: '#FDFCF8',
        stone: '#F4F4F2',
        champagne: {
          DEFAULT: '#C5A059',
          light: '#D9BE83',
          dark: '#A8853F',
        },
        ink: '#050A18',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        label: '0.25em',
      },
      maxWidth: {
        editorial: '1320px',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        kenBurns: 'kenBurns 8s ease-out forwards',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
