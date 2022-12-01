(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[96],{140:function(e,a,n){"use strict";n.d(a,"a",(function(){return h}));var t=n(45),l=n(28),r=n(136),i=n(137),c=n(139),s=n(0),o=n.n(s),m=n(138),u=n.n(m),h=(n(59),function(e){function a(e){var n;return Object(t.a)(this,a),(n=Object(r.a)(this,Object(i.a)(a).call(this,e))).highlight=function(){n.ref&&n.ref.current&&u.a.highlightElement(n.ref.current)},n.ref=o.a.createRef(),n}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,a=e.code,n=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(n)},a.trim()))}}]),a}(o.a.Component))},141:function(e,a,n){},152:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(0),l=n.n(t),r=n(26),i=n(297),c=n(295),s=n(114),o=Object(s.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=o();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/introAlgo",className:e.line},"Deadlock")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/Stack",className:e.line},"Stack")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/Queue",className:e.line},"Queue")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/linkedList",className:e.line},"LinkedList")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/heap",className:e.line},"Heap")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/trees",className:e.line},"Tree")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/graph",className:e.line},"Graph")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/sort",className:e.line},"QuickSort")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/searchAlgo",className:e.line},"Search")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/topTech",className:e.line},"TopTech")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/stringAlgo",className:e.line},"String")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/arrayAlgo",className:e.line},"Array")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/nestingArrAlgo",className:e.line},"Nesting Array")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/numbersAlgo",className:e.line},"Numbers")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/gameAlgo",className:e.line},"Game")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/arrayStrAlgo",className:e.line},"ArrayStr")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/arrayNumAlgo",className:e.line},"ArrayNum")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/dslogic8",className:e.line},"Logic8"))),l.a.createElement("div",null))}},436:function(e,a,n){"use strict";n.r(a);var t=n(45),l=n(28),r=n(136),i=n(137),c=n(139),s=n(0),o=n.n(s),m=n(138),u=n.n(m),h=n(120),E=n(57),g=n(296),d=n(5),f=(n(141),n(152)),p=n(140),b={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},N="\nfunction linearSearch(value, list) {\n  let found = false;\n  let position = -1;\n  let index = 0;\n\n  while(!found && index < list.length) {\n      if(list[index] == value) {\n          found = true;\n          position = index;\n      } else {\n          index += 1;\n      }\n  }\n  return console.log(position);\n}\n\nlinearSearch(3,[3,4,5,1,2,3,4,5])".trim(),v="\nfunction binarySearch(value, list) {\n  let first = 0;                                                                            //left endpoint.\n  let last = list.length - 1;                                                               //right endpoint.\n  let position = -1;\n  let found = false;\n  let middle;\n\n  while (found === false && first <= last) {\n      middle = Math.floor((first + last)/2);\n      if (list[middle] == value) {\n          found = true;\n          position = middle;\n      } else if (list[middle] > value) {                                                    //if in lower half.\n          last = middle - 1;\n      } else {                                                                              //in in upper half.\n          first = middle + 1;\n      }\n  }\n  return console.log(position);\n}\n\nbinarySearch(5,[4,5,1,2,3,4,5])".trim(),y=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(h.a,{container:!0},o.a.createElement(h.a,{item:!0,xs:2},o.a.createElement(E.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(f.a,null)))),o.a.createElement(h.a,{item:!0,xs:10},o.a.createElement(E.a,{className:e.paper},o.a.createElement(g.a,null,o.a.createElement("h3",null,"Linear Search"),o.a.createElement("i",null,"Linear Search is fine when we have a small number of elements. But when we are searching large lists that have thousands/ millions of elements, we need to use binary search."),o.a.createElement("div",{style:b},o.a.createElement(p.a,{code:N,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h3",null,"Binary Search"),o.a.createElement("div",{style:b},o.a.createElement(p.a,{code:v,language:"js",plugins:["line-numbers"]}))))))}}]),a}(s.Component);a.default=Object(d.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(y)}}]);
//# sourceMappingURL=96.162cdeb2.chunk.js.map