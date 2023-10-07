import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wrong: '#931621',
        background: '#8f8f8f',
        right: '#326771',
        secondary: '#0b0e0f',
      },
    },
  },
  plugins: [],
}
export default config
