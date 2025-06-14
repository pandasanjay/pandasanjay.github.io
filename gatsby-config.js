// in gatsby-config.js
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
    testimonials: [
      {
        name: "John Smith",
        title: "Tech Lead at TechCorp",
        text: "Sanjay is an exceptional full-stack developer who consistently delivers high-quality solutions. His expertise in React and Node.js is impressive.",
        image: "john-smith.jpg"
      },
      {
        name: "Sarah Johnson",
        title: "Engineering Manager",
        text: "Working with Sanjay was a pleasure. His deep understanding of data pipelines and cloud architecture helped us optimize our entire workflow.",
        image: "sarah-johnson.jpg"
      },
      {
        name: "Mike Chen",
        title: "CTO at StartupX",
        text: "Sanjay's contributions to our project were invaluable. His ability to architect scalable solutions and mentor team members sets him apart.",
        image: "mike-chen.jpg"
      }
    ],
    projects: [
      {
        title: "Enterprise Data Pipeline",
        description: "Built a scalable data pipeline processing millions of records daily",
        category: "Data Engineering",
        tech: ["Apache Kafka", "Node.js", "AWS", "MongoDB"],
        challenges: [
          "Handling large-scale real-time data processing",
          "Ensuring data consistency across multiple systems",
          "Implementing robust error handling and recovery"
        ],
        solutions: [
          "Implemented stream processing with Kafka",
          "Designed a microservices architecture for scalability",
          "Created automated monitoring and alerting system"
        ],
        outcomes: [
          "Reduced processing time by 60%",
          "Improved data accuracy to 99.9%",
          "Decreased system downtime by 80%"
        ],
        image: "data-pipeline.jpg",
        github: "https://github.com/username/project",
        demo: "https://demo.example.com"
      },
      {
        title: "Cloud-Native Analytics Platform",
        description: "Developed a cloud-native platform for real-time analytics",
        category: "Full Stack",
        tech: ["React", "Node.js", "GraphQL", "AWS Lambda"],
        challenges: [
          "Real-time data visualization",
          "Complex state management",
          "High concurrent user load"
        ],
        solutions: [
          "Implemented WebSocket for real-time updates",
          "Used GraphQL for efficient data fetching",
          "Deployed serverless architecture"
        ],
        outcomes: [
          "Supported 10k concurrent users",
          "Achieved sub-second response times",
          "Reduced infrastructure costs by 40%"
        ],
        image: "analytics-platform.jpg",
        github: "https://github.com/username/analytics",
        demo: "https://analytics.example.com"
      }
    ],
    author: 'Sanjay',
    image: '/og-image-sanjay-profile.png',
    social: {
      twitter: '@yourtwitterhandle',
      linkedin: 'https://www.linkedin.com/in/pandasanjay/',
      github: 'https://github.com/pandasanjay'
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sanjay - Full Stack Developer`,
        short_name: `SP Portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#07689F`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'query',
        crossOrigin: `use-credentials`,
        theme_color_in_head: true,
        shortcuts: [
          {
            name: "Blog",
            url: "/blogs",
            description: "Read my latest blog posts"
          },
          {
            name: "Portfolio",
            url: "/works",
            description: "View my projects"
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/works/*', '/blogs/*', '/contact/'],
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: `NetworkFirst`,
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)/,
              handler: `CacheFirst`,
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/pages/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-136961245-1",
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sanjaypanda.com',
        sitemap: 'https://sanjaypanda.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        excludes: [`/404/`, `/404.html`, `/offline-plugin-app-shell-fallback/`],
        createLinkInHead: true,
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
  ],
}
