(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[232],{140:function(e,a,n){"use strict";n.d(a,"a",(function(){return p}));var t=n(45),l=n(28),r=n(136),s=n(137),i=n(139),o=n(0),c=n.n(o),m=n(138),u=n.n(m),p=(n(59),function(e){function a(e){var n;return Object(t.a)(this,a),(n=Object(r.a)(this,Object(s.a)(a).call(this,e))).highlight=function(){n.ref&&n.ref.current&&u.a.highlightElement(n.ref.current)},n.ref=c.a.createRef(),n}return Object(i.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,a=e.code,n=(e.plugins,e.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(n)},a.trim()))}}]),a}(c.a.Component))},141:function(e,a,n){},147:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(0),l=n.n(t),r=n(26),s=n(297),i=n(295),o=n(114),c=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=c();return l.a.createElement("div",{className:e.root},l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/introPython",className:e.line},"intro Python")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/tuples",className:e.line},"Tuples")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/stringPy",className:e.line},"Strings")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/iteratorsPy",className:e.line},"Iterators")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/json",className:e.line},"Json")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/mathematics",className:e.line},"Mathematics")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/oops_",className:e.line},"Oops")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/abstract",className:e.line},"Abstract")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/exceptionsPy",className:e.line},"ExceptionsHandling")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/pyIntro",className:e.line},"Pickle")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/threadings",className:e.line},"Thread")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/collections",className:e.line},"Collections")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/logging",className:e.line},"Logging")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/regex",className:e.line},"Regex")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/tkinter",className:e.line},"TKinter")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/logicalspy",className:e.line},"Logicals")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/pyLogic",className:e.line},"PyLogic")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/csv",className:e.line},"CsvPython")),l.a.createElement("br",null),"Flask",l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/conroutes",className:e.line},"routes")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/httpsMethods",className:e.line},"Https")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/flasksIn",className:e.line},"Interviews")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/flask_signUp",className:e.line},"Flask_signUp")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/get_search",className:e.line},"Get_Search")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/load_search",className:e.line},"Load_Search"))),l.a.createElement("div",null))}},427:function(e,a,n){"use strict";n.r(a);var t=n(45),l=n(28),r=n(136),s=n(137),i=n(139),o=n(0),c=n.n(o),m=n(138),u=n.n(m),p=n(120),d=n(57),h=n(296),E=n(5),_=(n(141),n(147)),f=n(140),g={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},b="\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef hello_world():\n   return 'Flask'\n\nif __name__ == '__main__':\n   app.run()\n".trim(),k="\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/home')\ndef hello_world():\n   return 'Flask'\n\nif __name__ == '__main__':\n   app.run()\n".trim(),y="\nfrom flask import Flask\napp = Flask(__name__)\n\ndef hello():\n   return 'hello'\napp.add_url_rule('/', 'hello', hello)\n".trim(),v="\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/hello/<name>')\ndef hello_name(name):\n   return 'Hello %s!' % name\n\nif __name__ == '__main__':\n   app.run(debug = True)\n".trim(),j="\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/blog/<int:postID>')\ndef show_blog(postID):\n   return 'Blog Number %d' % postID\n\n@app.route('/rev/<float:revNo>')\ndef revision(revNo):\n   return 'Revision Number %f' % revNo\n\nif __name__ == '__main__':\n   app.run()\n".trim(),F="\nfrom flask import Flask, redirect, url_for\napp = Flask(__name__)\n\n@app.route('/admin')\ndef hello_admin():\n   return 'Hello Admin'\n\n@app.route('/guest/<guest>')\ndef hello_guest(guest):\n   return 'Hello %s as Guest' % guest\n\n@app.route('/user/<name>')\ndef hello_user(name):\n   if name =='admin':\n      return redirect(url_for('hello_admin'))\n   else:\n      return redirect(url_for('hello_guest',guest = name))\n\nif __name__ == '__main__':\n   app.run(debug = True)\n".trim(),N="\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef index():\n   return '<html><body><h1>Hello World</h1></body></html>'\n\nif __name__ == '__main__':\n   app.run(debug = True)\n".trim(),w="\n<!doctype html>\n<html>\n   <body>\n      <h1>Hello {{ name }}!</h1>\n   </body>\n</html>\n\n\n#main.py\nfrom flask import Flask, render_template\napp = Flask(__name__)\n\n@app.route('/hello/<user>')\ndef hello_name(user):\n   return render_template('hello.html', name = user)\n\nif __name__ == '__main__':\n   app.run(debug = True)\n".trim(),T='\nfrom flask import Flask, render_template\napp = Flask(__name__)\n\n@app.route("/")\ndef index():\n   return render_template("index.html")\n\nif __name__ == \'__main__\':\n   app.run(debug = True)\n   \n\n#index.html\n<html>\n   <head>\n      <script type = "text/javascript" \n         src = "{{ url_for(\'static\', filename = \'hello.js\') }}" ><\/script>\n   </head>\n   \n   <body>\n      <input type = "button" onclick = "sayHello()" value = "Say Hello" />\n   </body>\n</html>\n\n\n#index.js\nfunction sayHello() {\n  alert("Hello World")\n}\n'.trim(),x="\nfrom flask import Flask, redirect, url_for, render_template, request\n\n# Initialize the Flask application\napp = Flask(__name__)\n\n\n@app.route('/')\ndef index():\n    return render_template('log_in.html')\n\n\n@app.route('/login', methods=['POST', 'GET'])\ndef login():\n    if request.method == 'POST' and request.form['username'] == 'admin':\n        return redirect(url_for('success'))\n    else:\n        return redirect(url_for('index'))\n\n\n@app.route('/success')\ndef success():\n    return 'logged in successfully'\n\n\nif __name__ == '__main__':\n    app.run(debug=True)\n".trim(),R=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xs:2},c.a.createElement(d.a,{className:e.paper},c.a.createElement("h4",null,c.a.createElement(_.a,null)))),c.a.createElement(p.a,{item:!0,xs:10},c.a.createElement(d.a,{className:e.paper},c.a.createElement(h.a,null,c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:b,language:"js",plugins:["line-numbers"]})),c.a.createElement("i",null,"Flask constructor takes the name of current module (__name__) as argument."),c.a.createElement("br",null),c.a.createElement("h3",null,"route() function"),"The route() of the Flask class is a decorator, which tells the application which URL should call the associated function.",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"app.route(rule, options)"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"rule: "),"Parameter represents URL binding with the function."),c.a.createElement("li",null,c.a.createElement("b",null,"options: "),"Is a list of parameters to be forwarded to the underlying Rule object.")),c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:k,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null),c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:y,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Variable Rules"),"It is possible to build a URL dynamically, by adding variable parts to the rule parameter. This variable part is marked as 'variable-name'. It is passed as a keyword argument to the function with which the rule is associated.",c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:v,language:"js",plugins:["line-numbers"]})),c.a.createElement("i",null,"127.0.0.1:5000//hello/TutorialsPoint"),c.a.createElement("br",null),c.a.createElement("h3",null),c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:j,language:"js",plugins:["line-numbers"]})),c.a.createElement("i",null,"http://localhost:5000/blog/11"),c.a.createElement("br",null),c.a.createElement("h3",null,"URL Building"),"The url_for() is very useful for dynamically building a URL for a specific function. The function accepts the name of a function as first argument, and one or more keyword arguments, each corresponding to the variable part of URL.",c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:F,language:"js",plugins:["line-numbers"]})),c.a.createElement("i",null,"http://localhost:5000/admin"),c.a.createElement("ul",null,c.a.createElement("li",null,"Script has a function user(name) which accepts a value to its argument from the URL."),c.a.createElement("li",null,"User() checks if an argument received matches \u2018admin\u2019 or not. If it matches, the application is redirected to the hello_admin() using url_for(), otherwise to the hello_guest() passing the received argument as guest parameter to it.")),c.a.createElement("br",null),c.a.createElement("h3",null,"Templates"),"It is possible to return the output of a function bound to a certain URL in the form of HTML. In the following script, hello() will render \u2018Hello\u2019 with ",c.a.createElement("b",null,"h1")," tag attached to it.",c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:N,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Flask uses jinja2 template engine"),"A web template contains HTML syntax interspersed placeholders for variables and expressions which are replaced values when the template is rendered.",c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:w,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Static Files"),c.a.createElement("ul",null,c.a.createElement("li",null,"A web application requires a static file such as a javascript/ CSS file supporting the display of a web page. Usually, the web server is configured to serve them for you, but during the development, these files are served from static folder in your package or next to your module and it will be available at /static on the application."),c.a.createElement("li",null,"A special endpoint \u2018static\u2019 is used to generate URL for static files.")),c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:T,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Request Object"),"Important attributes of request object are given.",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"Form: "),"It is a dictionary object containing key and value pairs of form parameters and their values."),c.a.createElement("li",null,c.a.createElement("b",null,"args: "),"parsed contents of query string which is part of URL after question mark (?)."),c.a.createElement("li",null,c.a.createElement("b",null,"Cookies: "),"dictionary object holding Cookie names and values."),c.a.createElement("li",null,c.a.createElement("b",null,"files: "),"data pertaining to uploaded file."),c.a.createElement("li",null,c.a.createElement("b",null,"method: "),"current request method.")),c.a.createElement("br",null),c.a.createElement("h3",null,"Cookies"),"A cookie is stored on a client\u2019s computer in the form of a text file. Its purpose is to remember and track data pertaining to a client\u2019s usage for better visitor experience and site statistics.",c.a.createElement("br",null),c.a.createElement("h3",null,"Sessions"),c.a.createElement("ul",null,c.a.createElement("li",null,"Like Cookie, Session data is stored on client. Session is the time interval when a client logs into a server and logs out of it. The data, which is needed to be held across this session, is stored in the client browser."),c.a.createElement("li",null,"A session with each client is assigned a Session ID. The Session data is stored on top of cookies and the server signs them cryptographically. For this encryption, a Flask application needs a defined SECRET_KEY."),c.a.createElement("li",null,"Session object is also a dictionary object containing key-value pairs of session variables and associated values."),c.a.createElement("br",null),c.a.createElement("li",null,"To release a session variable use pop() method."),c.a.createElement("b",null,"session.pop('username', None)")),c.a.createElement("br",null),c.a.createElement("h3",null,"Redirect & Errors"),"When called, redirect() returns a response object and redirects the user to another target location with specified status code.",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"Flask.redirect(location, statuscode, response)"),c.a.createElement("br",null),c.a.createElement("div",{style:g},c.a.createElement(f.a,{code:x,language:"js",plugins:["line-numbers"]}))))))}}]),a}(o.Component);a.default=Object(E.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(R)}}]);
//# sourceMappingURL=232.de91db01.chunk.js.map