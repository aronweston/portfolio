module.exports = {
  siteMetadata: {
    title: 'Aron Weston | Junior Software Engineer | Sydney, NSW',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
  ],
};
