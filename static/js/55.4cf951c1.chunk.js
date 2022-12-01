(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[55],{140:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var o=t(45),a=t(28),r=t(136),i=t(137),s=t(139),p=t(0),c=t.n(p),l=t(138),m=t.n(l),d=(t(59),function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(r.a)(this,Object(i.a)(e).call(this,n))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=c.a.createRef(),t}return Object(s.a)(e,n),Object(a.a)(e,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var n=this.props,e=n.code,t=(n.plugins,n.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},e.trim()))}}]),e}(c.a.Component))},141:function(n,e,t){},156:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var o=t(0),a=t.n(o),r=t(26),i=t(297),s=t(295),p=t(114),c=Object(p.a)((function(n){return{root:{display:"flex"},paper:{marginRight:n.spacing(2)},line:{textDecoration:"none"}}}));function l(){var n=c();return a.a.createElement("div",{className:n.root},a.a.createElement(s.a,null,a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/devtools",className:n.line},"Devtools")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/cssbasics",className:n.line},"CSS")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/sass",className:n.line},"SASS")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/html_1",className:n.line},"html 1")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/restApi",className:n.line},"RestApi")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/jest",className:n.line},"Jest")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/matchers",className:n.line},"Matchers")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/enzymes",className:n.line},"Enzymes")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/enzyme2",className:n.line},"Enzymes2")),a.a.createElement(i.a,null,a.a.createElement(r.b,{to:"/enzyme3",className:n.line},"Enzymes3"))),a.a.createElement("div",null))}},159:function(n,e,t){n.exports=t.p+"static/media/css1.cf9107ca.PNG"},327:function(n,e,t){"use strict";t.r(e);var o=t(45),a=t(28),r=t(136),i=t(137),s=t(139),p=t(0),c=t.n(p),l=t(138),m=t.n(l),d=t(120),u=t(57),h=t(296),v=t(5),f=(t(141),t(156)),C=t(140),g=(t(159),{backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"}),b='\nimport React from "react";\nimport { shallow } from "enzyme";\n\nconst Foo = (props) => <div>\n  <button onClick={() => props.onButtonClick && props.onButtonClick()}></button>\n</div>;\n\nconst MyComponent = props => (\n  <div>\n    <Foo />\n    <Foo />\n    <Foo />\n    <div className="icon-star"></div>\n    {props.children}\n  </div>\n);\n\ndescribe("<MyComponent />", () => {\n  it("renders three <Foo /> components", () => {\n    const wrapper = shallow(<MyComponent />);\n    expect(wrapper.find(Foo)).toHaveLength(3);\n    expect(wrapper).toMatchInlineSnapshot(\'\n      <div>\n        <Foo />\n        <Foo />\n        <Foo />\n        <div\n          className="icon-star"\n        />\n      </div>\n    \');\n  });\n\n  it("renders an \'.icon-star\'", () => {\n    const wrapper = shallow(<MyComponent />);\n    expect(wrapper.find(".icon-star")).toHaveLength(1);\n  });\n\n  it("renders children when passed in", () => {\n    const wrapper = shallow(\n      <MyComponent>\n        <div className="unique" />\n      </MyComponent>\n    );\n    expect(wrapper.contains(<div className="unique" />)).toEqual(true);\n    expect(wrapper).toMatchInlineSnapshot(\'\n      <div>\n        <Foo />\n        <Foo />\n        <Foo />\n        <div\n          className="icon-star"\n        />\n        <div\n          className="unique"\n        />\n      </div>\n    \');\n  });\n\n  it("simulates click events", () => {\n    const onButtonClick = jest.fn();\n    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);\n    wrapper.find("button").simulate("click");\n    expect(onButtonClick).toHaveBeenCalledTimes(1);\n  });\n});\n'.trim(),x='\nimport React, { Suspense, Component } from "react";\nimport { shallow } from "enzyme";\nimport PropTypes from "prop-types";\n\nconst ThemeContext = React.createContext({ theme: "light" });\n\nclass ThemeComponent extends Component {\n  render() {\n    return (\n      <ThemeContext.Provider value={{ theme: "dark" }}>\n        {this.props.children}\n      </ThemeContext.Provider>\n    );\n  }\n}\n\nclass CustomComponent extends Component {\n  state = {\n    authenticated: false\n  };\n\n  componentDidMount() {\n    this.setState({ authenticated: true });\n  }\n\n  render() {\n    return (\n      <div>\n        <div id="theme">\n          <ThemeContext.Consumer>\n            {value => String(value.theme)}\n          </ThemeContext.Consumer>\n        </div>\n        <div id="user">{this.state.authenticated ? "User" : "Guest"}</div>\n      </div>\n    );\n  }\n}\n\ndescribe("options", () => {\n  test("context", () => {\n    function SimpleComponent(props, context) {\n      const { name } = context;\n      return <div>{name}</div>;\n    }\n\n    SimpleComponent.contextTypes = {\n      name: PropTypes.string\n    };\n\n    const context = { name: "foo" };\n    const wrapper = shallow(<SimpleComponent />, { context });\n    expect(wrapper.text()).toEqual("foo");\n  });\n\n  test("disableLifecycleMethods", () => {\n    const wrapper = shallow(<CustomComponent></CustomComponent>, {\n      disableLifecycleMethods: true\n    });\n\n    expect(wrapper.find("#user").text()).toBe("Guest");\n  });\n\n  test("wrappingComponent", () => {\n    const wrapper = shallow(<CustomComponent></CustomComponent>, {\n      wrappingComponent: ThemeComponent\n    });\n\n    expect(wrapper.getWrappingComponent().html()).toMatchInlineSnapshot(\n      \'"<div><div id=\\"theme\\">dark</div><div id=\\"user\\">Guest</div></div>"\'\n    );\n  });\n\n  test("suspenseFallback", () => {\n    const LazyComponent = React.lazy(() => import("../../LazyComponent"));\n\n    const wrapper = shallow(\n      <Suspense fallback={<div>Loading...</div>}>\n        <LazyComponent />\n      </Suspense>,\n      { suspenseFallback: true }\n    );\n\n    expect(wrapper).toMatchInlineSnapshot(\'\n      <div>\n        Loading...\n      </div>\n    \');\n  });\n});\n'.trim(),w='\nimport { mount } from "enzyme";\nimport React from "react";\n\nconst Foo = props => (\n  <div>\n    <button onClick={() => props.onButtonClick && props.onButtonClick()} />\n  </div>\n);\n\nconst MyComponent = props => (\n  <div>\n    <Foo />\n    <Foo />\n    <Foo />\n    <div className="icon-star"></div>\n    {props.children}\n  </div>\n);\n\ndescribe("<MyComponent />", () => {\n  it("renders three <Foo /> components", () => {\n    const wrapper = mount(<MyComponent />);\n    expect(wrapper.find(Foo)).toHaveLength(3);\n  });\n\n  it("renders an \'.icon-star\'", () => {\n    const wrapper = mount(<MyComponent />);\n    expect(wrapper.find(".icon-star")).toHaveLength(1);\n  });\n\n  it("renders children when passed in", () => {\n    const wrapper = mount(\n      <MyComponent>\n        <div className="unique" />\n      </MyComponent>\n    );\n    expect(wrapper.contains(<div className="unique" />)).toEqual(true);\n\n    expect(wrapper).toMatchInlineSnapshot(\'\n      <MyComponent>\n        <div>\n          <Foo>\n            <div>\n              <button\n                onClick={[Function]}\n              />\n            </div>\n          </Foo>\n          <Foo>\n            <div>\n              <button\n                onClick={[Function]}\n              />\n            </div>\n          </Foo>\n          <Foo>\n            <div>\n              <button\n                onClick={[Function]}\n              />\n            </div>\n          </Foo>\n          <div\n            className="icon-star"\n          />\n          <div\n            className="unique"\n          />\n        </div>\n      </MyComponent>\n    );\n  });\n\n  it("simulates click events", () => {\n    const onButtonClick = jest.fn();\n    const wrapper = mount(<Foo onButtonClick={onButtonClick} />);\n    wrapper.find("button").simulate("click");\n    expect(onButtonClick).toHaveBeenCalledTimes(1);\n  });\n});\n'.trim(),E=('\nimport React, { Component } from "react";\nimport { mount } from "enzyme";\nimport PropTypes from "prop-types";\n\nconst ThemeContext = React.createContext({ theme: "light" });\n\nclass ThemeComponent extends Component {\n  render() {\n    return (\n      <ThemeContext.Provider value={{ theme: this.props.theme || "dark" }}>\n        {this.props.children}\n      </ThemeContext.Provider>\n    );\n  }\n}\n\nclass CustomComponent extends Component {\n  state = {\n    authenticated: false\n  };\n\n  componentDidMount() {\n    this.setState({ authenticated: true });\n  }\n\n  render() {\n    return (\n      <div>\n        <div id="theme">\n          <ThemeContext.Consumer>\n            {value => String(value.theme)}\n          </ThemeContext.Consumer>\n        </div>\n        <div id="user">{this.state.authenticated ? "User" : "Guest"}</div>\n      </div>\n    );\n  }\n}\n\ndescribe("options", () => {\n  test("context", () => {\n    function SimpleComponent(props, context) {\n      const { name } = context;\n      return <div>{name}</div>;\n    }\n\n    SimpleComponent.contextTypes = {\n      name: PropTypes.string\n    };\n\n    const context = { name: "foo" };\n    const wrapper = mount(<SimpleComponent />, { context });\n    expect(wrapper.text()).toEqual("foo");\n  });\n\n  test("wrappingComponent", () => {\n    const wrapper = mount(<CustomComponent></CustomComponent>, {\n      wrappingComponent: ThemeComponent,\n      wrappingComponentProps: { theme: "custom" }\n    });\n\n    expect(wrapper.getWrappingComponent().html()).toMatchInlineSnapshot(\n      \'"<div><div id=\\"theme\\">custom</div><div id=\\"user\\">User</div></div>"\'\n    );\n  });\n\n  test("attachTo", () => {\n    document.body.innerHTML = \'<div id="attach-here"></div><div id="not-here"></div>\';\n    const attachHere = document.getElementById("attach-here");\n\n    mount(<CustomComponent></CustomComponent>, {\n      attachTo: attachHere\n    });\n\n    expect(document.body.innerHTML).toMatchInlineSnapshot(\n      \'"<div id=\\"attach-here\\"><div><div id=\\"theme\\">light</div><div id=\\"user\\">User</div></div></div><div id=\\"not-here\\"></div>"\'\n    );\n  });\n});\n'.trim(),'\nimport { render } from "enzyme";\nimport React from "react";\nimport PropTypes from "prop-types";\n\nconst Foo = props => (\n  <div>\n    <h1>{props.title}</h1>\n    <div className="foo-bar"></div>\n    <div className="foo-bar"></div>\n    <div className="foo-bar"></div>\n  </div>\n);\n\ndescribe("<Foo />", () => {\n  it("renders three \'.foo-bar\'s", () => {\n    const wrapper = render(<Foo />);\n    expect(wrapper.find(".foo-bar")).toHaveLength(3);\n  });\n\n  it("rendered the title", () => {\n    const wrapper = render(<Foo title="unique" />);\n    expect(wrapper.text()).toContain("unique");\n  });\n\n  it("renders a div", () => {\n    const wrapper = render(<Foo />);\n    expect(wrapper.html()).toMatch(/div/);\n  });\n\n  it("can pass in context", () => {\n    function SimpleComponent(props, context) {\n      const { name } = context;\n      return <div>{name}</div>;\n    }\n    SimpleComponent.contextTypes = {\n      name: PropTypes.string\n    };\n\n    const context = { name: "foo" };\n    const wrapper = render(<SimpleComponent />, { context });\n    expect(wrapper.text()).toEqual("foo");\n  });\n});\n'.trim()),y='\nfunction Foo(props) {\n  return (\n    <div>\n      <button\n        id="foo-button"\n        onClick={() => props.onButtonClick && props.onButtonClick()}\n      />\n    </div>\n  );\n}\n\nfunction MyComponent(props) {\n  return (\n    <div>\n      <Foo anum={3} abool={false} />\n      <Foo anum="3" abool="false" />\n      <Foo id="foo-id" abool={undefined} />\n      <div className="icon-star"></div>\n      <a href="foo">Foo</a>\n      {[1, 2, 3].map(item => (\n        <div key={item}>{item}</div>\n      ))}\n      {props.children}\n    </div>\n  );\n}\n\nMyComponent.displayName = "My Component";\n\nlet wrapper;\n\nbeforeEach(() => {\n  wrapper = mount(<MyComponent />);\n});\n\nafterEach(() => {\n  wrapper.unmount();\n});\n\ntest(".icon-start", () => {\n  expect(wrapper.find(".icon-star")).toHaveLength(1);\n});\n\ntest("button#foo-button", () => {\n  expect(wrapper.find("button#foo-button")).toHaveLength(3);\n});\n\ntest("a[href=foo]", () => {\n  expect(wrapper.find(\'a[href="foo"]\')).toHaveLength(1);\n});\n\ntest("a[href=foo]", () => {\n  expect(wrapper.find(\'a[href="foo"]\')).toHaveLength(1);\n});\n\ntest("#foo-id *", () => {\n  expect(wrapper.find(\'#foo-id *\')).toHaveLength(2);\n});\n\ntest("key doesn\'t work", () => {\n  expect(wrapper.find(\'[key=1]\')).toHaveLength(0);\n});\n\ntest("ref doesn\'t work", () => {\n  class SimpleComponent extends React.Component {\n    render() {\n      return <div ref="foo">Ref</div>;\n    }\n  }\n\n  const wrapper = mount(<SimpleComponent />);\n  expect(wrapper.find(\'[ref="foo"]\')).toHaveLength(0);\n});\n\ntest("Foo", () => {\n  expect(wrapper.find(Foo)).toHaveLength(3);\n});\n\ntest.skip("My Component", () => {\n  expect(wrapper.find("My Component")).toHaveLength(1);\n});\n\ntest("anum={3} abool={false}", () => {\n  expect(wrapper.find("[anum=3][abool=false]")).toHaveLength(1);\n\n  expect(\n    wrapper.find({\n      anum: 3,\n      abool: false\n    })\n  ).toHaveLength(1);\n});\n\ntest(\'anum="3" abool="false"\', () => {\n  expect(wrapper.find(\'[anum="3"][abool="false"]\')).toHaveLength(1);\n\n  expect(\n    wrapper.find({\n      anum: "3",\n      abool: "false"\n    })\n  ).toHaveLength(1);\n});\n\ntest(\'abool={undefined}\', () => {\n  // wont work\n  // expect(\n  //   wrapper.find({\n  //     aundefined: undefined\n  //   })\n  // ).toHaveLength(1);\n  expect(\n    wrapper.findWhere(n => n.is(Foo) && n.props().abool === undefined)\n  ).toHaveLength(1);\n});\n'.trim(),F=function(n){function e(){return Object(o.a)(this,e),Object(r.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,n),Object(a.a)(e,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var n=this.props.classes;return c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:2},c.a.createElement(u.a,{className:n.paper},c.a.createElement("h4",null,c.a.createElement(f.a,null)))),c.a.createElement(d.a,{item:!0,xs:10},c.a.createElement(u.a,{className:n.paper},c.a.createElement(h.a,null,c.a.createElement("h3",null,"2-shallow-rendering"),c.a.createElement("div",{style:g},c.a.createElement(C.a,{code:b,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"shallow-rendering"),c.a.createElement("br",null),c.a.createElement("div",{style:g},c.a.createElement(C.a,{code:x,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"3-full-dom-rendering"),c.a.createElement("div",{style:g},c.a.createElement(C.a,{code:w,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"full-dom-rendering"),c.a.createElement("br",null),c.a.createElement("div",{style:g},c.a.createElement(C.a,{code:w,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"4-static-rendering"),c.a.createElement("div",{style:g},c.a.createElement(C.a,{code:E,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"5-selectors"),c.a.createElement("div",{style:g},c.a.createElement(C.a,{code:y,language:"js",plugins:["line-numbers"]}))))))}}]),e}(p.Component);e.default=Object(v.a)((function(n){return{paper:{margin:n.spacing(1),padding:n.spacing(1)},smMargin:{margin:n.spacing(1)},actionDiv:{textAlign:"center"}}}))(F)}}]);
//# sourceMappingURL=55.4cf951c1.chunk.js.map