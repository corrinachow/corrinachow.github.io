import dotenv from "dotenv";

if (process.env.ENVIROMENT !== "production") {
  dotenv.config();
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
};

export const siteMetadata = {
  title: "Corrina Chow | Web Developer and Multidisciplinary Designer",
  menuLinks: [
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
    {
      name: "Resume",
      link: "https://resume.creddle.io/resume/6yh14k1iek3",
    },
  ],
};
export const plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "gatsby-starter-contentful-typescript",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/gatsby-icon.png",
    },
  },
  "gatsby-plugin-offline",
  "gatsby-plugin-typescript",
  "gatsby-transformer-remark",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-contentful",
    options: contentfulConfig,
  },
  {
    resolve: "gatsby-plugin-emotion",
  },
  {
    resolve: `gatsby-plugin-styled-components`,
  },
];
