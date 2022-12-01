(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[147],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(45),l=t(28),r=t(136),c=t(137),s=t(139),o=t(0),i=t.n(o),m=t(138),u=t.n(m),p=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(c.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&u.a.highlightElement(t.ref.current)},t.ref=i.a.createRef(),t}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return i.a.createElement("pre",{className:"code-prism"},i.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(i.a.Component))},141:function(e,n,t){},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(0),l=t.n(a),r=t(26),c=t(297),s=t(295),o=t(114),i=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=i();return l.a.createElement("div",{className:e.root},l.a.createElement(s.a,null,l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/introExpress",className:e.line},"IntroExpress")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/resDocs",className:e.line},"Responds")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/routerDocs",className:e.line},"Router")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/middleware",className:e.line},"Middleware")),l.a.createElement("b",null,"Loopback"),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/loopbackcli",className:e.line},"Loopbackcli")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/jqueries",className:e.line},"jqueries")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/backbonejs",className:e.line},"Backbone")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/underscorejs",className:e.line},"Underscore"))),l.a.createElement("div",null))}},399:function(e,n,t){"use strict";t.r(n);var a=t(45),l=t(28),r=t(136),c=t(137),s=t(139),o=t(0),i=t.n(o),m=t(138),u=t.n(m),p=t(120),d=t(57),b=t(296),h=t(5),g=(t(141),t(158)),E=t(140),f={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},v='\n1.Install CLI\n$ npm install loopback-cli\n\n2.Create app\n$ lb\n\n$ cd lbapp\n\n3.Run server\n$ node .\n"dev": "nodemon server/server.js --watch common --watch server",\n\n4.Install Mongo connector\n$ npm install --save loopback-connector-mongodb\n\n5.Setup datasource\n$ lb datasource mongoDS --connector mongoDB\n\n-host: localhost\n-port: 27017\n-database: dbname\n\n\n6.Create model\n$ lb model\n\nEnter modal name: meetup\n    db (mongodb)\n    Select model\'s base class: PersistedModel\n    Expose meetup via the REST API ? Y\n    common model or server only ? common\n    Property name: name\n    Property type: String\n    Required ? Y\n \nif want continue add more Property name tha add otherwise without enter name press enter to quite\n\n\n7.see data from database on browser: http://localhost:3000/api/meetups\n\n8.inside db\n  show dbs\n  use meetups\n  show collections\n  db.meetup.find()\n  \n\n  9.Add auth\n$ lb acl\n\nall existing model\n     meetup  -- select\n  all method and properties\n  All (match all types)\n  Select access type\n     All (match all types)  --select\n  Any unauthenticated user\n  Select the permission to apply\n  Explicitly deny access  --select\n  \n\n  10.Pass token with verb\n  inside user create user (post)\n   {\n     "email":"mukesh7@gmail.com",\n     "password":"mukesh@123"\n    }\n\ngo inside user login route after login get id tokens\nand put id inside set Access Token\n\n\n11.Add angularjs \ninside server/middleware.json\n\n"files": {\n    "loopback#static": {\n      "params": "$!../client"\n    }\n  }\n\n\n12.connect api over angular app(All api available for app).\nlb-ng server/server.js client/js/lb-services.js\nif above command not run then first run: npm install -g loopback-sdk-angular-cli'.trim(),k=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(p.a,{container:!0},i.a.createElement(p.a,{item:!0,xs:2},i.a.createElement(d.a,{className:e.paper},i.a.createElement("h4",null,i.a.createElement(g.a,null)))),i.a.createElement(p.a,{item:!0,xs:10},i.a.createElement(d.a,{className:e.paper},i.a.createElement(b.a,null,i.a.createElement("h3",null,"Loopbac cli"),i.a.createElement("div",{style:f},i.a.createElement(E.a,{code:v,language:"js",plugins:["line-numbers"]}))))))}}]),n}(o.Component);n.default=Object(h.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(k)}}]);
//# sourceMappingURL=147.45b113da.chunk.js.map