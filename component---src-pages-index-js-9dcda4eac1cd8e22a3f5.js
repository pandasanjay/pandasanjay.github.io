(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(202),i=a(166),o=a(159),s=a(163),c=a(164),d=(a(34),a(192)),m=a(200),u=a(203),p=a(204),g=a(153),h=a(154),b=a(4),f=a.n(b),v=a(155),y=a.n(v),E=a(156),w={tag:E.g,className:f.a.string,cssModule:f.a.object},k=function(e){var t=e.className,a=e.cssModule,n=e.tag,l=Object(h.a)(e,["className","cssModule","tag"]),i=Object(E.d)(y()(t,"card-deck"),a);return r.a.createElement(n,Object(g.a)({},l,{className:i}))};k.propTypes=w,k.defaultProps={tag:"div"};var j=k,x=a(151),N={tag:E.g,className:f.a.string,cssModule:f.a.object},O=function(e){var t=e.className,a=e.cssModule,n=e.tag,l=Object(h.a)(e,["className","cssModule","tag"]),i=Object(E.d)(y()(t,"card-header"),a);return r.a.createElement(n,Object(g.a)({},l,{className:i}))};O.propTypes=N,O.defaultProps={tag:"div"};var S=O,M=function(e){var t=e.className,a=e.headerCss,n=e.header,l=e.text,i=e.path,o=["border-0 rounded-0","shadow"],s=["p-4","p-sm-5","p-md-5","p-xl-5","text-center","shadow-sm"];return t&&o.push(t),a&&s.push(a),r.a.createElement(u.a,{className:o.join(" ")},r.a.createElement(S,{tag:"h3",className:s.join(" ")},n),r.a.createElement(p.a,null,r.a.createElement("div",{className:"card-text",dangerouslySetInnerHTML:{__html:l}}),r.a.createElement(x.a,{to:i},"Explore")))},_=function(){return r.a.createElement(x.b,{query:"1129200010",render:function(e){var t=e.site.siteMetadata.jobDetails;return r.a.createElement(m.a,{sm:"9",md:"9",xl:"8",className:"ml-md-auto ml-sm-auto mr-sm-auto ml-xl-auto mr-xl-auto order-1 order-sm-1 p-3"},r.a.createElement(u.a,{className:"text-dark mb-3 shadow border-dark rounded-0"},r.a.createElement(p.a,null,r.a.createElement("h2",null," Now open for ..."),r.a.createElement("h5",null,r.a.createElement("b",null,"Open source community contribution!")),r.a.createElement("p",null,"I am new to open source contribution community. I want to be part of ",r.a.createElement("b",null,"OpenSource projects")," from ",r.a.createElement("b",null,"scratch"),". If you have an ",r.a.createElement("b",null,"problem to solving")," and looking for a ",r.a.createElement("b",null,"contributor"),", Please let me know. "),r.a.createElement("a",{className:"btn btn-outline-warning",href:"mailto:contact@sanjaypanda.com"},"Contact me"))),r.a.createElement(M,Object.assign({className:"mb-3"},t.full_stack_dev,{path:"full_stack_dev",key:1,headerCss:"bg-card-yellow text-light display-4"})),r.a.createElement(j,null,r.a.createElement(M,Object.assign({},t.ui_application_development,{path:"ui_application_development",key:2,headerCss:"bg-card-blue text-light"})),r.a.createElement(M,Object.assign({},t.node_js_development,{path:"node_js_development",key:3,headerCss:"bg-card-green text-light"})),r.a.createElement(M,Object.assign({},t.spa_development,{path:"spa_development",key:4,headerCss:"bg-card-red text-light"}))))},data:d})};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home",keywords:["Sanjay Panda","Fullstack developer","react","node"]}),r.a.createElement(l.a,{className:"flex-xl-nowrap no-gutters"},r.a.createElement(s.a,null),r.a.createElement(_,null),r.a.createElement(c.a,null)))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return o.withPrefix});a(157);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},158:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),l=a(200);t.a=function(e){var t=e.children,a=e.right,n=e.grid,i=void 0===n?{}:n,o=e.className,s=["sidebar","shadow"];return a&&s.push("right"),o&&s.push(o),r.a.createElement(l.a,Object.assign({},i,{className:s.join(" ")}),r.a.createElement("div",{className:"sidebar-sticky"},t))}},159:function(e,t,a){"use strict";var n=a(160),r=a(0),l=a.n(r),i=a(4),o=a.n(i),s=a(167),c=a.n(s),d=a(151);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,s=n.data.site,m=t||s.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{property:"og:image",content:"https://sanjaypanda.com"+Object(d.c)("og-image-sanjay-profile.png")},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Software Developer and Expert in Developing Web Application using React and NodeJs. Passionate about all things web."}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(56),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(151),i=a(158),o=a(201);t.a=function(){return r.a.createElement(i.a,{grid:{md:3,xl:2},className:"order-12 order-sm-12 order-md-1 order-xl-1 p-2 border-right border-secondary"},r.a.createElement("div",{className:"text-center"},r.a.createElement(o.a,{object:!0,className:"rounded-circle mb-2 img-thumbnail",src:Object(l.c)("sanjay.jpg"),alt:"Generic placeholder image"}),r.a.createElement("h2",{className:"mt-3 mb-3"},"HELLO!"),r.a.createElement("p",null,"My name is ",r.a.createElement("b",null,"Sanjay Panda")," and I am a ",r.a.createElement("b",null,"Full stack developer")," from Odisha, India."),r.a.createElement("p",null,"Software Developer and Expert in Developing Web Application using React and NodeJs. Passionate about all things web."),r.a.createElement("p",null,"Feel free to ",r.a.createElement("a",{href:"mailto:contact@sanjaypanda.com"},"contact")," me for any project that you might have in mind."),r.a.createElement("p",{className:"social-link"},r.a.createElement("a",{href:"https://www.linkedin.com/in/pandasanjay/",alt:"linkedin",className:"fa fa-linkedin"}," "),r.a.createElement("a",{href:"https://github.com/pandasanjay",alt:"github",className:"fa fa-git"}," "))))}},164:function(e,t,a){"use strict";a(168),a(75),a(55),a(35),a(169);var n=a(165),r=a(0),l=a.n(r),i=a(151),o=a(158);t.a=function(){return l.a.createElement(i.b,{query:"1416667696",render:function(e){var t=e.site.siteMetadata.logos,a=e.site.siteMetadata.companyLogs;return l.a.createElement(o.a,{right:!0,grid:{md:3,xl:2},className:"d-none d-xl-block order-md-12 order-xl-12 border-left border-secondary"},l.a.createElement("h5",{className:"border-bottom border-dark p-2 font-weight-bold bg-dark text-light shadow"},"SKILLS"),l.a.createElement("div",{className:"text-center"},Object.values(t).map(function(e,a){return l.a.createElement("img",{src:Object(i.c)(e),key:a,alt:Object.keys(t)[a],title:Object.keys(t)[a],style:{width:"75px"},className:"rounded p-2"})})),l.a.createElement("h5",{className:"border-bottom border-dark mt-3 p-2 font-weight-bold bg-dark text-light shadow"},"WORKED AT"),l.a.createElement("div",{className:"text-center"},Object.values(a).map(function(e,t){return l.a.createElement("img",{src:Object(i.c)(e),key:t,alt:Object.keys(a)[t],title:Object.keys(a)[t],style:{width:"75px"},className:"rounded p-2"})})))},data:n})}},165:function(e){e.exports={data:{site:{siteMetadata:{logos:{react:"React.svg",nodejs:"nodejs.svg",gitlab:"gitlab.svg",jenkins:"jenkins.png",css3:"css3.svg",git:"Git3.svg",html5:"html5.svg",javascript:"javascript.svg",docker:"docker.svg",gatsby:"gatsby.svg",sql:"sql.svg"},companyLogs:{lbg:"lloyds.png",wipro:"wipro.png",navsoft:"navsoft.png",maastrixsolutions:"maastrix.png"}}}}}},166:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),i=a(151),o=a(199),s=a(36),c=a.n(s),d=a(7),m=a.n(d),u=a(193),p=a(194),g=a(195),h=a(205),b=a(196),f=a(197),v=a(198),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(c()(a)),a.state={isOpen:!1},a}m()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return l.a.createElement(u.a,{color:"dark",dark:!0,expand:"md",className:"sticky-top pb-xl-0 pt-xl-0"},l.a.createElement(p.a,{href:"/",className:"border border-secondary rounded-circle pl-2 pr-2 border-0"},"SP"),l.a.createElement(g.a,{onClick:this.toggle}),l.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(b.a,{className:"ml-auto",navbar:!0},l.a.createElement(f.a,null,l.a.createElement(v.a,{className:"text-light",href:"/my-work/"},"MY WORK")),l.a.createElement(f.a,null,l.a.createElement(v.a,{className:"text-light",href:"https://resume.io/r/fLlndyLmA"},"RESUME")),l.a.createElement(f.a,null,l.a.createElement(v.a,{className:"text-light",href:"/blog"},"BLOG")),l.a.createElement(f.a,null,l.a.createElement(v.a,{className:"text-light",href:"mailto:contact@sanjaypanda.com"},"CONTACT")))))},t}(l.a.Component);t.a=function(e){var t=e.children;return l.a.createElement(i.b,{query:"2015214026",render:function(e){return l.a.createElement("div",null,l.a.createElement(y,{headerText:"About Gatsby"}),l.a.createElement(o.a,{fluid:!0,className:"p-0"},t))},data:n})}},192:function(e){e.exports={data:{site:{siteMetadata:{jobDetails:{full_stack_dev:{header:"Full stack development",text:"\n                <p>Building a application is not hard, maintaining them takes time and building a whole new feature is required significant amount of testing efforts as well. There is also no right way to build a particular application, each application need to be refactored and grows over the time. My goal is to place the right automation testing which helps in CI/CD and make the release faster.</p>\n                <p>Looking for someone to help to build your idea with your team and need to have these below skills: </p>\n                <ul>\n                    <li> 5+ year of experience  </li>\n                    <li> Monolith and Microservice Architecture</li>\n                    <li> Agile workflow </li>\n                    <li> CI/CD </li>\n                    <li> Test automation </li>\n                    <li> Motivate and Lead team</li>\n                    <li> NodeJs and React JS (Primary skill)</li>\n                </ul>\n                "},ui_application_development:{header:"UI development",text:"\n                <p>This is the field of ideas and innovation comes together and presented to the user. if your UI is not looks good then, you will lose your customer. So great UI design and development with cross browser and responsive design, make end user accessible from any device. Easy and simple UI take your business to higher level </p>\n                <p>Looking for someone best in UI development and should have:</p>\n                <ul>\n                    <li> 5+ year of experience  </li>\n                    <li> Design principle </li>\n                    <li> Accessibility (For visually impaired ) </li>\n                    <li> Color contrast tested </li>\n                    <li> Design test automation to future proof </li>\n                    <li> Motivate and Lead team</li>\n                </ul>\n                "},node_js_development:{header:"NodeJs development",text:"\n                <p>Node is the server side of javascript. Very powerful, help developer to build tool, share and use. Creating a REST API is couple of line of code. </p>\n                <p>Looking for someone build api for you and should have:</p>\n                <ul>\n                    <li> 5+ year of experience  </li>\n                    <li> REST API development </li>\n                    <li> Authentication and security </li>\n                    <li> DataBase connection and complex query </li>\n                    <li> Understand the business </li>\n                    <li> Functional and api testing</li>\n                    <li> Handling large files </li>\n                </ul>\n                "},spa_development:{header:"SPA and SSR development",text:"\n                <p>Single Page Application(SPA) and  Server-side Rendering (SSR) are the new age way to develop web application which is faster and give experience of desktop application. React is a great framework among others.</p>\n                <p>Looking for someone to help to build a awesome application for your business and should have</p>\n                <ul>\n                    <li> 5+ year of experience  </li>\n                    <li> Clear concepts and related technology </li>\n                    <li> REST API integration </li>\n                    <li> Authentication and Security </li>\n                    <li> Build tools </li>\n                    <li> Test automation </li>\n                    <li> Motivate and Lead team</li>\n                </ul>\n                "}}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-9dcda4eac1cd8e22a3f5.js.map