(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[84],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(45),l=t(28),r=t(136),c=t(137),s=t(139),o=t(0),u=t.n(o),i=t(138),m=t.n(i),d=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(c.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=u.a.createRef(),t}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return u.a.createElement("pre",{className:"code-prism"},u.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(u.a.Component))},141:function(e,n,t){},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),l=t.n(a),r=t(26),c=t(297),s=t(295),o=t(114),u=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function i(){var e=u();return l.a.createElement("div",{className:e.root},l.a.createElement(s.a,null,l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/introReact",className:e.line},"Intro-Lazy-Children")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/reactInter",className:e.line},"Intro")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/codingInter",className:e.line},"CodesPro")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/mainCompo",className:e.line},"Event-hoc-form",l.a.createElement("br",null),"curd-slider")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/pureComp",className:e.line},"PureComp-conComp")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/useStates",className:e.line},"useMultiState")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/contextHooks",className:e.line},"Context Hooks")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/customHooks",className:e.line},"CustomHooks-memo")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/useReducersSta",className:e.line},"UseReducers")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/contextMethods",className:e.line},"Curd Hooks")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/jsonPlaceholder",className:e.line},"JsonPlaceholder")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/async_await",className:e.line},"Async-await-sideMenu",l.a.createElement("br",null),"Mouse hover")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/ticGame",className:e.line},"Share-maxMinDate",l.a.createElement("br",null),"moveBtn-slideshow")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/linkGet",className:e.line},"LinkGet")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/numberFormats",className:e.line},"Random NumFor-biToDe",l.a.createElement("br",null)," Validations Step DateTimw")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/models",className:e.line},"Models-chidData-csv",l.a.createElement("br",null),"Icon-router")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/like",className:e.line},"Like-checkbox-radio",l.a.createElement("br",null),"select-scroll")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/textEditors",className:e.line},"TextEditors-paginations",l.a.createElement("br",null),"translator-sortCheck")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/sortItems",className:e.line},"IncOnClick-pushBtn-fizzBuzz",l.a.createElement("br",null),"show-addDocs-ratings")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/serverSideRend",className:e.line},"Jwt-multiSel")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/dropdownSelect",className:e.line},"SelectFtr-checkFtr-updtCrd")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/kanban",className:e.line},"Kanban")),l.a.createElement(c.a,null,l.a.createElement(r.b,{to:"/hackeRank",className:e.line},"HackeRank"))),l.a.createElement("div",null))}},311:function(e,n,t){"use strict";t.r(n);var a=t(45),l=t(28),r=t(136),c=t(137),s=t(139),o=t(0),u=t.n(o),i=t(138),m=t.n(i),d=t(120),E=t(57),f=t(296),b=t(5),g=(t(141),t(148)),p=t(140),v={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},h="\nconst Score = () => {\n  const [teamScores, setTeamScores] = useState({\n    currentScore: 0,\n    totalScore: 308,\n    totalOvers: 1,\n    netRunRate: 6.5,\n    netRunRate2: 6.0,\n  });\n\n  const [seconds, setSeconds] = useState(0);\n  const [isActive, setIsActive] = useState(false);\n  const [balls, setBalls] = useState(6);\n  const [overs, setOvers] = useState(['0', '1', '2', '3', '4', '5', '6', 'wk', 'wd', 'nb'])\n\n  const toggle = () => {\n    setIsActive(!isActive);\n  }\n  \n  // const handleCount = () => {\n  //   if (balls >= 1) {\n  //     setBalls([balls - 1, teamScores.isPlay=true])\n  //   }\n  // }\n\n  useEffect(() => {\n    let interval = null;\n    if (isActive && seconds <= 3) {\n      interval = setInterval(() => {\n        setSeconds(seconds => seconds + 1);\n        if(balls>0){\n          setBalls(balls - 1);\n          setOvers([...overs, {\n          id: overs.length,\n          values: overs[Math.floor(Math.random() * overs.length)]+\"\"\n          }])\n        }\n      }, 1000);\n    } \n    else if (seconds === 4) {\n      setSeconds(0);\n    }\n    \n    return () => clearInterval(interval);\n  }, [isActive, seconds, overs]);\n  \n  \n  const lastScore = overs[Math.floor(Math.random() * overs.length)];\n\n  return (\n    <div>\n      <div>\n        <h3>Total Score: {teamScores.totalScore}</h3>\n        <p>Total Overs: {teamScores.totalOvers}</p>\n        <p>Current Run Rate: {teamScores.netRunRate2}</p>\n        <b>Remaining Balls: {balls}</b>\n      </div>\n\n        <button\n          className={''$'{ isActive ?\"active\": \"inactive\"}'} onClick={toggle}>\n          {isActive ? \"Pause\" : \"Start\"}\n        </button>\n    </div>\n  )\n}\n".trim(),S='\nimport { useCallback, useState, useEffect } from "react";\n\n\nfunction Child({ returnComment }) {\n  useEffect(() => {\n  }, [returnComment]);\n\n  return <div>{returnComment("Pedro")}</div>;\n}\n\nexport default function CallBackTutorial() {\n  const [toggle, setToggle] = useState(false);\n  const [data, setData] = useState("Yo, pls sub to the channel!");\n\n  const returnComment = useCallback(\n    (name) => {\n      return data + name;\n    },\n    [data]\n  );\n\n  return (\n    <div className="App">\n      <Child returnComment={returnComment} />\n\n      <button\n        onClick={() => {\n          setToggle(!toggle);\n        }}\n      >\n        {" "}\n        Toggle\n      </button>\n      {toggle && <h1> toggle </h1>}\n    </div>\n  );\n}\n'.trim(),k='\nimport React, { forwardRef, useImperativeHandle, useState, useRef } from "react";\n\n\nconst Button = forwardRef((props, ref) => {\n  const [toggle, setToggle] = useState(false);\n\n  useImperativeHandle(ref, () => ({\n    alterToggle() {\n      setToggle(!toggle);\n    },\n  }));\n  return (\n    <>\n      <button>Button From Child</button>\n      {toggle && <span>Toggle</span>}\n    </>\n  );\n});\n\nfunction ImperativeHandle() {\n  const buttonRef = useRef(null);\n  return (\n    <div>\n      <button\n        onClick={() => {\n          buttonRef.current.alterToggle();\n        }}\n      >\n        Button From Parent\n      </button>\n      <Button ref={buttonRef} />\n    </div>\n  );\n}\n\nexport default ImperativeHandle;\n'.trim(),C='\nimport { useLayoutEffect, useEffect, useRef } from "react";\n\nfunction LayoutEffectTutorial() {\n  const inputRef = useRef(null);\n\n  useLayoutEffect(() => {\n    console.log(inputRef.current.value);\n  }, []);\n\n  useEffect(() => {\n    inputRef.current.value = "HELLO";\n  }, []);\n\n  return (\n    <div className="App">\n      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />\n    </div>\n  );\n}'.trim(),R=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return u.a.createElement(d.a,{container:!0},u.a.createElement(d.a,{item:!0,xs:2},u.a.createElement(E.a,{className:e.paper},u.a.createElement("h4",null,u.a.createElement(g.a,null)))),u.a.createElement(d.a,{item:!0,xs:10},u.a.createElement(E.a,{className:e.paper},u.a.createElement(f.a,null,u.a.createElement("h3",null,"1. MultiState"),u.a.createElement("div",{style:v},u.a.createElement(p.a,{code:h,language:"js",plugins:["line-numbers"]})),u.a.createElement("br",null),u.a.createElement("h3",null,"2. useCallback"),u.a.createElement("div",{style:v},u.a.createElement(p.a,{code:S,language:"js",plugins:["line-numbers"]})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("b",null,"3. UseImperativeHandle"),u.a.createElement("div",{style:v},u.a.createElement(p.a,{code:k,language:"js",plugins:["line-numbers"]})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("b",null,"4. UseLayoutEffect"),u.a.createElement("div",{style:v},u.a.createElement(p.a,{code:C,language:"js",plugins:["line-numbers"]}))))))}}]),n}(o.Component);n.default=Object(b.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(R)}}]);
//# sourceMappingURL=84.514cc337.chunk.js.map