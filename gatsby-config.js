if (process.env.ENVIROMENT !== "production") {
  // eslint-disable-next-line global-require
  require("dotenv").config();
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
};

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name:
          "Corrina Chow | Full Stack Web Developer & Multidisciplinary Designer",
        short_name: "Corrina Chow",
        start_url: "/",
        background_color: "#001489",
        theme_color: "#001489",
        display: "minimal-ui",
        icon: "src/images/favicon.png"
      }
    },

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-115148956-1",
        head: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷"
            }
          }
        ]
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
};
