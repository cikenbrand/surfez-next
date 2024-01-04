import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '480px',
      'tablet': '640px',
      'desktop': '1024px',
    },
    extend: {
      backgroundColor: {
        'yellow-tint': 'rgba(249,246,239,255)'
      },
      backgroundImage: {
        'hero-background': "url('/images/stuccovenezianowall.JPG')",
        'mobile-background': "url('/images/phone.png')",
      },
      maxWidth: {
        'container' : '1700px'
      }
    },
  },
  plugins: [],
}
export default config
