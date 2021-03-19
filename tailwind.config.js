module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        default: '5%',
        sm: '5%',
        lg: '2%',
        xl: '10%',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      height: {
        half: '50vh',
        header: 'calc(100vh - 76px)',
        200: '200px',
        25: '25px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('gatsby-plugin-postcss'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
