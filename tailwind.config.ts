import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        gold: '0 0 80px rgba(250, 204, 21, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
