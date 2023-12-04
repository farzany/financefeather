/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/signinbackground.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        jockeyOne: ['"Jockey One"', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '820px', // 768px
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
