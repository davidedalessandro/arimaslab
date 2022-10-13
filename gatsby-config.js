module.exports = {
        plugins: [
          {
            resolve: `gatsby-source-wordpress`,
            options: {
              url: process.env.WPGRAPHQL_URL || `https://your.arimaslab.url/graphql`,
            },
          },
        ],
      };
      

    plugins: [
      // https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/pages/
      /*
       * Gatsby's data processing layer begins with “source”
       * plugins. Here the site sources its data from WordPress.
       */
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          /*
           * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
           * Example : 'demo.wp-api.org' or 'www.example-site.com'
           */
          baseUrl: `arimaslab.com`,
          // The protocol. This can be http or https.
          protocol: `https`,
          // Indicates whether the site is hosted on wordpress.com.
          // If false, then the assumption is made that the site is self hosted.
          // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
          // If your site is hosted on wordpress.org, then set this to false.
          hostingWPCOM: false,
          // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
          // This feature is untested for sites hosted on WordPress.com
          useACF: true,
        },
      },
      /**
       * The following plugins aren't required for gatsby-source-wordpress,
       * but we need them so the default starter we installed above will keep working.
       **/

      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
      },
    ],
  }


/* eslint-disable prettier/prettier */
const config = require("./config/config");
const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: config.title,
        titleTemplate: config.titleTemplate,
        description: config.description,
        image: config.image,
        siteLanguage: config.siteLanguage,
        author: config.author,
        mainUrl: config.siteUrl,
        siteUrl:
            activeEnv === "development"
                ? config.localUrl
                : `${config.siteUrl}${config.pathPrefix}`,
        canonical: config.canonical,
        twitterUsername: config.twitterUsername,
        keywords: config.keywords,
    },
    mapping: {
        "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
        "MarkdownRemark.frontmatter.categories": `CategoriesJson.name`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-theme-ui`,
        `gatsby-transformer-remark`,
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                useAutoGen: true,
                autoGenHomeLabel: `Home`,
                exclude: [`/dev-404-page`, `/404`, `/404.html`],
                useClassNames: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            resolve: "gatsby-plugin-svgr-loader",
            options: {
                rule: {
                    include: /\.svg$/,
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.title,
                short_name: config.shortName,
                theme_color: config.themeColor,
                background_color: config.backgroundColor,
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: config.favicon,
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
    ],
};
