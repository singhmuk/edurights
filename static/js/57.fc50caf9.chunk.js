(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[57],{140:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(45),l=a(28),r=a(136),s=a(137),i=a(139),c=a(0),o=a.n(c),u=a(138),m=a.n(u),h=(a(59),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).highlight=function(){a.ref&&a.ref.current&&m.a.highlightElement(a.ref.current)},a.ref=o.a.createRef(),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,t=e.code,a=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(a)},t.trim()))}}]),t}(o.a.Component))},141:function(e,t,a){},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),l=a.n(n),r=a(26),s=a(297),i=a(295),c=a(114),o=Object(c.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=o();return l.a.createElement("div",{className:e.root},l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/devtools",className:e.line},"Devtools")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/cssbasics",className:e.line},"CSS")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/sass",className:e.line},"SASS")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/html_1",className:e.line},"html 1")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/restApi",className:e.line},"RestApi")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/jest",className:e.line},"Jest")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/matchers",className:e.line},"Matchers")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/enzymes",className:e.line},"Enzymes")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/enzyme2",className:e.line},"Enzymes2")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/enzyme3",className:e.line},"Enzymes3"))),l.a.createElement("div",null))}},159:function(e,t,a){e.exports=a.p+"static/media/css1.cf9107ca.PNG"},324:function(e,t,a){"use strict";a.r(t);var n=a(45),l=a(28),r=a(136),s=a(137),i=a(139),c=a(0),o=a.n(c),u=a(138),m=a.n(u),h=a(120),E=a(57),d=a(296),p=a(5),b=(a(141),a(156)),f=a(140),v=(a(159),{backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"}),T="<protocol>://<service-name>/<ResourceType>/<ResourceID>".trim(),g=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(h.a,{container:!0},o.a.createElement(h.a,{item:!0,xs:2},o.a.createElement(E.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(b.a,null)))),o.a.createElement(h.a,{item:!0,xs:10},o.a.createElement(E.a,{className:e.paper},o.a.createElement(d.a,null,o.a.createElement("h3",null,"1.Explain REST?"),"REST stands for Representational State Transfer. REST is an architectural style of developing web services which take advantage of the ubiquity of HTTP protocol and leverages HTTP method to define actions. It revolves around resource where every component is a resource which can be accessed by a common interface using HTTP standard methods.",o.a.createElement("br",null),o.a.createElement("br",null),"In REST each resource is identified by URIs or global IDs. REST uses different ways to represent a resource like text, JSON, and XML. XML and JSON are the most popular representations of resources these days.",o.a.createElement("br",null),o.a.createElement("h3",null,"2.Explain the RESTFul Web Service?"),"Mostly, there are two kinds of Web Services which are quite popular.",o.a.createElement("ol",null,o.a.createElement("li",null,"SOAP (Simple Object Access Protocol) which is an XML-based way to expose web services."),o.a.createElement("li",null,"Web services developed using REST style are known as RESTfo web services. These web services use HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, provides resource representation such as JSON and set of HTTP Methods.")),o.a.createElement("br",null),o.a.createElement("h3",null,"3.Explain what is a \u201cResource\u201d in REST?"),o.a.createElement("ol",null,o.a.createElement("li",null,"REST architecture treats every content as a resource. These resources can be either text files, HTML pages, images, videos or dynamic business data."),o.a.createElement("li",null,"REST Server provides access to resources and REST client accesses and modifies these resources. Here each resource is identified by URIs/ global IDs.")),o.a.createElement("br",null),o.a.createElement("h3",null,"4.Which protocol is used by RESTful web services?"),"RESTful web services make use of HTTP protocol as a medium of communication between client and server.",o.a.createElement("br",null),o.a.createElement("h3",null,"5.Mention some key characteristics of REST?"),o.a.createElement("ol",null,o.a.createElement("li",null,"REST is stateless, therefore the SERVER has no state (or session data)"),o.a.createElement("li",null,"With a well-applied REST API, the server could be restarted between two calls as every data is passed to the server"),o.a.createElement("li",null,"Web service mostly uses POST method to make operations, whereas REST uses GET to access resources")),o.a.createElement("br",null),o.a.createElement("h3",null,"6.Mention what is the difference between AJAX and REST?"),o.a.createElement("b",null,"Ajax:"),o.a.createElement("br",null),o.a.createElement("ol",null,o.a.createElement("li",null,"In Ajax, the request are sent to the server by using XMLHttpRequest objects. The response is used by the JavaScript code to dynamically alter the current page"),o.a.createElement("li",null,"Ajax is a set of technology; it is a technique of dynamically updating parts of UI without having to reload the page"),o.a.createElement("li",null,"Ajax eliminates the interaction between the client and server asynchronously")),o.a.createElement("br",null),o.a.createElement("b",null,"REST:"),o.a.createElement("br",null),o.a.createElement("ol",null,o.a.createElement("li",null,"REST requires the interaction between the client and server"),o.a.createElement("li",null,"REST have a URL structure and a request/response pattern the revolve around the use of resources"),o.a.createElement("li",null,"REST is a type of software architecture and a method for users to request data or information from servers"),o.a.createElement("li",null,"REST requires the interaction between the client and server")),o.a.createElement("br",null),o.a.createElement("h3",null,"7.What is a Resource in Restful web services?"),"Resource is the fundamental concept of Restful architecture. A resource is an object with:",o.a.createElement("ol",null,o.a.createElement("li",null,"a type"),o.a.createElement("li",null,"relationship with other resources and"),o.a.createElement("li",null,"methods that operate on it.")),o.a.createElement("br",null),"Resources are identified with:",o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,"their URI"),o.a.createElement("li",null,"HTTP methods they support and"),o.a.createElement("li",null,"request/response data type and format of data.")),o.a.createElement("br",null),o.a.createElement("h3",null,"8.What is purpose of a URI in REST based webservices?"),"URI stands for Uniform Resource Identifier. Each resource in REST architecture is identified by its URI. Purpose of an URI is to locate a resource(s) on the server hosting the web service.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("i",null,"A URI is of following format:"),o.a.createElement("div",{style:v},o.a.createElement(f.a,{code:T,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"9.Mention what are the HTTP methods supported by REST?"),o.a.createElement("ol",null,o.a.createElement("li",null,"GET"),o.a.createElement("li",null,"POST"),o.a.createElement("li",null,"PUT"),o.a.createElement("li",null,"DELETE"),o.a.createElement("li",null,"OPTIONS"),o.a.createElement("li",null,"HEAD")),o.a.createElement("br",null),o.a.createElement("h3",null,"10.What are the best practices to create a standard URI for a web service?"),"Following are important points to be considered while designing a URI:",o.a.createElement("br",null),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("b",null,"Use Plural Noun \u2212")," Use plural noun to define resources. For example, we've used users to identify users as a resource."),o.a.createElement("li",null,o.a.createElement("b",null,"Avoid using spaces \u2212")," Use underscore(_) or hyphen(-) when using a long resource name, for example, use authorized_users instead of authorized%20users."),o.a.createElement("li",null,o.a.createElement("b",null,"Use lowercase letters \u2212")," Although URI is case-insensitive, it is good practice to keep url in lower case letters only."),o.a.createElement("li",null,o.a.createElement("b",null,"Maintain Backward Compatibility \u2212")," As Web Service is a public service, a URI once made public should always be available. In case, URI gets updated, redirect the older URI to new URI using HTTP Status code, 300."),o.a.createElement("li",null,o.a.createElement("b",null,"Use HTTP Verb -")," Always use HTTP Verb like GET, PUT, and DELETE to do the operations on the resource. It is not good to use operations names in URI.")),o.a.createElement("br",null),o.a.createElement("h3",null,"11.What are the disadvantages of statelessness in RESTful Webservices?"),"Web services need to get extra information in each request and then interpret to get the client's state in case client interactions are to be taken care of.",o.a.createElement("br",null),o.a.createElement("h3",null,"12.What are the primary security issues of web service?"),"To ensure reliable transactions and secure confidential information, web services requires very high level of security which can be only achieved through Entrust Secure Transaction Platform. Security issues for web services are broadly divided into three sections as described below",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"1) Confidentiality:"),"A single web service can have multiple applications and their service path contains a potential weak link at its nodes. Whenever messages or say XML requests are sent by the client along with the service path to the server, they must be encrypted. Thus, maintaining the confidentiality of the communication is a must.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"2) Authentication:"),"Authentication is basically performed to verify the identity of the users as well as ensuring that the user using the web service has the right to use or not? Authentication is also done to track user\u2019s activity. There are several options that can be considered for this purpose",o.a.createElement("ol",null,o.a.createElement("li",null,"Application level authentication"),o.a.createElement("li",null,"HTTP digest and HTTP basic authentication"),o.a.createElement("li",null,"Client certificates")),o.a.createElement("br",null),o.a.createElement("b",null,"3) Network Security: "),"This is a serious issue which requires tools to filter web service traffic.",o.a.createElement("br",null),o.a.createElement("h3",null,"13.What is addressing in RESTful webservices?"),"Addressing refers to locating a resource or multiple resources lying on the server.",o.a.createElement("br",null),o.a.createElement("h3",null,"14.What is statelessness in RESTful Webservices?"),"As per REST architecture, a RESTful web service should not keep a client state on server. This restriction is called statelessness. It is responsibility of the client to pass its context to server and then server can store this context to process client's further request. For example, session maintained by server is identified by session identifier passed by the client.",o.a.createElement("br",null),o.a.createElement("h3",null,"15.What is the use of Accept and Content-Type Headers in HTTP Request?"),o.a.createElement("b",null,"Accept headers: "),"tells web service what kind of response client is accepting, so if a web service is capable of sending response in XML and JSON format and client sends Accept header as application/xml then XML response will be sent. For Accept header application/json, server will send the JSON response.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"Content-Type header: "),"is used to tell server what is the format of data being sent in the request. If Content-Type header is application/xml then server will try to parse it as XML data. This header is useful in HTTP Post and Put requests.",o.a.createElement("br",null),o.a.createElement("h3",null,"16.What are the advantages of statelessness in RESTful Webservices?"),o.a.createElement("ol",null,o.a.createElement("li",null,"Web services can treat each method request independently."),o.a.createElement("li",null,"Web services need not to maintain client's previous interactions. It simplifies application design."),o.a.createElement("li",null,"As HTTP is itself a statelessness protocol, RESTful Web services work seamlessly with HTTP protocol.")),o.a.createElement("br",null),o.a.createElement("h3",null,"17.What should be the purpose of OPTIONS method of RESTful web services?"),"It should list down the supported operations in a web service and should be read only.",o.a.createElement("br",null),o.a.createElement("h3",null,"18.Explain the caching mechanism?"),"Caching is a process of storing server response at the client end. It makes the server save significant time from serving the same resource again and again.",o.a.createElement("br",null),o.a.createElement("br",null),"The server response holds information which leads a client to perform the caching. It helps the client to decide how long to archive the response or not to store it at all."))))}}]),t}(c.Component);t.default=Object(p.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(g)}}]);
//# sourceMappingURL=57.fc50caf9.chunk.js.map