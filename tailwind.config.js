/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0b1118',
        card: '#131b26',
        'card-hover': '#182332',
        border: '#222f40',
        primary: {
          DEFAULT: '#e5a93c',
          hover: '#f59e0b',
          foreground: '#090d12',
          glow: 'rgba(229, 169, 60, 0.35)'
        },
        secondary: {
          DEFAULT: '#10b981',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#1c2838',
          foreground: '#94a3b8'
        },
        accent: {
          amber: '#f59e0b',
          emerald: '#10b981',
          wood: '#c28b58'
        }
      },
      boxShadow: {
        'glow-primary': '0 0 35px -5px rgba(229, 169, 60, 0.3)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.3)',
        'card-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(229, 169, 60, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-down': 'fadeDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-up': 'scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
};
