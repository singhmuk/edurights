(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[212],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(45),r=n(28),l=n(136),s=n(137),o=n(139),c=n(0),i=n.n(c),u=n(138),m=n.n(u),d=(n(59),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).highlight=function(){n.ref&&n.ref.current&&m.a.highlightElement(n.ref.current)},n.ref=i.a.createRef(),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,t=e.code,n=(e.plugins,e.language);return i.a.createElement("pre",{className:"code-prism"},i.a.createElement("code",{ref:this.ref,className:"language-".concat(n)},t.trim()))}}]),t}(i.a.Component))},141:function(e,t,n){},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),l=n(26),s=n(297),o=n(295),c=n(114),i=Object(c.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=i();return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/introNodejs",className:e.line},"Intro")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/ejsNode",className:e.line},"Basics")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/buffers",className:e.line},"Buffer")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/childs",className:e.line},"Child Process-fork()-exec()")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/tut_1",className:e.line},"Callback")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/filSystems",className:e.line},"File System")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/evtNode",className:e.line},"EvtEmter-Capture data")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/codes",className:e.line},"Codes")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/url_shortener",className:e.line},"Url_Shortener")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/stripe_payment",className:e.line},"stripe_payment")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/sendEmail",className:e.line},"sendEmail")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/search_pagination",className:e.line},"search_pagination")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/push_notifications",className:e.line},"push_notifications")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/nodetext",className:e.line},"nodetext")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/file_upload",className:e.line},"file_upload")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/e_acco_veri",className:e.line},"email_acco_veri")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/2fa_speakearst",className:e.line},"2fa_speakearst")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/authentications",className:e.line},"SignUp")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/serverSide",className:e.line},"Server Side")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/tut_2",className:e.line},"Geocode-Upload")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/tut_6",className:e.line},"Chat")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/udemy",className:e.line},"Udemy"))),r.a.createElement("div",null))}},362:function(e,t,n){"use strict";n.r(t);var a=n(45),r=n(28),l=n(136),s=n(137),o=n(139),c=n(0),i=n.n(c),u=n(138),m=n.n(u),d=n(120),p=n(57),h=n(296),E=n(5),g=(n(141),n(149)),b=n(140),f={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},y='\nvar dgram = require(\'dgram\');\nvar client = dgram.createSocket("udp4");\nvar server = dgram.createSocket("udp4");\nvar message = process.argv[2] || "message";\nmessage = new Buffer(message);\nserver.on("message", function(msg) {\n    process.stdout.write("Got message: " + msg + "\n");\n    process.exit();\n}).bind(41234);\n\nclient.send(message, 0, message.length, 41234, "localhost");\n'.trim(),v="var assert = require('assert');\n    assert(5 > 7);\n".trim(),w="var http = require('http');\nhttp.createServer(function (req, res) {\n res.writeHead(200, { 'Content-Type': 'text/html' });\n   //res.write('write name in url to see o/p');\n     res.write(req.url);\n     res.end();\n}).listen(4000);\n".trim(),k="var https = require('https');\nhttps.createServer(function (req, res) {\n     res.writeHead(200, {'Content-Type': 'text/plain'});\n     res.write('Hello World!');\n     res.end();\n}).listen(8080);\n".trim(),j="const https = require('https')\nconst url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026\n/40,-75'\nconst request = https.request(url, (response) => {\n let data = ''\n   response.on('data', (chunk) => {\n   data = data + chunk.toString()\n })\n \n response.on('end', () => {\n   const body = JSON.parse(data) \n   console.log(body) \n  })\n})\n\nrequest.on('error', (error) => {\n   console.log('An error', error)\n})\nrequest.end()\n".trim(),N="var net = require('net');\n".trim(),T="var url = require('url');\nvar adr = 'http://localhost:8080/default.htm?year=2017&month=february';\nvar q = url.parse(adr, true);\n  console.log(q.host);\n  console.log(q.pathname);\n  console.log(q.search);\n  \nvar qdata = q.query;\n  console.log(qdata.month);\n".trim(),S="var nodemailer = require('nodemailer');\nvar transporter = nodemailer.createTransport({\n   service: 'gmail',\n     auth: {\n     user: 'youremail@gmail.com',\n     pass: 'yourpassword'\n     }\n});\n\nvar mailOptions = {\n     from: 'youremail@gmail.com',\n     to: 'myfriend@yahoo.com',\n     subject: 'Sending Email using Node.js',\n     text: 'That was easy!'\n    };\n    \ntransporter.sendMail(mailOptions, function(error, info){\n if (error) {\n   console.log(error);\n   } \n   else {\n   console.log('Email sent: ' + info.response);\n }\n});\n".trim(),q='\nconst crypto = require("crypto");\n\n//.createHash(\'sha1\')md5,sha1\n\nconst hash = crypto.createHash("sha256").update("password").digest("hex");\nconsole.log(hash);'.trim(),x='\nconst crypto = require("crypto");\n\nconst algorithm = "aes-192-cbc";\nconst password = "password used to generate key";\nconst key = crypto.scryptSync(password, "salt", 24);\nconst decipher = crypto.createDecipher(algorithm, key);\n\nlet decrypted = "";\ndecipher.on("readable", () => {\n  let chunk;\n  while (null !== (chunk = decipher.read())) {\n    encrypted += chunk.toString("utf8");\n  }\n});\n\ndecipher.on("end", () => console.log(decrypted));\n\nconst encrypted = "";\ndecipher.write(encrypted, "hex");\ndecipher.end();'.trim(),P='\nconst crypto = require("crypto");\n\nconst algorithm = "aes-256-cbc";\nconst key = crypto.randomBytes(32);\nconst iv = crypto.randomBytes(16);\n\nfunction encrypt(text) {\n  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);\n  let encrypted = cipher.update(text);\n  \n  encrypted = Buffer.concat([encrypted, cipher.final()]);\n  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };\n}\n\nfunction decrypt(text) {\n  let iv = Buffer.from(text.iv, "hex");\n  let encryptedText = Buffer.from(text.encryptedData, "hex");\n  let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);\n  let decrypted = decipher.update(encryptedText);\n  \n  decrypted = Buffer.concat([decrypted, decipher.final()]);\n  return decrypted.toString();\n}\nvar hw = encrypt("Some serious stuff");\nconsole.log(hw);\nconsole.log(decrypt(hw));'.trim(),C='\nconst crypto = require("crypto");\n\nconst algorithm = "aes-192-cbc";\nconst password = "password used to generate key";\nconst key = crypto.scryptSync(password, "salt", 24);\nconst cipher = crypto.createCipher(algorithm, key);\n\nlet encrypted = "";\ncipher.on("readable", () => {\n  let chunk;\n  while (null !== (chunk = cipher.read())) {\n    encrypted += chunk.toString("hex");\n  }\n});\n\ncipher.on("end", () => console.log(encrypted));\n\ncipher.write("some clear text data");\n\ncipher.end();'.trim(),_='\nconst dns = require("dns");\n\ndns.lookup("edurights.herokuapp.com", (err, value) => {\n  if (err) {\n    console.log(err);\n    return;\n  }\n\n  console.log(value);\n});'.trim(),H='\nconst net = require("net");\n\nconst server = net.createServer();\n\nserver.listen({\n  host: "localhost",\n  port: 5000,\n});\n\nserver.on("connection", (client) => {\n  console.log("Client connected");\n});\n\n\n//\n//run in another cli\n\nconst net = require("net");\nconst client = net.createConnection({\n  port: 5000,\n});\n'.trim(),I='\nconst os = require("os");\n\nconsole.log(os.arch());\n\nconsole.log(os.cpus());\n\nconsole.log(os.freemem());\n\nconsole.log(os.getPriority(13512));\n\nconsole.log(os.homedir());\n\nconsole.log(os.hostname());\n\nconsole.log(os.networkInterfaces());\n\nconsole.log(os.platform());\n\nconsole.log(os.totalmem());\n\nconsole.log(os.userInfo());'.trim(),D='\nconst path = require("path");\n\nconst pathObj = path.parse(__filename);\nconst pathDit = path.dirname("/path/path.js");\nconst pathBasename = path.basename("/path/path.js");\nconst pathExtname = path.extname("/path/path.js");\nconst pathNormalize = path.normalize("/path/path.js");\nconst pathJoin = path.join("path", "os", "...", "output.txt");\n\nconsole.log(pathJoin);\n'.trim(),O=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,xs:2},i.a.createElement(p.a,{className:e.paper},i.a.createElement("h4",null,i.a.createElement(g.a,null)))),i.a.createElement(d.a,{item:!0,xs:10},i.a.createElement(p.a,{className:e.paper},i.a.createElement(h.a,null,i.a.createElement("h3",null,"1. UDP Server"),"Let's create a simple program that allows the user to send data between two  UDP servers:",i.a.createElement("br",null),i.a.createElement("br",null),'node udp.js "my message" ',i.a.createElement("br",null),"Which will result in the following output:",i.a.createElement("br",null),"Got message: my message",i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:y,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"2. Crypto"),"crypto module to perform cryptographic operations on data. ",i.a.createElement("br",null),"can do cryptographic operations on strings, buffer, and streams.",i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:q,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"3. Decrypo"),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:x,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"4. Encrypt"),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:C,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Encrypt-Decrypt"),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:P,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"5. DNS"),"DNS module use to find out information about domain names and IP addresses.",i.a.createElement("br",null),"reverse function to find any reverse DNS records that are configured for IP addresses.",i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:_,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"6. Net"),"how to make a server / client pair of programs using the low level Net module and also how to create a simple web server using the NodeJS HTTP module.",i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:H,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"7. OS"),"The os module provides API for getting information about hardware related like CPU, memory, directories, IP address and many more.",i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("b",null,"os.arch(): "),"Return the architecture of the processor."),i.a.createElement("li",null,i.a.createElement("b",null,"os.cpus(): "),"Returns an array of the object which contains information of logical CPUs."),i.a.createElement("li",null,i.a.createElement("b",null,"os.freemem(): "),"Returns free main memory bytes in integer."),i.a.createElement("li",null,i.a.createElement("b",null,"os.getPriority(pid): "),"Returns the scheduling priority of the process."),i.a.createElement("li",null,i.a.createElement("b",null,"os.homedir(): "),"Method current user\u2019s home directory as a string."),i.a.createElement("li",null,i.a.createElement("b",null,"os.hostname(): "),"Returns the hostname of the operating system."),i.a.createElement("li",null,i.a.createElement("b",null,"os.networkInterfaces():: "),"Method returns objects containing information about network interfacing devices."),i.a.createElement("li",null,i.a.createElement("b",null,"os.platform(): "),"Return information about platform."),i.a.createElement("li",null,i.a.createElement("b",null,"os.totalmem(): "),"Returns total system memory in bytes as a string.")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:I,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"8. Path"),"The path module provides a way to work with files and directory path.",i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("b",null,"path.dirname(): "),"This method allows you to get the directory name of a given path. It does not return the last part of the given path."),i.a.createElement("li",null,i.a.createElement("b",null,"path.basename(): "),"Method returns the last part of a given path."),i.a.createElement("li",null,i.a.createElement("b",null,"path.extname(): "),"Method returns the extension of the path from the last part of the path."),i.a.createElement("ul",null,i.a.createElement("li",null,"If there is no . (period) in the last portion of the path, then an empty string is returned.")),i.a.createElement("br",null),i.a.createElement("li",null,i.a.createElement("b",null,"path.normalize(): "),"Method normalize the given path, by resolving \u2018..\u2019, \u2018.\u2019 etc."),i.a.createElement("ul",null,i.a.createElement("li",null,"If multiple slashes are found they are replaced by a single slash.")),i.a.createElement("li",null,i.a.createElement("b",null,"path.join(): "),"Joins all the given path segments together. All the arguments must be string.")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:D,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Node.js HTTP Module"),i.a.createElement("br",null),i.a.createElement("p",null,"A set of functions you want to include in your application."),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,"Node.js has a set of built-in modules which you can use without any further installation."),i.a.createElement("br",null),i.a.createElement("li",null,"assert - Provides a set of assertion tests The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:v,language:"js",plugins:["line-numbers"]})),i.a.createElement("b",null,"o/p: "),"AssertionError: false == true",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Method -"),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,"assert() - Checks if a value is true. Same as assert.ok()"),i.a.createElement("li",null,"deepEqual() - Checks if two values are equal"),i.a.createElement("li",null,"deepStrictEqual() - Checks if two values are equal, using the strict equal operator (===)")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"http - To make Node.js act as an HTTP server"),i.a.createElement("br",null),"The HTTP module provides a way of making Node.js transfer data over HTTP",i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:w,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"https - To make Node.js act as an HTTPS server."),i.a.createElement("br",null),"The HTTPS module provides a way of making Node.js transfer data over HTTP TLS/SSL protocol, which is the secure HTTP protocol.",i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:k,language:"js",plugins:["line-numbers"]})),i.a.createElement("ul",null,i.a.createElement("li",null,"createServer() -Creates an HTTPS server"),i.a.createElement("li",null,"get() - Sets the method to GET, and returns an object containing the users request"),i.a.createElement("li",null,"globalAgent - Returns the HTTPS Agent"),i.a.createElement("li",null,"request - Makes a request to a secure web server")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"HTTP Requests Without a Library"),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:j,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"net - To create servers and clients"),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:N,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,"connect() - Creates a new connection to the server, and returns a new Socket"),i.a.createElement("li",null,"createConnection() - Creates a new connection to the server, and returns a new Socket"),i.a.createElement("li",null,"createServer() -Creates a new server"),i.a.createElement("li",null,"isIP - Checks if the specified value is an IP address"),i.a.createElement("li",null,"isIPv4 - Checks if the specified value is an IPv4 address"),i.a.createElement("li",null,"isIPv6 - Checks if the specified value is an IPv6 address")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"HTTP Requests Without a Library"),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:j,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Node.js URL Module"),i.a.createElement("br",null),"The URL module splits up a web address into readable parts. Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:",i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:T,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),"o/p - localhost:8080 /default",i.a.createElement("br",null),"?year=2017&month=february",i.a.createElement("br",null),"february",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Node.js Send an Email"),i.a.createElement("br",null),"The Nodemailer Module The Nodemailer module makes it easy to send emails from your computer.",i.a.createElement("br",null),i.a.createElement("i",null,"Send an Email"),i.a.createElement("br",null),"Use the username and password from your selected email provider to send an email. This tutorial wi ll show you how to use your Gmail account to send an email:",i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(b.a,{code:S,language:"js",plugins:["line-numbers"]}))))))}}]),t}(c.Component);t.default=Object(E.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(O)}}]);
//# sourceMappingURL=212.8e43354a.chunk.js.map