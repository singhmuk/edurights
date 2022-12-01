(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[65],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(45),r=t(28),l=t(136),s=t(137),c=t(139),i=t(0),o=t.n(i),u=t(138),m=t.n(u),p=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=o.a.createRef(),t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(o.a.Component))},141:function(e,n,t){},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t.n(a),l=t(26),s=t(297),c=t(295),i=t(114),o=Object(i.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=o();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/introReact",className:e.line},"Intro-Lazy-Children")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/reactInter",className:e.line},"Intro")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/codingInter",className:e.line},"CodesPro")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/mainCompo",className:e.line},"Event-hoc-form",r.a.createElement("br",null),"curd-slider")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/pureComp",className:e.line},"PureComp-conComp")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/useStates",className:e.line},"useMultiState")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/contextHooks",className:e.line},"Context Hooks")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/customHooks",className:e.line},"CustomHooks-memo")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/useReducersSta",className:e.line},"UseReducers")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/contextMethods",className:e.line},"Curd Hooks")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/jsonPlaceholder",className:e.line},"JsonPlaceholder")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/async_await",className:e.line},"Async-await-sideMenu",r.a.createElement("br",null),"Mouse hover")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/ticGame",className:e.line},"Share-maxMinDate",r.a.createElement("br",null),"moveBtn-slideshow")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/linkGet",className:e.line},"LinkGet")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/numberFormats",className:e.line},"Random NumFor-biToDe",r.a.createElement("br",null)," Validations Step DateTimw")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/models",className:e.line},"Models-chidData-csv",r.a.createElement("br",null),"Icon-router")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/like",className:e.line},"Like-checkbox-radio",r.a.createElement("br",null),"select-scroll")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/textEditors",className:e.line},"TextEditors-paginations",r.a.createElement("br",null),"translator-sortCheck")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/sortItems",className:e.line},"IncOnClick-pushBtn-fizzBuzz",r.a.createElement("br",null),"show-addDocs-ratings")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/serverSideRend",className:e.line},"Jwt-multiSel")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/dropdownSelect",className:e.line},"SelectFtr-checkFtr-updtCrd")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/kanban",className:e.line},"Kanban")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/hackeRank",className:e.line},"HackeRank"))),r.a.createElement("div",null))}},299:function(e,n,t){"use strict";t.r(n);var a=t(45),r=t(28),l=t(136),s=t(137),c=t(139),i=t(0),o=t.n(i),u=t(138),m=t.n(u),p=t(120),d=t(57),h=t(296),E=t(5),v=(t(141),t(148)),b=t(140),g={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},f="\nconst App = () => {\n  const [filteredData, setFilteredData] = useState([]);\n\n  const handleSearch = (event) => {\n    let value = event.target.value.toLowerCase();\n    let result = [];\n\n    result = filteredData.filter((data) => {\n      return data.title.search(value) != -1;\n    });\n    setFilteredData(result);\n  }\n\n  useEffect(() => {\n    axios('https://jsonplaceholder.typicode.com/albums/1/photos')\n      .then(response => {\n        setFilteredData(response.data);\n      })\n      .catch(error => {\n        console.log(error);\n      })\n  }, []);\n\n  return (\n    <div>\n      <input type=\"text\" onChange={(event) => handleSearch(event)} />\n      {filteredData.map((items) => (\n        <li>{items.title}</li>\n      ))}\n    </div>\n  )\n}".trim(),y='\nconst App = () => {\n  const [playerName, setPlayerName]=useState([]);\n  const [playerPic, setPlayerPic]=useState([]);\n \n  const getData = () => {\n   const playerAPI = "https://www.balldontlie.io/api/v1/players/237";\n   const PlayerPic = "https://nba-players.herokuapp.com/players/james/lebron";\n \n   const getPlayerApi = axios.get(playerAPI);\n   const getPlayerPic = axios.get(PlayerPic);\n \n   axios.all([getPlayerApi, getPlayerPic])\n         .then(axios.spread((...allData) => {\n           const allDataPlayer = allData[0].data.first_name\n           const getNbaPlayerPic = allData[1].config.url;\n \n           setPlayerName(allDataPlayer);\n           setPlayerPic(getNbaPlayerPic);\n         }))\n  }\n \n useEffect(()=>{\n   getData();\n },[])\n \n  return(\n   <div>\n     Player name: {playerName}\n     <img src={playerPic} /> \n   </div>\n  )\n }'.trim(),x="\nconst App = () => {\n  const [employee, setEmployee] = useState([]);\n\n  useEffect(()=>{\n    fetch('https://jsonplaceholder.typicode.com/posts')\n        .then(res=>res.json())\n        .then(data=>setEmployee(data))\n  },[])\n\n  const handleSearch = (e) => {\n    let value = e.target.value.toLowerCase();\n\n    let result = [];\n    result = employee.filter(data=>{\n      return data.title.search(value) !=-1;\n    });\nsetEmployee(result);\n  }\n\n  return(\n    <div>\n      <input type=\"text\" onChange={e=>handleSearch(e)} />\n      {employee.map(val=>(\n        <li key={val.id}>{val.title}</li>\n      ))}\n    </div>\n  )\n}".trim(),S="\n//App.js\nconst navLinks = [\n  { url: '/about-us', name: 'About Us' },\n  { url: '/projects', name: 'Projects' },\n  { url: '/services', name: 'Services' },\n  { url: '/contact-us', name: 'Contact Us' },\n];\n\nclass App extends React.Component {  \n    state = {\n      style:\"menu\",\n      menuStatus:\"open\"\n    };\n\n  handleClick = () => {\n    switch(this.state.menuStatus) {\n      case \"open\":\n        this.setState({\n          menuStatus:\"close\",\n          style:\"menu active\"\n        });\n        break;\n      case \"close\":\n        this.setState({\n          menuStatus:\"open\",\n          style:\"menu\"\n        });\n        break;\n    }        \n  }\n\n  render() {\n    return (      \n      <div>\n        <button onClick={this.handleClick}>menu</button>\n        <div className={this.state.style}>               \n            {navLinks.map(({ url, name }) => (\n              <li>\n                <a href={url}>{name}</a>\n              </li>\n            ))}\n        </div>\n      </div>\n    );\n  }\n}\n\n\n\n//index.css\n.menu {\n  background: #34495e;\n  height: 100vh;\n  width: 250px;\n  opacity:0; \n  transition: all 0.25s ease;\n}\n\n  a {\n    color: #fff;\n    text-decoration: none;\n    display: block;\n    padding: 20px;\n  }\n\n.active {\n  opacity:1;\n  visibility: visible;\n  transition: all 0.25s ease;\n  transform: translateX(0);\n}".trim(),k="\nconst App = () => {\n  const [isHovering, setHovering] = useState(false);\n\n  const handleMouseHover = () => {\n    setHovering(isHovering => !isHovering);\n  }\n\n  return (\n    <div>\n      <div\n        onMouseEnter={handleMouseHover}\n        onMouseLeave={handleMouseHover}\n      >\n        Hover Me\n      </div>\n      {isHovering && <div>Hovering right me</div>}\n    </div>\n  );\n}".trim(),N="\n1. ReactDOM.render(<App />, document.getElementById('root'));\n\n replace with \n \nReactDOM.hydrate(<App />, document.getElementById('root'));\n\n\n2. npm install express\n   npm install @babel/register @babel/preset-env @babel/preset-react ignore-styles\n  \n3. Let\u2019s create an entry point in server/index.js:\nrequire('ignore-styles')\n\nrequire('@babel/register')({\n ignore: [/(node_modules)/],\n presets: ['@babel/preset-env', '@babel/preset-react']\n})\n\nrequire('./server')\n   \n4. Make Build and run with node\n    npm run build\n    node server/index.js\n \n    \n//App.js\nfunction App() {\n  return (\n    <div>\n      <h1>Server Side Rendering.</h1>\n    </div>\n  );\n}\n\n\n//server/server.js\nimport path from 'path'\nimport fs from 'fs'\n\nimport express from 'express'\nimport React from 'react'\nimport ReactDOMServer from 'react-dom/server'\n// import { StaticRouter } from 'react-router-dom';\n\nimport App from '../src/App'\n\nconst PORT = 8080\nconst app = express()\n\nconst router = express.Router()\n\n\napp.get('/*', (req, res) => {\n    const context = {};\n    const app = ReactDOMServer.renderToString(\n      // <StaticRouter location={req.url} context={context}>\n        <App />\n      // </StaticRouter>\n    );\n  \n    const indexFile = path.resolve('./build/index.html');\n    fs.readFile(indexFile, 'utf8', (err, data) => {\n      if (err) {\n        console.error('Something went wrong:', err);\n        return res.status(500).send('Oops, better luck next time!');\n      }\n  \n      return res.send(\n        data.replace('<div id=\"root\"></div>', '<div id=\"root\">'$'{app}</div>')\n      );\n    });\n  });\n\n\n  \nrouter.use(\n  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })\n)\n\n// tell the app to use the above rules\napp.use(router)\n\napp.use(express.static('./build'))\napp.listen(PORT, () => {\n  console.log(SSR running on port '$'{PORT})\n})\n\n\n//index.js\nrequire('ignore-styles')\n\nrequire('@babel/register')({\n  ignore: [/(node_modules)/],\n  presets: ['@babel/preset-env', '@babel/preset-react']\n})\n\nrequire('./server')\n".trim(),P='\nconst App =() => {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    fetchData();\n  }, []);\n\n  const fetchData = async () => {\n    await fetch("https://jsonplaceholder.typicode.com/users")\n      .then((res) => res.json())\n      .then((data) => setUsers(data))\n      .catch((error) => console.log(error));\n  };\n\n  return(\n    <div>\n      {users.map(vals=>(\n        <li key={vals.id}>{vals.id}</li>\n      ))}\n    </div>\n  )\n}'.trim(),j=function(e){function n(){return Object(a.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(p.a,{container:!0},o.a.createElement(p.a,{item:!0,xs:2},o.a.createElement(d.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(v.a,null)))),o.a.createElement(p.a,{item:!0,xs:10},o.a.createElement(d.a,{className:e.paper},o.a.createElement(h.a,null,o.a.createElement("h3",null,"Get Lists"),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:P,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"1. Async-Await"),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:f,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"2. Recived data from two different APIS in one function to multiple calls."),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:y,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"2. Search items"),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:x,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"3. Side Menu"),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:S,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"4. Mouse Hover on Card"),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:k,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"5. SSR"),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:N,language:"js",plugins:["line-numbers"]}))))))}}]),n}(i.Component);n.default=Object(E.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(j)}}]);
//# sourceMappingURL=65.6a5f330c.chunk.js.map