(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[165],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var a=t(45),l=t(28),i=t(136),r=t(137),c=t(139),o=t(0),s=t.n(o),m=t(138),u=t.n(m),h=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(i.a)(this,Object(r.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&u.a.highlightElement(t.ref.current)},t.ref=s.a.createRef(),t}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return s.a.createElement("pre",{className:"code-prism"},s.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(s.a.Component))},141:function(e,n,t){},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(0),l=t.n(a),i=t(26),r=t(297),c=t(295),o=t(114),s=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=s();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,null,l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/introJs",className:e.line},"IntroJs-Proxies")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/prototypes",className:e.line},"Prototypes-Defa. Param")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/JsObjects",className:e.line},"JsObject")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/array",className:e.line},"String")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/this",className:e.line},"This-call(), apply(), bind()")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/clousers",className:e.line},"Clousers")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/oops",className:e.line},"Oops-GetSet")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/regular",className:e.line},"Regular")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/keyedCollections",className:e.line},"Keyed Collections")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/arrayApi",className:e.line},"Indexed colle-Arr Obj")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/logic",className:e.line},"Logic")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/findOutput",className:e.line},"findOutput")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/mcqjs",className:e.line},"McqJs")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/hackerRank",className:e.line},"HackerRank1")),l.a.createElement(r.a,null,l.a.createElement(i.b,{to:"/hackerRank6",className:e.line},"HackerRank2"))),l.a.createElement("div",null))}},353:function(e,n,t){"use strict";t.r(n);var a=t(45),l=t(28),i=t(136),r=t(137),c=t(139),o=t(0),s=t.n(o),m=t(138),u=t.n(m),h=t(120),d=t(57),b=t(296),f=t(5),g=(t(141),t(154)),p=t(140),E={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},v='function bike() {\n    console.log(this.name);\n}\n\nvar name = "Ninja";\nvar obj1 = { name: "Pulsar", bike: bike };\n\nbike();\nobj1.bike();\n'.trim(),w='\nfunction bike() {\n  console.log(this.name);\n }\n\n  var name = "Ninja";\n  var obj = { name: "Pulsar" }\n  \n  bike.call(obj);'.trim(),j='\n //Bind in constructor\nclass Student {\n  constructor(fname, lname){\n    this.fname = fname;\n    this.lname = lname;\n\t\t\n    this.sayName = this.sayName.bind(this)\n  }\n\n  sayName(){\n    console.log(this.firstName)\n  }\n}\n\nvar muk = new Student(\'Muk\', "Sin");\nvar greetStu = muk.sayName;\ngreetStu();\n\n\n\n//2\nvar names = {\n    fname:\'Ritesh\',\n    lname:"Singh"\n  }\n\n  let fullName = function(hometown, state){\n  return console.log(this.fname,"---",this.lname,"---",hometown,"---",state)\n}\n\n\nvar names2 = {\n    fname:\'Nitesh\',\n    lname:\'Singh\'\n  }\n\n  let printName = fullName.bind(names2, "Ranchi", "Jharkhand");\n  console.log(printName);\n  printName(); '.trim(),y='\nvar obj = { \n  name : "ABC", \n  printFunc: function(){ \n    return this.name;\n    } \n  } \n       \nvar objs = obj.printFunc();\n\nexport { objs }'.trim(),k='\n  var obj = { \n  name : "ABC", \n  printFunc: function(){ \n     document.write(this.name);} \n     } \n       \n    var printFunc2= obj.printFunc; \n    printFunc2();'.trim(),N='\n  var obj = { \n  name : "ABC", \n  printFunc: function(){ \n     document.write(this.name);} \n     } \n       \n    var printFunc2= obj.printFunc.bind(obj); \n    printFunc2();'.trim(),x='\n    //1\n    function foo(arg1, arg2){\n      console.log(this.name)\n      console.log(arg1)\n      console.log(arg2)\n    }\n    \n    foo.call({name:\'Nitesh\'}, "ReactJs", "AngularJs");\n    \n    \n    //In call method after assign to varriable than this value lost its binding.\n    \n    var student = {\n      name:"Js",\n      jsMethod: function(){\n        console.log(this.name)\n      }\n    }\n    \n    var greetStu = student.jsMethod;\n    greetStu();\t\n    \n    \n    //But with bind method we can use this value.\n    //In BInd we only set context of this.\n    \n    //2\n    var student = {\n      name:"Js",\n      jsMethod: function(){\n        console.log(this.name)\n      }\n    }\n    \n    var greetStu = student.jsMethod.bind({ name:\'Hi\' });\n    greetStu();\t\n    \n    \n    //3\n    var names = {\n      fname:\'Ritesh\',\n      lname:"Singh"\n    }\n    \n    let fullName = function(hometown, state){\n      return console.log(this.fname,"---",this.lname,"---",hometown,"---",state)\n    }\n    \n    fullName.apply(names, ["Ranchi", "Jharkhand"]);\n    \n    \n    var names2 = {\n      fname:\'Nitesh\',\n      lname:\'Singh\'\n    }\n    \n    fullName.apply(names2, ["Ranchi"]);\n    '.trim(),S='\nfunction foo(arg1, arg2){\n  console.log(this.name)\n  console.log(arg1)\n  console.log(arg2)\n}\n\nfoo.apply({name:\'Nitesh\'}, ["ReactJs", "AngularJs"]);\n\n'.trim(),O='\nvar names = {\n    fname:\'Ritesh\',\n    lname:"Singh",\n    fullName:function(){\n      return console.log(this.fname,"---",this.lname)\n    }\n  }\n\nvar names2 = {\n    fname:\'Nitesh\',\n    lname:\'Singh\'\n  }\n\n//function borrowing\nnames.fullName.call(names2);\n\n\n//2\nvar names = {\n    fname:\'Ritesh\',\n    lname:"Singh"\n  }\n\nlet fullName = function(hometown, state){\n  return console.log(this.fname,"---",this.lname,"---",hometown,"---",state)\n}\n\nfullName.call(names, "Ranchi", "Jharkhand");\n\n\nvar names2 = {\n    fname:\'Nitesh\',\n    lname:\'Singh\'\n  }\n\nfullName.call(names2, "Ranchi");\n'.trim(),R=function(e){function n(){return Object(a.a)(this,n),Object(i.a)(this,Object(r.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(h.a,{container:!0},s.a.createElement(h.a,{item:!0,xs:2},s.a.createElement(d.a,{className:e.paper},s.a.createElement("h4",null,s.a.createElement(g.a,null)))),s.a.createElement(h.a,{item:!0,xs:10},s.a.createElement(d.a,{className:e.paper},s.a.createElement(b.a,null,s.a.createElement("h3",null,"1.What is 'this' keyword in JavaScript?"),s.a.createElement("ul",null,s.a.createElement("li",null,"this keyword refers to an object, that object which is executing the current bit of javascript code."),s.a.createElement("li",null,"To understand this keyword, only we need to know how, when and from where the function is called, does not matter how and where function is declared/ defined.")),s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:v,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("i",null,"The job of bike() function is printing the this.name . In case of obj1().bike(), \u201cPulsar\u201d gets printed and the reason behind this is function bike() gets called with the execution context as obj1 so this.name became obj1.name."),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Explicit and Fixed Binding of \u201cthis\u201d keyword "),s.a.createElement("br",null),"If we use call and apply method with calling function, both of those methods take as their first parameter as execution context. that is this binding.",s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:w,language:"js",plugins:["line-numbers"]})),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("b",null,"Explicit binding: "),"If we invoke the function bike with call() method passing execution context object obj as first argument, then obj gets assigned to this object and it prints \u201cPulsar\u201d which is nothing but obj.name."),s.a.createElement("li",null,s.a.createElement("b",null,"Fixed binding/Hard binding: "),"We can force the this object to be same always no matter from where and how it gets called.")),s.a.createElement("br",null),s.a.createElement("h3",null,"2.bind()"),s.a.createElement("ul",null,s.a.createElement("li",null,"Creates a new function, when called."),s.a.createElement("li",null,"Returns a new function, when invoked, has its this sets to a specific value."),s.a.createElement("li",null,"Unlike the call() and apply() methods, the bind() method doesn\u2019t immediately execute the function. It just returns the function."),s.a.createElement("li",null,"When a method an object is passed to another function as a callback, the this value is lost. That\u2019s because bindExample() received the function bindExample.details separately from the bindExample object."),s.a.createElement("li",null,"The bind() method allows an object to borrow a method from another object without making a copy of that method."),s.a.createElement("li",null,"When we assign method to varryble than lost this binding bind set context of this."),s.a.createElement("li",null,"Bind method exactly same as the call method, Only diffrences instead of caling method, Bind method with the object and return the copy of that method.")),s.a.createElement("br",null),s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:j,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"program to print the name which is called by this keyword."),s.a.createElement("br",null),s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:y,language:"js",plugins:["line-numbers"]})),s.a.createElement("i",null,"this keyword bind the name variable to the function. It is known as default binding."),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"No output is produced"),s.a.createElement("br",null),s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:k,language:"js",plugins:["line-numbers"]})),s.a.createElement("i",null,"Here we made a new variable function printFunc2 which refers to the function printFunc() of object geeks. Here the binding of this is lost, so no output is produced."),s.a.createElement("br",null),s.a.createElement("br",null),"To make sure that any binding of this is not to be lost, we are using Bind() method. By using bind() method we can set the context of this to a particular object. So we can use other variables also to call binded function.",s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:N,language:"js",plugins:["line-numbers"]})),s.a.createElement("i",null,"The bind() method creates a new function where this keyword refers to the parameter in the parenthesis in the above case obj. This way the bind() method enables calling a function with a specified this value."),s.a.createElement("br",null),s.a.createElement("h3",null,"3. call(), apply()"),"The call() method calls a function with a given this value and arguments provided individually.",s.a.createElement("br",null),s.a.createElement("br",null),"The main differences between bind() and call() is that the call() method:",s.a.createElement("br",null),s.a.createElement("ul",null,s.a.createElement("li",null,"Accepts additional parameters as well"),s.a.createElement("li",null,"The call() method does not make a copy of the function it is being called on."),s.a.createElement("li",null,"call() and apply() serve the exact same purpose. The only difference between how they work is that."),s.a.createElement("ul",null,s.a.createElement("li",null,"call() expects all parameters to be passed in individually."),s.a.createElement("li",null,"apply() expects an array of all of our parameters."))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Call: "),"This value depend from where to call it.",s.a.createElement("br",null),s.a.createElement("br",null),"call: accept two properties:",s.a.createElement("ul",null,s.a.createElement("li",null,"(i) what is context of this."),s.a.createElement("li",null,"(ii) Parameter.")),s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:x,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Apply"),s.a.createElement("br",null),"Pass Array as argument instead of parameter.",s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:S,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"4. Borrowing"),s.a.createElement("div",{style:E},s.a.createElement(p.a,{code:O,language:"js",plugins:["line-numbers"]}))))))}}]),n}(o.Component);n.default=Object(f.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(R)}}]);
//# sourceMappingURL=165.01daf967.chunk.js.map