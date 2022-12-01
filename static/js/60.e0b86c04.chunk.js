(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[60],{140:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(45),l=t(28),r=t(136),i=t(137),c=t(139),s=t(0),m=t.n(s),o=t(138),u=t.n(o),d=(t(59),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(i.a)(a).call(this,e))).highlight=function(){t.ref&&t.ref.current&&u.a.highlightElement(t.ref.current)},t.ref=m.a.createRef(),t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,a=e.code,t=(e.plugins,e.language);return m.a.createElement("pre",{className:"code-prism"},m.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},a.trim()))}}]),a}(m.a.Component))},141:function(e,a,t){},146:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),l=t.n(n),r=t(26),i=t(297),c=t(295),s=t(114),m=Object(s.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function o(){var e=m();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/infoMl",className:e.line},"InfoMl")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/gredient_decents",className:e.line},"Gredient Decents")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/training",className:e.line},"Traning")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/regularizations",className:e.line},"Regularizations")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/featuresEng",className:e.line},"FeaturesEng")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/adaboost",className:e.line},"Adaboots")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/greedSearch",className:e.line},"Greed Search")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/perceptron",className:e.line},"Perceptron")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/pcaPy",className:e.line},"PCA")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/leanearRegression",className:e.line},"Leanear Regression")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/logisticReg",className:e.line},"Logistic Regression")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/lda",className:e.line},"Lda")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/knn",className:e.line},"Knn")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/k_meanClustring",className:e.line},"K_Mean")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/naiveBar",className:e.line},"Naive Bayes")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/randomForest",className:e.line},"Random Forest")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/decisiontree",className:e.line},"Decision Tree")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/svmPy",className:e.line},"SVM")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/numpyPy",className:e.line},"Numpy")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/pandas",className:e.line},"Pandas")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/bagging",className:e.line},"Matplotlib")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/logisticRegrations",className:e.line},"Scikit Learn")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/regrations",className:e.line},"SciPy")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/libraries",className:e.line},"OpenCV")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/capture",className:e.line},"Capture")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/joinImages",className:e.line},"JoinImages")),l.a.createElement("br",null),"Deep Learning",l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/superwise",className:e.line},"Superwise"))),l.a.createElement("div",null))}},257:function(e,a,t){e.exports=t.p+"static/media/output.97680b5f.png"},524:function(e,a,t){"use strict";t.r(a);var n=t(45),l=t(28),r=t(136),i=t(137),c=t(139),s=t(0),m=t.n(s),o=t(138),u=t.n(o),d=t(120),p=t(57),E=t(296),h=t(5),g=(t(141),t(146)),b=t(140),f=t(257),y=t.n(f),N={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},w={height:200,width:500},v="\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n%matplotlib inline\ndef gradient_descent(x,y):\n    m_curr = b_curr = 0\n    rate = 0.01\n    n = len(x)\n    plt.scatter(x,y,color='red',marker='+',linewidth='5')\n    for i in range(10000):\n        y_predicted = m_curr * x + b_curr\n        print (m_curr,b_curr, i)\n        plt.plot(x,y_predicted,color='green')\n        md = -(2/n)*sum(x*(y-y_predicted))\n        yd = -(2/n)*sum(y-y_predicted)\n        m_curr = m_curr - rate * md\n        b_curr = b_curr - rate * yd\n        \n        \nx = np.array([1,2,3,4,5])\ny = np.array([5,7,9,11,13])\n\ngradient_descent(x,y) \n".trim(),_='\nimport numpy as np\n\ndef gradient_descent(x,y):\n    m=b = 0\n    iterations = 1000\n    n = len(x)\n    learning_rate = 0.08\n\n    for i in range(iterations):\n        y_predicted = m*x + b\n        cost = (1/n) * sum([val**2 for val in (y-y_predicted)])\n        md = -(2/n)*sum(x*(y-y_predicted))\n        bd = -(2/n)*sum(y-y_predicted)\n        m = m-learning_rate * md\n        b = b-learning_rate * bd\n        print ("m {}, b {}, cost {} iteration {}".format(m,b,cost, i))\n\nx = np.array([1,2,3,4,5])\ny = np.array([5,7,9,11,13])\n\ngradient_descent(x,y)'.trim(),k="\ndl/dw = dl/de * de/dy * dy/dw\n".trim(),x=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return m.a.createElement(d.a,{container:!0},m.a.createElement(d.a,{item:!0,xs:2},m.a.createElement(p.a,{className:e.paper},m.a.createElement("h4",null,m.a.createElement(g.a,null)))),m.a.createElement(d.a,{item:!0,xs:10},m.a.createElement(p.a,{className:e.paper},m.a.createElement(E.a,null,m.a.createElement("h3",null,"Gradient descent"),"Gradient descent is an optimization algorithm that's used when training a ML model. It's based on a convex function and tweaks its parameters iteratively to minimize a given function to its local minimum.",m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("b",null,"A gradient measures how much the output of a function changes if you change the inputs a little bit"),m.a.createElement("br",null),m.a.createElement("h3",null,"WHAT IS A GRADIENT?"),"A gradient is a derivative of a function that has more than one input variable. Known as the slope of a function, the gradient simply measures the change in all weights w.r.t the change in error.",m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("b",null,"Importance of the Learning Rate:"),m.a.createElement("ul",null,m.a.createElement("li",null,"How big the steps are gradient descent takes into the direction of the local minimum are determined by the learning rate, which figures out how fast/ slow we will move towards the optimal weights."),m.a.createElement("li",null,"To reach the local minimum we must set the learning rate to an appropriate value, which is neither too low nor too high. This is important because if the steps it takes are too big, it may not reach the local minimum because it bounces back and forth between the convex function of gradient descent. If we set the learning rate to a very small value, gradient descent will eventually reach the local minimum but that may take a while. ")),m.a.createElement("br",null),m.a.createElement("h3",null,"Types of Gradient Descent"),"Three types based on amount of data they use.",m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("b",null,"BATCH GRADIENT DESCENT(vanilla gradient descen): "),"Calculates the error."),m.a.createElement("ul",null,m.a.createElement("li",null,"Advantages of batch gradient descent are its computational efficient,it produces a stable error gradient and a stable convergence."),m.a.createElement("li",null,"we go through all training samples and calculate cumulative error."),m.a.createElement("li",null,"Now back propagate and adjust weights."),m.a.createElement("li",null,"Good for small training set.")),m.a.createElement("br",null),m.a.createElement("li",null,m.a.createElement("b",null,"STOCHASTIC GRADIENT DESCENT: "),"It updates the parameters for each training example one by one."),m.a.createElement("ul",null,m.a.createElement("li",null,"Use one(randomly picked) sample for a forward pass and then adjust weights."),m.a.createElement("li",null,"Good when training set is very big and we don't want too much computation.")),m.a.createElement("br",null),m.a.createElement("li",null,m.a.createElement("b",null,"MINI-BATCH GRADIENT DESCENT: "),"Combination of the concepts of SGD and batch gradient descent. "),m.a.createElement("ul",null,m.a.createElement("li",null,"It simply splits the training dataset into small batches and performs an update for each of those batches. This creates a balance between the robustness of SGD and the efficiency of batch gradient descent."),m.a.createElement("li",null,"Is like SGD instead of choosing 1 randomly picked training sample, We will use a batch of randomly picked training samples."),m.a.createElement("li",null,"Use a batch of (randomly picked) samples for a forward pass and then adjust weights."),m.a.createElement("li",null,"Common mini-batch sizes range between 50 and 256."))),m.a.createElement("br",null),m.a.createElement("img",{src:y.a,alt:"gradient",className:"responsive",style:w}),m.a.createElement("div",{style:N},m.a.createElement(b.a,{code:v,language:"js",plugins:["line-numbers"]})),m.a.createElement("br",null),m.a.createElement("h3",null,"With Python"),m.a.createElement("div",{style:N},m.a.createElement(b.a,{code:_,language:"js",plugins:["line-numbers"]})),m.a.createElement("br",null),m.a.createElement("h3",null,"Chain Rule"),m.a.createElement("div",{style:N},m.a.createElement(b.a,{code:k,language:"js",plugins:["line-numbers"]}))))))}}]),a}(s.Component);a.default=Object(h.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(x)}}]);
//# sourceMappingURL=60.e0b86c04.chunk.js.map