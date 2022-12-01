(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[188],{140:function(e,a,n){"use strict";n.d(a,"a",(function(){return p}));var t=n(45),l=n(28),r=n(136),s=n(137),i=n(139),c=n(0),o=n.n(c),m=n(138),u=n.n(m),p=(n(59),function(e){function a(e){var n;return Object(t.a)(this,a),(n=Object(r.a)(this,Object(s.a)(a).call(this,e))).highlight=function(){n.ref&&n.ref.current&&u.a.highlightElement(n.ref.current)},n.ref=o.a.createRef(),n}return Object(i.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,a=e.code,n=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(n)},a.trim()))}}]),a}(o.a.Component))},141:function(e,a,n){},146:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(0),l=n.n(t),r=n(26),s=n(297),i=n(295),c=n(114),o=Object(c.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=o();return l.a.createElement("div",{className:e.root},l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/infoMl",className:e.line},"InfoMl")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/gredient_decents",className:e.line},"Gredient Decents")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/training",className:e.line},"Traning")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/regularizations",className:e.line},"Regularizations")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/featuresEng",className:e.line},"FeaturesEng")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/adaboost",className:e.line},"Adaboots")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/greedSearch",className:e.line},"Greed Search")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/perceptron",className:e.line},"Perceptron")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/pcaPy",className:e.line},"PCA")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/leanearRegression",className:e.line},"Leanear Regression")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/logisticReg",className:e.line},"Logistic Regression")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/lda",className:e.line},"Lda")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/knn",className:e.line},"Knn")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/k_meanClustring",className:e.line},"K_Mean")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/naiveBar",className:e.line},"Naive Bayes")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/randomForest",className:e.line},"Random Forest")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/decisiontree",className:e.line},"Decision Tree")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/svmPy",className:e.line},"SVM")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/numpyPy",className:e.line},"Numpy")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/pandas",className:e.line},"Pandas")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/bagging",className:e.line},"Matplotlib")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/logisticRegrations",className:e.line},"Scikit Learn")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/regrations",className:e.line},"SciPy")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/libraries",className:e.line},"OpenCV")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/capture",className:e.line},"Capture")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/joinImages",className:e.line},"JoinImages")),l.a.createElement("br",null),"Deep Learning",l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/superwise",className:e.line},"Superwise"))),l.a.createElement("div",null))}},515:function(e,a,n){"use strict";n.r(a);var t=n(45),l=n(28),r=n(136),s=n(137),i=n(139),c=n(0),o=n.n(c),m=n(138),u=n.n(m),p=n(120),d=n(57),f=n(296),E=n(5),g=(n(141),n(146)),b=n(140),h={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},_="\nimport numpy as np\n\n\nclass LDA:\n    def __init__(self, n_components):\n        self.n_components = n_components\n        self.linear_discriminants = None\n\n    def fit(self, X, y):\n        n_features = X.shape[1]\n        class_labels = np.unique(y)\n\n        # SW = sum((X_c - mean_X_c)^2 )                                                     # Within class scatter matrix:\n        # SB = sum( n_c * (mean_X_c - mean_overall)^2 )                                     # Between class scatter:\n\n        mean_overall = np.mean(X, axis=0)\n        SW = np.zeros((n_features, n_features))\n        SB = np.zeros((n_features, n_features))\n        for c in class_labels:\n            X_c = X[y == c]\n            mean_c = np.mean(X_c, axis=0)\n            \n            SW += (X_c - mean_c).T.dot((X_c - mean_c))                            # (4, n_c) * (n_c, 4) = (4,4) -> transpose\n            n_c = X_c.shape[0]                                                    # (4, 1) * (1, 4) = (4,4) -> reshape\n            mean_diff = (mean_c - mean_overall).reshape(n_features, 1)\n            SB += n_c * (mean_diff).dot(mean_diff.T)\n\n        \n        A = np.linalg.inv(SW).dot(SB)                                      # Determine SW^-1 * SB\n                                                                           # Get eigenvalues and eigenvectors of SW^-1 * SB\n        eigenvalues, eigenvectors = np.linalg.eig(A)\n                                                            # eigenvector v = [:,i] column vector, transpose for easier cal.\n        \n        eigenvectors = eigenvectors.T                                      # sort eigenvalues high to low\n        idxs = np.argsort(abs(eigenvalues))[::-1]\n        eigenvalues = eigenvalues[idxs]\n        eigenvectors = eigenvectors[idxs]\n        \n        self.linear_discriminants = eigenvectors[0 : self.n_components]   # store first n eigenvectors\n\n    def transform(self, X):\n        return np.dot(X, self.linear_discriminants.T)                     # project data\n".trim(),v='\nif __name__ == "__main__":\n    # Imports\n    import matplotlib.pyplot as plt\n    from sklearn import datasets\n\n    data = datasets.load_iris()\n    X, y = data.data, data.target\n\n    # Project the data onto the 2 primary linear discriminants\n    lda = LDA(2)\n    lda.fit(X, y)\n    X_projected = lda.transform(X)\n\n    print("Shape of X:", X.shape)\n    print("Shape of transformed X:", X_projected.shape)\n\n    x1, x2 = X_projected[:, 0], X_projected[:, 1]\n\n    plt.scatter(\n        x1, x2, c=y, edgecolor="none", alpha=0.8, cmap=plt.cm.get_cmap("viridis", 3)\n    )\n\n    plt.xlabel("Linear Discriminant 1")\n    plt.ylabel("Linear Discriminant 2")\n    plt.colorbar()\n    plt.show()\n'.trim(),y=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(p.a,{container:!0},o.a.createElement(p.a,{item:!0,xs:2},o.a.createElement(d.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(g.a,null)))),o.a.createElement(p.a,{item:!0,xs:10},o.a.createElement(d.a,{className:e.paper},o.a.createElement(f.a,null,o.a.createElement("h3",null,"Linear Discriminant Analysis"),"It is a linear model for classification and dimensionality reduction. Most commonly used for feature extraction in pattern classification problems.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"Why LDA:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Logistic Regression perform well for binary classification but falls short in the case of multiple classification problems with well-separated classes. While LDA handles these."),o.a.createElement("li",null,"LDA also used in data preprocessing to reduce the number of features just as PCA which reduces the computing cost significantly."),o.a.createElement("li",null,"LDA is also used in face detection algorithms. In Fisherfaces LDA is used to extract useful data from different faces. Coupled with eigenfaces it produces effective results.")),o.a.createElement("br",null),o.a.createElement("b",null,"Shortcomings:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Linear decision boundaries may not effectively separate non-linearly separable classes. More flexible boundaries are desired."),o.a.createElement("li",null,"In cases where the number of observations exceeds the number of features, LDA might not perform as desired. This is called Small Sample Size (SSS) problem. Regularization is required.")),o.a.createElement("br",null),o.a.createElement("b",null,"Assumptions:"),"LDA makes some assumptions about the data:",o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,"Assumes the data to be distributed normally/ Gaussian distribution of data points i.e. each feature must make a bell-shaped curve when plotted. "),o.a.createElement("li",null,"Each of the classes has identical covariance matrices.")),o.a.createElement("br",null),o.a.createElement("div",{style:h},o.a.createElement(b.a,{code:_,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("b",null,"Testing"),o.a.createElement("div",{style:h},o.a.createElement(b.a,{code:v,language:"js",plugins:["line-numbers"]}))))))}}]),a}(c.Component);a.default=Object(E.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(y)}}]);
//# sourceMappingURL=188.f071e122.chunk.js.map