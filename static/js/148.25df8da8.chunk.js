(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[148],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(45),r=t(28),s=t(136),l=t(137),i=t(139),o=t(0),u=t.n(o),c=t(138),p=t.n(c),d=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&p.a.highlightElement(t.ref.current)},t.ref=u.a.createRef(),t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return u.a.createElement("pre",{className:"code-prism"},u.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(u.a.Component))},141:function(e,n,t){},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),r=t.n(a),s=t(26),l=t(297),i=t(295),o=t(114),u=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function c(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement(s.b,{to:"/introExpress",className:e.line},"IntroExpress")),r.a.createElement(l.a,null,r.a.createElement(s.b,{to:"/resDocs",className:e.line},"Responds")),r.a.createElement(l.a,null,r.a.createElement(s.b,{to:"/routerDocs",className:e.line},"Router")),r.a.createElement(l.a,null,r.a.createElement(s.b,{to:"/middleware",className:e.line},"Middleware")),r.a.createElement("b",null,"Loopback"),r.a.createElement(l.a,null,r.a.createElement(s.b,{to:"/loopbackcli",className:e.line},"Loopbackcli")),r.a.createElement(l.a,null,r.a.createElement(s.b,{to:"/jqueries",className:e.line},"jqueries")),r.a.createElement(l.a,null,r.a.createElement(s.b,{to:"/backbonejs",className:e.line},"Backbone")),r.a.createElement(l.a,null,r.a.createElement(s.b,{to:"/underscorejs",className:e.line},"Underscore"))),r.a.createElement("div",null))}},397:function(e,n,t){"use strict";t.r(n);var a=t(45),r=t(28),s=t(136),l=t(137),i=t(139),o=t(0),u=t.n(o),c=t(138),p=t.n(c),d=t(120),m=t(57),h=t(296),g=t(5),f=(t(141),t(158)),E=t(140),b={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},v="var app = express();\n// middleware\n  var stack = middleware();\n  \nThen you can add layers to the middleware stack by calling .use\n  app.use(express.static(..));\n  \n// middleware\n  stack.use(function(data, next) {\n   next();\n  });\n".trim(),x='var middleware = require("../src/middleware.js");\nvar stack = middleware((data, next) => {\n   data.foo = data.data*2;\n   next();\n  }, \n  \n  function(data, next) {\n     setTimeout(() => {\n     data.async = true;\n     next();\n     }, 100)\n    }, \n    \n  function(data) {\n     console.log(data);\n    });\n    \n  stack.handle({\n   "data": 42\n  })'.trim(),w='var stack = middleware((req, res, next) => {\n  users.getAll((err, users) => {\n    if (err) next(err);\n    req.users = users;\n    next();\n    });\n }, \n \n function(req, res, next) {\n    posts.getAll((err, posts) => {\n      if (err) next(err);\n        req.posts = posts;\n        next();\n    })\n }, \n \n function(req, res, next) {\n        req.posts.forEach((post) => {\n        post.user = req.users[post.userId];\n      });\n        res.render("blog/posts", {\n        "posts": req.posts\n        });\n   });\n   \n   var app = express.createServer();\n   app.get("/posts", function(req, res) {\n   stack.handle(req, res);\n });\n \n \n // express\n var app = express.createServer();\n app.get("/posts", [\n    function(req, res, next) {\n      users.getAll(function(err, users) {\n        if (err) next(err);\n        req.users = users;\n        next();\n  });\n}, \n\nfunction(req, res, next) {\n  posts.getAll((err, posts) => {\n      if (err) next(err);\n      req.posts = posts;\n      next();\n    })\n  }, \n  \n  function(req, res, next) {\n      req.posts.forEach((post) => {\n      post.user = req.users[post.userId];\n    });\n      res.render("blog/posts", {\n      "posts": req.posts\n    });\n  }\n ], \n \n function(req, res) {\n     stack.handle(req, res);\n });'.trim(),y='var Mustache = require("mustache");\nvar result = Mustache.render("Hi, {{first}} {{last}}!", {\n   first: "Nicolas",\n   last: "Cage" });\n  console.log(result);\n'.trim(),q='var fs = require("fs");\nvar options = { encoding: "utf-8" };\n fs.readFile("myfile.txt", options, function(err, data) {\n   if (err) {\n     console.error("Error reading file!");\n     return;\n   }\n     console.log(data.match(/x/gi).length + " letter X\'s");\n });\n \nvar fs = require("fs");\nvra options = { encoding: "utf-8" };\nfs.readFile("myfile.txt", options, function(err, data) { // ...});\nconsole.log("Hello world!");'.trim(),k='var express = require("express");\nvar http = require("http");\nvar app = express();\n\napp.use((request, response, next) => {\n   console.log("In comes a " + request.method + " to " + request.url);\n   next();});\n   \n   app.use((request, response) => {\n     response.writeHead(200, { "Content-Type": "text/plain" });\n     response.end("Hello, world!");\n   });\n   \nhttp.createServer(app).listen(3000);'.trim(),T='app.use((request, response, next) => {\n  console.log("In comes a " + request.method + " to " + request.url);\n  next();});\n  \n app.use((request, response, next) => {\n    var minute = (new Date()).getMinutes();\n        if ((minute % 2) === 0) {\n        next();\n      } \n        else {\n        response.statusCode = 403;\n        response.end("Not authorized.");\n    }});\n    \n    app.use((request, response) => {\n    response.end(\'Secret info: the password is "swordfish"!\');\n  });'.trim(),j='\nvar express = require("express");\nvar logger = require("morgan");\nvar http = require("http");\nvar app = express();\napp.use(logger("short"));\n\napp.use((request, response) => {\n    response.writeHead(200, { "Content-Type": "text/plain" });\n    response.end("Hello, world!");\n  });\n  \nhttp.createServer(app).listen(3000);\n\n\nEXPRESS S STATIC MIDDLEWARE\nvar express = require("express");\nvar path = require("path");\nvar http = require("http");\nvar app = express();\nvar publicPath = path.resolve(__dirname, "public");\n\napp.use(express.static(publicPath));\n\napp.use((request, response) => {\n     response.writeHead(200, { "Content-Type": "text/plain" });\n     response.end("Looks like you didn\'t find a static file.");\n  });\n  \nhttp.createServer(app).listen(3000);'.trim(),I='value, you\u2019ll look inside the params property of the request.\n  app.get("/users/:userid", function(req, res) {\n  var userId = parseInt(req.params.userid, 10);\n   // ...\n   });'.trim(),P="app.get(/^/users/(d+)$/, function(req, res) {\n  var userId = parseInt(req.params[0], 10);\n  // ...\n  });\n ".trim(),N="var horribleRegexp = /^([0-9a-f]{8}-[0-9a-f]{4}-\u27a5 4[0-9a-f]{3}-[89ab][0-9af]{3}-[0-9a-f]{12})$/i;\n    app.get(horribleRegexp, function(req, res) {\n     var uuid = req.params[0];\n     // ...\n});\n".trim(),S='var express = require("express");\nvar app = express();\nvar EVIL_IP = "123.45.67.89";\n\napp.use((request, response, next) => {\n     if (request.ip === EVIL_IP) {\n     response.status(401).send("Not allowed!");\n   } \n   else {\n     next();\n }});\n \n // ... the rest of your app ...\n'.trim(),O='var publicPath = path.resolve(__dirname, "public");\nvar userUploadsPath = path.resolve(__dirname, "user_uploads");\napp.use(express.static(publicPath));\napp.use(express.static(userUploadsPath));\n'.trim(),_='app.use("/public", express.static(publicPath));\napp.use("/uploads", express.static(userUploadsPath));'.trim(),A='var express = require("express");\nvar path = require("path");\nvar http = require("http");\nvar app = express();\n\n//Sets up the public path, using Node\u2019s path module\nvar publicPath = path.resolve(__dirname, "public");\n\n//Sends static files from the publicPath directory\napp.use(express.static(publicPath));\n\napp.use((request, response) => {\n     response.writeHead(200, { "Content-Type": "text/plain" });\n     response.end("Looks like you didn\'t find a static file.");\n   });\n   \nhttp.createServer(app).listen(4000);\n'.trim(),R="var express = require('express');\nvar app = express();\n\napp.get('/', function (req, res) {\n   res.send('Welcome to JavaTpoint!');\n});\n\napp.listen(8000, function () {\n   console.log('Example app listening on port 8000!');\n}); ".trim(),H="\nvar express = require('express');\nvar cookieParser = require('cookie-parser');\nvar app = express();\n\napp.use(cookieParser());\napp.get('/cookieset', (req, res) => {\n   res.cookie('cookie_name', 'cookie_value');\n   res.cookie('company', 'javatpoint');\n   res.cookie('name', 'sonoo');\n   res.status(200).send('Cookie is set');\n});\n\napp.get('/cookieget', (req, res) => {\n   res.status(200).send(req.cookies);\n});\n\napp.get('/', (req, res) => {\n   res.status(200).send('Welcome to JavaTpoint!');\n});\n\n var server = app.listen(8000, () => {\n var host = server.address().address;\n var port = server.address().port;\n console.log('Example app listening at http://%s:%s', host, port);\n});".trim(),L=function(e){function n(){return Object(a.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return p.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return u.a.createElement(d.a,{container:!0},u.a.createElement(d.a,{item:!0,xs:2},u.a.createElement(m.a,{className:e.paper},u.a.createElement("h4",null,u.a.createElement(f.a,null)))),u.a.createElement(d.a,{item:!0,xs:10},u.a.createElement(m.a,{className:e.paper},u.a.createElement(h.a,null,u.a.createElement("h3",null,"How Middleware works? Where Middleware fits in API?"),u.a.createElement("p",null,"Middleware allows you to define a stack of actions that you should flow through. Express servers themselves are a stack of middlewares."),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:v,language:"js",plugins:["line-numbers"]})),u.a.createElement("br",null),u.a.createElement("i",null,"A layer in the middleware stack is a function, which takes n parameters (req & res) and a next function. Middleware expects the layer to do some computation, augment the parameters and then call next. A stack doesn't do anything unless you handle it. Express will handle the stack every time an incoming HTTP request is caught on the server. With middleware you handle the stack manually. // express, you need to do nothing middleware stack.handle(someData);"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h3",null,"more complex example :"),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:x,language:"js",plugins:["line-numbers"]})),u.a.createElement("i",null,"In express terms you just define a stack of operations you want express to handle for every incoming HTTP request. In terms of express (rather than connect) you have global middleware and route specific middleware. This means you can attach a middleware stack to every incoming HTTP requests or only attach it to HTTP requests that interact with a certain route."),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h3",null,"Advanced examples of express & middleware "),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:w,language:"js",plugins:["line-numbers"]})),u.a.createElement("h3",null,"What Express is used for"),"Express could be used to build any web application. It can process incoming requests and respond to them @ Middleware which is a way to break your app into smaller bits of behavior.Generally, middleware is called one by one, in a sequence. @Routing similarly breaks your app up into smaller functions that are executed when the user visits a particular resource. @Routers can further break up large applications into smaller, composable sub applications.",u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:y,language:"js",plugins:["line-numbers"]})),u.a.createElement("h3",null,"The two most common external resources you\u2019ll deal with in Express are"),"\uf0b7 1.Anything involving the filesystem\u2014Like reading and writing files from your harddrive",u.a.createElement("br",null),"\uf0b7 2.Anything involving a network\u2014Like receiving requests, sending responses, or sending your own requests over the internet.",u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:q,language:"js",plugins:["line-numbers"]})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h3",null,"middleware"),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:k,language:"js",plugins:["line-numbers"]})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h3",null,"middleware can also change the request or response objects Adding fake authentication middleware"),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:T,language:"js",plugins:["line-numbers"]})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h3",null,"Third-party middleware libraries MORGAN LOGGING MIDDLEWARE"),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:j,language:"js",plugins:["line-numbers"]})),u.a.createElement("h3",null,"Routing"),"Routing is a mapping of an HTTP verb (like GET or POST) and a URI (like/users/123). Routing is a way to map requests to specific handlers depending on their URL and HTTP verb. Simple and pattern-matching routing Using middleware with routing Serving static files with express.static, Express\u2019s built-in static file middleware Using Express with Node\u2019s built-in HTTPS module. One of Express\u2019s big features, allowing you to map different requests to different request handler. The features of routing The simplest way to grab a parameter is by putting it in your route with a colon infront of it. To grab the",u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:I,language:"js",plugins:["line-numbers"]})),u.a.createElement("p",null,"Using regular expressions to match routes. This gives you more control over the routes you specify. You can also use regular expressions to match parameters. Let\u2019s imagine that you want to match things like /users/123 or /users/456 but not/users/olivia. You can code this into a regular expression and grab the number toboot."),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:P,language:"js",plugins:["line-numbers"]})),u.a.createElement("i",null,"This is one way to enforce the \u201cthe user ID must be an integer\u201d constraint. it\u2019s passed in as a string, so you have to convert it to a number."),u.a.createElement("h3",null,"@UUID-matching routes with a regexp"),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:N,language:"js",plugins:["line-numbers"]})),u.a.createElement("i",null,"Extending request and response"),"Express augments the request and response objects that you\u2019re passed in every request handler. One nicety Express offers is the redirect method.",u.a.createElement("h3",null," Using redirect:"),'response.redirect("/hello/world"); response.redirect("http://expressjs.com");',u.a.createElement("h3",null,"sendFile"),'response.sendFile("/path/to/cool_song.mp3");',u.a.createElement("h3",null,"Let\u2019s use some of these things to build middleware that blocks an evil IP address."),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:S,language:"js",plugins:["line-numbers"]})),u.a.createElement("h3",null,"Mounting static file middleware"),'var photoPath = path.resolve(__dirname, "offensive-photos-folder"); app.use("/offensive", express.static(photoPath));',u.a.createElement("h3",null,"ROUTING WITH MULTIPLE STATIC FILE DIRECTORIES"),"I frequently find myself with static files in multiple directories. For example, I sometimes have static files in a folder called public and another in a folder called user_uploads.How can you do this with Express? Express solves this problem with the built-in middleware feature, and becaus eexpress.static is middleware, you can just apply it multiple times.",u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:O,language:"js",plugins:["line-numbers"]})),u.a.createElement("h3",null,".Now, let\u2019s imagine four scenarios and see how this code deals with them"),"1.The user requests a resource that isn\u2019t in the public folder or the user_uploads folder. Both static middleware functions will continue on to the next routes and middleware.",u.a.createElement("br",null),"2.The user requests a resource that\u2019s in the public folder. The first middleware will send the file and no following routes or middleware functions will be called.",u.a.createElement("br",null),"3.The user requests a resource that\u2019s in the user_uploads folder but not the public folder.The first middleware will continue on (it\u2019s not in public), so the second middle-ware will pick it up. After that, no other middleware or route will be called.",u.a.createElement("br",null),"4.The user requests a resource that\u2019s in both the public folder and the user_uploads folder.Because the public-serving middleware is first, users will get the file in public and users will never be able to reach the matching file in the user_uploads folder.",u.a.createElement("h3",null,"Serving static files from multiple directories without conflict"),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:_,language:"js",plugins:["line-numbers"]})),u.a.createElement("h3",null,"static Files"),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:A,language:"js",plugins:["line-numbers"]})),u.a.createElement("h3",null,"Scaffold"),"npm install express-scaffold After this step, execute the following command to install express generator: npm install -g express-generator Now, you can use express to scaffold a web-app.",u.a.createElement("br",null),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:R,language:"js",plugins:["line-numbers"]})),u.a.createElement("i",null,"Open Node.js command prompt, go to myapp and run npm init command Fill the entries and press enter. It will create a package.json file in myapp folder and the data is shown in JSON format."),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("b",null,"Cookies"),u.a.createElement("div",{style:b},u.a.createElement(E.a,{code:H,language:"js",plugins:["line-numbers"]}))))))}}]),n}(o.Component);n.default=Object(g.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(L)}}]);
//# sourceMappingURL=148.25df8da8.chunk.js.map