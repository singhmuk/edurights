(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[222],{140:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n(45),l=n(28),r=n(136),c=n(137),s=n(139),i=n(0),o=n.n(i),m=n(138),u=n.n(m),d=(n(59),function(e){function a(e){var n;return Object(t.a)(this,a),(n=Object(r.a)(this,Object(c.a)(a).call(this,e))).highlight=function(){n.ref&&n.ref.current&&u.a.highlightElement(n.ref.current)},n.ref=o.a.createRef(),n}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,a=e.code,n=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(n)},a.trim()))}}]),a}(o.a.Component))},141:function(e,a,n){},149:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(0),l=n.n(t),r=n(26),c=n(297),s=n(295),i=n(114),o=Object(i.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=o();return l.a.createElement("div",{className:e.root},l.a.createElement(s.a,null,l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/introNodejs",className:e.line},"Intro")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/ejsNode",className:e.line},"Basics")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/buffers",className:e.line},"Buffer")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/childs",className:e.line},"Child Process-fork()-exec()")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/tut_1",className:e.line},"Callback")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/filSystems",className:e.line},"File System")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/evtNode",className:e.line},"EvtEmter-Capture data")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/codes",className:e.line},"Codes")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/url_shortener",className:e.line},"Url_Shortener")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/stripe_payment",className:e.line},"stripe_payment")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/sendEmail",className:e.line},"sendEmail")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/search_pagination",className:e.line},"search_pagination")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/push_notifications",className:e.line},"push_notifications")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/nodetext",className:e.line},"nodetext")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/file_upload",className:e.line},"file_upload")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/e_acco_veri",className:e.line},"email_acco_veri")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/2fa_speakearst",className:e.line},"2fa_speakearst")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/authentications",className:e.line},"SignUp")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/serverSide",className:e.line},"Server Side")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/tut_2",className:e.line},"Geocode-Upload")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/tut_6",className:e.line},"Chat")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/udemy",className:e.line},"Udemy"))),l.a.createElement("div",null))}},376:function(e,a,n){"use strict";n.r(a);var t=n(45),l=n(28),r=n(136),c=n(137),s=n(139),i=n(0),o=n.n(i),m=n(138),u=n.n(m),d=n(120),E=n(57),p=n(296),h=n(5),g=(n(141),n(149)),b=n(140),f={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},N="\nconst nodemailer = require('nodemailer');\nconst sgMail = require('@sendgrid/mail');\n\nconst sendEmailEthereal = async (req, res) => {\n  let testAccount = await nodemailer.createTestAccount();\n\n  const transporter = nodemailer.createTransport({\n    host: 'smtp.ethereal.email',\n    port: 587,\n    auth: {\n      user: 'marlene.legros@ethereal.email',\n      pass: 'va4q5BKKtry7aq58Gv',\n    },\n  });\n\n  let info = await transporter.sendMail({\n    from: '\"Coding Addict\" <codingaddict@gmail.com>',\n    to: 'bar@example.com',\n    subject: 'Hello',\n    html: '<h2>Sending Emails with Node.js</h2>',\n  });\n\n  res.json(info);\n};\n\nconst sendEmail = async (req, res) => {\n  sgMail.setApiKey(process.env.SENDGRID_API_KEY);\n  const msg = {\n    to: 'learncode@mail.com', // Change to your recipient\n    from: 'learncodetutorial@gmail.com', // Change to your verified sender\n    subject: 'Sending with SendGrid is Fun',\n    text: 'and easy to do anywhere, even with Node.js',\n    html: '<strong>and easy to do anywhere, even with Node.js</strong>',\n  };\n  const info = await sgMail.send(msg);\n  res.json(info);\n};\n\nmodule.exports = sendEmail;\n".trim(),v="\nrequire('dotenv').config();\nrequire('express-async-errors');\nconst dbCon = require('./db/db');\nconst sendEmail = require('./controllers/sendEmail');\nconst notFoundMiddleware = require('./middleware/not-found');\nconst errorHandlerMiddleware = require('./middleware/error-handler');\n\n\ndbCon;\napp.get('/send', sendEmail);\n\napp.use(notFoundMiddleware);\napp.use(errorHandlerMiddleware);\n".trim(),y=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:2},o.a.createElement(E.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(g.a,null)))),o.a.createElement(d.a,{item:!0,xs:10},o.a.createElement(E.a,{className:e.paper},o.a.createElement(p.a,null,o.a.createElement("h3",null,"Send Email"),o.a.createElement("b",null,"controllers/sendEmail.js"),o.a.createElement("div",{style:f},o.a.createElement(b.a,{code:N,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"server.js"),o.a.createElement("div",{style:f},o.a.createElement(b.a,{code:v,language:"js",plugins:["line-numbers"]}))))))}}]),a}(i.Component);a.default=Object(h.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(y)}}]);
//# sourceMappingURL=222.7b6d240e.chunk.js.map