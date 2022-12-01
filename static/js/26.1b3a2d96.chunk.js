(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[26],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(45),l=t(28),r=t(136),o=t(137),s=t(139),u=t(0),i=t.n(u),c=t(138),m=t.n(c),d=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(o.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=i.a.createRef(),t}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return i.a.createElement("pre",{className:"code-prism"},i.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(i.a.Component))},141:function(e,n,t){},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),l=t.n(a),r=t(26),o=t(297),s=t(295),u=t(114),i=Object(u.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function c(){var e=i();return l.a.createElement("div",{className:e.root},l.a.createElement(s.a,null,l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/introReact",className:e.line},"Intro-Lazy-Children")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/reactInter",className:e.line},"Intro")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/codingInter",className:e.line},"CodesPro")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/mainCompo",className:e.line},"Event-hoc-form",l.a.createElement("br",null),"curd-slider")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/pureComp",className:e.line},"PureComp-conComp")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/useStates",className:e.line},"useMultiState")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/contextHooks",className:e.line},"Context Hooks")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/customHooks",className:e.line},"CustomHooks-memo")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/useReducersSta",className:e.line},"UseReducers")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/contextMethods",className:e.line},"Curd Hooks")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/jsonPlaceholder",className:e.line},"JsonPlaceholder")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/async_await",className:e.line},"Async-await-sideMenu",l.a.createElement("br",null),"Mouse hover")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/ticGame",className:e.line},"Share-maxMinDate",l.a.createElement("br",null),"moveBtn-slideshow")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/linkGet",className:e.line},"LinkGet")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/numberFormats",className:e.line},"Random NumFor-biToDe",l.a.createElement("br",null)," Validations Step DateTimw")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/models",className:e.line},"Models-chidData-csv",l.a.createElement("br",null),"Icon-router")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/like",className:e.line},"Like-checkbox-radio",l.a.createElement("br",null),"select-scroll")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/textEditors",className:e.line},"TextEditors-paginations",l.a.createElement("br",null),"translator-sortCheck")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/sortItems",className:e.line},"IncOnClick-pushBtn-fizzBuzz",l.a.createElement("br",null),"show-addDocs-ratings")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/serverSideRend",className:e.line},"Jwt-multiSel")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/dropdownSelect",className:e.line},"SelectFtr-checkFtr-updtCrd")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/kanban",className:e.line},"Kanban")),l.a.createElement(o.a,null,l.a.createElement(r.b,{to:"/hackeRank",className:e.line},"HackeRank"))),l.a.createElement("div",null))}},166:function(e,n,t){e.exports=t.p+"static/media/pure.ed44cfe0.png"},294:function(e,n,t){"use strict";t.r(n);var a=t(45),l=t(28),r=t(136),o=t(137),s=t(139),u=t(0),i=t.n(u),c=t(138),m=t.n(c),d=t(120),p=t(57),h=t(296),b=t(5),E=(t(141),t(148)),C=t(140),g=t(166),f=t.n(g),v={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},y={height:350,width:600},k='\nconst quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];\n\nconst NotFound = () => {\n  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];\n  return (\n    <h1>\n      Quote: <strong>{randomQuote}</strong>\n    </h1>\n  );\n};\n\nexport default class Controll extends Component {\n  state = { username: "foo" };\n\n  componentDidMount() {\n    setTimeout(() => this.setState({ username: "bar" }), 2000); // Simulate async ajax call\n  }\n\n  render() {\n    return (\n      <div>\n        Welcome: {this.state.username}\n        <NotFound />\n      </div>\n    );\n  }\n}\n'.trim(),w='\nconst quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];\n\nclass NotFound extends React.PureComponent {\n  render() {\n    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];\n    return (\n      <h1>\n        Quote: <strong>{randomQuote}</strong>\n      </h1>\n    );\n  }\n}\n\nexport default class Controll extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { username: "foo" };\n  }\n\n  componentDidMount() {\n    setTimeout(() => this.setState({ username: "bar" }), 2000);\n  }\n\n  render() {\n    return (\n      <div>\n        Welcome: {this.state.username}\n        <NotFound />\n      </div>\n    );\n  }\n}\n'.trim(),x=("\n//App.js\nimport Task from '../comp';\n\nclass App extends PureComponent {\nstate = {\n     taskList: [\n        { title: 'excercise'},\n        { title: 'cooking'},\n        { title: 'Reacting'},\n     ]\n  };\n\n  componentDidMount() {\n  setInterval(() => {\n     this.setState({taskList: this.state.taskList});\n  }, 1000);\n}\n\nrender() {\n  return (\n      <div>\n         {this.state.taskList.map((task, i) => {\n            return (<Task\n               key={i}\n               title={task.title}\n            />);\n         })}\n      </div>\n    );\n  }\n}\n\nexport default App;\n\n\n//text.js\nclass Task extends React.Component {\n  render() {\n     console.log('task added');\n     return (\n          <div>\n            {this.props.title}\n          </div>);\n  }\n}\n\nexport default Task;\n".trim(),'\nclass PureComponent extends React.PureComponent {\n  renderCounter = 0\n\n  render() {\n    this.renderCounter++\n    return <h2>{this.props.name} rendered: {this.renderCounter}</h2>\n  }\n}\n\nclass ImpureComponent extends React.Component {\n  renderCounter = 0\n\n  render() {\n    this.renderCounter++\n    return <h2>{this.props.name} rendered: {this.renderCounter}</h2>\n  }\n}\n\nexport default class App extends React.Component {\n  state = { \n    renderCounter: 1,\n  }\n\n  onButtonPress = () => {\n    this.setState({ renderCounter: this.state.renderCounter + 1 })\n  }\n\n  render() {\n    return (\n      <div>\n        <h2>App rendered: {this.state.renderCounter}</h2>\n        <ImpureComponent name="Impure Child Component" />\n        <PureComponent name="Pure Child Component" />\n        <button id="button" onClick={this.onButtonPress}><h2>Trigger</h2></button>\n      </div>\n    )\n  }\n}'.trim()),N='\nlet pureCounter = 0\nlet impureCounter = 0\n\nconst PureComponent = React.memo(({ name }) => {\n  pureCounter++\n  \n  return <h2>{name} rendered: {pureCounter}</h2>\n})\n\nconst ImpureComponent = ({ name }) => {\n  impureCounter++\n\n    return <h2>{name} rendered: {impureCounter}</h2>\n}\n\nexport default class Controll extends React.Component {\n  state = { \n    renderCounter: 1,\n  }\n\n  onButtonPress = () => {\n    this.setState({ renderCounter: this.state.renderCounter + 1 })\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Pure Functional Component</h1>\n        <h2>App rendered: {this.state.renderCounter}</h2>\n        <ImpureComponent name="Impure Child Component" />\n        <PureComponent name="Pure Child Component" />\n        <button id="button" onClick={this.onButtonPress}><h2>Trigger Render</h2></button>\n      </div>\n    )\n  }\n}'.trim(),S='\nclass ComponentShouldComponentUpdate extends React.Component {\n  renderCounter = 0\n\n  shouldComponentUpdate(nextProps) {\n    return nextProps.name !== this.props.name\n  }\n\n  render() {\n    this.renderCounter++\n    return <h2>{this.props.name} rendered: {this.renderCounter}</h2>\n  }\n}\n\nclass Component extends React.Component {\n  renderCounter = 0\n\n  render() {\n    this.renderCounter++\n    return <h2>{this.props.name} rendered: {this.renderCounter}</h2>\n  }\n}\n\nexport default class Controll extends React.Component {\n  state = { \n    renderCounter: 1,\n  }\n\n  onButtonPress = () => {\n    this.setState({ renderCounter: this.state.renderCounter + 1 })\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Should Component Update</h1>\n        <h2>App rendered: {this.state.renderCounter}</h2>\n        <Component name="Component Should Update" />\n        <ComponentShouldComponentUpdate name="Component Should Not Update"   someProp={this.state.renderCounter} />\n        <button id="button" onClick={this.onButtonPress}><h2>Trigger Render</h2></button>\n      </div>\n    )\n  }\n}'.trim(),P="\nclass App extends Component{\n  state = {\n    name: '',\n    email: ''\n  }\n  \n  handleChange = (e) => {\n     this.setState({[e.target.name]: e.target.value})\n  };\n  \n  \n  handleSubmit = (e) => {\n     e.preventDefault();\n    \n     this.setState({[e.target.name]:e.target.value})\n  }\n  \n  render(){\n     return(\n        <>\n           <form onSubmit={this.handleSubmit}>\n              <input name=\"name\" value={this.state.name} onChange={this.handleChange} />\n              <input name=\"email\" value={this.state.email} onChange={this.handleChange} />\n              <button \n                disabled = {this.state.name.length > 0 ? false : true}\n                onClick={this.handleSubmit}>Submit</button>\n           </form>\n        </>\n     );\n  }\n}".trim(),R='\nfunction App() {\n  const inputRef = useRef(null);\n  \n  const handleSubmitButton = () => {\n    alert(inputRef.current.value);\n  };\n  return (\n    <div className="App">\n      <input type="text" ref={inputRef} />\n      <input type="submit" value="submit" onClick={handleSubmitButton} />\n    </div>\n  );\n}'.trim(),U="\nclass App extends Component{\n  forceUpdateHandler = () => {\n    this.forceUpdate();\n  };\n  \n  render(){\n    return(\n      <div>\n        <button onClick= {this.forceUpdateHandler} >FORCE UPDATE</button>\n        <h4>Random Number : { Math.random() }</h4>\n      </div>\n    );\n  }\n}".trim(),j=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,xs:2},i.a.createElement(p.a,{className:e.paper},i.a.createElement("h4",null,i.a.createElement(E.a,null)))),i.a.createElement(d.a,{item:!0,xs:10},i.a.createElement(p.a,{className:e.paper},i.a.createElement(h.a,null,i.a.createElement("b",null,"Component"),i.a.createElement("br",null),i.a.createElement("img",{src:f.a,alt:"Pure",className:"responsive",style:y}),i.a.createElement("br",null),i.a.createElement("p",null,"we show a random quote from a list of quotes. The quote component will be a child of another stateful component."),i.a.createElement("div",{style:v},i.a.createElement(C.a,{code:k,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("i",null,"If you run it you will see that as soon as the component is rendered it displays a random quote, but after username state changes, it displays another random quote! A functional stateless component will re render every time the state ofthe parent component changes. Due to the limitations of a functional component you cannot implement life cycle hooks like shouldComponentUpdateto make explicit checks for renders."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",null,"Pure Component"),i.a.createElement("b",null,"Pure component solves this issue. Pure Component implementsshouldComponentUpdate, out of the box."),i.a.createElement("br",null),i.a.createElement("div",{style:v},i.a.createElement(C.a,{code:w,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("i",null,"Will notice that even though the state of the parent changes, the quote displayed, doesn\u2019t change. Pure component also gives a more stable UI because it will only re render when a prop on which it depends will change.It is recommended by React team that you use PureComponent instead of manually implementing shouldComponentUpdate, because PureComponent performs a shallow comparison of props and state, and reduces the chance that you\u2019ll skip a necessary update."),i.a.createElement("br",null),i.a.createElement("h3",null,"How would you prevent a component from rendering"),"Three Ways",i.a.createElement("br",null),"1.Pure Components shallowly compares the old state & props with the new state & props.",i.a.createElement("div",{style:v},i.a.createElement(C.a,{code:x,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"2.React.memo"),i.a.createElement("br",null),i.a.createElement("div",{style:v},i.a.createElement(C.a,{code:N,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"3.Should Component Update"),i.a.createElement("br",null),i.a.createElement("br",null),"Most likely Pure Components will be sufficient enough. However in cases of props or state structures with deeply nested objects, values won\u2019t be compared. using the shouldComponentUpdate life-cycle method which is invoked on state or prop changes before render is called.",i.a.createElement("br",null),i.a.createElement("div",{style:v},i.a.createElement(C.a,{code:S,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("h3",null,"Force Update"),"Calling forceUpdate() will cause render() to be called on the component and skip shouldComponentUpdate().",i.a.createElement("br",null),"It will skip shouldComponentUpdate(), so you're not getting the optimization benefit.",i.a.createElement("br",null),'Also, using forceUpdate() "bypasses" the proper lifecycle, making your code less straight-forward and possibly harder to understand and maintain.',i.a.createElement("div",{style:v},i.a.createElement(C.a,{code:U,language:"js",plugins:["line-numbers"]})),i.a.createElement("b",null,"10.Which feature can we use to cause a component to render only when its ID changes? "),i.a.createElement("p",null,"shouldComponentUpdate"),i.a.createElement("br",null),i.a.createElement("b",null,"Controlled component"),i.a.createElement("br",null),"We have 2 ways to handle the input value: Controlled & Uncontrolled",i.a.createElement("p",null,"In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself."),i.a.createElement("ul",null,i.a.createElement("li",null,"In a controlled component, the form data is handled by the state within the component."),i.a.createElement("li",null,"The controlled component is a way that you can handle the form input value using the state and to change the input value there is only one way to change it is using setState or useState"),i.a.createElement("li",null,"Change this state using one of the events like onChange and when the user starts writing any character setState or useState will be called and update the state of this input then it will add the new value inside the input.")),i.a.createElement("div",{style:v},i.a.createElement(C.a,{code:P,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Uncontrolled Components"),i.a.createElement("br",null),i.a.createElement("p",null,"The uncontrolled component is like traditional HTML form inputs that you will not be able to handle the value by yourself but the DOM will take care of handling the value of the input and save it then you can get this value using React Ref"),i.a.createElement("div",{style:v},i.a.createElement(C.a,{code:R,language:"js",plugins:["line-numbers"]})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Use the controlled component when you create"),i.a.createElement("ul",null,i.a.createElement("li",null,"Form validation so you always need to know the value of the input when typing to check if it\u2019s a valid character or not!"),i.a.createElement("li",null,"Disable the submit button unless all fields have valid data"),i.a.createElement("li",null,"If you have a specific format like the credit card input"))))))}}]),n}(u.Component);n.default=Object(b.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(j)}}]);
//# sourceMappingURL=26.1b3a2d96.chunk.js.map