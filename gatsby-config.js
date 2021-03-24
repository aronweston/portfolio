module.exports = {
  siteMetadata: {
    title: 'Aron Weston | Junior Software Engineer | Sydney, NSW',
    description:
      "Aron Weston's portfolio consisting of various projects with technologies such as React, Vue, Node and Ruby on Rails.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false,
        id: process.env.HOTJAR_ID,
        sv: process.env.SNIPPET_VERSION,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'GatsbyJS',
    //     short_name: 'GatsbyJS',
    //     start_url: '/',
    //     background_color: '#6b37bf',
    //     theme_color: '#6b37bf',
    //     display: 'standalone',
    //     icon: 'src/assets/images/favicon/favicon.ico',
    //     crossOrigin: `use-credentials`,
    //   },
    // },
  ],
};
