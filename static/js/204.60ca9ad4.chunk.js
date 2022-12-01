(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[204],{140:function(e,r,n){"use strict";n.d(r,"a",(function(){return m}));var t=n(45),l=n(28),a=n(136),s=n(137),o=n(139),u=n(0),i=n.n(u),c=n(138),d=n.n(c),m=(n(59),function(e){function r(e){var n;return Object(t.a)(this,r),(n=Object(a.a)(this,Object(s.a)(r).call(this,e))).highlight=function(){n.ref&&n.ref.current&&d.a.highlightElement(n.ref.current)},n.ref=i.a.createRef(),n}return Object(o.a)(r,e),Object(l.a)(r,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,r=e.code,n=(e.plugins,e.language);return i.a.createElement("pre",{className:"code-prism"},i.a.createElement("code",{ref:this.ref,className:"language-".concat(n)},r.trim()))}}]),r}(i.a.Component))},141:function(e,r,n){},155:function(e,r,n){"use strict";n.d(r,"a",(function(){return c}));var t=n(0),l=n.n(t),a=n(26),s=n(297),o=n(295),u=n(114),i=Object(u.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function c(){var e=i();return l.a.createElement("div",{className:e.root},l.a.createElement(o.a,null,l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/infoMD",className:e.line},"IntroMD")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/intro",className:e.line},"Queries")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/mongodbMethods",className:e.line},"mongodbMethods")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/mongoCurd",className:e.line},"MongoCurd-Ref")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/mongoQueries",className:e.line},"Mongo Queries")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/searchErrorHandling",className:e.line},"searchErrorHandling")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/bulkRight",className:e.line},"BulkWright")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/mysql",className:e.line},"Mysql")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/mysqlCurd",className:e.line},"MysqlCurd")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/joinOp",className:e.line},"JoinOp")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/sortOp",className:e.line},"Sort")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/curdOp",className:e.line},"CurdOp")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/gridFs",className:e.line},"gridFs")),l.a.createElement(s.a,null,l.a.createElement(a.b,{to:"/postgressql",className:e.line},"PostgreSql"))),l.a.createElement("div",null))}},386:function(e,r,n){"use strict";n.r(r);var t=n(45),l=n(28),a=n(136),s=n(137),o=n(139),u=n(0),i=n.n(u),c=n(138),d=n.n(c),m=n(120),p=n(57),b=n(296),E=n(5),g=(n(141),n(155)),h=n(140),f={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},O='\nhost = "localhost",\nuser = "root",\npassword = "root",\ndatabase = "persons"\nPORT = 5000'.trim(),j="\nconst mysql = require('mysql');\n\nconst dbConn = mysql.createConnection({\n    host:'localhost',\n    user:'root',\n    password:'root',\n    database:'persons'\n});\n\ndbConn.connect((err)=>{\n    if(err) throw err;\n    console.log('Database connected')\n});\n\nmodule.exports = dbConn;".trim(),y='\nvar dbConn = require(\'../config/db\');\n\nvar Order = function (obj) {\n    this.user=obj.user;\n    this.paymentMethod=obj.paymentMethod;\n    this.paymentResult=obj.paymentResult;\n    this.taxPrice=obj.taxPrice;\n    this.shippingPrice=obj.shippingPrice;\n    this.totalPrice=obj.totalPrice;\n    this.isPaid=obj.isPaid;\n    this.isDelivered=obj.isDelivered;\n    this.deliveredAt=obj.deliveredAt;\n};\n\nOrder.create = (newOrd, result) => {\n    dbConn.query("INSERT INTO ecommerce set ?", newOrd, (err, res) => {\n        if (err) \n            result(err, null);\n        result(null, res.insertId);\n    });\n};\n\nOrder.allOrder = (result) => {\n    dbConn.query("Select * from ecommerce", (err, res) => {\n        if (err) \n            result(null, err);\n        result(null, res);\n    });\n};\n\nOrder.orderById = (id,result) => {\n    dbConn.query("select * from ecommerce where id = ?", id, (err,res)=>{\n        if(err)\n            result(null, err);\n        result(null, res);\n    })\n}\n\nOrder.delete = (id, result) => {\n    dbConn.query("delete from ecommerce where id = ?", [id], (err, res)=>{\n        if(err)\n            result(null,err);\n        result(null, res);\n    })\n}\n\nOrder.updateOne = (id, ord, result) => {\n    dbConn.query("update ecommerce set user=?, paymentMethod=?, paymentResult=?, taxPrice=?, shippingPrice=?, \n    totalPrice=?, isPaid=?, isDelivered=?, deliveredAt=?, created_at=?, updated_at=? where id = ?",\n      \n      [ord.user, ord.paymentMethod, ord.paymentResult,ord.taxPrice, ord.shippingPrice, ord.totalPrice, \n      ord.isPaid, ord.isDelivered, ord.deliveredAt, ord.created_at, ord.updated_at, id], (err, res)=>{\n        if(err)\n            result(null,err);\n        result(null,res);\n    })\n}\n\nmodule.exports = Order;'.trim(),v='\nconst Order = require(\'../models/items\');\n\n\nrouter.allOrder = (req, res) => {\n    Order.allOrder((err, results) =>{\n        if (err)\n            res.send(err);\n        res.send(results);\n    });\n};\n\nrouter.create = (req, res) => {\n    const nrw_order = new Order(req.body);\n    Order.create(nrw_order, (err, results) => {\n        if (err)\n            res.send(err);\n        res.json({ error: false, message: "Order added successfully!", data: results });\n    });\n};\n\nrouter.orderById = (req, res) => {\n    Order.orderById(req.params.id, (err, results) => {\n        if (err)\n            res.send(err);\n        res.json(results);\n    });\n};\n\nrouter.deletes = (req,res) => {\n    Order.delete(req.params.id, (err, result) => {\n        if(err)\n            res.send(err);\n        res.json({success:true, msg:"Order is deleted"})\n    })\n}\n\nrouter.updateOrder = (req,res) => {\n    const orderUpdate = new Order(req.body);\n    Order.updateOne(req.params.id, orderUpdate, (err,order)=>{\n        if(err)\n            res.send(err);\n        res.json({success:true, msg:"Order updated successfully"});\n    })\n}'.trim(),q="\nnst orderController = require('../controllers/items');\n\nrouter.get('/', orderController.allOrder);\nrouter.post('/', orderController.create);\nrouter.get('/:id', orderController.orderById);\nrouter.delete('/:id', orderController.deletes)\nrouter.put('/:id',orderController.updateOrder);\n\nmodule.exports = router;\n".trim(),C='\nrequire(\'dotenv\').config();\nconst express = require(\'express\');\nconst app = express();\nconst cors = require("cors");\nconst session = require("express-session");\n\nconst unionRoutes = require(\'./routes/items\');\n\napp.use(express.urlencoded({ extended: true }))\napp.use(express.json());\n\napp.use(cors({\n      origin: ["http://localhost:3000"],\n      methods: ["GET", "POST"],\n      credentials: true,\n    }));\n\napp.use(session({\n    key: "userId",\n    secret: "subscribe",\n    resave: false,\n    saveUninitialized: false,\n    cookie: {\n      expires: 60 * 60 * 24,\n    },\n  })\n);\n\napp.use(\'/items\', unionRoutes);\n\nconst port = process.env.PORT;\napp.listen(port,()=> console.log(\'Server is running on port \'$\'{port}\'\'));'.trim(),x='\nvar Order = function (obj) {\n  this.name=obj.name;\n  this.carMake=obj.carMake;\n  this.model=obj.model;\n};\n\nOrder.create = (newOrd, result) => {\ndbConn.query("INSERT INTO selectData set ?", newOrd, (err, res) => {\n    if (err) \n        result(err, null);\n    result(null, res.insertId);\n});\n};\n\nOrder.allOrder = (result) => {\ndbConn.query("Select * from selectData", (err, res) => {\n    if (err) \n        result(null, err);\n    result(null, res);\n});\n};'.trim(),N="\nconst Car = require('../models/union');\n\nrouter.allOrder = (req, res) => {\n  Car.allOrder((err, results) =>{\n      if (err)\n          res.send(err);\n      res.send(results);\n  });\n};\n\nrouter.create = (req, res) => {\n  const new_order = new Car(req.body);\n  Car.create(new_order, (err, results) => {\n      if (err)\n          res.send(err);\n      res.json({ error: false, message: \"Car added successfully!\", data: results });\n  });\n};".trim(),P="\nconst orderController = require('../controllers/union');\n\nrouter.get('/', orderController.allOrder);\nrouter.post('/', orderController.create);".trim(),w="\nconst unionRoutes = require('./routes/union');\n\napp.use(express.urlencoded({ extended: true }))\napp.use(express.json());\napp.use(cors());\n\napp.use('/union', unionRoutes);\n\nconst port = process.env.PORT || 5000;\napp.listen(port,()=>console.log('Server is running on port'));".trim(),M=function(e){function r(){return Object(t.a)(this,r),Object(a.a)(this,Object(s.a)(r).apply(this,arguments))}return Object(o.a)(r,e),Object(l.a)(r,[{key:"componentDidMount",value:function(){setTimeout((function(){return d.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(m.a,{container:!0},i.a.createElement(m.a,{item:!0,xs:2},i.a.createElement(p.a,{className:e.paper},i.a.createElement("h4",null,i.a.createElement(g.a,null)))),i.a.createElement(m.a,{item:!0,xs:10},i.a.createElement(p.a,{className:e.paper},i.a.createElement(b.a,null,i.a.createElement("h3",null,"MySqlCurd"),i.a.createElement("b",null,".env"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:O,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"config/db.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:j,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"models/items.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:y,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"controllers/items.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:v,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"routes/items.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:q,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"server.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:C,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",null,"chainable-dropdown"),i.a.createElement("b",null,"models/union.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:x,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"controllers/union.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:N,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"routes/union.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:P,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"server.js"),i.a.createElement("div",{style:f},i.a.createElement(h.a,{code:w,language:"js",plugins:["line-numbers"]}))))))}}]),r}(u.Component);r.default=Object(E.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(M)}}]);
//# sourceMappingURL=204.60ca9ad4.chunk.js.map