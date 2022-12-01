(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[155],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t(45),l=t(28),r=t(136),o=t(137),c=t(139),s=t(0),i=t.n(s),u=t(138),m=t.n(u),g=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=i.a.createRef(),t}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return i.a.createElement("pre",{className:"code-prism"},i.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(i.a.Component))},141:function(e,n,t){},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),l=t.n(a),r=t(26),o=t(297),c=t(295),s=t(114),i=Object(s.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=i();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,null,l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/introJs",className:e.line},"IntroJs-Proxies")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/prototypes",className:e.line},"Prototypes-Defa. Param")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/JsObjects",className:e.line},"JsObject")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/array",className:e.line},"String")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/this",className:e.line},"This-call(), apply(), bind()")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/clousers",className:e.line},"Clousers")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/oops",className:e.line},"Oops-GetSet")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/regular",className:e.line},"Regular")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/keyedCollections",className:e.line},"Keyed Collections")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/arrayApi",className:e.line},"Indexed colle-Arr Obj")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/logic",className:e.line},"Logic")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/findOutput",className:e.line},"findOutput")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/mcqjs",className:e.line},"McqJs")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/hackerRank",className:e.line},"HackerRank1")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/hackerRank6",className:e.line},"HackerRank2"))),l.a.createElement("div",null))}},350:function(e,n,t){"use strict";t.r(n);var a=t(45),l=t(28),r=t(136),o=t(137),c=t(139),s=t(0),i=t.n(s),u=t(138),m=t.n(u),g=t(120),b=t(57),h=t(296),E=t(5),d=(t(141),t(154)),p=t(140),f={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},y="\nvar output = (function(x) {\n delete x;\n return x;\n})(0);\n\nconsole.log(output);\n".trim(),v="\nvar Employee = {\n  company: 'xyz'\n}\n\nvar emp1 = Object.create(Employee);\nconsole.log(emp1.company);\n\ndelete emp1.company\nconsole.log('After', emp1.company);\n ".trim(),j="(function(){\n  var a = b = 3;\n })();\n \n console.log(\"a defined? \" + (typeof a !== 'undefined'));                                         //False\n console.log(\"b defined? \" + (typeof b !== 'undefined'));                                         //True\n ".trim(),w='function foo1(){\n  return {\n  bar: "hello"\n  };\n }\n \n function foo2(){\n  return\n  {\n  bar: "hello"\n  };\n }\n \n console.log("foo1 returns:",foo1());\n console.log("foo2 returns:",foo2());'.trim(),x="function sum(x, y) {\n  if (y !== undefined) {\n  return x + y;\n  } else {\n  return function(y) { return x + y; };\n  }\n }\n \n console.log(sum(2,3));\n console.log(sum(2)(3));".trim(),k="var list = readHugeList();\nvar nextListItem = function() {\n var item = list.pop();\n \n if (item) {\n // process the list item...\n nextListItem();\n }\n};".trim(),O="\n//1\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 1000);\n}\n\n\n//2\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 1000);\n}\n".trim(),A='\nvar fruits = ["Banana", "Orange", "Apple", "Mango"];\nfruits.splice(2, 0, "Lemon", "Kiwi");\nconsole.log(fruits)'.trim(),N="var a={},\nb={key:'b'},\nc={key:'c'};\n  a[b]=123;\n  a[c]=456;\n  \nconsole.log(a[b]);".trim(),C="console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));".trim(),T="\nfunction foo() {\n  let a = b = 0;\n  a++;\n  return a;\n}\n\nfoo();\nconsole.log(typeof a);\nconsole.log(typeof b);\n\n\nlet a = b = 0;                               //declares a is local variable and b is global variable.\n".trim(),I="\nconst clothes = ['jacket', 't-shirt'];\nclothes.length = 0;\n\nconsole.log(clothes[0]);                                           //undefined\n".trim(),S="\nconst length = 4;\nconst numbers = [];\nfor (var i = 0; i < length; i++); {\n  numbers.push(i + 1);\n}\n\nconsole.log(numbers);\n".trim(),M="\nlet i;\nfor (i = 0; i < 3; i++) {\n  const log = () => {\n    console.log(i);\n  }\n  setTimeout(log, 100);\n}".trim(),W="\nconsole.log(myVar);\nconsole.log(myConst);\n\nvar myVar = 'value';\nconst myConst = 3.14;".trim(),J='\nvar myObject = {\n  foo: "bar",\n  func: function () {\n    var self = this;\n    console.log("outer func" + this.foo);\n    console.log("outer func" + self.foo);\n    \n    (function () {\n      console.log("inner func" + this.foo);\n      console.log("inner func" + self.foo);\n    }());\n  }\n};\nmyObject.func();\n'.trim(),D='\nvar v1 = { name: "John", age: 18 };\nvar v2 = ["red", "green", "blue", "yellow"];\n\nconsole.log(Array.isArray(v1));                                                                     // false\nconsole.log(Array.isArray(v2));                                                                     // true\n'.trim(),H="\n//Deep copy array\nvar arr = ['Mukesh', 'Rakesh', 'Niketh'];\nvar newArr = arr;\nnewArr[0] = '100';\nconsole.log(arr, newArr);\n\n\n//Deep copy object\nconst obj2 = {size:10, owner:'Sid', isCarNonAc:true };\nconst newObj2 = obj2;\nnewObj2.model = \"0%\";\nobj2.isCarNonAc = false;\nconsole.log(newObj2, obj2)\n\n\n//Shallow Copy array:\nvar arr = ['Mukesh', 'Rakesh', ['100', 200], {x:100} ];\nvar arr2 = ['Sid']\nvar newArr = arr2.concat(arr);\nnewArr[0] = 'concat'\nnewArr[4] = 'change'\nconsole.log(newArr, arr)\n\n\n//Shallow Copy Object:\nvar obj={\n  age:10,\n  gender:'male',\n  hobbies: ['a', 'b', 'c']\n}\n\nvar newObj = Object.assign({}, obj);\nnewObj.age = 100;\nnewObj.hobbies[0] = 'd';\nconsole.log(newObj, obj)".trim(),q="\nconst arr = [1, 2, 3, 3, 2];\nconst count = {};\n\narr.forEach(el => {\n  count[el] = count[el] ? (count[el] += 1) : 1\n})\n\nconsole.log(count)".trim(),P="\nfunction unique(arr) {\n  var count = {};\n  return arr.filter((item) => {\n    return count.hasOwnProperty(item) ? false : (count[item] = true);\n  });\n}\n\nconsole.log(unique([2, 3, 4, 3, 2, 5]));".trim(),R='\nvar people = [\n  { sex: "Male", name: "Jeff" },\n  { sex: "Female", name: "Megan" },\n  { sex: "Male", name: "Taylor" },\n  { sex: "Female", name: "Madison" }\n];\n\nfunction groupBy(list, key) {\n  return list.reduce((data, val) => {\n    (data[val[key]] = data[val[key]] || []).push(val);\n    return data;\n  }, {});\n};\n\nvar groupedPeople = groupBy(people, "sex");\nconsole.log(groupedPeople.Male);\nconsole.log(groupedPeople.Female);'.trim(),F="\nvar arr = [1, 2, 3];\narr = arr.concat(arr);\n\nconsole.log(arr)".trim(),L='\nlet obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };\n\n\nconsole.log(Object.keys(obj));                     //Convert the keys to Array using - Object.keys().\n\nconsole.log(Object.values(obj));                   //Converts the Values to Array using - Object.values().\n\nconsole.log(Object.entries(obj));                  //Converts both keys and values using - Object.entries().\n'.trim(),z='\nlet arr = ["1", "Test User", "25", "Developer"];\nlet arr1 = [\n  ["id", "1"],\n  ["name", "Test User"],\n  ["age", "25"],\n  ["profession", "Developer"],\n];\n\nconsole.log(Object.assign({}, arr));\nconsole.log({ ...arr });\nconsole.log(Object.fromEntries(arr1));'.trim(),B="\nvar arr = [1, 2, 3, 4, 5, 3]\nvar value = 2\n\narr = arr.filter((item) => {\n  return item !== value\n})\n\nconsole.log(arr)".trim(),U='\nvar obj = {\n  name: "Mukesh",\n  Address: "India",\n  pincode: 201306\n};\n\ndelete obj.name;\n\nconsole.log(obj);'.trim(),V="\nvar arr = [1, 2, 3, 4, 5];\n\narr.splice(2, 0, 7);\nconsole.log(arr.join());".trim(),G="\nconst car = {\n  color: 'blue'\n}\n\nobj = car.hasOwnProperty('color')\nconsole.log(obj)".trim(),K='\nconsole.log(1 + "2" + "2");\nconsole.log(1 + +"2" + "2");\nconsole.log(1 + -"1" + "2");\nconsole.log(+"1" + "1" + "2");\nconsole.log("A" - "B" + "2");\nconsole.log("A" - "B" + 2);'.trim(),Q='\nconsole.log("0 || 1 = "+(0 || 1));\nconsole.log("1 || 2 = "+(1 || 2));\nconsole.log("0 && 1 = "+(0 && 1));\nconsole.log("1 && 2 = "+(1 && 2));\n'.trim(),X="\nvar x = 21;\nvar girl = function () {\n  console.log(x);\n  var x = 20;\n};\ngirl();\n".trim(),Y="\nconsole.log(1 < 2 < 3);\nconsole.log(3 > 2 > 1);\n\n\nThe second returns false because of how the engine works regarding operator associativity for < and >. It compares \nleft to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which \nis false.\n".trim(),Z="\nvar a = [1, 2, 3];\na[10] = 99;\nconsole.log(a[6]);\n".trim(),$="\nconsole.log(typeof typeof 1);                                                     //string\nconsole.log(typeof NaN);                                                          //number\n".trim(),_='\nconsole.log("~", ~3,~2+ "<>", 1<2>3 ,"==!", 3==!2 ,"!==", 3!==2)      //!==\n\nconsole.log([] == [])                                                 //false\n'.trim(),ee="\nvar a = ['dog', 'cat', 'hen'];\na[100] = 'fox';\nconsole.log(a.length);                                            //101\n".trim(),ne="\nconsole.log(0 && hi)                                              //0\n".trim(),te="\nconst x = 6 % 2;\nconst y = x ? 'One' : 'Two';\nconsole.log(y)                                                    //Two\n".trim(),ae="\nfunction logThis() {\n  console.log(this);                                              //window\n}\nlogThis();\n".trim(),le="\nconst foo = [1, 2, 3];\nconst [n] = foo;\nconsole.log(n);                                                 //1s\n".trim(),re="\nconst arr1 = [2, 4, 6];\nconst arr2 = [3, 5, 7];\n\nconsole.log([...arr1, ...arr2]);                               //[2, 4, 6, 3, 5, 7]\n".trim(),oe='\nvar a = Math.max() < Math.min();\nvar b = Math.max() > Math.min();\nconsole.log(a)                                                  //true\nconsole.log(b)                                                  //false\n\nconsole.log(NaN === NaN)                                        //false\nconsole.log(typeof(NaN))                                        //number\nconsole.log(parseInt("123Hello"))                               //123\nconsole.log(parseInt("Hello123"))                               //NaN\n'.trim(),ce='\nconst fun = ({ a, b, c }) => {\n  console.log(a, b, c);\n };\n fun(0, 1, 2);                                        //undefined undefined undefined\n\n\n //\nx = 3;\nconsole.log(x);\nvar x;\n\n\n//since the initialization of "x" is not hoisted.\nvar x;\nconsole.log(x);                                         //undefined\nx = 23;\n'.trim(),se="\nvar x = 0;\nvar y = 23;\n        \nif(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  \nif(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)\n".trim(),ie=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(g.a,{container:!0},i.a.createElement(g.a,{item:!0,xs:2},i.a.createElement(b.a,{className:e.paper},i.a.createElement("h4",null,i.a.createElement(d.a,null)))),i.a.createElement(g.a,{item:!0,xs:10},i.a.createElement(b.a,{className:e.paper},i.a.createElement(h.a,null,i.a.createElement("b",null,"1."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:y,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("i",null,"Above code will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variable."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"2."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:v,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("i",null,"Above code will output xyz as output. Here emp1 object got company as prototype property. delete operator doesn't delete prototype property.")),i.a.createElement("li",null,i.a.createElement("i",null,"emp1 object doesn't have company as its own property.")),i.a.createElement("br",null),i.a.createElement("li",null,i.a.createElement("b",null,"console.log(emp1.hasOwnProperty('company')); //false"))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"3."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:j,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("i",null,"Since both a and b are defined within the enclosing scope of the function, and since the line they are on begins with the var keyword,")),i.a.createElement("li",null,i.a.createElement("i",null,"But in fact, var a = b = 3;"))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"4. Consider the two functions below. Will they both return the same thing? Why or why not?"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:w,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("i",null,"As a result, when the line containing the return statement (with nothing else on the line) is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"5. Write a sum method which will work properly when invoked using either syntax below."),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:x,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"6. The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:k,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("i",null,"The stack overflow is eliminated because the event loop handles the recursion, not the call stack. When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",null,"7."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:O,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("i",null,"Each function executed within the loop will be executed after the entire loop has completed and so reference the last value stored in i.",i.a.createElement("br",null),"Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:N,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("i",null,'JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object object]". As a result, a[b] and a[c] are both equivalent to a["[object object]"] and can be used interchangeably. Therefore, referencing a[c] is same as referencing a[b].'),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:C,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"8."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:A,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("i",null,"a closure is a function, along with all variables or functions that were in-scope at the time that the closure was created. In JavaScript, a closure is implemented as an \u201cinner function\u201d; An important feature of closures is that an inner function still has access to the outer function\u2019s variables."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",null,"9. Accidental global variable"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:T,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("i",null,"No variable b is declared neither in the foo() scope/ global scope. So JavaScript interprets b = 0 expression as",i.a.createElement("b",null,"window.b = 0"),".")),i.a.createElement("li",null,i.a.createElement("i",null,"So, b is a global variable created accidentally."))),i.a.createElement("h3",null,"10. Array length property"),"Reducing the value of the length property has the side-effect of deleting own array elements whose array index is between the old and new length values.",i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:I,language:"js",plugins:["line-numbers"]})),i.a.createElement("ul",null,i.a.createElement("li",null,"undefined, because clothes array has been emptied.")),i.a.createElement("h3",null,"11. What is the content of numbers array"),i.a.createElement("i",null,"for() iterates 4 times over the null statement, ignoring the block that actually pushes items to array."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:S,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"12. Clousers"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:M,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"13. What happens if you access myVar and myConst before declaration"),"const variables are in a temporal dead zone until the declaration line const myConst = 3.14.",i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:W,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"14."),i.a.createElement("ul",null,i.a.createElement("li",null,"In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo."),i.a.createElement("li",null,"In the inner function, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:J,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"15. How to check if an object is an array or not"),i.a.createElement("ul",null,i.a.createElement("li",null,"isArray() method is used to check if an object is an array."),i.a.createElement("li",null,"Array.isArray() method returns true if an object is an array, otherwise returns false.")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:D,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"16. Shallow Copy And Deep Copy"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("b",null,"Shallow copy: "),"Coping one top level element."),i.a.createElement("li",null,i.a.createElement("b",null,"Deep copy:"),"Coping nested elements."),i.a.createElement("li",null,"Object and array are assigned by reference. By reference both array value changed")),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:H,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"17. Occurence elements in the array"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:q,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"18. Find unque element in array (hasOwnProperty)"),i.a.createElement("p",null,"The hasOwnProperty() is used to check whether the object has the specified property as its own property. It returns a boolean value indicating whether the object has the given property as its own property."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:P,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"19. Group Elements"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:R,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"20. Make duplicate elements in an array"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:F,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"21. How to convert an Object "," into an Array [] "),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:L,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"22. How to convert an Array [] to Object "),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:z,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"23. Remove a specific item from an array"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:B,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"24. Delete a property from an object"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:U,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"25. Insert an element at specific place in Array"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:V,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"26. Checking if a key exists in a JavaScript object"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:G,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"27."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:K,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"28."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:Q,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"29."),i.a.createElement("ul",null,i.a.createElement("li",null,"It\u2019s because JavaScript initialization is not hoisted."),i.a.createElement("li",null,"Why doesn\u2019t it show the global value of 21? The reason is that when the function is executed, it checks that there\u2019s a local x variable present but doesn\u2019t yet declare it, so it won\u2019t look for global one.")),i.a.createElement("br",null),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:X,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"30."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:Y,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"31."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:Z,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"32."),'typeof 1 will return "number" and typeof "number" will return string.',i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:$,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"33. Which operator returns true if the two compared values are not equal?"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:_,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"34. How is a forEach statement different from a for statement?"),"A for statement is generic, but a forEach statement can be used only with an array.",i.a.createElement("br",null),i.a.createElement("h3",null,"35. How does a function create a closure?"),"It returns a reference to a variable in its parent scope.",i.a.createElement("br",null),i.a.createElement("h3",null,"36. Which Object method returns an iterable that can be used to iterate over the properties of an object?"),"Object.keys()",i.a.createElement("br",null),i.a.createElement("h3",null,"37. What will be logged to the console?"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:ee,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"38. Add operator."),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:ne,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"39. Which variable is an implicit parameter for every function in JavaScript?"),"Arguments",i.a.createElement("br",null),i.a.createElement("h3",null,"40. What will the value of y be in this code:"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:te,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"41. Which keyword is used to create an error?"),"throw",i.a.createElement("br",null),i.a.createElement("h3",null,"42. What is the result in the console of running this code?"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:ae,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"43. What will this code log to the console?"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:le,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"44. What does this code do?"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:re,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"45. Upon encountering empty statements, what does the Javascript Interpreter do?"),"Ignores the statements.",i.a.createElement("br",null),i.a.createElement("h3",null,"46. What will be the output of the following code snippet?"),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:oe,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"47. "),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:ce,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"48. "),i.a.createElement("div",{style:f},i.a.createElement(p.a,{code:se,language:"js",plugins:["line-numbers"]}))))))}}]),n}(s.Component);n.default=Object(E.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(ie)}}]);
//# sourceMappingURL=155.ae0f879f.chunk.js.map