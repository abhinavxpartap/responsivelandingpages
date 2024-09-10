import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('../public/assest/bgpic.png')",
        "newbanner":"url('../public/assest/Bitmap.png')",
        // "bgbanner":"url('../public/assest/backg.png')"
      },
    },
  },
  plugins: [],
}
export default config
