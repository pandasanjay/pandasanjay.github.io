(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(201),s=a(199),c=a(202),o=a(203),i=a(156),d=a(163),m=a(160),u=a(161),p=a(149);t.default=function(e){var t=e.pageContext;return r.a.createElement(d.a,null,r.a.createElement(i.a,{title:"Not Found",keywords:["Sanjay Panda","Fullstack developer","react","node"]}),r.a.createElement(l.a,{className:"flex-xl-nowrap no-gutters"},r.a.createElement(m.a,null),r.a.createElement(s.a,{sm:"9",md:"9",xl:"8",className:"ml-md-auto ml-sm-auto mr-sm-auto ml-xl-auto mr-xl-auto order-1 order-sm-1 p-3"},r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("h1",null," ",t.header," "),r.a.createElement("h3",null,"Coming soon!"),r.a.createElement(p.a,{to:"/"},"Go to Home")))),r.a.createElement(u.a,null)))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),l=a(4),s=a.n(l),c=a(32),o=a.n(c);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return c.withPrefix});a(154);var i=r.a.createContext({}),d=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},155:function(e,t,a){"use strict";a(33);var n=a(0),r=a.n(n),l=a(199);t.a=function(e){var t=e.children,a=e.right,n=e.grid,s=void 0===n?{}:n,c=e.className,o=["sidebar","shadow"];return a&&o.push("right"),c&&o.push(c),r.a.createElement(l.a,Object.assign({},s,{className:o.join(" ")}),r.a.createElement("div",{className:"sidebar-sticky"},t))}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),l=a.n(r),s=a(4),c=a.n(s),o=a(164),i=a.n(o);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title,o=n.data.site,d=t||o.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio"}}}}},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),c=a(55),o=a(2),i=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=i},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(149),s=a(155),c=a(200);t.a=function(){return r.a.createElement(s.a,{grid:{md:3,xl:2},className:"order-12 order-sm-12 order-md-1 order-xl-1 p-2 border-right border-secondary"},r.a.createElement("div",{className:"text-center"},r.a.createElement(c.a,{object:!0,className:"rounded-circle mb-2 img-thumbnail",src:Object(l.c)("sanjay.jpg"),alt:"Generic placeholder image"}),r.a.createElement("h2",{className:"mt-3 mb-3"},"HELLO!"),r.a.createElement("p",null,"My name is ",r.a.createElement("b",null,"Sanjay Panda")," and I am a ",r.a.createElement("b",null,"Full stack developer")," from Odisha, India."),r.a.createElement("p",null,"Software Developer and Expert in Developing Web Application using React and NodeJs. Passionate about all things web."),r.a.createElement("p",null,"Feel free to ",r.a.createElement("a",{href:"mailto:contact@sanjaypanda.com"},"contact")," me for any project that you might have in mind."),r.a.createElement("p",{className:"social-link"},r.a.createElement("a",{href:"https://www.linkedin.com/in/pandasanjay/",alt:"linkedin",className:"fa fa-linkedin"}," "),r.a.createElement("a",{href:"https://github.com/pandasanjay",alt:"github",className:"fa fa-git"}," "))))}},161:function(e,t,a){"use strict";a(165),a(73),a(54),a(166);var n=a(162),r=a(0),l=a.n(r),s=a(149),c=a(155);t.a=function(){return l.a.createElement(s.b,{query:"1416667696",render:function(e){var t=e.site.siteMetadata.logos,a=e.site.siteMetadata.companyLogs;return l.a.createElement(c.a,{right:!0,grid:{md:3,xl:2},className:"d-none d-xl-block order-md-12 order-xl-12 border-left border-secondary"},l.a.createElement("h5",{className:"border-bottom border-dark p-2 font-weight-bold bg-dark text-light shadow"},"SKILLS"),l.a.createElement("div",{className:"text-center"},Object.values(t).map(function(e,a){return l.a.createElement("img",{src:Object(s.c)(e),key:a,alt:Object.keys(t)[a],title:Object.keys(t)[a],style:{width:"75px"},className:"rounded p-2"})})),l.a.createElement("h5",{className:"border-bottom border-dark mt-3 p-2 font-weight-bold bg-dark text-light shadow"},"WORKED AT"),l.a.createElement("div",{className:"text-center"},Object.values(a).map(function(e,t){return l.a.createElement("img",{src:Object(s.c)(e),key:t,alt:Object.keys(a)[t],title:Object.keys(a)[t],style:{width:"75px"},className:"rounded p-2"})})))},data:n})}},162:function(e){e.exports={data:{site:{siteMetadata:{logos:{react:"React.svg",nodejs:"nodejs.svg",gitlab:"gitlab.svg",jenkins:"jenkins.png",css3:"css3.svg",git:"Git3.svg",html5:"html5.svg",javascript:"javascript.svg",docker:"docker.svg",gatsby:"gatsby.svg",sql:"sql.svg"},companyLogs:{lbg:"lloyds.png",wipro:"wipro.png",navsoft:"navsoft.png",maastrixsolutions:"maastrix.png"}}}}}},163:function(e,t,a){"use strict";var n=a(158),r=a(0),l=a.n(r),s=a(149),c=a(198),o=a(34),i=a.n(o),d=a(7),m=a.n(d),u=a(192),p=a(193),g=a(194),f=a(204),h=a(195),b=a(196),E=a(197),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(i()(a)),a.state={isOpen:!1},a}m()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return l.a.createElement(u.a,{color:"dark",dark:!0,expand:"md",className:"sticky-top pb-xl-0 pt-xl-0"},l.a.createElement(p.a,{href:"/",className:"border border-secondary rounded-circle pl-2 pr-2 border-0"},"SP"),l.a.createElement(g.a,{onClick:this.toggle}),l.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(h.a,{className:"ml-auto",navbar:!0},l.a.createElement(b.a,null,l.a.createElement(E.a,{className:"text-light",href:"/my-work/"},"MY WORK")),l.a.createElement(b.a,null,l.a.createElement(E.a,{className:"text-light",href:""},"RESUME")),l.a.createElement(b.a,null,l.a.createElement(E.a,{className:"text-light",href:""},"BLOG")),l.a.createElement(b.a,null,l.a.createElement(E.a,{className:"text-light",href:""},"CONTACT")))))},t}(l.a.Component);t.a=function(e){var t=e.children;return l.a.createElement(s.b,{query:"2015214026",render:function(e){return l.a.createElement("div",null,l.a.createElement(y,{headerText:"About Gatsby"}),l.a.createElement(c.a,{fluid:!0,className:"p-0"},t))},data:n})}}}]);
//# sourceMappingURL=component---src-templates-coming-soon-js-f02cc80cac91b32fde24.js.map