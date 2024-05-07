import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
    fontFamily: {
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)',
      jersey: 'var(--font-jersey)',
      anta: 'var(--font-anta)',
    },
    backgroundImage: {
      hero: 'url(/assets/img/hero/gym-bg.jpg)',
      membership: 'url(/assets/img/membership/bg3.jpg)',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(0, 0%, 20%)',
          100: 'hsl(0, 0%, 28%)',
          200: 'hsl(0, 0%, 8%)',
          300: 'hsl(0, 0%, 6%)',
        },
        accent: 'hsl(195, 82%, 53%)',
        about: 'hsl(205, 86%, 19%)',
      },
     
    },
  },
  plugins: [],
};

export default config;
