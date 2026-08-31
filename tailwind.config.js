/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        python: {
          blue: '#387EB8',
          darkBlue: '#1E415E',
          yellow: '#FFE873',
          gold: '#FFD43B',
          accent: '#00FFA3',
          dark: '#0B0F19',
          card: '#111827',
          cardBorder: '#1F2937'
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 15px rgba(255, 212, 59, 0.2), 0 0 30px rgba(56, 126, 184, 0.2)' },
          '100%': { 'box-shadow': '0 0 25px rgba(255, 212, 59, 0.5), 0 0 45px rgba(56, 126, 184, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
