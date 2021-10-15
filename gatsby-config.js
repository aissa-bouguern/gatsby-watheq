module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
  flags: {
    DEV_SSR: false,
  },
};
