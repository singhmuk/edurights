(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[158],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(45),l=t(28),r=t(136),o=t(137),s=t(139),c=t(0),i=t.n(c),u=t(138),m=t.n(u),b=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=i.a.createRef(),t}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return i.a.createElement("pre",{className:"code-prism"},i.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(i.a.Component))},141:function(e,n,t){},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),l=t.n(a),r=t(26),o=t(297),s=t(295),c=t(114),i=Object(c.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=i();return l.a.createElement("div",{className:e.root},l.a.createElement(s.a,null,l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/introJs",className:e.line},"IntroJs-Proxies")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/prototypes",className:e.line},"Prototypes-Defa. Param")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/JsObjects",className:e.line},"JsObject")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/array",className:e.line},"String")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/this",className:e.line},"This-call(), apply(), bind()")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/clousers",className:e.line},"Clousers")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/oops",className:e.line},"Oops-GetSet")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/regular",className:e.line},"Regular")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/keyedCollections",className:e.line},"Keyed Collections")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/arrayApi",className:e.line},"Indexed colle-Arr Obj")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/logic",className:e.line},"Logic")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/findOutput",className:e.line},"findOutput")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/mcqjs",className:e.line},"McqJs")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/hackerRank",className:e.line},"HackerRank1")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/hackerRank6",className:e.line},"HackerRank2"))),l.a.createElement("div",null))}},351:function(e,n,t){"use strict";t.r(n);var a=t(45),l=t(28),r=t(136),o=t(137),s=t(139),c=t(0),i=t.n(c),u=t(138),m=t.n(u),b=t(120),h=t(57),g=t(296),d=t(5),E=(t(141),t(154)),p=t(140),f={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},v='var person = "John Doe"; '.trim(),y='Const emp={id:102,name:"Shyam Kumar",salary:40000} '.trim(),j="\nfunction Person(first, last, age, interests) {\n  this.name = {\n    'first': first,\n    'last': last\n  };\n  this.age = age;\n  this.interests = interests;\n\n  this.bio = function () {\n    console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + 'old. likes ' + this.interests[0]);\n  };\n\n  this.greeting = function () {\n    console.log('Hi! Im ' + this.name.first + '.');\n  };\n};\n\n\nconst person1 = new Person('Bob', 'Smith', 32, ['music', 'skiing']);\nconsole.log(person1);\n".trim(),k='\nlet name = \'Anna\';\nlet age = 10;\nlet ageField = "age";\n\nlet obj = {\n\t"name":"Muk",\n\t[ageField]: 20,\n\t"greet me"(){\n\t\tconsole.log(this.name, "---",this.age);\n\t}\n};\n\nconsole.log(obj["age"]);\nconsole.log(obj[ageField]); \n\nobj["greet me"]();'.trim(),w='\nclass obj{\n  constructor(id,name){\n    this.id=id,\n    this.name=name,\n    \n    this.display = function(other){\n      return console.log(other+"------"+this.name+"pppppp");\n      }\n    }\n  \n  show(){\n    return console.log(this.id,"----",this.name)\n    }\n  }\n\nconst newObj=new obj(1,\'Mukesh\');\nnewObj.show();\nnewObj.display(\'890\');\n'.trim(),O="\nconst hero = {\n  name: 'Batman',\n  realName: 'Bruce Wayne'\n};\n\nconst { name, realName } = hero;\nconsole.log(name, realName)\n\n".trim(),N="\n  const adder =true+5\n   console.log(adder)\n     !adder; // false\n     !!adder;\n   console.log(Boolean(adder))\n   console.log(typeof(adder))".trim(),S="\n   const book = {\n     title: 'Ego is the Enemy',\n     author: 'Ryan Holiday'\n   }\n   \n   const bookJSON = JSON.stringify(book)\n   const bookObject = JSON.parse(bookJSON)\n   console.log(bookObject.title)".trim(),J='\nJSON.stringify(undefined);                                                                      //undefined \nJSON.stringify(function(){});                                                                   //undefined\nJSON.stringify([1,undefined,function(){},4]);                                                   //[1,null,null,4]\nJSON.stringify({a:2, b:function(){}});                                                          //{"a":2}\n   \n   \n//3\nvar a={\n   val:[1,2,3],\n   toJSON: function(){\n       return this.val.slice(1);\t\n       } \n     };\n\nvar b={\t\t\t\t\n   val:[1,2,3],\n     toJSON: function(){                                                         // probably incorrect!\n       return [this.val.slice(1).join()];\n     }\n };\n\n console.log(JSON.stringify(a));                                                                 //[2,3]\n console.log(JSON.stringify(b));                                                                 //["2,3"]\n   \n   \n//Json Parse And Json Stringify\nvar text = \'{"employees":[\' +\n \'{"firstName":"John","lastName":"Doe" },\' +\n \'{"firstName":"Anna","lastName":"Smith" },\' +\n \'{"firstName":"Peter","lastName":"Jones" }]}\';\n\nconst obj = JSON.parse(text);\nconsole.log(obj);\n\n\nvar obj2 = { name: "John", age: 30, city: "New York" };\nconsole.log(JSON.stringify(obj2));\n'.trim(),P="\nfunction greeting(name) {\n  alert('Hello ' + name);\n}\n\nfunction main(callback) {\n  var name = prompt('Please enter your name.');\n  callback(name);\n}\n\nmain(greeting);\n\n\n//2\nfunction greeting(name){\n  console.log('greeting', name);\n}\n\nfunction main(){\n  const str = \"Welcome\";\n  console.log(str);\n  greeting('name')\n}\n\nmain();\n".trim(),A='\n//1\nconst throwError = () => {\n  throw "Who made this function?"\n }\n \n const someAsyncListener = (callback, ) => {\n  setTimeout(callback)\n }\n \n // THIS DOES NOT CATCH!\n try {\n  someAsyncListener(throwError)\n}\ncatch (error) {\n console.log(error)\n}\nconsole.log("I\'m alive!");\n\n\n//2\nconst someSyncListener = (callback, ) => {\n  callback()\n }\n \n try {\n  someSyncListener(throwError)\n }\n catch (error) {\n  console.log(error)\n }\n console .log("I\'m alive!")'.trim(),T="\n const add = (a, b, callback) => {\n   setTimeout(() => {\n     callback(a + b)\n   }, 2000)\n  }\n  \n  add(1, 4, (sum) => {\n     console.log(sum)\n })\n ".trim(),C="\nconst checkAuth = cb => {\n  setTimeout(() => {\n    cb({ isAuth: true })\n  }, 2000)\n}\nconst getUser = (authInfo, cb) => {\n  if (!authInfo.isAuth) {\n    cb(null)\n    return\n  }\n  setTimeout(() => {\n    cb({ name: 'Max' })\n  }, 2000)\n}\ncheckAuth(authInfo => {\n  getUser(authInfo, user => {\n    console.log(user.name)\n  })\n})\n".trim(),D="\nconst p1 = Promise.reject('Rejected');\n\nconst p2 = Promise.resolve('Resolve')\n\nconst p3 = new Promise((resolve, reject) => {\n      setTimeout(resolve,1000, 'Winnig')\n})\n\n\nPromise.race([p2, p1, p3])\n       .then((res) => {\n         console.log('Winnig', res)\n       })\n       .catch((err) => {\n         console.log(err)\n       })\n       \n       \n//2\nfunction timeoutPromise(delay) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(\"Timeout\");\n    }, delay);\n  });\n}\n\nPromise.race([\n  timeoutPromise(3000)\n])\n  .then(() => {},\n    function (err) {})\n".trim(),x='\nvar X;\nfunction Test(A, B, Callback) {\n   X = (A + B * A * B);\n   Callback(X);\n}\n\nTest(99999,999999,function(Data) {\n   alert(Data);\n});\n\nalert("This is not printed first, as it would be in Async.");\n'.trim(),I="\nconst getUser = cb => {\n  setTimeout(() => {\n    cb({ name: 'Max' })\n  }, 2000)\n}\n\ngetUser(user => {\n  console.log(user.name) \n})".trim(),B="\n function one() {\n    console.log('one');\n    setTimeout(() => {\n      console.log('two');\n        }, 1000);\n      setTimeout(() => {\n        console.log(\"three\");\n      });\n   }\n one();\n \n \n //2 Promises Chaning\n new Promise((resolve, reject) => {\n  setTimeout(() => resolve(1), 1000);\n    })\n    \n.then((result) => {\n    alert(result); return result * 3;\n    })\n.then((result) => {\n    alert(result); return result * 4;\n    })\n.then((result) => {\n    alert(result); return result * 6;\n});\n\n//asyncify\nfunction asyncify(fn) {\n  var orig_fn = fn,\n      intv = setTimeout(function() {\n          intv = null;\n          if (fn) fn();\n      }, 0);\n\n  fn = null;\n\n  return function() {\n      if (intv) {\n          fn = orig_fn.bind.apply(\n              orig_fn, [this].concat([].slice.cell(arguments))\n          );\n      } else {\n          orig_fn.apply(this, arguments);\n      }\n  }\n}".trim(),q="\nnew Promise((resolve, reject) => {\n  console.log('Initial');\n\n  resolve();\n})\n\n.then(() => {\n  throw new Error('Something failed');\n\n  console.log('Do this');\n})\n.catch(() => {\n  console.error('Do that');\n})\n\n.then(() => {\n  console.log('Do this, no matter what happened before');\n});".trim(),R='\nwindow.addEventListener("unhandledrejection", event => {\n  event.preventDefault();\n}, false);'.trim(),H="\n//Promise.all\nconst promise1 = Promise.resolve(3);\nconst promise2 = 42;\nconst promise3 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, 'foo');\n});\n\nPromise.all([promise1, promise2, promise3]).then((values) => {\n  console.log(values);\n});\n\n\n\n//Promise.race\nconst promise1 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 500, 'one');\n});\n\nconst promise2 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, 'two');\n});\n\nPromise.race([promise1, promise2]).then((value) => {\n  console.log(value);                                                     // Both resolve, but promise2 is faster\n});\n".trim(),M="\nconst wait = ms => new Promise(resolve => setTimeout(resolve, ms));\n\nwait().then(() => console.log(4));\nPromise.resolve().then(() => console.log(2)).then(() => console.log(3));\nconsole.log(1);".trim(),F='\nconst promise = new Promise(function(resolve, reject) {\n  console.log("Promise callback");\n  resolve();\n}).then(function(result) {\n  console.log("Promise callback (.then)");\n});\n\nsetTimeout(function() {\n  console.log("event-loop cycle: Promise (fulfilled)", promise)\n}, 0);\n\nconsole.log("Promise (pending)", promise);\n'.trim(),L=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(b.a,{container:!0},i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(h.a,{className:e.paper},i.a.createElement("h4",null,i.a.createElement(E.a,null)))),i.a.createElement(b.a,{item:!0,xs:10},i.a.createElement(h.a,{className:e.paper},i.a.createElement(g.a,null,i.a.createElement("h3",null,"1. Objects"),"An object is a collection of related data/ functionality (properties and methods).",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"JavaScript Objects?"),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,"A javaScript object is an entity having state and behavior."),i.a.createElement("li",null,"JavaScript is an object-based language. Everything is an object in JavaScript."),i.a.createElement("li",null,"JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("i",null,"There are 4 ways to create objects."),i.a.createElement("br",null),i.a.createElement("b",null,"1.Objects are Variables"),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:v,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"2.Using an Object Literal"),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:y,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"3. Constructors and object instances with new keyword"),i.a.createElement("ul",null,i.a.createElement("li",null,"Constructor functions used to define and initialize objects and their features."),i.a.createElement("li",null,"constructors provide the means to create as many objects as need in an effective way, attaching data and functions to them as required.")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:j,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"4.By using an Object constructor:"),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:w,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"2. Extract Object Value"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:k,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"3. Object Destructuring"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:O,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"4. Array_like_Objects"),"Di\ufb00erence between Arrays and Array-like Objects is that Array-like objects inherit from Object.prototype instead of Array.prototype. This means that Array-like Objects can't access common Array prototype methods like forEach(), push(), map(), filter(), and slice().",i.a.createElement("br",null),i.a.createElement("h3",null,"5. Coercion"),i.a.createElement("i",null,"The first ! coerce the value to a boolean and inverse it. In this case, !value will return false. So to reverse it back to true, we put another ! on it. Hence the double use !!."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:N,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"6. JSON"),"Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,"JSON is purely a string with a specified data format \u2014 it contains only properties, no methods."),i.a.createElement("li",null,"JSON requires double quotes to be used around strings and property names. Single quotes are not valid."),i.a.createElement("li",null,"Lightweight data-interchange format"),i.a.createElement("li",null,"Based on a subset of javascript"),i.a.createElement("li",null,"Often used with AJAX"),i.a.createElement("li",null,"Data Types = Number, String, Boolean, Array, Object, Null")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Storing Data with JSON"),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:S,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Json Parse And Json Stringify"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("b",null,"JSON.parse(): "),"to convert the string into a JavaScript object."),i.a.createElement("li",null,i.a.createElement("b",null,"JSON.stringify(): "),"to convert JavaScript object into a string.")),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:J,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"7. Callback Function"),i.a.createElement("i",null,"A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:P,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,"with Callback function javaScript bild an asynchronous wold of a synchronous single-threaded language."),i.a.createElement("li",null,"Almost anything that has to pull data into your app or push data out will always be asynchronous because it\u2019s not going to be running in the same thread. callbacks do not work with try-catch."),i.a.createElement("li",null,"Although, if your callback is synchronous, then you can catch errors using try-catch")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:A,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Usser Defined"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:T,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Callback Hell"),"When working with a lot of dependent asynchronous operations, you quickly end up in callback hell.",i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:C,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Never Calling Callback"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:D,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Callback Synchronous"),i.a.createElement("br",null),i.a.createElement("br",null),"synchronously callback usally return values and asynchronous callback don't.",i.a.createElement("br",null),"Simply adding a callback to a function does not make it non-blocking/ asynchronous. Asynchronous capability is actually provided by the environment.",i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:x,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"8. Promises"),i.a.createElement("ul",null,i.a.createElement("li",null,"Promise is an object that represents the completion/ failure of an asynchronous task and its resulting value."),i.a.createElement("li",null,"A promise is a returned object which contain callbacks, instead of passing callbacks into a function.")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Unlike old-fashioned passed-in callbacks, a promise comes with some guarantees:"),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,"Callbacks will never be called before the completion of the current run of the JavaScript event loop."),i.a.createElement("li",null,"Callbacks added with then(), will be called even after the success/ failure of the asynchronous operation."),i.a.createElement("li",null,"Multiple callbacks may be added by calling then() several times. Each callback is executed one after another, in the order in which they were inserted."),i.a.createElement("li",null,"One of the great things about using promises is chaining.")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Callback Promises"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:I,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"9. Chaining"),"A common need is to execute two/ more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. This is promise chain.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Chained Callback"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:B,language:"js",plugins:["line-numbers"]})),"Always return results, otherwise callbacks won't catch the result of a previous promise.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Chaining after a catch"),i.a.createElement("br",null),"It's possible to chain after a failure, i.e. a catch, which is useful to accomplish new actions even after an action failed in the chain.",i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:q,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Promise rejection events"),i.a.createElement("br",null),"Whenever a promise is rejected, one of two events is sent to the global scope (window or web worker).",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"1. rejectionhandled:"),i.a.createElement("br",null),"Sent when a promise is rejected, after that rejection has been handled by the executor's reject function.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"2. unhandledrejection:"),i.a.createElement("br",null),"Sent when a promise is rejected but there is no rejection handler available.",i.a.createElement("br",null),i.a.createElement("br",null),"In both cases, the event (PromiseRejectionEvent) has as members a promise property indicating the promise that was rejected, and a reason property that provides the reason given for the promise to be rejected.",i.a.createElement("br",null),i.a.createElement("br",null),"These make it possible to offer fallback error handling for promises, as well as to help debug issues with your promise management. These handlers are global per context, so all errors will go to the same event handlers, regardless of source.",i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:R,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),"By calling the event's preventDefault() method, you tell the JavaScript runtime not to do its default action when rejected promises go unhandled.",i.a.createElement("br",null),i.a.createElement("h3",null,"10. Composition"),i.a.createElement("ul",null,i.a.createElement("li",null,"Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively."),i.a.createElement("li",null,"Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:H,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"11. Timing"),"To avoid surprises, functions passed to then() will never be called synchronously, even with an already-resolved promise.",i.a.createElement("br",null),"Instead of running immediately, the passed-in function is put on a microtask queue, which means it runs later when the queue is emptied at the end of the current run of the JavaScript event loop.",i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:M,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"12. Task queues vs microtasks"),i.a.createElement("ul",null,i.a.createElement("li",null,"Promise callbacks are handled as a ",i.a.createElement("b",null,"Microtask"),"."),i.a.createElement("li",null,"setTimeout() callbacks are handled as ",i.a.createElement("b",null,"Task queues"),".")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:F,language:"js",plugins:["line-numbers"]}))))))}}]),n}(c.Component);n.default=Object(d.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(L)}}]);
//# sourceMappingURL=158.8a234c07.chunk.js.map