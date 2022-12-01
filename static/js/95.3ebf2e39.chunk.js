(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[95],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(45),r=t(28),l=t(136),i=t(137),c=t(139),s=t(0),o=t.n(s),u=t(138),m=t.n(u),d=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(i.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=o.a.createRef(),t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(o.a.Component))},141:function(e,n,t){},152:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t.n(a),l=t(26),i=t(297),c=t(295),s=t(114),o=Object(s.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=o();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/introAlgo",className:e.line},"Deadlock")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/Stack",className:e.line},"Stack")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/Queue",className:e.line},"Queue")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/linkedList",className:e.line},"LinkedList")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/heap",className:e.line},"Heap")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/trees",className:e.line},"Tree")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/graph",className:e.line},"Graph")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/sort",className:e.line},"QuickSort")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/searchAlgo",className:e.line},"Search")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/topTech",className:e.line},"TopTech")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/stringAlgo",className:e.line},"String")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/arrayAlgo",className:e.line},"Array")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/nestingArrAlgo",className:e.line},"Nesting Array")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/numbersAlgo",className:e.line},"Numbers")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/gameAlgo",className:e.line},"Game")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/arrayStrAlgo",className:e.line},"ArrayStr")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/arrayNumAlgo",className:e.line},"ArrayNum")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/dslogic8",className:e.line},"Logic8"))),r.a.createElement("div",null))}},432:function(e,n,t){"use strict";t.r(n);var a=t(45),r=t(28),l=t(136),i=t(137),c=t(139),s=t(0),o=t.n(s),u=t(138),m=t.n(u),d=t(120),h=t(57),p=t(296),E=t(5),f=(t(141),t(152)),x=t(140),g={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},b="\nconst hasCycle = (head) => {\n  const aux = (current, next) => {\n    if (!current || !next || !next.next || !next.next.next) {\n      return false\n    }\n    if (current === next) {\n      return true\n    }\n    return aux(current.next, next.next.next)\n  }\n  if (!head || !head.next) {\n    return false\n  }\n  return aux(head, head.next)\n}\n\nconsole.log(hasCycle(3,2,0,-4, 1))".trim(),k="\nconst removeNthFromEnd = (head, n) => {\n  let h1 = head\n  let h2 = null\n  let count = 0\n  while (h1) {\n    count += 1\n    h1 = h1.next\n    if (h2) {\n      h2 = h2.next\n    }\n    if (count === n + 1) {\n      h2 = head\n    }\n  }\n  if (!h2) {\n    return head ? head.next : null\n  }\n  h2.next = h2.next.next\n  return head\n}".trim(),v="\nconst mergeTwoLists = (l1, l2) => {\n  const aux = (current1, current2, acc) => {\n    if (!current1) {\n      acc.next = current2\n      return acc\n    }\n    if (!current2) {\n      acc.next = current1\n      return acc\n    }\n    if (current1.val < current2.val) {\n      acc.next = {\n        val: current1.val,\n        next: null,\n      }\n      return aux(current1.next, current2, acc.next)\n    }\n    acc.next = {\n      val: current2.val,\n      next: null,\n    }\n    return aux(current2.next, current1, acc.next)\n  }\n  const head = { val: null, next: null }\n  aux(l1, l2, head)\n    return head.next\n}".trim(),y="const swap = (a, b, arr) => { \n  if (a !== b) {\n    const temp = arr[a]\n    arr[a] = arr[b] \n    arr[b] = temp \n  }\n}\n\nconst Heap = compareFn => (arr = []) => {\n  const left = index => 2 * index + 1\n  const right = index => 2 * index + 2\n  const parent = index => Math.floor((index - 1) / 2)\n  const size = () => arr.length\n\n  // log(n)\n  const heapify = (index) => {\n    const l = left(index)\n    const r = right(index)\n    let current = index\n    if ((l < size()) && compareFn(arr[current], arr[l]) > 0) {\n      current = l\n    }\n    if ((r < size()) && compareFn(arr[current], arr[r]) > 0) {\n      current = r\n    }\n    if (current !== index) {\n      swap(current, index, arr)\n      heapify(current)\n    }\n  }\n  // log(n)\n  const heapifyUp = (index) => {\n    const p = parent(index)\n    if (p >= 0 && compareFn(arr[p], arr[index]) > 0) {\n      swap(p, index, arr)\n      heapifyUp(p)\n    }\n  }\n  // O(n)\n  const buildHeap = () => {\n    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {\n      heapify(i)\n    }\n  }\n  const extract = () => {\n    swap(0, arr.length - 1, arr)\n    const top = arr.pop()\n    heapify(0)\n    return top\n  }\n  const remove = (item) => {\n    const index = arr.findIndex(x => compareFn(x, item) === 0)\n    if (index === -1) {\n      return\n    }\n    arr[index] = arr.pop() // eslint-disable-line\n    const p = parent(index)\n    if (p < 0 || compareFn(p, arr[index]) < 0) {\n      heapify(index)\n    } else {\n      heapifyUp(index)\n    }\n  }\n  buildHeap()\n  return {\n    getHeap: () => arr,\n    peek: () => {\n      if (arr.length === 0) {\n        return null\n      }\n      return arr[0]\n    },\n    add: (item) => {\n      arr.push(item)\n      heapifyUp(arr.length - 1)\n    },\n    extract,\n    remove,\n    size,\n  }\n}\n\nconst mergeKLists = (lists = []) => {\n  const minHeap = Heap((a, b) => a.val - b.val)([])\n  lists.forEach((node) => {\n    if (node) {\n      minHeap.add(node)\n    }\n  })\n  const head = minHeap.extract() || null\n  let current = head\n  while (minHeap.size() > 0) {\n      console.log(minHeap.size())\n    if (current.next) {\n      minHeap.add(current.next)\n    }\n    current.next = minHeap.extract()\n    current = current.next\n  }\n  return head\n}\n\nconsole.log(swap([[1,4,5],[1,3,4],[2,6]]))".trim(),N=function(e){function n(){return Object(a.a)(this,n),Object(l.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:2},o.a.createElement(h.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(f.a,null)))),o.a.createElement(d.a,{item:!0,xs:10},o.a.createElement(h.a,{className:e.paper},o.a.createElement(p.a,null,o.a.createElement("h3",null,"Linked List"),o.a.createElement("ol",null,o.a.createElement("li",null,"Like arrays, Linked Lists store data elements in sequential order. Instead of keeping indexes, linked lists hold pointers to other elements. The first node is called the head while the last node is called the tail."),o.a.createElement("br",null),o.a.createElement("li",null,"Linked lists have constant-time insertions and deletions because we can just change the pointers. To do the same operations in arrays requires linear time because subsequent items need to be shifted over."),o.a.createElement("br",null),o.a.createElement("li",null,"Like arrays, linked lists can operate as stacks. It\u2019s as simple as having the head be the only place for insertion and removal.",o.a.createElement("br",null),"Linked lists can also operate as queues with the help of doubly-linked list, where insertion occurs at the tail and removal occurs at the head."),o.a.createElement("br",null),o.a.createElement("li",null,"Linked lists are useful on both the client and server."),o.a.createElement("ul",null,o.a.createElement("li",null,"On the client, state management libraries like Redux structure its middleware logic in a linked-list fashion. When actions are dispatched, they are piped from one middleware to the next until all is visited before reaching the reducers."),o.a.createElement("li",null,"On the server, web frameworks like Express also structure its middleware logic in a similar fashion. When a request is received, it is piped from one middleware to the next until a response is issued.")),o.a.createElement("br",null),o.a.createElement("li",null,"Links in a linked list do not have indexes."),o.a.createElement("li",null,"A linked list grows and shrinks as it is edited. Do not need to predetermine it's size.")),o.a.createElement("br",null),o.a.createElement("b",null,"Functions -")," add, remove, indexOf, elementAt, addAt, removeAt, view.",o.a.createElement("br",null),o.a.createElement("h3",null,"1. Linked List Cycle."),"Given head, the head of a linked list, determine if the linked list has a cycle in it.",o.a.createElement("br",null),"There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.",o.a.createElement("br",null),"Return true if there is a cycle in the linked list. Otherwise, return false",o.a.createElement("div",{style:g},o.a.createElement(x.a,{code:b,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"4. Remove Nth Node From End of List"),o.a.createElement("div",{style:g},o.a.createElement(x.a,{code:k,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"6. Merge Two Sorted Lists."),"Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",o.a.createElement("div",{style:g},o.a.createElement(x.a,{code:v,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"8. Merge k Sorted Lists."),"You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",o.a.createElement("br",null),"Merge all the linked-lists into one sorted linked-list and return it.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"Example: "),o.a.createElement("br",null),o.a.createElement("b",null,"Input: "),"lists = [[1,4,5],[1,3,4],[2,6]]",o.a.createElement("br",null),o.a.createElement("b",null,"Output: "),"[1,1,2,3,4,4,5,6]",o.a.createElement("div",{style:g},o.a.createElement(x.a,{code:y,language:"js",plugins:["line-numbers"]}))))))}}]),n}(s.Component);n.default=Object(E.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(N)}}]);
//# sourceMappingURL=95.3ebf2e39.chunk.js.map