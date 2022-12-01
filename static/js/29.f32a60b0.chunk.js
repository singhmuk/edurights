(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[29],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(45),l=n(28),i=n(136),r=n(137),o=n(139),c=n(0),s=n.n(c),m=n(138),u=n.n(m),h=(n(59),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).highlight=function(){n.ref&&n.ref.current&&u.a.highlightElement(n.ref.current)},n.ref=s.a.createRef(),n}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,t=e.code,n=(e.plugins,e.language);return s.a.createElement("pre",{className:"code-prism"},s.a.createElement("code",{ref:this.ref,className:"language-".concat(n)},t.trim()))}}]),t}(s.a.Component))},141:function(e,t,n){},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),l=n.n(a),i=n(26),r=n(297),o=n(295),c=n(114),s=Object(c.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=s();return l.a.createElement("div",{className:e.root},l.a.createElement(o.a,null,l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/introRedux",className:e.line},"Intro")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/counter",className:e.line},"Counter Select")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/reduxState",className:e.line},"Redux State-Curd")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/reduxMethods",className:e.line},"Redux Methods")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/react_redux",className:e.line},"Filter")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/reduxCurd",className:e.line},"Redux Curd")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/expenseTraMern",className:e.line},"ReactCurdPlaceholder")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/contactKeeperApi",className:e.line},"ReactReduxCurdPlaceholder")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/mernRedux",className:e.line},"Mern Redux")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/signUp",className:e.line},"SignUP")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/git",className:e.line},"Git")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/gitConcepts",className:e.line},"Git Concepts")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/skills",className:e.line},"Skills")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/comskills",className:e.line},"Comskills")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/techskills",className:e.line},"Techskills")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/techinto",className:e.line},"TechsInto"))),l.a.createElement("div",null))}},160:function(e,t,n){e.exports=n.p+"static/media/git_imgs.88343d60.PNG"},334:function(e,t,n){"use strict";n.r(t);var a=n(45),l=n(28),i=n(136),r=n(137),o=n(139),c=n(0),s=n.n(c),m=n(138),u=n.n(m),h=n(120),d=n(57),p=n(296),g=n(5),E=(n(141),n(153)),b=n(140),f=n(160),y=n.n(f),w={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},v={height:350,width:600},k='\nls, ls -A\npwd (print working directory)\n\nTo register user account with git:\n  git config --global user.name mukesh\n  git config --global user.email mukese0794@gmail.com\n\nto check name and email:\n  git config --global user.name \n  git config --global user.email\n\n\n2.Add Reactjs App to github:\na. npm install gh-pages --save-dev\n\nb. Second in the existing scripts property we to need to add predeploy and deploy.\n\n    "scripts": {\n    //...\n    "predeploy": "npm run build",\n    "deploy": "gh-pages -d build"\n    }\n    \nc. Create a Github repository and initialize it and add it as a remote in your local git \n    repository.\n    \nd.1 git init (initialize this)\n\nd.2 git remote add origin https://mukeshcse94.github.io/dev.git (add it as remote)\n\n\n3.Now deploy it to GitHub Pages.\nnpm run deploy\n\n\ngit config --get remote.origin.url                                  //find git repository url\n'.trim(),j="\ngit branch \u2013a                   //to list all branch\ngit checkout                    //match last commit\ngit log -p  -5                  //see last 5 commit\ngit diff                        //compare working tree with staging area\ngit log\n".trim(),x="\nnpx create-react-app .                 //inside client\nnpx create-react-app /client           //outside client\n\nimr                                    //import React\nimro                                   //import React as Object\nimrc                                   //import React Component\nimrpc                                  //import React PureComponent\nrpc                                    //react Pure Function Const\ncdm                                    //componentDidMount\ned                                     //export default\ncmmb                                   //comment Big Block\nrfce                                   //react functional components\nrcc                                    //class component\nrrc                                    //class component with react-redux connect\nren                                    //render method\n".trim(),N=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(h.a,{container:!0},s.a.createElement(h.a,{item:!0,xs:2},s.a.createElement(d.a,{className:e.paper},s.a.createElement("h4",null,s.a.createElement(E.a,null)))),s.a.createElement(h.a,{item:!0,xs:10},s.a.createElement(d.a,{className:e.paper},s.a.createElement(p.a,null,s.a.createElement("h3",null,"Git"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("b",null,"Git: "),s.a.createElement("ul",null,s.a.createElement("li",null,"Give access to command: Push, Pull, Commit, etc."),s.a.createElement("li",null,"Use to tracking our changes in the Documents."))),s.a.createElement("br",null),s.a.createElement("li",null,s.a.createElement("b",null,"GitHub: "),"Is Remote Server."),s.a.createElement("li",null,"Local files send to remote server")),s.a.createElement("br",null),s.a.createElement("img",{src:y.a,alt:"Omega",className:"responsive",style:v}),s.a.createElement("h3",null,"Config Git"),s.a.createElement("div",{style:w},s.a.createElement(b.a,{code:k,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"Git Basics"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("b",null,"git log:"),"Commit time and details"),s.a.createElement("li",null,s.a.createElement("b",null,"git diff one.js:"),"To Chack difference added in one.js"),s.a.createElement("li",null,s.a.createElement("b",null,"git checkout one.js:"),"Rollback previous commit"),s.a.createElement("li",null,s.a.createElement("b",null,"git rm --cached index.js: "),"File remove from staging area."),s.a.createElement("li",null,s.a.createElement("b",null,"git rm --cached -r .:"),"Everything in working directory should be remove in staging area."),s.a.createElement("li",null,s.a.createElement("b",null,"git restore index.js/ git restore .: "),"To reove the files from staging changes."),s.a.createElement("li",null,s.a.createElement("b",null,"git log: "),"To know the git commit detals."),s.a.createElement("li",null,s.a.createElement("b",null,"git checkout commit_id: "),"To revert the previous commit_id."),s.a.createElement("li",null,s.a.createElement("b",null,'git push -u "guthub url" master: '))),s.a.createElement("br",null),s.a.createElement("h3",null,"Git setup"),s.a.createElement("ul",null,s.a.createElement("li",null,"write code."),s.a.createElement("li",null,"git add ."),s.a.createElement("li",null,'git commit -m "commits"'),s.a.createElement("li",null,"git push"),s.a.createElement("br",null),s.a.createElement("li",null,s.a.createElement("b",null,"change branch: "),"git checkout dev"),s.a.createElement("br",null),s.a.createElement("li",null,s.a.createElement("b",null,"create new branch"),": git checkout -b primary"),s.a.createElement("li",null,"npm install or npm push"),s.a.createElement("br",null),s.a.createElement("li",null,s.a.createElement("b",null,"Pull: "),"git clone 'url'"),s.a.createElement("li",null,s.a.createElement("b",null,"Push: "),"git push origin mukesh_dev"),s.a.createElement("br",null),s.a.createElement("li",null,s.a.createElement("b",null,"Merge secondary branch with main branch"),": ",s.a.createElement("ul",null,s.a.createElement("li",null,"git branch (main)"),s.a.createElement("li",null,"git merge secondary")))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Check last commit"),s.a.createElement("div",{style:w},s.a.createElement(b.a,{code:j,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"React Sort Keys"),s.a.createElement("div",{style:w},s.a.createElement(b.a,{code:x,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,"1. Starting work on an existing project"),s.a.createElement("p",null,"You may compare a new project to a new toy. Give the toy to the kid, and he would be eager to play with it."),s.a.createElement("p",null,"Usually, the complexity lies in consistency. You must follow previous work, understand the logic behind it and develop in a way that will not affect the existing elements. At the same time, it is important that all your additions will bring value to the project and won\u2019t look out of place in the existing environment."),s.a.createElement("b",null,"Here are the main steps we take:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Documentation \u2013 the document that served as a guideline when developing the project. It should contain goals, expected results, timelines as well as the entire project specifications."),s.a.createElement("li",null,"Access to source codes \u2013 a list of all the credentials we need to start the work. Access to a GIT repository on top of this would be an excellent bonus."),s.a.createElement("li",null,"Nothing exists or what we get is just a mockery of materials \u2192 That\u2019s ok, we\u2019ll just do everything from scratch.")),s.a.createElement("p",null,"You might ask yourself \u2013 do we really need this? It will take time, money and it will raise lots of annoying questions like \u201cwhy didn\u2019t we asked for this before?\u201d, \u201cwho was in charge with this?\u201d, \u201cwere we supposed to have this?\u201d. We understand it\u2019s annoying, yet the short answer is \u201cYes, we do\u201d. We do because, although we can see what has been done on a project, we can\u2019t see what was the purpose of it being done. And we need to understand everything there is to know about a project if want to be able to make a difference."),s.a.createElement("p",null,"Starting with an existing project, you will need some time to get used with the team structure, the methodology (deadlines or sprints) and the codebase itself."),s.a.createElement("p",null,"The first step is identifying the hierarchy - where you stand, will you manage some juniors and who are you going to report to."),s.a.createElement("br",null),s.a.createElement("b",null,"can ask for the following:"),s.a.createElement("br",null),s.a.createElement("ul",null,s.a.createElement("li",null,"Is there any documentation repository with all relevant summaries - user and development ones - that you can read first"),s.a.createElement("li",null,"What sort of access will you have - is it the complete project repository, or a specific module, and what's the best way to commit your new changes"),s.a.createElement("li",null,"Is there anyone who can brief you in the project - a quick run through the project idea, the main components, what is each module responsible for, what will you start with first"),s.a.createElement("li",null,"Play with code , Add new components obserb its functionality even not required.")),s.a.createElement("p",null,"Most companies are aware that you'll need some time to catch up with everything that has happened before - so make sure that you can stick to their pace. They could give you a week to get fully acquainted with 3 millions lines of code and start contributing right away, which is usually not realistic. It may take you a few weeks (or more) to get up to speed, and start with minor customizations and cosmetic changes until you feel confident enough to contribute larger chunks of independent code."),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,"2. Building a project from scratch"),s.a.createElement("ul",null,s.a.createElement("li",null,"It opens the door to a new, exciting world. It gives you the possibility to try out new tools, skills or procedures. It's a huge refresh for your day to day work."),s.a.createElement("li",null,"Projects made from scratch can differ a lot, some may need design, some may involve only development, others consist of support and maintenance. And finally, there are also the larger ones, that expand on all these areas."),s.a.createElement("li",null,"The brick foundation of any new work consists of understanding its primary objectives. That's why the first step is to ask the client to provide the project brief. This is a document that may contain: the company description, the target audience, more project details, goals and expectations, a timeline and budget."),s.a.createElement("li",null,"When big projects begin, planning helps to build in the right direction. A complex project is hard to follow already, and not having a detailed plan from the start would cast doubt over any further progress."),s.a.createElement("li",null,"Other than providing the right direction, planning is meant to define an active approach. It will help the project evolve by dividing it into small pieces but still keeping the initially-aimed coherence.")),s.a.createElement("br",null),s.a.createElement("b",null,"Development phase - constructing the project: "),s.a.createElement("p",null,"The implementing phase is a project's most elaborate stage. To make sure it happens as planned, we split the project into milestones and divide every milestone into agile sprints.")))))}}]),t}(c.Component);t.default=Object(g.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(N)}}]);
//# sourceMappingURL=29.f32a60b0.chunk.js.map