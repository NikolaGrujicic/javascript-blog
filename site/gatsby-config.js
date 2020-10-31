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
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Frameless Grid',
    name: 'Frameless Grid',
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
            slug: '/about'
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
  }
}
