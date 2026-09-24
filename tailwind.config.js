/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0A1628',   // Deep Navy — headers, navbar, hero overlay
          accent: '#C8A96E',    // Warm Gold — CTAs, highlights, borders
          silver: '#A8B2BF',    // Cool Silver — secondary text, icon fills
          glass: 'rgba(255,255,255,0.08)', // Glass morphism tint
          light: '#F5F7FA',     // Off-white — page background
          dark: '#070F1E',      // Near-black — footer background
        },
        navy: {
          DEFAULT: '#0A1628',
          light: '#132238',
          dark: '#070F1E',
        },
        gold: {
          DEFAULT: '#C8A96E',
          light: '#D4BC8B',
          dark: '#B08F52',
        },
        silver: {
          DEFAULT: '#A8B2BF',
          light: '#CBD2DC',
          dark: '#7D8897',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
