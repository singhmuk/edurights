(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[94],{140:function(n,e,t){"use strict";t.d(e,"a",(function(){return m}));var r=t(45),s=t(28),o=t(136),a=t(137),i=t(139),p=t(0),c=t.n(p),u=t(138),l=t.n(u),m=(t(59),function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(o.a)(this,Object(a.a)(e).call(this,n))).highlight=function(){t.ref&&t.ref.current&&l.a.highlightElement(t.ref.current)},t.ref=c.a.createRef(),t}return Object(i.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var n=this.props,e=n.code,t=(n.plugins,n.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},e.trim()))}}]),e}(c.a.Component))},141:function(n,e,t){},153:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(0),s=t.n(r),o=t(26),a=t(297),i=t(295),p=t(114),c=Object(p.a)((function(n){return{root:{display:"flex"},paper:{marginRight:n.spacing(2)},line:{textDecoration:"none"}}}));function u(){var n=c();return s.a.createElement("div",{className:n.root},s.a.createElement(i.a,null,s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/introRedux",className:n.line},"Intro")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/counter",className:n.line},"Counter Select")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/reduxState",className:n.line},"Redux State-Curd")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/reduxMethods",className:n.line},"Redux Methods")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/react_redux",className:n.line},"Filter")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/reduxCurd",className:n.line},"Redux Curd")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/expenseTraMern",className:n.line},"ReactCurdPlaceholder")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/contactKeeperApi",className:n.line},"ReactReduxCurdPlaceholder")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/mernRedux",className:n.line},"Mern Redux")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/signUp",className:n.line},"SignUP")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/git",className:n.line},"Git")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/gitConcepts",className:n.line},"Git Concepts")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/skills",className:n.line},"Skills")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/comskills",className:n.line},"Comskills")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/techskills",className:n.line},"Techskills")),s.a.createElement(a.a,null,s.a.createElement(o.b,{to:"/techinto",className:n.line},"TechsInto"))),s.a.createElement("div",null))}},341:function(n,e,t){"use strict";t.r(e);var r=t(45),s=t(28),o=t(136),a=t(137),i=t(139),p=t(0),c=t.n(p),u=t(138),l=t.n(u),m=t(120),d=t(57),h=t(296),g=t(5),S=(t(141),t(153)),f=t(140),E={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},x='\n//components/create.js\nimport { connect } from "react-redux";\nimport ReactQuill from "react-quill";\nimport * as actions from "../actions";\nimport "react-quill/dist/quill.snow.css";\n\nclass Create extends Component {\n  state = {\n      title: "",\n      writer: localStorage.getItem("myUserName"),\n      content: ""\n    };\n\n  onChange = event => {\n    const state = this.state;\n    state[event.target.name] = event.target.value;\n    this.setState(state);\n  };\n\n  onSubmit = event => {\n    event.preventDefault();\n    this.props.createPost(\n      this.state.title,\n      this.state.writer,\n      this.state.content\n    );\n  };\n\n  handleChange = value => {\n    this.setState({ content: value });\n  };\n\n  render() {\n    if (!localStorage.getItem("jwtToken")) {\n      return (\n        <div style={{ textAlign: "center" }}>\n          <h3>\n            Not login!<br />Login, Please!\n          </h3>\n        </div>\n      );\n    }\n\n    return (\n        <div>\n            <form onSubmit={this.onSubmit}>\n              <form row>\n                <p>Title</p>\n                  <input type="text" name="title" onChange={this.onChange} />\n                <p>Content</p>\n                  <ReactQuill value={this.state.content} onChange={this.handleChange} />\n              </form>\n              <button>Send</button>\n            </form>\n        </div>\n    );\n  }\n}\n\nconst mapStateToProps = state => ({\n    username: state.user.username\n});\n\nconst mapDispatchToProps = dispatch => ({\n    createPost: (title, writer, content) => {\n      dispatch(actions.createPost(title, writer, content));\n    }\n});\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Create);\n\n\n\n//components/show.js\nimport React, { Component } from "react";\nimport { Link } from "react-router-dom";\nimport { connect } from "react-redux";\nimport * as actions from "../actions";\n\nclass Show extends Component {\n  componentDidMount() {\n    this.props.getPostDetailFetch(this.props.match.params.id);\n  }\n\n  handleDelete = () => {\n    this.props.deletePost(this.props.match.params.id);\n  };\n\n  render() {\n    if (!this.props.post) {\n      return <div>No post!</div>;\n    }\n\n    return (\n      <div>\n          <h1>POST DETAIL</h1>\n          <h1>{this.props.post.title}</h1>\n          <h5>writer: {this.props.post.writer}</h5>\n          <h5>write_date: {this.props.post.write_date}</h5>\n          <p dangerouslySetInnerHTML={{ __html: this.props.post.content }} />\n        <Link to={\'/edit/\'$\'{this.props.match.params.id}\'}>\n          <button color="primary">EDIT</button>\n        </Link>\n        <button onClick={this.handleDelete}>DELETE</button>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = state => ({\n    post: state.fetch.post\n});\n\nconst mapDispatchToProps = dispatch => ({\n    getPostDetailFetch: postId => {\n      dispatch(actions.getPostDetailFetch(postId));\n    },\n    deletePost: postId => {\n      dispatch(actions.deletePost(postId));\n    }\n});\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Show);\n\n\n\n//components/main.js\nimport React, { Component } from "react";\nimport { Link } from "react-router-dom";\nimport { connect } from "react-redux";\nimport axios from "axios";\nimport * as actions from "../actions";\nimport Pagination from "rc-pagination";\nimport "rc-pagination/assets/index.css";\n\nclass Main extends Component {\n  state = {\n      currentpage: 1,\n      totalpage: 1\n    };\n\n  componentDidMount() {\n    this.loadTotalPage();\n    this.props.getPostFetch(this.state.currentpage);\n  }\n\n  loadTotalPage = () => {\n    axios\n      .get("http://localhost:3001/api/post/pages")\n      .then(res => {\n        console.log(res.data);\n        this.setState({ totalpage: res.data });\n      })\n      .catch(err => console.log(err));\n  };\n\n  onChange = page => {\n    this.setState({\n      currentpage: page\n    });\n    this.props.getPostFetch(page);\n  };\n\n  render() {\n    if (!this.props.posts) {\n      return <div>No post!</div>;\n    }\n\n    return (\n      <div>\n          <div>\n            {localStorage.getItem("jwtToken") ? (\n              <Link to="/create"><button>Create</button></Link>\n            ) : (\n              <Link to="/create"><button disabled>Create</button></Link>\n            )}\n          </div>\n          <div>\n            {this.props.posts.map((post, index) => (\n              <div key={index} style={{ border: "1px solid black" }}>\n                <Link to={\'/post/\'$\'{post._id}\'}>{post.title}</Link>\n                <br />\n                <span>post: {post.writer}</span>\n                <br />\n                <span>write_date: {post.write_date}</span>\n              </div>\n            ))}\n          </div>\n          <div>\n            <Pagination\n              onChange={this.onChange}\n              current={this.state.currentpage}\n              total={this.state.totalpage}\n              pageSize={5}\n            />\n          </div>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = state => ({\n    posts: state.fetch.posts\n});\n\nconst mapDispatchToProps = dispatch => ({\n    getPostFetch: current => {\n      dispatch(actions.getPostFetch(current));\n    }\n});\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Main);\n\n\n\n//components/edit.js\nimport React, { Component } from "react";\nimport { connect } from "react-redux";\nimport ReactQuill from "react-quill";\nimport * as actions from "../actions";\n\nclass Edit extends Component {\n  state = {\n      title: this.props.post.title,\n      writer: this.props.post.writer,\n      content: this.props.post.content\n    };\n\n  componentDidMount() {\n    this.props.getPostDetailFetch(this.props.match.params.id);\n  }\n\n  onChange = event => {\n    const state = this.state;\n    state[event.target.name] = event.target.value;\n    this.setState(state);\n  };\n\n  onSubmit = event => {\n    event.preventDefault();\n    this.props.editPost(\n      this.state.title,\n      this.state.writer,\n      this.state.content,\n      this.props.match.params.id\n    );\n  };\n\n  handleChange = value => {\n    this.setState({ content: value });\n  };\n\n  render() {\n    if (!this.props.post) {\n      return <div>No post!</div>;\n    }\n\n    if (!localStorage.getItem("jwtToken")) {\n      return (\n        <div style={{ textAlign: "center" }}>\n          <h3>Not login!</h3>\n        </div>\n      );\n    }\n\n    if (this.props.post.writer !== localStorage.getItem("myUserName")) {\n      return (\n        <div>\n          <p>You are an unauthorized user.</p>\n        </div>\n      );\n    }\n\n    return (\n      <div>\n        <form onSubmit={this.onSubmit}>\n            <p>Title</p>\n              <input type="text" name="title" defaultValue={this.props.post.title} onChange={this.onChange} />\n            <p>Writer</p>\n              <input type="text" name="writer" defaultValue={this.props.post.writer} onChange={this.onChange} />\n            <p>Content</p>\n              <ReactQuill value={this.state.content} onChange={this.handleChange} />\n          <button>Send</button>\n        </form>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = state => ({\n    post: state.fetch.post,\n    username: state.user.username\n});\n\nconst mapDispatchToProps = dispatch => ({\n    getPostDetailFetch: postId => {\n      dispatch(actions.getPostDetailFetch(postId));\n    },\n    editPost: (title, writer, content, postId) => {\n      dispatch(actions.editPost(title, writer, content, postId));\n    }\n});\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Edit);\n\n\n\n//components/signUp.js\nimport React, { Component } from "react";\nimport axios from "axios";\nimport history from "../history";\n\nclass Register extends Component {\n  state = {\n      username: "",\n      password: "",\n      name: "",\n      email: "",\n      alert: ""\n    };\n\n  onChange = event => {\n    const state = this.state;\n    state[event.target.name] = event.target.value;\n    this.setState(state);\n  };\n\n  onLogin = event => {\n    event.preventDefault();\n\n    const { username, password, name, email } = this.state;\n\n    axios.post("http://localhost:3001/api/auth/register", {\n        username,\n        password,\n        name,\n        email\n      })\n      .then(res => {\n        this.setState({ alert: "" });\n        history.push("/login");\n      })\n      .catch(err => {\n        if (err.response.status === 600) {\n          this.setState({ alert: "Username already exists" });\n        } else if (err.response.status === 601) {\n          this.setState({ alert: "Please input all fields" });\n        }\n      });\n  };\n\n  render() {\n    return (\n      <div>\n            <h1>LOGIN</h1>\n            <form onSubmit={this.onLogin}>\n                <p>Username</p>\n                  <input type="text" name="username" onChange={this.onChange} />\n                <p>Password</p>\n                  <input type="password" name="password" onChange={this.onChange} />\n                <p>Name</p>\n                  <input type="test" name="name" onChange={this.onChange} />\n                <p>E-mail</p>\n                  <input type="email" name="email" onChange={this.onChange} />\n              <div>\n                {this.state.alert}\n                <br />\n              </div>\n              <button>Register</button>\n            </form>\n      </div>\n    );\n  }\n}\n\nexport default Register;\n\n\n\n//components/login.js\nimport React, { Component } from "react";\nimport { connect } from "react-redux";\nimport * as actions from "../actions";\n\nclass Login extends Component {\n  state = {\n      username: "",\n      password: "",\n      alert: ""\n    };\n\n  onChange = event => {\n    const state = this.state;\n\n    state[event.target.name] = event.target.value;\n    this.setState(state);\n  };\n\n  onLogin = event => {\n    event.preventDefault();\n\n    const { username, password } = this.state;\n\n    this.props.login(username, password);\n  };\n\n  render() {\n    return (\n      <div>\n        <form onSubmit={this.onLogin}>\n            <p>Username</p>\n              <input type="text" name="username" onChange={this.onChange} />\n            <p>Password</p>\n              <input type="password" name="password" onChange={this.onChange} />\n          <div>\n            {this.props.alert}\n            <br />\n          </div>\n          <button>Login</button>\n        </form>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = state => ({\n    alert: state.user.alert\n});\n\nconst mapDispatchToProps = dispatch => ({\n    login: (username, password) => {\n      dispatch(actions.login(username, password));\n    }\n});\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Login);\n'.trim(),v='\n//actions/index.js\nimport axios from "axios";\nimport history from "../history";\n\nconst API_URL = "http://localhost:3001/api";\n\nexport const PRESERVE_TOKEN = "PRESERVE_TOKEN";\nexport const LOGIN = "LOGIN";\nexport const LOGIN_SUCCESS = "LOGIN_SUCCESS";\nexport const LOGIN_FAILURE = "LOGIN_FAILURE";\nexport const GET_POST_FETCH = "GET_POST_FETCH";\nexport const GET_POST_SUCCESS = "GET_POST_SUCCESS";\nexport const CREATE_POST = "CREATE_POST";\nexport const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";\nexport const EDIT_POST = "EDIT_POST";\nexport const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";\nexport const DELETE_POST = "DELETE_POST";\nexport const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";\nexport const GET_POST_DETAIL_FETCH = "GET_POST_DETAIL_FETCH";\nexport const GET_POST_DETAIL_SUCCESS = "GET_POST_DETAIL_SUCCESS";\n\nexport function preserveToken(token) {\n  return {\n    type: "PRESERVE_TOKEN",\n    token\n  };\n}\n\nexport function login(username, password) {\n  return function(dispatch) {\n    axios\n      .post(\'$\'{API_URL}/auth/login, { username, password })\n      .then(res => {\n        dispatch(loginSuccess(res.data, username));\n        dispatch(preserveToken(res.data.token));\n        history.push("/");\n      })\n      .catch(err => {\n        if (err.response.status === 401) {\n          dispatch(loginFailure(err));\n        }\n      });\n  };\n}\n\nexport function loginSuccess(data, username) {\n  return {\n    type: "LOGIN_SUCCESS",\n    data,\n    username\n  };\n}\n\nexport function loginFailure(data) {\n  return {\n    type: "LOGIN_FAILURE",\n    data\n  };\n}\n\nexport function getPostFetch(current) {\n  return function(dispatch) {\n    axios\n      .get(\'$\'{API_URL}/post/pages/\' + current)\n      .then(res => {\n        dispatch(getPostSuccess(res.data));\n      })\n      .catch(err => {\n        console.log(err);\n      });\n  };\n}\n\nexport function getPostSuccess(posts) {\n  return {\n    type: "GET_POST_SUCCESS",\n    posts\n  };\n}\n\nexport function createPost(title, writer, content) {\n  return function(dispatch) {\n    axios\n      .post(\'$\'{API_URL}/post\', { title, writer, content })\n      .then(res => {\n        dispatch(createPostSuccess(res.data));\n        history.push("/");\n      })\n      .catch(err => {\n        console.log(err);\n      });\n  };\n}\n\nexport function createPostSuccess(post) {\n  return {\n    type: "CREATE_POST_SUCCESS",\n    post\n  };\n}\n\nexport function editPost(title, writer, content, postId) {\n  return function(dispatch) {\n    axios\n      .put(\'$\'{API_URL}/post/ + postId, { title, writer, content })\n      .then(res => {\n        dispatch(editPostSuccess(res.data));\n        history.push("/post/" + postId);\n      })\n      .catch(err => {\n        console.log(err);\n      });\n  };\n}\n\nexport function editPostSuccess(post) {\n  return {\n    type: "EDIT_POST_SUCCESS",\n    post\n  };\n}\n\nexport function deletePost(postId) {\n  return function(dispatch) {\n    axios\n      .delete(\'$\'{API_URL}/post/ + postId)\n      .then(res => {\n        dispatch(deletePostSuccess(res.data));\n        history.push("/");\n      })\n      .catch(err => {\n        console.log(err);\n      });\n  };\n}\n\nexport function deletePostSuccess(post) {\n  return {\n    type: "DELETE_POST_SUCCESS",\n    post\n  };\n}\n\nexport function getPostDetailFetch(postId) {\n  return function(dispatch) {\n    axios\n      .get(\'$\'{API_URL}/post/\' + postId)\n      .then(res => {\n        dispatch(getPostDetailSuccess(res.data));\n      })\n      .catch(err => {\n        console.log(err);\n      });\n  };\n}\n\nexport function getPostDetailSuccess(post) {\n  return {\n    type: "GET_POST_DETAIL_SUCCESS",\n    post\n  };\n}\n\n\n//reducers/fetch.js\nimport {\n  CREATE_POST_SUCCESS,\n  EDIT_POST_SUCCESS,\n  DELETE_POST_SUCCESS,\n  GET_POST_SUCCESS,\n  GET_POST_DETAIL_SUCCESS\n} from "../actions/index.jsx";\n\nconst initialState = { posts: [], post: [] };\n\nexport default function fetch(state = initialState, action) {\n  switch (action.type) {\n    case GET_POST_SUCCESS:\n      return { posts: action.posts };\n    case CREATE_POST_SUCCESS:\n      return {\n        ...state,\n        ...action.post\n      };\n      \n    case EDIT_POST_SUCCESS:\n      return {\n        ...state,\n        ...action.post\n      };\n \n    case DELETE_POST_SUCCESS:\n      return state;\n\n    case GET_POST_DETAIL_SUCCESS:\n      return { post: action.post };\n    default:\n      return state;\n  }\n}\n\n\n//reducers/user.js\nimport {\n  PRESERVE_TOKEN,\n  LOGIN_SUCCESS,\n  LOGIN_FAILURE\n} from "../actions/index.jsx";\nimport axios from "axios";\n\nconst initialState = {\n  username: "",\n  alert: ""\n};\n\nexport default function user(state = initialState, action) {\n  switch (action.type) {\n    case PRESERVE_TOKEN:\n      axios.defaults.headers.common["Authorization"] = localStorage.getItem(\n        "jwtToken"\n      );\n      return state;\n    case LOGIN_SUCCESS:\n      localStorage.setItem("jwtToken", action.data.token);\n      localStorage.setItem("myUserName", action.username);\n      return {\n        username: action.username\n      };\n    case LOGIN_FAILURE:\n      return {\n        username: "",\n        alert: "Login failed."\n      };\n    default:\n      return state;\n  }\n}\n\n\n\n//reducers/index.js\nimport { combineReducers } from "redux";\nimport fetch from "./fetch";\nimport user from "./user";\n\nconst index = combineReducers({\n  fetch,\n  user\n});\n\nexport default index;\n\n\n//history.js\nimport createHistory from "history/createBrowserHistory";\n\nexport default createHistory();\n\n\n//App.js\nimport React, { Component } from "react";\nimport { Link } from "react-router-dom";\nimport { connect } from "react-redux";\nimport history from "./history";\nimport * as actions from "./actions";\n\nclass App extends Component {\n  componentDidMount() {\n    this.props.preserveToken();\n  }\n\n  logout = () => {\n    localStorage.removeItem("jwtToken");\n    localStorage.removeItem("myUserName");\n    history.push("/");\n  };\n\n  render() {\n    return (\n      <div>\n        <div className="header">\n          {localStorage.getItem("jwtToken") ? (\n            <button onClick={this.logout}>Logout</button>\n          ) : (\n            <div>\n              <Link to="/login"><button>Login</button></Link>\n              <Link to="/register"><button>Register</button></Link>\n            </div>\n          )}\n        </div>\n        {this.props.children}\n      </div>\n    );\n  }\n}\n\n\nconst mapDispatchToProps = dispatch => ({\n  preserveToken: () => {\n    dispatch(actions.preserveToken());\n  }\n});\n\nexport default connect(null,  mapDispatchToProps)(App);\n\n\n\n//index.js\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport { Router, Route } from "react-router-dom";\nimport { createStore, applyMiddleware } from "redux";\nimport { Provider } from "react-redux";\nimport thunk from "redux-thunk";\nimport App from "./App";\nimport Main from "./components/main";\nimport Edit from "./components/edit";\nimport Create from "./components/create";\nimport Show from "./components/show";\nimport Login from "./components/login";\nimport Register from "./components/signUp";\nimport stores from "./reducers";\nimport history from "./history";\nimport "bootstrap/dist/css/bootstrap.min.css";\n\nconst createStoreWithMiddleware = applyMiddleware(thunk)(createStore);\nconst store = createStoreWithMiddleware(\n  stores,\n  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()\n);\n\nReactDOM.render(\n  <Provider store={store}>\n    <Router history={history}>\n      <div>\n        <Route path="/" component={App} />\n        <Route exact path="/" component={Main} />\n        <Route path="/edit/:id" component={Edit} />\n        <Route path="/create" component={Create} />\n        <Route path="/post/:id" component={Show} />\n        <Route path="/login" component={Login} />\n        <Route path="/register" component={Register} />\n      </div>\n    </Router>\n  </Provider>,\n  document.getElementById("root")\n);\n'.trim(),T='\n//config/config.js\nmodule.exports = {\n  secret: "reactauth"\n};\n\n\n//config/passport.js\nvar JwtStrategy = require("passport-jwt").Strategy;\nvar ExtractJwt = require("passport-jwt").ExtractJwt;\nvar User = require("../models/Users.js");\nvar config = require("./config.js");\n\nmodule.exports = function(passport) {\n  // jwt options\n  var options = {\n    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),\n    secretOrKey: config.secret\n  };\n\n  passport.use(\n    new JwtStrategy(options, function(payload, done) {\n      User.findOne({ _id: payload._id }, function(err, user) {\n        if (err) {\n          console.log("error: " + err);\n          return done(err, false);\n        }\n        if (user) {\n          console.log("user: " + user);\n          return done(null, user);\n        } else {\n          return done(null, false);\n        }\n      });\n    })\n  );\n};\n\n\n\n//models/Post.js\nvar mongoose = require("mongoose");\n\nvar PostSchema = new mongoose.Schema({\n  title: String,\n  writer: String,\n  content: String,\n  write_date: {\n    type: Date,\n    default: () => new Date().getTime() + 1000 * 60 * 60 * 9\n  }\n});\n\nmodule.exports = mongoose.model("Post", PostSchema);\n\n\n\n//models/Users.js\nvar mongoose = require("mongoose");\nvar bcrypt = require("bcrypt-nodejs");\nvar Schema = mongoose.Schema;\n\nvar UserSchema = new Schema({\n  username: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n});\n\nUserSchema.pre("save", function(next) {\n  var user = this;\n\n  if (!this.isModified("password")) {\n    return next();\n  }\n\n  return bcrypt.genSalt(10, function(err, salt) {\n    if (err) {\n      return next(err);\n    }\n\n    return bcrypt.hash(user.password, salt, null, function(err, hash) {\n      if (err) {\n        return next(err);\n      }\n\n      user.password = hash;\n      return next();\n    });\n  });\n});\n\n// \ube44\ubc00\ubc88\ud638 \ube44\uad50\nUserSchema.methods.comparePassword = function(pwd, cb) {\n  bcrypt.compare(pwd, this.password, function(err, isMatch) {\n    if (err) {\n      return cb(err);\n    }\n    cb(null, isMatch);\n  });\n};\n\nmodule.exports = mongoose.model("User", UserSchema);\n\n\n\n//routes/auth.js\nvar express = require("express");\nvar router = express.Router();\nvar mongoose = require("mongoose");\nvar jwt = require("jsonwebtoken");\nvar passport = require("passport");\nrequire("../config/passport")(passport);\n\nvar config = require("../config/config.js");\nvar User = require("../models/Users.js");\n\n\nrouter.post("/register", (req, res) => {\n  if (\n    !req.body.username ||\n    !req.body.password ||\n    !req.body.email ||\n    !req.body.name\n  ) {\n    return res\n      .status(601)\n      .send({ success: false, msg: "Please pass username and password." });\n  } else {\n    var newUser = new User({\n      username: req.body.username,\n      password: req.body.password,\n      email: req.body.email,\n      name: req.body.name\n    });\n    // save the user\n    newUser.save((err) => {\n      if (err) {\n        return res\n          .status(600)\n          .send({ success: false, msg: "Username already exists." });\n      }\n      return res.json({ success: true, msg: "Successful created new user." });\n    });\n  }\n});\n\nrouter.post("/login", (req, res) => {\n  User.findOne(\n    {\n      username: req.body.username\n    },\n    (err, user) => {\n      if (err) throw err;\n\n      if (!user) {\n        res.status(401).send({\n          success: false,\n          msg: "User not found."\n        });\n      } \n      else {\n        user.comparePassword(req.body.password, (err, isMatch) => {\n          if (isMatch && !err) {\n            var token = jwt.sign(user.toJSON(), config.secret);\n            res.json({ success: true, token: "JWT " + token });\n          } else {\n            res.status(401).send({\n              success: false,\n              msg: "Wrong password."\n            });\n          }\n        });\n      }\n    }\n  );\n});\n\nmodule.exports = router;\n\n\n\n//routes/post.js\nvar express = require("express");\nvar router = express.Router();\nvar Post = require("../models/Post.js");\nvar passport = require("passport");\nrequire("../config/passport.js")(passport);\n\n\nfunction getToken(headers) {\n  var splited = headers.authorization.split(" ");\n  if (splited.length == 2) {\n    return splited[1];\n  } else {\n    return null;\n  }\n}\n\nrouter.get("/", (req, res, next) => {\n  Post.find()\n    .sort({ write_date: -1 })\n    .exec(function(err, list) {\n      if (err) return next(err);\n      res.json(list);\n    });\n});\n\nrouter.get("/pages/:id", (req, res, next) => {\n  Post.find()\n    .sort({ write_date: -1 })\n    .skip((req.params.id - 1) * 5)\n    .limit(5)\n    .exec((err, list) => {\n      if (err) return next(err);\n      res.json(list);\n    });\n});\n\nrouter.get("/pages", (req, res, next) => {\n  Post.find()\n    .countDocuments()\n    .exec((err, list) => {\n      if (err) return next(err);\n      res.json(list);\n    });\n});\n\nrouter.get("/:id", (req, res, next) => {\n  Post.findById(req.params.id, (err, post) => {\n    if (err) return next(err);\n    res.json(post);\n  });\n});\n\nrouter.post("/", passport.authenticate("jwt", { session: false }), (\n  req,\n  res,\n  next\n) => {\n  var token = getToken(req.headers);\n  if (token) {\n    Post.create(req.body, (err, post) => {\n      if (err) return next(err);\n      res.json(post);\n    });\n  } else {\n    return res.status(403).send({ success: false, msg: "Unauthorized." });\n  }\n});\n\nrouter.put("/:id", (req, res, next) => {\n  Post.findByIdAndUpdate(req.params.id, req.body, (err, post) => {\n    if (err) return next(err);\n    res.json(post);\n  });\n});\n\nrouter.delete("/:id", (req, res, next) => {\n  Post.findByIdAndRemove(req.params.id, req.body, (err, post) => {\n    if (err) return next(err);\n    res.json(post);\n  });\n});\n\nmodule.exports = router;\n\n\n//server.js\nvar express = require("express");\nvar path = require("path");\nvar logger = require("morgan");\nvar bodyParser = require("body-parser");\nvar passport = require("passport");\nrequire("./config/passport.js")(passport);\n\nvar post = require("./routes/post");\nvar auth = require("./routes/auth");\nvar app = express();\n\nvar mongoose = require("mongoose");\n\nvar cors = require("cors");\n\nvar PORT = 3001;\n\napp.use(logger("dev"));\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: "false" }));\napp.use(express.static(path.join(__dirname, "../build")));\n\n// CORS\napp.use(cors());\n\nmongoose\n  .connect(\n    "mongodb://localhost:27017/mern-crud",\n    { useNewUrlParser: true, promiseLibrary: require("bluebird") }\n  )\n  .then(() => console.log("Successfully Connect!"))\n  .catch(err => console.error(err));\n\napp.use("/api/post", post);\napp.use("/api/auth", auth);\n\napp.get("/", (req, res) => {\n  return res.end("Successfully Working API Server!");\n});\n\napp.use(function(req, res, next) {\n  var err = new Error("404 Not Found");\n  err.status = 404;\n  next(err);\n});\n\napp.listen(PORT);\n\nmodule.exports = app;\n'.trim(),C=function(n){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(i.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){setTimeout((function(){return l.a.highlightAll()}),0)}},{key:"render",value:function(){var n=this.props.classes;return c.a.createElement(m.a,{container:!0},c.a.createElement(m.a,{item:!0,xs:2},c.a.createElement(d.a,{className:n.paper},c.a.createElement("h4",null,c.a.createElement(S.a,null)))),c.a.createElement(m.a,{item:!0,xs:10},c.a.createElement(d.a,{className:n.paper},c.a.createElement(h.a,null,c.a.createElement("h3",null,"Mern curd Class & SignUp"),c.a.createElement("b",null,"Components"),c.a.createElement("div",{style:E},c.a.createElement(f.a,{code:x,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"Reducers"),c.a.createElement("div",{style:E},c.a.createElement(f.a,{code:v,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"Server"),c.a.createElement("div",{style:E},c.a.createElement(f.a,{code:T,language:"js",plugins:["line-numbers"]}))))))}}]),e}(p.Component);e.default=Object(g.a)((function(n){return{paper:{margin:n.spacing(1),padding:n.spacing(1)},smMargin:{margin:n.spacing(1)},actionDiv:{textAlign:"center"}}}))(C)}}]);
//# sourceMappingURL=94.ed067ac3.chunk.js.map