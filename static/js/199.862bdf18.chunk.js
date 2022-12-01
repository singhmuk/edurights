(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[199],{140:function(e,r,n){"use strict";n.d(r,"a",(function(){return m}));var l=n(45),t=n(28),s=n(136),a=n(137),o=n(139),u=n(0),i=n.n(u),d=n(138),c=n.n(d),m=(n(59),function(e){function r(e){var n;return Object(l.a)(this,r),(n=Object(s.a)(this,Object(a.a)(r).call(this,e))).highlight=function(){n.ref&&n.ref.current&&c.a.highlightElement(n.ref.current)},n.ref=i.a.createRef(),n}return Object(o.a)(r,e),Object(t.a)(r,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,r=e.code,n=(e.plugins,e.language);return i.a.createElement("pre",{className:"code-prism"},i.a.createElement("code",{ref:this.ref,className:"language-".concat(n)},r.trim()))}}]),r}(i.a.Component))},141:function(e,r,n){},155:function(e,r,n){"use strict";n.d(r,"a",(function(){return d}));var l=n(0),t=n.n(l),s=n(26),a=n(297),o=n(295),u=n(114),i=Object(u.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function d(){var e=i();return t.a.createElement("div",{className:e.root},t.a.createElement(o.a,null,t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/infoMD",className:e.line},"IntroMD")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/intro",className:e.line},"Queries")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/mongodbMethods",className:e.line},"mongodbMethods")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/mongoCurd",className:e.line},"MongoCurd-Ref")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/mongoQueries",className:e.line},"Mongo Queries")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/searchErrorHandling",className:e.line},"searchErrorHandling")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/bulkRight",className:e.line},"BulkWright")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/mysql",className:e.line},"Mysql")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/mysqlCurd",className:e.line},"MysqlCurd")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/joinOp",className:e.line},"JoinOp")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/sortOp",className:e.line},"Sort")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/curdOp",className:e.line},"CurdOp")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/gridFs",className:e.line},"gridFs")),t.a.createElement(a.a,null,t.a.createElement(s.b,{to:"/postgressql",className:e.line},"PostgreSql"))),t.a.createElement("div",null))}},388:function(e,r,n){"use strict";n.r(r);var l=n(45),t=n(28),s=n(136),a=n(137),o=n(139),u=n(0),i=n.n(u),d=n(138),c=n.n(d),m=n(120),f=n(57),E=n(296),p=n(5),b=(n(141),n(155)),h=n(140),g={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},O='\nvar dbConn = require(\'../config/db\');\n\nvar Order = function (orders) {\n  this.items = orders.items;\n  this.price = orders.price;\n  this.qty = orders.qty;\n  this.created_at = orders.created_at;\n  this.updated_at = orders.updated_at;\n};\n\n//join 2 tables\nOrder.findAll = (result) => {\n  dbConn.query("select orders.id, orders.items from Orders JOIN products on products.id = Orders.id", function (err, res) {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//SELECT DISTINCT\nOrder.findAll = function (result) {\n  dbConn.query("Select DISTINCT items from orders", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//WHERE Clause\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items=\'One\'", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//AND\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items=\'One\' AND price=\'100\'", function (err, res) {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//OR\nOrder.findAll = (result) => {\n  dbConn.query("Select * DISTINCT items from orders WHERE items=\'One\' OR price=\'100\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//NOT\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE NOT items=\'One\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//ORDER BY Keyword\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders ORDER BY items", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//ORDER BY DESC Keyword\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders ORDER BY items ASC, price DESC", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//IS NULL\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items IS NULL", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//IS NOT NULL\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items IS NOT NULL", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//LIMIT\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders LIMIT 3", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//MIN() \nOrder.findAll = (result) => {\n  dbConn.query("Select MIN(price) AS SmallestPrice from orders", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//MAX()\nOrder.findAll = (result) => {\n  dbConn.query("Select MAX(price) AS LargestPrice from orders", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//COUNT()\nOrder.findAll = (result) => {\n  dbConn.query("Select COUNT(items) from orders", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//AVG()\nOrder.findAll = (result) => {\n  dbConn.query("Select AVG(items) from orders", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//SUM()\nOrder.findAll = (result) => {\n  dbConn.query("Select SUM(qty) from orders", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//LIKE\n//The following SQL statement selects all customers with a CustomerName starting with "a"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'a%\'", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//The following SQL statement selects all customers with a CustomerName ending with "a"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'%a\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//The following SQL statement selects all customers with a CustomerName that have "or" in any position\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'%On%\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//The following SQL statement selects all customers with a CustomerName that have "r" in the second position\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'_r%\'", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//The following SQL statement selects all customers with a CustomerName that starts with "a" and are at least 3 characters in length:\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'a__%\'", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//The following SQL statement selects all customers with a ContactName that starts with "a" and ends with "o"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'a%o\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//The following SQL statement selects all customers with a CustomerName that does NOT start with "a"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'a%\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n\n//Wildcards: A wildcard character is used to substitute one or more characters in a string\n//Wildcard characters are used with the LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'%se%\'", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//The following SQL statement selects all customers with a City starting with any character, followed by "ondon"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'_ondon\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//The following SQL statement selects all customers with a City starting with "L", followed by any character, followed by "n", followed by any character, followed by "on"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'L_n_on\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//he following SQL statement selects all customers with a City starting with "b", "s", or "p"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'[bsp]%\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//selects all customers with a City starting with "a", "b", or "c"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items LIKE \'[a-c]%\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//select all customers with a City NOT starting with "b", "s", or "p"\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items NOT LIKE \'[bsp]%\'", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//IN operator allows you to specify multiple values in a WHERE clause\n//IN operator is a shorthand for multiple OR conditions.\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items IN (\'One\', \'Two\', \'Three\')", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE price BETWEEN 10 AND 20", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//NOT BETWEEN\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE price NOT BETWEEN 10 AND 20", (err, res) => {\n    if (err)\n        result(null, err);\n      result(null, res);\n  });\n};\n\n//BETWEEN with IN\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE price BETWEEN 10 AND 20 AND ID NOT IN (1,2,3)", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//BETWEEN Text\nOrder.findAll = (result) => {\n  dbConn.query("Select * from orders WHERE items BETWEEN \'Seconds\' AND \'Three\' ORDER BY items", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//INNER JOIN\n/*\nThe INNER JOIN keyword selects all rows from both tables as long as there is a match between the \ncolumns. If there are records in the "Orders" table that do not have matches in "Customers", \nthese orders will not be shown!\n*/\nOrder.findAll = (result) => {\n  dbConn.query("select orders.id, products.items from Orders INNER JOIN products on orders.id = products.id", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//LEFT JOIN\n//returns all records from the left table (table1), and the matching records from the right table (table2).\nOrder.findAll = (result) => {\n  dbConn.query("select orders.id, products.items from Orders LEFT JOIN products on orders.id = products.id", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};\n\n//RIGHT JOIN\n//returns all records from the right table (table2), and the matching records from the left table (table1). \nOrder.findAll = (result) => {\n  dbConn.query("select orders.id, products.title from orders RIGHT JOIN products on orders.id = products.id", (err, res) => {\n    if (err) \n        result(null, err);\n      result(null, res);\n  });\n};'.trim(),y="\nrouter.findAll = (req, res) => {\n  JoinOp.findAll((err, product) => {\n    if (err)\n      res.send(err);\n    res.send(product);\n  });\n};\n\nrouter.findById = (req, res) => {\n  JoinOp.findById(req.params.id, (err, employee) => {\n    if (err)\n      res.send(err);\n    res.json(employee);\n  });\n};".trim(),N="\nconst joinOpController = require('../controllers/joinOp');\n\nrouter.get('/', joinOpController.findAll);\nrouter.get('/:id', joinOpController.findById);".trim(),q="\nrouter.post('/', (req,res)=>{\n    console.log(req.body)\n    res.send(req.body)\n  })\n\nrouter.get('/', (req,res)=>{\n    res.send(req.body)\n  })".trim(),C='\nconst express = require("express");\nconst app = express();\nconst cors = require("cors");\n\nconst session = require("express-session");\nconst bcrypt = require("bcryptjs");\nvar dbConn = require(\'../config/db\');\n\nconst saltRounds = 10;\n\n\napp.use(express.json());\napp.use(\n  cors({\n    origin: ["http://localhost:3000"],\n    methods: ["GET", "POST"],\n    credentials: true,\n  })\n);\napp.use(express.urlencoded({ extended: true }));\n\napp.use(\n  session({\n    key: "userId",\n    secret: "subscribe",\n    resave: false,\n    saveUninitialized: false,\n    cookie: {\n      expires: 60 * 60 * 24,\n    },\n  })\n);\n\napp.post("/register", (req, res) => {\n  const username = req.body.username;\n  const password = req.body.password;\n\n  bcrypt.hash(password, saltRounds, (err, hash) => {\n    if (err) {\n      console.log(err);\n    }\n\n    dbConn.query(\n      "INSERT INTO users (username, password) VALUES (?,?)",\n      [username, hash],\n      (err, result) => {\n        console.log(err);\n      }\n    );\n  });\n});\n\napp.get("/login", (req, res) => {\n  if (req.session.user) {\n    res.send({ loggedIn: true, user: req.session.user });\n  } else {\n    res.send({ loggedIn: false });\n  }\n});\n\napp.post("/login", (req, res) => {\n  const username = req.body.username;\n  const password = req.body.password;\n\n  dbConn.query(\n    "SELECT * FROM users WHERE username = ?;",\n    username,\n    (err, result) => {\n      if (err) {\n        res.send({ err: err });\n      }\n\n      if (result.length > 0) {\n        bcrypt.compare(password, result[0].password, (error, response) => {\n          if (response) {\n            req.session.user = result;\n            console.log(req.session.user);\n            res.send(result);\n          } else {\n            res.send({ message: "Wrong username/password combination!" });\n          }\n        });\n      } else {\n        res.send({ message: "User doesn\'t exist" });\n      }\n    }\n  );\n});\n\n\nmodule.exports = app;'.trim(),S=function(e){function r(){return Object(l.a)(this,r),Object(s.a)(this,Object(a.a)(r).apply(this,arguments))}return Object(o.a)(r,e),Object(t.a)(r,[{key:"componentDidMount",value:function(){setTimeout((function(){return c.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(m.a,{container:!0},i.a.createElement(m.a,{item:!0,xs:2},i.a.createElement(f.a,{className:e.paper},i.a.createElement("h4",null,i.a.createElement(b.a,null)))),i.a.createElement(m.a,{item:!0,xs:10},i.a.createElement(f.a,{className:e.paper},i.a.createElement(E.a,null,i.a.createElement("h3",null,"Join"),i.a.createElement("b",null,"models/joinOp"),i.a.createElement("div",{style:g},i.a.createElement(h.a,{code:O,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"controllers/joinOp"),i.a.createElement("div",{style:g},i.a.createElement(h.a,{code:y,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"routes/joinOp"),i.a.createElement("div",{style:g},i.a.createElement(h.a,{code:N,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"pass data in body"),i.a.createElement("br",null),"We'll also send data in request inside body. Data pass in body is hidden, we can't see in url. In signUp form we will send data in body. We used generaly Post() for passing data in body, Post request last part is body.",i.a.createElement("div",{style:g},i.a.createElement(h.a,{code:q,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"bcryptjs"),i.a.createElement("div",{style:g},i.a.createElement(h.a,{code:C,language:"js",plugins:["line-numbers"]}))))))}}]),r}(u.Component);r.default=Object(p.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(S)}}]);
//# sourceMappingURL=199.862bdf18.chunk.js.map