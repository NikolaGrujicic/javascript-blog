require("dotenv").config()
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require("@elegantstack/algolia-blog/src/queries"),
      },
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-minimal-v2',
      options: {
        sources: {
          contentful: true,
          local: false,
        },
        services: {
          algolia: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frameless Grid`,
        short_name: `Frameless Grid`,
        start_url: `/`,
        display: `standalone`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-3W171FB282",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/category/*`],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Frameless Grid',
    name: 'Frameless Grid',
    siteUrl: `https://www.framelessgrid.com`,
    description: 'My site description...',
    address: 'Barcelona, Spain',
    email: 'nikola.grujicic.03@gmail.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/NikolaGrujicic'
      },
      {
        name: 'Twitter',
        url: 'https://github.com/NikolaGrujicic'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/NikolaGrujicic'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'React',
        slug: '/category/react/'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/contact'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  },
}
