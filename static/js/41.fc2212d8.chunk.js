(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[41],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var l=t(45),a=t(28),r=t(136),i=t(137),o=t(139),u=t(0),s=t.n(u),c=t(138),m=t.n(c),h=(t(59),function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(r.a)(this,Object(i.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=s.a.createRef(),t}return Object(o.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return s.a.createElement("pre",{className:"code-prism"},s.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(s.a.Component))},141:function(e,n,t){},152:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var l=t(0),a=t.n(l),r=t(26),i=t(297),o=t(295),u=t(114),s=Object(u.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function c(){var e=s();return a.a.createElement("div",{className:e.root},a.a.createElement(o.a,null,a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/introAlgo",className:e.line},"Deadlock")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/Stack",className:e.line},"Stack")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/Queue",className:e.line},"Queue")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/linkedList",className:e.line},"LinkedList")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/heap",className:e.line},"Heap")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/trees",className:e.line},"Tree")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/graph",className:e.line},"Graph")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/sort",className:e.line},"QuickSort")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/searchAlgo",className:e.line},"Search")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/topTech",className:e.line},"TopTech")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/stringAlgo",className:e.line},"String")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/arrayAlgo",className:e.line},"Array")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/nestingArrAlgo",className:e.line},"Nesting Array")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/numbersAlgo",className:e.line},"Numbers")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/gameAlgo",className:e.line},"Game")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/arrayStrAlgo",className:e.line},"ArrayStr")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/arrayNumAlgo",className:e.line},"ArrayNum")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/dslogic8",className:e.line},"Logic8"))),a.a.createElement("div",null))}},157:function(e,n,t){e.exports=t.p+"static/media/stcks.7efa3b78.png"},447:function(e,n,t){"use strict";t.r(n);var l=t(45),a=t(28),r=t(136),i=t(137),o=t(139),u=t(0),s=t.n(u),c=t(138),m=t.n(c),h=t(120),d=t(57),f=t(296),g=t(5),E=(t(141),t(152)),p=t(140),b=(t(157),{backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"}),v="\nfunction TreeNode(val) {\n  this.val = val\n  this.left = null\n  this.right = null\n}\n\nconst generateTrees = (n) => {\n  if (n === 0) return [];\n\n  const numbers = new Array(n).fill(0).map((v, index) => index + 1)\n  const memo = {}\n\n  const compose = (number, left, right) => {\n    const result = []\n    for (let i = 0; i < left.length; i++) {\n      for (let j = 0; j < right.length; j++) {\n            const node = new TreeNode(number)\n            node.left = left[i]\n            node.right = right[j]\n            result.push(node)\n          }\n        }\n        return result\n      }\n\n  const aux = (list = []) => {\n    const key = list.toString()\n    if (memo[key] !== undefined) {\n      return memo[list.toString()]\n    }\n\n    if (list.length === 0) return [null]\n\n    memo[key] = list.reduce((acc, number) => {\n        acc.push(...compose(number, aux(list.filter(x => x < number)), aux(list.filter(x => x > number)),\n          ),\n        )\n        return acc\n      },\n      [],\n    )\n    return memo[key]\n  }\n  \n  return aux(numbers)\n}\n\nconsole.log(generateTrees(3))\n".trim(),y="\nfunction isValidBST(root) {\n  const aux = (node) => {\n    if (!node) return [true, null, null];\n\n    const [leftValid, leftMin, leftMax] = aux(node.left)\n    const [rightValid, rightMin, rightMax] = aux(node.right)\n    let valid = leftValid && rightValid\n\n    if (leftMax !== null && leftMax >= node.val) {\n      valid = false\n    }\n    if (rightMin !== null && rightMin <= node.val) {\n      valid = false\n    }\n    \n    const currentMin = leftMin === null ? node.val : leftMin\n    const currentMax = rightMax === null ? node.val : rightMax\n    return [valid, currentMin, currentMax]\n  }\n  return aux(root)[0]\n}\n\nconsole.log(isValidBST(3))\n".trim(),x="\nfunction recoverTree(root) {\n  let first = null\n  let second = null\n  let prev = null\n\n  const aux = (node) => {\n    if (node) {\n      aux(node.left)\n      if (prev && prev.val > node.val) {\n        if (!first) {\n          first = prev\n          second = node\n        } else {\n          second = node\n        }\n      }\n      prev = node\n      aux(node.right)\n    }\n  }\n  aux(root)\n\n  if (first && second) {\n    const temp = first.val\n    first.val = second.val\n    second.val = temp\n  }\n}\n\nconsole.log(recoverTree([1,3,null,2]))".trim(),S="\nfunction isSameTree(p, q) {\n  if ((p && !q) || (!p && q)) return false;\n  if (!p && !q) return true;\n\n  const leftSame = isSameTree(p.left, q.left)\n  const rightSame = isSameTree(p.right, q.right)\n  \n  return leftSame && rightSame && (p.val === q.val)\n}\n\nconsole.log(isSameTree([1,3,null,2], [1,3,null,2]))\n".trim(),T="\nfunction isSymmetric(root){\n  function aux (node, level, result){\n    if (!result[level]) {\n      result[level] = []\n    }\n\n    if (!node) {\n      result[level].push(null)\n      return result\n    }\n\n    result[level].push(node.val)\n    aux(node.left, level + 1, result)\n    aux(node.right, level + 1, result)\n    return result\n  }\n\n  function isSymmetricHelper (values = []){\n    for (let i = 0; i <= values.length / 2; i++) {\n      if (values[i] !== values[values.length - 1 - i]) {\n        return false\n      }\n    }\n    return true\n  }\n\n  const result = aux(root, 0, [])\n  for (let i = 0; i < result.length; i++) {\n    if (!isSymmetricHelper(result[i])) {\n      return false\n    }\n  }\n  return true\n}\n\nconsole.log(isSymmetric([1,2,2,3,4,4,3]))\n ".trim(),N="\nfunction sortedArrayToBST (nums = []){\n  const aux = (low, high) => {\n    if (low <= high) {\n      const middle = Math.floor((low + high) / 2)\n      const node = { val: nums[middle] }\n      \n      node.left = aux(low, middle - 1)\n      node.right = aux(middle + 1, high)\n      return node\n    }\n    return null\n  }\n  return aux(0, nums.length - 1)\n}\n\nconsole.log(sortedArrayToBST([3,9,20,null,null,15,7]))\n".trim(),w="\nfunction sortedListToBST(head) {\n  const nodes = []\n\n  while (head) {\n    head.left = null\n    head.right = null\n    nodes.push(head)\n    head = head.next\n  }\n\n  const aux = (nodes, low, high) => { \n    if (low > high) return null;\n\n    const middle = Math.floor((low + high) / 2)\n    nodes[middle].left = aux(nodes, low, middle - 1)\n    nodes[middle].right = aux(nodes, middle + 1, high)\n    return nodes[middle]\n  }\n  return aux(nodes, 0, nodes.length - 1)\n}\n\nconsole.log(sortedListToBST([-10,-3,0,5,9]))\n".trim(),k="\nfunction minDepth (root){\n  if (!root) return 0;\n\n  const aux = (node, depth) => {\n    if (!node || (!node.left && !node.right)) return depth;\n\n    if (node.left && !node.right) {\n      return aux(node.left, depth + 1)\n    }\n\n    if (node.right && !node.left) {\n      return aux(node.right, depth + 1)\n    }\n\n    const leftDepth = aux(node.left, depth + 1)\n    const rightDepth = aux(node.right, depth + 1)\n    return leftDepth < rightDepth ? leftDepth : rightDepth\n  }\n\n  return aux(root, 1)\n}\n\nconsole.log(minDepth([3,9,20,null,null,15,7]))\n".trim(),j="\nfunction hasPathSum (root, sum){\n  function aux (node, currentSum){\n    if (!node) return false;\n\n    if (node && !node.left && !node.right) {\n      return (currentSum + node.val) === sum\n    }\n    const isLeftHas = aux(node.left, currentSum + node.val)\n    const isRightHas = aux(node.right, currentSum + node.val)\n    return (isLeftHas || isRightHas)\n  }\n\n  if (root === null) return false;\n  return aux(root, 0)\n}\n\nconsole.log(hasPathSum([5,4,1],10))\n".trim(),M="\nfunction connect (root){\n  if (!root) return null;\n  let frontier = [root];\n\n  while (frontier.length) {\n    const next = []\n    frontier.forEach((node, index) => {\n      if (frontier[index + 1]) {\n        node.next = frontier[index + 1]\n      } else {\n        node.next = null\n      }\n      if (node.left) {\n        next.push(node.left)\n      }\n      if (node.right) {\n        next.push(node.right)\n      }\n    })\n    frontier = next\n  }\n  return root\n}\n\nconsole.log(connect([1,2,3,4,5,null,7]))\n".trim(),A=function(e){function n(){return Object(l.a)(this,n),Object(r.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(o.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(h.a,{container:!0},s.a.createElement(h.a,{item:!0,xs:2},s.a.createElement(d.a,{className:e.paper},s.a.createElement("h4",null,s.a.createElement(E.a,null)))),s.a.createElement(h.a,{item:!0,xs:10},s.a.createElement(d.a,{className:e.paper},s.a.createElement(f.a,null,s.a.createElement("h3",null,"1. Unique Binary Search Trees."),s.a.createElement("b",null,"Input: "),"3",s.a.createElement("br",null),s.a.createElement("b",null,"Output: "),"[",s.a.createElement("br",null),"[1,null,3,2],",s.a.createElement("br",null),"[3,2,null,1],",s.a.createElement("br",null),"[3,1,null,null,2],",s.a.createElement("br",null),"[2,1,3],",s.a.createElement("br",null),"[1,null,2,null,3] ]",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:v,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"2. Validate Binary Search Tree."),"Given a binary tree, determine if it is a valid binary search tree (BST).",s.a.createElement("br",null),"Assume a BST is defined as follows:",s.a.createElement("ul",null,s.a.createElement("li",null,"The left subtree of a node contains only nodes with keys less than the node's key."),s.a.createElement("li",null,"The right subtree of a node contains only nodes with keys greater than the node's key."),s.a.createElement("li",null,"Both the left and right subtrees must also be binary search trees.")),s.a.createElement("br",null),s.a.createElement("b",null,"Input: ")," [2,1,3]",s.a.createElement("b",null,"Output: ")," true",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Example 2: "),s.a.createElement("b",null,"Input: "),"[5,1,4,null,null,3,6]",s.a.createElement("br",null),s.a.createElement("b",null,"Output: "),"false",s.a.createElement("br",null),s.a.createElement("b",null,"Explanation: "),"The root node's value is 5 but its right child's value is 4.",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:y,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"3. Recover Binary Search Tree."),"Two elements of a binary search tree (BST) are swapped by mistake.",s.a.createElement("br",null),"Recover the tree without changing its structure. ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Input: ")," [3,1,4,null,null,2]",s.a.createElement("br",null),s.a.createElement("b",null,"Output: ")," [2,1,4,null,null,3]",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:x,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"4. Same Tree."),"Given two binary trees, write a function to check if they are the same or not.",s.a.createElement("br",null),"Two binary trees are considered the same if they are structurally identical and the nodes have the same value.",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:S,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"5. Symmetric Tree."),"Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:T,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"6. Convert Sorted Array to Binary Search Tree."),"Given an array where elements are sorted in ascending order, convert it to a height balanced BST.",s.a.createElement("br",null),"For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:N,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"7. Convert Sorted List to Binary Search Tree."),"Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.",s.a.createElement("br",null),"For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Input: "),"head = [-10,-3,0,5,9]",s.a.createElement("br",null),s.a.createElement("b",null,"Output: "),"[0,-3,9,-10,null,5]",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:w,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"8. Minimum Depth of Binary Tree."),"The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:k,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"9. Path Sum."),"Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.",s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:j,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"10. Populating Next Right Pointers in Each Node."),"Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.",s.a.createElement("br",null),"Initially, all next pointers are set to NULL.",s.a.createElement("br",null),s.a.createElement("ul",null,s.a.createElement("li",null,"You may only use constant extra space."),s.a.createElement("li",null,"Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.")),s.a.createElement("div",{style:b},s.a.createElement(p.a,{code:M,language:"js",plugins:["line-numbers"]}))))))}}]),n}(u.Component);n.default=Object(g.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(A)}}]);
//# sourceMappingURL=41.fc2212d8.chunk.js.map