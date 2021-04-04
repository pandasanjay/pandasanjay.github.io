// in gatsby-config.js
const path = require('path')
module.exports = {
  siteMetadata: {
    siteUrl: "https://sanjaypanda.com",
    title: `Portfolio`,
    description: `Software Developer and Expert in Developing Web Application using React and NodeJs. Passionate about all things web.`,
    logos: {
      react: "React.svg",
      nodejs: "nodejs.svg",
      gitlab: "gitlab.svg",
      gatsby: "gatsby.svg",
      css3: "css3.svg",
      git: "Git3.svg",
      html5: "html5.svg",
      javascript: "javascript.svg",
      docker: "docker.svg",
      jenkins: "jenkins.png",
      sql: "sql.svg",
    },
    companyLogs: {
      wipro: "wipro.png",
      lbg: "lloyds.png",
      navsoft: "navsoft.png",
      maastrixsolutions: "maastrix.png",
    },
    jobDetails: {
      "full-stack-dev": {
        header: "Full stack development",
        text: `
                <p>Building a application is not hard, maintaining them takes time and building a whole new feature is required significant amount of testing efforts as well. There is also no right way to build a particular application, each application need to be refactored and grows over the time. My goal is to place the right automation testing which helps in CI/CD and make the release faster.</p>
                <p>Looking for someone to help to build your idea with your team and need to have these below skills: </p>
                <ul>
                    <li> 5+ year of experience  </li>
                    <li> Monolith and Microservice Architecture</li>
                    <li> Agile workflow </li>
                    <li> CI/CD </li>
                    <li> Test automation </li>
                    <li> Motivate and Lead team</li>
                    <li> NodeJs and React JS (Primary skill)</li>
                </ul>
                `,
      },
      "ui-application-development": {
        header: "UI development",
        text: `
                <p>This is the field of ideas and innovation comes together and presented to the user. if your UI is not looks good then, you will lose your customer. So great UI design and development with cross browser and responsive design, make end user accessible from any device. Easy and simple UI take your business to higher level </p>
                <p>Looking for someone best in UI development and should have:</p>
                <ul>
                    <li> 5+ year of experience  </li>
                    <li> Design principle </li>
                    <li> Accessibility (For visually impaired ) </li>
                    <li> Color contrast tested </li>
                    <li> Design test automation to future proof </li>
                    <li> Motivate and Lead team</li>
                </ul>
                `,
      },
      "node-js-development": {
        header: "NodeJs development",
        text: `
                <p>Node is the server side of javascript. Very powerful, help developer to build tool, share and use. Creating a REST API is couple of line of code. </p>
                <p>Looking for someone build api for you and should have:</p>
                <ul>
                    <li> 5+ year of experience  </li>
                    <li> REST API development </li>
                    <li> Authentication and security </li>
                    <li> DataBase connection and complex query </li>
                    <li> Understand the business </li>
                    <li> Functional and api testing</li>
                    <li> Handling large files </li>
                </ul>
                `,
      },
      "spa-development": {
        header: "SPA and SSR development",
        text: `
                <p>Single Page Application(SPA) and  Server-side Rendering (SSR) are the new age way to develop web application which is faster and give experience of desktop application. React is a great framework among others.</p>
                <p>Looking for someone to help to build a awesome application for your business and should have</p>
                <ul>
                    <li> 5+ year of experience  </li>
                    <li> Clear concepts and related technology </li>
                    <li> REST API integration </li>
                    <li> Authentication and Security </li>
                    <li> Build tools </li>
                    <li> Test automation </li>
                    <li> Motivate and Lead team</li>
                </ul>
                `,
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sanjay's Portfolio`,
        short_name: `SP`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#07689F`,
        display: `standalone`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-136961245-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout-posts.js') },
      },
    },
  ],
}
