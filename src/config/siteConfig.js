const siteConfig = {
  heroSection: {
    headline: "Building Software Engineers Tomorrow",
    tagline: "From Lines of Code to Real-World Impact: Unleashing Your Full Potential",
    descriptionBase: "Leveraging {years}+ years of engineering experience to help developers evolve from writing code to building software that matters.",
    careerStartYear: 2013,
    profileImage: "/sanjay.jpg",
    socialLinks: [
      { 
        name: "LinkedIn", 
        url: "https://linkedin.com/in/sanjay", 
        icon: "linkedin" 
      },
      { 
        name: "GitHub", 
        url: "https://github.com/sanjay", 
        icon: "github" 
      },
      { 
        name: "YouTube", 
        url: "https://www.youtube.com/@sanjaypanda_", 
        icon: "youtube" 
      }
    ]
  },
  missionSection: {
    title: "The Journey from Code to Software",
    paragraphs: [
      "Many self-taught developers can write code, but building software that scales, performs, and serves real users requires a different mindset. I share insights on architecture, production practices, and the professional skills that transform coders into software engineers."
    ]
  },
  focusAreas: {
    title: "What I Share",
    pillars: [
      {
        title: "Beyond Code",
        description: "Moving from scripts and tutorials to production-ready applications. System design, architecture patterns, and thinking like a software engineer.",
        icon: "code"
      },
      {
        title: "Real-World Skills",
        description: "Testing, deployment, monitoring, and maintenance. The skills that bridge the gap between 'it works on my machine' and production software.",
        icon: "cog"
      },
      {
        title: "Professional Growth",
        description: "Career insights, technical decision making, and the soft skills that help self-taught developers thrive in professional environments.",
        icon: "trending-up"
      }
    ]
  },
  blogSection: {
    title: "Latest Insights",
    posts: [
    ],
    postsPath: "./pages/blog",
    ctaText: "View All Posts",
    ctaLink: "/blogs"
  },
  youtubeSection: {
    title: "Learn from My Videos",
    description: "Practical tutorials and insights to help you evolve from writing code to building software",
    channelId: "UCtJw0kfXaXv-mJ61CJ-CCvA",
    channelHandle: "@sanjaypanda_",
    channelUrl: "https://www.youtube.com/@sanjaypanda_",
    maxVideos: 3,
    fallbackVideos:     [
          {
                "id": {
                      "videoId": "KYZFQhfJIIQ"
                },
                "snippet": {
                      "title": "How to Keep Up With the Demand as a Senior Developer",
                      "description": "Are you a senior software engineer looking to elevate your efficiency and master the art of task prioritization? Dive into expert ...",
                      "thumbnails": {
                            "high": {
                                  "url": "https://i.ytimg.com/vi/KYZFQhfJIIQ/hqdefault.jpg"
                            }
                      },
                      "publishedAt": "2024-03-17T18:56:51Z"
                }
          },
          {
                "id": {
                      "videoId": "vWUTXZ4-uAk"
                },
                "snippet": {
                      "title": "This Book Will Change How You Code",
                      "description": "Ready to harness the power of laser-focused concentration? Watch our video on 'How to Unlock Insane Focus on Command' now ...",
                      "thumbnails": {
                            "high": {
                                  "url": "https://i.ytimg.com/vi/vWUTXZ4-uAk/hqdefault.jpg"
                            }
                      },
                      "publishedAt": "2023-09-12T17:06:39Z"
                }
          },
          {
                "id": {
                      "videoId": "_rzQhnllaFM"
                },
                "snippet": {
                      "title": "Are you giving up? This story will change your mind! #shorts",
                      "description": "shorts Did you know that Thomas Edison failed over 1000 times before inventing the light bulb? Do not give up?",
                      "thumbnails": {
                            "high": {
                                  "url": "https://i.ytimg.com/vi/_rzQhnllaFM/hqdefault.jpg"
                            }
                      },
                      "publishedAt": "2023-05-08T23:21:53Z"
                }
          }
    ]
  },
  connectSection: {
    title: "Let's Connect",
    description: "Follow my journey, read my content, or reach out for collaboration and speaking opportunities.",
    email: "sanjay@sanjaypanda.com"
  },
  footer: {
    copyright: "© 2025 Sanjay. All rights reserved.", // Updated name
    tagline: "Design inspired by simplicity and the future."
  }
};

export default siteConfig;