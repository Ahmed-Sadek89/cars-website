import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#405FF2",
        "custom-black": "#050B20",
        "custom-green": "#42AD31"
      }
    },
  },
  plugins: [],
}
export default config
