(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[216],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var l=t(45),a=t(28),r=t(136),i=t(137),s=t(139),c=t(0),o=t.n(c),u=t(138),m=t.n(u),f=(t(59),function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(i.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=o.a.createRef(),t}return Object(s.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(o.a.Component))},141:function(e,n,t){},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var l=t(0),a=t.n(l),r=t(26),i=t(297),s=t(295),c=t(114),o=Object(c.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=o();return a.a.createElement("div",{className:e.root},a.a.createElement(s.a,null,a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/introNodejs",className:e.line},"Intro")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/ejsNode",className:e.line},"Basics")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/buffers",className:e.line},"Buffer")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/childs",className:e.line},"Child Process-fork()-exec()")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/tut_1",className:e.line},"Callback")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/filSystems",className:e.line},"File System")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/evtNode",className:e.line},"EvtEmter-Capture data")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/codes",className:e.line},"Codes")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/url_shortener",className:e.line},"Url_Shortener")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/stripe_payment",className:e.line},"stripe_payment")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/sendEmail",className:e.line},"sendEmail")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/search_pagination",className:e.line},"search_pagination")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/push_notifications",className:e.line},"push_notifications")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/nodetext",className:e.line},"nodetext")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/file_upload",className:e.line},"file_upload")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/e_acco_veri",className:e.line},"email_acco_veri")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/2fa_speakearst",className:e.line},"2fa_speakearst")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/authentications",className:e.line},"SignUp")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/serverSide",className:e.line},"Server Side")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/tut_2",className:e.line},"Geocode-Upload")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/tut_6",className:e.line},"Chat")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/udemy",className:e.line},"Udemy"))),a.a.createElement("div",null))}},370:function(e,n,t){"use strict";t.r(n);var l=t(45),a=t(28),r=t(136),i=t(137),s=t(139),c=t(0),o=t.n(c),u=t(138),m=t.n(u),f=t(120),d=t(57),E=t(296),p=t(5),g=(t(141),t(149)),h=t(140),b={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},y="\nfs.stat('filename.js', (err, stats) => {\n  if (err) {\n    return console.log(err)\n  }\n  console.log(stats)\n  console.log(stats.isFile())\n  console.log(stats.isDirectory())\n  console.log(stats.size)\n})\n\nfs.opendir('filename.js', (err, dir) => {\n  if (err) {\n    return console.log(err)\n  }\n  console.log(dir.path)\n})\n".trim(),v='\nconst fs = require("fs"); \n\nfs.readFile(\'input.txt\', (err, data) => {                                         // Asynchronous read \n   if (err) { \n      return console.error(err); \n   } \n   console.log("Asynchronous read: " + data.toString()); \n});\n\n\nconst data = fs.readFileSync(\'input.txt\');                                        // Synchronous read \nconsole.log("Synchronous read: " + data.toString()); \n'.trim(),x='\nconst fs = require("fs"); \n  \nconsole.log("opening file!"); \nfs.open(\'input.txt\', \'r+\', function(err, fd) { \n   if (err) { \n      return console.error(err); \n   } \n   console.log("File open successfully");      \n}); \n\n\n//2\nvar fs = require("fs"); \nvar buf = new Buffer(1024); \n  \nconsole.log("opening an existing file"); \nfs.open(\'input.txt\', \'r+\', (err, fd) => { \n   if (err) { \n      return console.error(err); \n   } \n   console.log("File opened successfully!"); \n   console.log("reading the file"); \n     \n   fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => { \n      if (err){ \n         console.log(err); \n      } \n      console.log(bytes + " bytes read"); \n      \n      if(bytes > 0){                                                        // Print only read bytes to avoid junk. \n         console.log(buf.slice(0, bytes).toString()); \n      } \n   }); \n}); '.trim(),w='\nvar fs = require("fs"); \n\nconsole.log("writing into existing file"); \nfs.writeFile(\'input.txt\', \'Geeks For Geeks\', (err) => { \nif (err) { \n\treturn console.error(err); \n} \n\t\nconsole.log("Data written successfully!"); \nconsole.log("Let\'s read newly written data"); \n\t\nfs.readFile(\'input.txt\', (err, data) => { \n\tif (err) { \n\t\treturn console.error(err); \n\t} \n\tconsole.log("Asynchronous read: " + data.toString()); \n}); \n}); \n'.trim(),F="\nvar fs = require('fs'); \n\nvar data = \"\nLearn Node.js\"; \n\n// Append data to file \nfs.appendFile('input.txt', data, 'utf8', \n\n\t// Callback function \n\tfunction(err) { \n\t\tif (err) throw err; \n\t\tconsole.log(\"Data is appended to file successfully.\") \n}); ".trim(),j="\nvar fs = require('fs');\n\nfs.rename('input.txt', 'myrenamedfile.txt',  (err) => {\n  if (err) throw err;\n  console.log('File Renamed!');\n});".trim(),N='\nvar fs = require("fs"); \n\nconsole.log("deleting an existing file"); \nfs.unlink(\'input.txt\', (err) => { \nif (err) { \n\treturn console.error(err); \n} \nconsole.log("File deleted successfully!"); \n}); \n'.trim(),_="\nvar fs = require('fs');\nfs.watch(__filename, { persistent: false }, (event, filename) => {\n    console.log(event);\n    console.log(filename);\n})\n\nsetImmediate(function() {\n    fs.rename(__filename, __filename + '.new', () => {});\n});".trim(),k="\nvar fs = require('fs');\n\nfs.appendFile('demo.txt', 'Hello content!', (err) => {\n    if (err) throw err;\n    console.log('Saved!');\n});".trim(),S="\n//index.html\n<html>\n<body>\n<h1>My Header</h1>\n<p>My paragraph.</p>\n</body>\n</html>\n\n\n//index.js\nvar http = require('http');\nvar fs = require('fs');\nhttp.createServer(function(req, res) {\n    fs.readFile('index.html', function(err, data) {\n        res.writeHead(200, { 'Content-Type': 'text/html' });\n        res.write(data);\n        res.end();\n    });\n}).listen(4000);".trim(),q="\nvar fs = require('fs');\n\nfs.rename('demo.txt', 'text.txt', (err) => {\n    if (err) throw err;\n    console.log('File Renamed!');\n});".trim(),C="\nvar fs = require('fs');\n\nfs.open('read.txt', 'w', (err, file) => {\n    if (err) throw err;\n    console.log('Saved!');\n});".trim(),O="\nvar fs = require('fs');\n\nfs.unlink('will_delete.txt', function (err) {\n  if (err) throw err;\n  console.log('File deleted!');\n});".trim(),D="\nvar fs = require('fs');\n\nfs.writeFile('write.html', 'Hello content!', function (err) {\n  if (err) throw err;\n  console.log('Saved!');\n});".trim(),R="\n//append.txt\nThis is my text.\n\n\n//append_file.js\nvar fs = require('fs');\n\nfs.appendFile('append.txt', ' This is my text.', function (err) {\n  if (err) throw err;\n  console.log('Updated!');\n});".trim(),A=function(e){function n(){return Object(l.a)(this,n),Object(r.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(f.a,{container:!0},o.a.createElement(f.a,{item:!0,xs:2},o.a.createElement(d.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(g.a,null)))),o.a.createElement(f.a,{item:!0,xs:10},o.a.createElement(d.a,{className:e.paper},o.a.createElement(E.a,null,o.a.createElement("h3",null,"What is a control flow function? What are the steps does it execute?"),o.a.createElement("p",null,"Control flow function runs in between several asynchronous function calls.",o.a.createElement("ul",null,o.a.createElement("li",null,"Control the order of execution. "),o.a.createElement("li",null,"Collect data."),o.a.createElement("li",null,"Limit concurrency. "),o.a.createElement("li",null,"Call the next step in the program."))),o.a.createElement("br",null),o.a.createElement("h3",null,"Explain the working mechanism of control flow function?"),o.a.createElement("i",null,"Control flow function is the sequence in which statements or functions are executed. Since I/O operations are non-blocking in Node.js, control flow cannot be linear. Therefore, it registers a callback to the event loop and passes the control back to the node, so that the next lines of code can run without interruption. Ex:Read File"),o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"fs.state(): "),"It helps to get various statistic of a file."),o.a.createElement("br",null),"To deal with directories here are 2 methods.",o.a.createElement("li",null,o.a.createElement("b",null,"opendir(): "),"readfile()/ writefile()"),o.a.createElement("li",null,o.a.createElement("b",null,"opendirSync(): "),"readfileSync()/ writefileSync()")),o.a.createElement("br",null),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:y,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Read File"),o.a.createElement("p",null,"fs method read the entire file into buffer."),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:v,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Open File"),o.a.createElement("p",null,"The fs.open() method is used to create, read, or write a file. "),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:x,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Write"),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:w,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"fs.appendFile(): "),"method appends specified content to a file. If the file does not exist, the file will be created."),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"fs.appendFile(filepath, data, options, callback);"))),o.a.createElement("br",null),o.a.createElement("li",null,o.a.createElement("b",null,"fs.appendFile(): "),"method is used to synchronously append/Update the data to the file or Create a file."),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"fs.appendFileSync(filepath, data, options);"))))),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:F,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Rename File"),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:j,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Delete File"),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:N,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Watch File"),o.a.createElement("p",null,o.a.createElement("ul",null,o.a.createElement("li",null,"This will set up a watcher on itself, change its own filename, and exit."),o.a.createElement("li",null,"Watcher channels can be closed at any time using the following code snippet."),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"const w = fs.watch('file', function()",") w.close();"))))),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:_,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"File System2"),o.a.createElement("b",null,"Create Files"),o.a.createElement("br",null),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:k,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Write File"),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:D,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Open File"),"A text.txt file create in same the folter.",o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:C,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Read Files"),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:S,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Rename Files"),"A text.txt file create without any data in same the folter.",o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:q,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Delete Files"),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:O,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Update Files"),o.a.createElement("b",null),o.a.createElement("div",{style:b},o.a.createElement(h.a,{code:R,language:"js",plugins:["line-numbers"]}))))))}}]),n}(c.Component);n.default=Object(p.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(A)}}]);
//# sourceMappingURL=216.d26df792.chunk.js.map