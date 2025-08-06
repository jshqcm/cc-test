module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe', 
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          100: '#1e1e1e',
          200: '#2d2d2d',
          300: '#404040',
          400: '#525252',
          500: '#737373',
        },
        minecraft: {
          grass: '#7cb342',
          stone: '#666666',
          diamond: '#5dcae3',
          gold: '#ffeb3b',
        }
      },
      fontFamily: {
        minecraft: ['Minecraft', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'minecraft-bg': "url('/assets/minecraft-bg.jpg')",
        'gradient-dark': 'linear-gradient(to bottom right, #0c4a6e, #1e1e1e)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}