/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF9EC',
          100: '#FAF0CF',
          200: '#F5E19F',
          300: '#EECD6E',
          400: '#E5B942',
          500: '#D4AF37', // signature gold
          600: '#B89225',
          700: '#94721B',
          800: '#755819',
          900: '#5A4315',
        },
        charcoal: {
          950: '#080706',
          900: '#0F0E0C',
          850: '#151310',
          800: '#1C1916',
          750: '#24201C',
          700: '#2E2924',
          600: '#423B34',
          500: '#5A5148',
          400: '#7B6F63',
          300: '#A39688',
          200: '#CDC4B9',
          100: '#EAE5DD',
          50: '#F6F3EE',
        },
        cream: {
          50: '#FDFCF7',
          100: '#FBF8EF',
          200: '#F5EFE0',
          300: '#EBE1CA',
          400: '#DCCDB0',
          500: '#C7B593',
        },
        spice: {
          500: '#D94826',
          600: '#B93617',
          700: '#962A10',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-subtle': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
