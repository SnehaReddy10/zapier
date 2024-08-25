import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          50: '#f7f5f2',
          90: '#fffdf9',
          100: '#e6e2db',
          300: '#f5f3eb',
          800: '#9a9793',
          1000: '#d7d5d2',
        },
        purple: {
          100: '#f0f1fa',
          700: '#695be8',
          800: '#503ebd',
        },
        brown: {
          200: '#afa5a0',
        },
        blue: {
          500: '#3d4592',
          800: '#2b2358',
        },
      },
    },
  },
  plugins: [],
};
export default config;
