(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[98],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(45),l=t(28),r=t(136),s=t(137),i=t(139),o=t(0),c=t.n(o),u=t(138),m=t.n(u),p=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(s.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=c.a.createRef(),t}return Object(i.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(c.a.Component))},141:function(e,n,t){},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),l=t.n(a),r=t(26),s=t(297),i=t(295),o=t(114),c=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=c();return l.a.createElement("div",{className:e.root},l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/introAngular",className:e.line},"AI")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/tensorflow",className:e.line},"Tensorflow")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/tensors",className:e.line},"Tensorboards")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/angCompiler",className:e.line},"Compiler")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/neural",className:e.line},"NeuralKeras")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/activationFunctions",className:e.line},"activationFuncs")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/loss",className:e.line},"Loss")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/gradientNeural",className:e.line},"GradientNeural")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/stochastic",className:e.line},"Stochastic")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/benchmarking",className:e.line},"Benchmarking")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/customer",className:e.line},"Customer")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/regularizationDeep",className:e.line},"Regularization Deep")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/imbalanced",className:e.line},"Imbalanced")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/imbalanced2",className:e.line},"Imbalanced2")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/convolutionals",className:e.line},"Convolutionals")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/data_augmentation",className:e.line},"data Augmentation")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/transfer",className:e.line},"Transfer")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/word_embedding",className:e.line},"Embedding")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/datatypests",className:e.line},"Datatypes")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/typeScript_2",className:e.line},"TS Function")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/typeScript_4",className:e.line},"Type Assertion"))),l.a.createElement("div",null))}},449:function(e,n,t){"use strict";t.r(n);var a=t(45),l=t(28),r=t(136),s=t(137),i=t(139),o=t(0),c=t.n(o),u=t(138),m=t.n(u),p=t(120),b=t(57),d=t(296),g=t(5),E=(t(141),t(150)),h=t(140),y={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},f="\nTypeScript Types => Static, Generics, Decorators\nStatic => Built-in, User-Defined\nBuilt-in Type => Number, String, Boolean, Void, Null\nUser-Defined Type => Array, Touple, Enum, Class, Interface, Functions\n".trim(),v="\nfunction typeAnotation(a:number, str:string, isActive:boolean){\n  return console.log(a, str, isActive);\n}\n\ntypeAnotation(1, 'Mukesh', true)\n".trim(),w="\nconst drawPoint = (point: {x:number, y:number})=>{\n  return console.log(point.x, point.y)\n}\n\ndrawPoint({x:1, y:2});\n\n\n// Better way is use interface as\n interface Poiny{\n   x:number,\n   y:number\n }\n".trim(),k="\n//1\nfunction add(n1:number,n2:number){\n  console.log(typeof n1)\n  return console.log(n1+n2);\n}\n\nconst number1=5;\nconst number2=10.3;\nadd(number1,number2);\n\n\n//2\nfunction add(n1:number,n2:number){\n  if(typeof n1 !=='number' || typeof n2 !=='number'){\n    throw new Error('Incorrect input')\n  }\n  return console.log(n1+n2);\n}\n\nconst number='5';\nconst number2=10.3;\nadd(number,number2);\n\n\n//3\nfunction add(n1:number,n2:number, showResult:boolean,phrase:string){\n  if(showResult){\n    console.log(phrase,n1+n2)\n  }\n  else{\n    return n1+n2;\n  }\n}\n\nconst number1=5;\nconst number2=10.3;\nconst printResult=true;\nconst resultPhrase='Result is:'\n\nadd(number1,number2,printResult,resultPhrase);\n".trim(),A="\n// const person: {\n//   name:string;\n//   id:number;\n// }={\n  \n  const person= {\n  name:'Rakesh',\n  id:1\n}\n\nconsole.log(person.name)\n".trim(),j="\nconst person= {\n  name:'Rakesh',\n  id:1,\n  hobbies:['Sports','Cooking']\n}\n\nlet favaateActivites:any[];\nfavaateActivites=['Sports',1]\n\nfor(const hobby of person.hobbies){\n  console.log(hobby)\n}\n".trim(),T="\nlet useInput: unknown; \nlet userName: string;\n\nuseInput=5;\nuseInput='Mukesh'\nif(typeof useInput === 'string'){\n  userName= useInput\n}\n\n\n//2\nfunction generateError(message:string, code:number):never {\n  throw{message:message, errorCode:code};\n}\n\nconst result = generateError('An Error Occured',500);\nconsole.log(result)\n".trim(),S="\nconst person:{\n  name:string;\n  id:number;\n  hobbies:string[];\n  role:[number,string]                                                              // this mark tuple types\n}= {\nname:'Rakesh',\nid:1,\nhobbies:['Sports','Cooking'],\nrole:[2,'Author']\n}\n\nperson.role.push('admin')\nperson.role[0]=10;\n\nfor(const hobby of person.hobbies){\nconsole.log(hobby)\n}\n".trim(),N="\nenum Color {Red, Green, Blue};\nlet c: Color;\nColorColor = Color.Green; \n".trim(),R="\n// const ADMIN=0;\n// const READ_ONLY=1;\n// const AUTHOR=2;\n\nenum Role {ADMIN,READ_ONLY,AUTHOR}\nenum Role {ADMIN=5,READ_ONLY,AUTHOR}\n\nconst person= {\n  name:'Rakesh',\n  id:1,\n  hobbies:['Sports','Cooking'],\n  role:Role.AUTHOR\n}\n\nlet favaateActivites:any[];\nfavaateActivites=['Sports']\n\nfor(const hobby of person.hobbies){\n  console.log(hobby)\n}\n\nif(person.role===Role.AUTHOR){\n  console.log('Is read only')\n}\n".trim(),I="\nfunction add(n1:number, n2:number){\n  return console.log(n1+n2);\n}\n\nlet combineValues:Function;\ncombineValues=add;\ncombineValues(1,3)\n\n\n//2\nfunction add(n1:number, n2:number){\n  return n1+n2;\n}\n\nlet combineValues:(a:number, b:number)=>number;\ncombineValues=add;\nconsole.log(combineValues(1,3))\n\n\n//3\nfunction addAndHandle(n1:number, n2:number, cb:(num:number)=>void){\n  const result = n1 + n2;\n  cb(result);\n}\n\naddAndHandle(10,20,(result)=>{\n  console.log(result)\n})\n".trim(),P='\nconst names = ["Alice", "Bob", "Eve"];\n\nnames.forEach((s) => {\n  console.log(s.toUpperCase());\n});'.trim(),O="\nfunction union(n1:number | string | boolean, n2:number|string){\n  const result = n1;\n  return  console.log(result);\n}\n\nconst combine=union(10,30)\ncombine;\n\n\n//2\nconst popStack = (stack: string[]) => {\n  if (stack.length) {\n    return stack[stack.length-1];                                                 // return type is any\n  } else {\n    return null;                                                                  // return type is null\n  }\n};\nlet toys: string[] = ['Doll', 'Ball', 'Marbles'];\nlet emptyBin: string[] = [];\nlet item: string | null = popStack(toys);                                         // item has union type\nconsole.log(item);                                                                // Prints \"Marbles\"\nitem = popStack(emptyBin);\nconsole.log(item);                                                                // Prints null\n\n\n//3\nconst removeDashes = (id: string | number) => {\n  if (typeof id === 'string') {\n    id = id.split('-').join('');\n    return parseInt(id);\n  } else {\n    return id;\n  }\n} \n                                                    \nlet ids: (number | string)[] = ['93-235-66', '89-528-92'];                        // This is a union of array types\nlet newIds: (number | string)[] = [];\nfor (let i=0; i < ids.length; i++) {\n  newIds[i] = removeDashes(ids[i]);                                               // Convert string id to number id\n}\nconsole.log(newIds); \n\n\n//4\n// This is a union of string literal types\ntype RPS = 'rock' | 'paper' | 'scissors' ;\nconst play = (choice: RPS): void => {\n  console.log('You: ', choice);\n  let result: string = '';\n  switch (choice) {\n    case 'rock':\n      result = 'paper';\n      break;\n    case 'paper':\n      result = 'scissors';\n      break;\n    case 'scissors':\n      result = 'rock';\n      break;\n  }\n  console.log('Me: ', result);\n}\nconst number = Math.floor(Math.random()*3);\nlet choices: [RPS, RPS, RPS] = ['rock', 'paper', 'scissors'];\nplay(choices[number]);  \n".trim(),C="\nfunction add(n1:number, n2:number){\n  const result = n1;\n  return result;\n}\n\nfunction printResult(num:number):void {\n  console.log('Result', num)\n}\n\nconsole.log(printResult(add(10,30)))                                                    //get undefined\n".trim(),D="\nconst button = document.querySelector('button');\n\nif(button){\n  button.addEventListener('click', ()=>{\n    console.log('Clicked')\n  })\n}\n\n\n//2\nconst button = document.querySelector('button');\n\nfunction clickHandler(message: string){\n  console.log('Clicked', message)\n}\n\nif(button){\n  button.addEventListener('click',clickHandler.bind(null, \"You welcome\"))\n}\n".trim(),x="\nfunction greet(name:string, greeting:string='Ritesh'):string{\n  return greeting\n}\n\nconsole.log(greet('Rakesh'))\n".trim(),M='\nfunction show<T>(args:T):T{\n  return args;\n}\n\nvar output=show<string>("String")\nvar output2=show<number>(1)\n\nconsole.log(output);\nconsole.log(output2);\n'.trim(),U='\n//Tuple:\nlet empTuple = ["JavaTpoint", 101, "Abhishek"];\nfunction display(tuple_values:any[]) {\n   for(let i = 0;i<empTuple.length;i++) {\n      console.log(empTuple[i]);\n   }\n}\n\ndisplay(empTuple);\n\n\n//Union:\nfunction display(value: (number | string)) {\n    if(typeof(value) === "number")\n        console.log(value);\n    else if(typeof(value) === "string")\n        console.log(value);\n}\n\ndisplay(123);\ndisplay("ABC");'.trim(),H='\nfunction greet(name:string, greeting?:string){\n  return console.log(name, greeting)\n}\n\ngreet(\'Rakesh\')\n\n\n//2\nfunction printName(obj: {first: string; last?: string}) {\n  if (obj.last !== undefined) {\n    console.log(obj.last.toUpperCase());\n  }\n\n  console.log(obj.last?.toUpperCase());\n}\n\nprintName({ first: "Bob" });\nprintName({first: "Alice", last: "Alisson"})\n'.trim(),B="\n\nfunction greet(name:string, ...greeting:string[]){\n  return console.log(name, greeting)\n}\n\ngreet('Rakesh','Mukesh','John','Ritesh','Nitesh','God')\n".trim(),F=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xs:2},c.a.createElement(b.a,{className:e.paper},c.a.createElement("h4",null,c.a.createElement(E.a,null)))),c.a.createElement(p.a,{item:!0,xs:10},c.a.createElement(b.a,{className:e.paper},c.a.createElement(d.a,null,c.a.createElement("h3",null,"1. What is TypeScript?"),c.a.createElement("ul",null,c.a.createElement("li",null,"TypeScript is superset of js."),c.a.createElement("br",null),c.a.createElement("li",null,"It's an open-source pure object-oriented programing language(means support such as classes, interface, inheritance, generics, etc). it is a strongly typed suerset of js which compiles to plain js. It contains all of elements of js. It's a language designed for large-scale js application development, which can be executed on any browser, any Host. TypeScript is the ES6 version of js with some additionam features."),c.a.createElement("br",null),c.a.createElement("b",null,"Why use TypeScript."),c.a.createElement("br",null),c.a.createElement("li",null,"TypeScript supports Static typing, Strongly type, Modules, Optional Parameters, etc."),c.a.createElement("li",null,"It supports OOPS programing features such as classes, inheritance, etc."),c.a.createElement("li",null,"It fast, simple."),c.a.createElement("li",null,"It provides the error-checking feature at compilation time. It will compiles the code, and if any error found, then it highlighten the mistakes before the script is run."),c.a.createElement("br",null),c.a.createElement("b",null,"Advantages of TypeScript over js"),c.a.createElement("br",null),c.a.createElement("li",null,"TypeScript always highlights errors at compilation time, whereas js points out at the runtime."),c.a.createElement("li",null,"It has a namespace concept by defining a module."),c.a.createElement("br",null),c.a.createElement("p",null,"Small set of primitive types available in JavaScript: ",c.a.createElement("br",null),c.a.createElement("b",null,"boolean, bigint, null, number, string, symbol, and undefined,")," which can use in an interface.",c.a.createElement("br",null),c.a.createElement("br",null),"TypeScript extends this list with a few more, such as :",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"any: "),"allow anything."),c.a.createElement("li",null,c.a.createElement("b",null,"unknown: "),"ensure someone using this type declares what the type is."),c.a.createElement("li",null,c.a.createElement("b",null,"never: "),"it\u2019s not possible that this type could happen.")))),c.a.createElement("br",null),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:f,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:k,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"2. TypeScript Annotation"),c.a.createElement("li",null,"type annotation means declared data types during varriable initializtion."),c.a.createElement("li",null,"Js is not a typed language. It means we can't specify the type of a variable. However, TypeScript is a typed language, where we can specify the type of the variables, function Parameters and object properties."),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:v,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"Inline annotation"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:w,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"3. Object"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:A,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"4. Arrays"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:j,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"5. Any"),c.a.createElement("ul",null,c.a.createElement("li",null,"unknown is less similar to any."),c.a.createElement("li",null,"never type return anything.")),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:T,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"6. Tuple"),c.a.createElement("ul",null,c.a.createElement("li",null,"Fixed length array and fixed data type")),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:S,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"7. Enum"),"Enums allows for describing a value which could be one of a set of possible named constants.",c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:N,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:R,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"8. Function Type"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:I,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"9. Anonymous Functions"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:P,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"10. Composing Types:"),"With TypeScript, can create complex types by combining simple ones. There are two popular ways to do so:",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"Unions: "),"Can declare that a type could be one of many types."),c.a.createElement("li",null,"Generics")),c.a.createElement("br",null),c.a.createElement("b",null,"1. Union"),c.a.createElement("br",null),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:O,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("b",null,"2. Generic"),c.a.createElement("br",null),c.a.createElement("ul",null,c.a.createElement("li",null,"Generics provide variables to types. ",c.a.createElement("b",null,"Ex.")," An array without generics could contain anything. An array with generics can describe the values that the array contains.")),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:M,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"Tuple And Union"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:U,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"11. Void"),c.a.createElement("ul",null,c.a.createElement("li",null,"Void means, function doesn't return anything. It's used where no data type is accessible."),c.a.createElement("li",null,"A variable of type void is not useful because we can only assign undefined or null to them."),c.a.createElement("li",null,"An undefined data type denotes uninitialized variable, whereas null represents a variable whose value is undefined."),c.a.createElement("br",null),c.a.createElement("b",null,"Any Type"),c.a.createElement("li",null,"It's the 'super type' of all data type in TypeScript. It's used to represents any js value. It allows us to opt-in and opt-out of type-checking during compilation. If a variable cannot be represented in any of the basic data types, then it can be declared using \"Any\" data type. Any type is useful when we do not know about the type of value(which might come from an API), and we want to skip the type-checking on compile time."),c.a.createElement("br",null)),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:C,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"12. Click"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:D,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"13. Default Parameters"),c.a.createElement("ul",null,c.a.createElement("li",null,"TypeScript provides the Option to add default values to Parameters. So, if the user does not provide a value to an argument, TypeScript will initialize the Parameter with the default value. Default Parameters have the same behaviour as Optional Parameters. If a value is not passed for the default Parameters in a function call, the default Parameter must follow the required Parameters in the function signature. Hence, default Parameters can be omitted while calling a function. However, if a function signature has a default Parameter before a required Parameter, the function can still be called, provided the default Parameter is passed a value of undefined.")),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:x,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"14. Optional Parameter"),c.a.createElement("ul",null,c.a.createElement("li",null,"The parameters that may or may not receive a value can be appended with a '?' to mark then as optional."),c.a.createElement("li",null,"All optional parameters must follow required parameters and should be at the end.")),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:H,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"15. Rest Parameter"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:B,language:"js",plugins:["line-numbers"]}))))))}}]),n}(o.Component);n.default=Object(g.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(F)}}]);
//# sourceMappingURL=98.262a53b1.chunk.js.map