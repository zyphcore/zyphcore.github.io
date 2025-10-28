module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f13',
        panel: 'rgba(255,255,255,0.04)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
}