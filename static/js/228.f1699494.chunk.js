(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[228],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(45),a=t(28),s=t(136),l=t(137),i=t(139),o=t(0),c=t.n(o),u=t(138),m=t.n(u),p=(t(59),function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=c.a.createRef(),t}return Object(i.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(c.a.Component))},141:function(e,n,t){},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(0),a=t.n(r),s=t(26),l=t(297),i=t(295),o=t(114),c=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=c();return a.a.createElement("div",{className:e.root},a.a.createElement(i.a,null,a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/introNodejs",className:e.line},"Intro")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/ejsNode",className:e.line},"Basics")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/buffers",className:e.line},"Buffer")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/childs",className:e.line},"Child Process-fork()-exec()")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/tut_1",className:e.line},"Callback")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/filSystems",className:e.line},"File System")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/evtNode",className:e.line},"EvtEmter-Capture data")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/codes",className:e.line},"Codes")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/url_shortener",className:e.line},"Url_Shortener")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/stripe_payment",className:e.line},"stripe_payment")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/sendEmail",className:e.line},"sendEmail")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/search_pagination",className:e.line},"search_pagination")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/push_notifications",className:e.line},"push_notifications")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/nodetext",className:e.line},"nodetext")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/file_upload",className:e.line},"file_upload")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/e_acco_veri",className:e.line},"email_acco_veri")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/2fa_speakearst",className:e.line},"2fa_speakearst")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/authentications",className:e.line},"SignUp")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/serverSide",className:e.line},"Server Side")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/tut_2",className:e.line},"Geocode-Upload")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/tut_6",className:e.line},"Chat")),a.a.createElement(l.a,null,a.a.createElement(s.b,{to:"/udemy",className:e.line},"Udemy"))),a.a.createElement("div",null))}},371:function(e,n,t){"use strict";t.r(n);var r=t(45),a=t(28),s=t(136),l=t(137),i=t(139),o=t(0),c=t.n(o),u=t(138),m=t.n(u),p=t(120),d=t(57),f=t(296),b=t(5),h=(t(141),t(149)),g=t(140),y={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},E='\n//server.js\nconst express = require(\'express\');\nconst bodyParser = require(\'body-parser\');\nconst request = require(\'request\');\nconst ba = require(\'bitcoinaverage\');\n\nconst app = express();\n\nvar publicKey = \'YOURKEYHERE\';\nvar secretKey = \'YOURKEYHERE\';\nvar restClient = ba.restfulClient(publicKey, secretKey);\n\napp.use(bodyParser.urlencoded({\n  extended: true\n}));\n\napp.get("/", function (req, res) {\n  res.sendFile(__dirname + "/index.html");\n});\n\napp.post("/", function (req, res) {\n  console.log(req.body.cryptoSelection);\n  console.log(req.body.currencySelection);\n\n  var cryptoFiat = req.body.cryptoSelection + req.body.currencySelection\n\n  restClient.getTickerDataPerSymbol(\'global\', req.body.cryptoSelection + req.body.currencySelection, function (response) {\n    console.log(response);\n\n    var data = JSON.parse(response);\n    var currentData = data.display_timestamp;\n    var price = data.last;\nintegrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymou\n    console.log(price);\n\n    res.write("<p>The current data is " + currentData + "</p>");\n    res.write("<h1>The price of " + req.body.cryptoSelection + " is " + price + " " + \n              req.body.currencySelection + "</h1>");\n\n    res.send();\n\n  }, function (error) {\n    console.log(error);\n  });\n});\n\napp.listen(3000, function () {\n  console.log("Server is running on port 3000.");\n});\n\n// Utility Methods\nvar getBitcoinURLFromSelection = function (crypto, currency) {\n  return "https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=" + crypto + "&fiat=" + currency;\n}\n\n\n//config.js\n\nvar config = {\n  PUBLIC_KEY : \'OWVjMzEwZTk3MWQxNDU5NTljZjZhM2Q0ZWVkZDRkZDU\',\n  SECRET_KEY : \'ZjQ0NjljM2UwZTYzNGFlN2E3OTY5MWJmYmNmZTIyY2FiYTM5NDZlNzc0MGU0NDY0YjA1YzA2YWJjODk1NGU1Mg\'\n};\n\n\n\n//index.html\n<form action="/" method="post">\n    <select name="cryptoSelection">\n      <option value="BTC">BitCoin</option>\n      <option value="ETH">Ethereum</option>\n      <option value="LTH">LiteCoin</option>\n    </select>\n\n    <select name="currencySelection">\n      <option value="USD">US Dollar</option>\n      <option value="GBP">GB Pound</option>\n      <option value="EUR">EU Euros</option>\n    </select>\n\n    <button type="submit" name="submitButton">Submit</button>\n  </form>\n\n  <script type=\'text/javascript\' src=\'config.js\'><\/script>\n  <script type=\'text/javascript\' src=\'index.js\'><\/script>'.trim(),v='\n//server.js\nconst express = require(\'express\');\nconst bodyParser = require(\'body-parser\');\nconst request = require(\'request\');\n\nconst app = express();\n\napp.use(bodyParser.urlencoded({\n  extended: true\n}));\napp.use(express.static("public"));\n\napp.get("/", function (req, res) {\n  res.sendFile(__dirname + "/signup.html");\n});\n\napp.post("/", function (req, res) {\n  var firstName = req.body.fName;\n  var lastName = req.body.lName;\n  var email = req.body.email;\n\n  var data = {\n    \'members\': [\n      {\n        email_address: email,\n        status: \'subscribed\',\n        merge_fields: {\n          FNAME: firstName,\n          LNAME: lastName\n        }\n      }\n    ],\n  }\n\n  var jsonData = JSON.stringify(data)\n\n  console.log(firstName, lastName, email);\n\n  // The API KEY BELOW HAS BEEN DISABLED ON MAILCHIMP\n\n  var options = {\n    url: \'https://us3.api.mailchimp.com/3.0/lists/c88fb2ef24\',\n    method: \'POST\',\n    headers: {\n      \'Authorization\': "anand1 8a8caf31357e4496e62d3e3690b8797b-us3"\n    },\n    body: jsonData\n  }\n\n  request(options, function (error, response, body) {\n    if (error) {\n      console.log(error);\n      res.sendFile(__dirname + "/failure.html");\n    } else {\n      if (response.statusCode == 200) {\n        res.sendFile(__dirname + "/success.html");\n      } else {\n        res.sendFile(__dirname + "/failure.html");\n      }\n    }\n  });\n});\n\napp.post("/failure.html", function (req, res) {\n  res.redirect("/");\n});\n\napp.listen(process.env.PORT || 3000, function () {\n  console.log("Server is running");\n});\n\n// 8a8caf31357e4496e62d3e3690b8797b-us3\n\n// ID for List/Audience:\n// c88fb2ef24\n\n\n\n//signup.html\n   <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/sign-in/">\n\n    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" \n      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n    \n    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" \n      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>\n\n    <link href="css/signin.css" rel="stylesheet">\n  </head>\n\n  <body class="text-center">\n    <form class="form-signin" method="POST" action="/">\n      <img class="mb-4" src="imgs/email-newsletter.jpeg" alt="" width="144" height="72">\n      <h1 class="h3 mb-3 font-weight-normal">Sign Up to Our Newsletter</h1>\n\n      <input type="text" id="inputFirstName" name="fName" class="form-control top" placeholder="First \n          Name" required autofocus>\n      <input type="text" id="inputLastName" name="lName" class="form-control middle" placeholder="Last Name" \n          required autofocus>\n      <input type="email" id="inputEmail" name="email" class="form-control bottom" placeholder="Email address" \n          required autofocus>\n\n      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>\n      <p class="mt-5 mb-3 text-muted">&copy; 2019</p>\n    </form>\n  </body>\n  \n  \n  \n  //success.html\n  <div class="container">\n      <h1 class="display-4">Awesome!!</h1>\n      <p class="lead">You have successfully signed up to the newsletter, look forward to lots of awesome content!</p>\n    </div>\n    \n    \n  //failure.html\n  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" \n  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n  \n  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" \n  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"><\/script>\n</head>\n\n<body>\n  <div class="jumbotron jumbotron-fluid">\n    <div class="container">\n      <h1 class="display-4">Uh Oh!</h1>\n      <p class="lead">Looks like there was an error signing up! Please try again</p>\n\n      <form action="/failure.html" method="post">\n        <button class="btn btn-large btn-warning" type="submit" name="button">Try again</button>\n      </form>\n    </div>'.trim(),N='\nconst express = require("express");\nconst bodyParser = require("body-parser");\nconst mongoose = require("mongoose");\nconst ejs = require("ejs");\n\nconst app = express();\n\napp.set(\'view engine\', \'ejs\');\n\napp.use(bodyParser.urlencoded({\n  extended: true\n}));\napp.use(express.static("public"));\n\nmongoose.connect("mongodb://localhost:27017/wikiDB", {\n  userNewUrlParser: true\n});\n\nconst articleSchema = {\n  title: String,\n  content: String\n};\n\nconst Article = mongoose.model("Article", articleSchema);\n\n// // GET all articles\n// app.get("/articles", function(req, res){\n//   Article.find(function(err, foundArticles){\n//     if(!err){\n//       console.log(foundArticles);\n//\n//       res.send(foundArticles);\n//     }else{\n//       res.send(err);\n//     }\n//   });\n// });\n//\n// // POST a New Article\n// app.post("/articles", function(req, res) {\n//   const newArticle = new Article({\n//     title: req.body.title,\n//     content: req.body.content\n//   });\n//\n//   newArticle.save(function(err){\n//     if(!err){\n//       res.send("Successfully added a new article.");\n//     } else{\n//       res.send(err);\n//     }\n//   });\n// });\n//\n// // DELETE All Articles\n// app.delete("/articles", function(req, res){\n//   Article.deleteMany(function(err){\n//     if(!err){\n//       res.send("Successfully deleted all articles.");\n//     }else{\n//       res.send(err);\n//     }\n//   });\n// });\n\napp.route("/articles").get(function (req, res) {\n  Article.find(function (err, foundArticles) {\n    if (!err) {\n      console.log(foundArticles);\n\n      res.send(foundArticles);\n    } else {\n      res.send(err);\n    }\n  });\n}).post(function (req, res) {\n  const newArticle = new Article({\n    title: req.body.title,\n    content: req.body.content\n  });\n\n  newArticle.save(function (err) {\n    if (!err) {\n      res.send("Successfully added a new article.");\n    } else {\n      res.send(err);\n    }\n  });\n}).delete(function (req, res) {\n  Article.deleteMany(function (err) {\n    if (!err) {\n      res.send("Successfully deleted all articles.");\n    } else {\n      res.send(err);\n    }\n  });\n});\n\napp.route("/articles/:articleTitle")\n\n  .get(function (req, res) {\n    Article.findOne({\n      title: req.params.articleTitle\n    }, function (err, foundArticle) {\n      if (!err) {\n        res.send(foundArticle);\n      } else {\n        res.send("No articles matching that title was found");\n      }\n    })\n  })\n\n  .put(function (req, res) {\n    Article.update({\n      title: req.params.articleTitle\n    }, {\n      title: req.body.title,\n      content: req.body.content\n    }, {\n      overwrite: true\n    },\n      function (err) {\n        if (!err) {\n          res.send("Successfully updated article.")\n        }\n      });\n  })\n\n  .patch(function (req, res) {\n    Article.update({\n      title: req.params.articleTitle\n    }, {\n      $set: req.body\n    },\n      function (err) {\n        if (!err) {\n          res.send("Successfully updated article.");\n        } else {\n          res.send(err);\n        }\n      }\n    );\n  })\n\n  .delete(function (req, res) {\n    Article.deleteOne({\n      title: req.params.articleTitle\n    }, function (err) {\n      if (!err) {\n        res.send("Successfully deleted article.");\n      } else {\n        res.send(err);\n      }\n    })\n  });\n\napp.listen(3000, function () {\n  console.log("Server started on port 3000");\n});\n'.trim(),q=function(e){function n(){return Object(r.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xs:2},c.a.createElement(d.a,{className:e.paper},c.a.createElement("h4",null,c.a.createElement(h.a,null)))),c.a.createElement(p.a,{item:!0,xs:10},c.a.createElement(d.a,{className:e.paper},c.a.createElement(f.a,null,c.a.createElement("h3",null,"Bitcoin-Ticker"),c.a.createElement("div",{style:y},c.a.createElement(g.a,{code:E,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Newsletter-Signup"),c.a.createElement("div",{style:y},c.a.createElement(g.a,{code:v,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Wiki-API"),c.a.createElement("div",{style:y},c.a.createElement(g.a,{code:N,language:"js",plugins:["line-numbers"]}))))))}}]),n}(o.Component);n.default=Object(b.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(q)}}]);
//# sourceMappingURL=228.f1699494.chunk.js.map