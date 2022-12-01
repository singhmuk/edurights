(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[185],{140:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(45),r=t(28),l=t(136),s=t(137),i=t(139),o=t(0),c=t.n(o),m=t(138),u=t.n(m),d=(t(59),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(s.a)(a).call(this,e))).highlight=function(){t.ref&&t.ref.current&&u.a.highlightElement(t.ref.current)},t.ref=c.a.createRef(),t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,a=e.code,t=(e.plugins,e.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},a.trim()))}}]),a}(c.a.Component))},141:function(e,a,t){},146:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n),l=t(26),s=t(297),i=t(295),o=t(114),c=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/infoMl",className:e.line},"InfoMl")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/gredient_decents",className:e.line},"Gredient Decents")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/training",className:e.line},"Traning")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/regularizations",className:e.line},"Regularizations")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/featuresEng",className:e.line},"FeaturesEng")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/adaboost",className:e.line},"Adaboots")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/greedSearch",className:e.line},"Greed Search")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/perceptron",className:e.line},"Perceptron")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/pcaPy",className:e.line},"PCA")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/leanearRegression",className:e.line},"Leanear Regression")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/logisticReg",className:e.line},"Logistic Regression")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/lda",className:e.line},"Lda")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/knn",className:e.line},"Knn")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/k_meanClustring",className:e.line},"K_Mean")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/naiveBar",className:e.line},"Naive Bayes")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/randomForest",className:e.line},"Random Forest")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/decisiontree",className:e.line},"Decision Tree")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/svmPy",className:e.line},"SVM")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/numpyPy",className:e.line},"Numpy")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/pandas",className:e.line},"Pandas")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/bagging",className:e.line},"Matplotlib")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/logisticRegrations",className:e.line},"Scikit Learn")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/regrations",className:e.line},"SciPy")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/libraries",className:e.line},"OpenCV")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/capture",className:e.line},"Capture")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/joinImages",className:e.line},"JoinImages")),r.a.createElement("br",null),"Deep Learning",r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/superwise",className:e.line},"Superwise"))),r.a.createElement("div",null))}},528:function(e,a,t){"use strict";t.r(a);var n=t(45),r=t(28),l=t(136),s=t(137),i=t(139),o=t(0),c=t.n(o),m=t(138),u=t.n(m),d=t(120),p=t(57),g=t(296),f=t(5),h=(t(141),t(146)),E=t(140),b={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},_="\nfrom sklearn import svm, datasets\niris = datasets.load_iris()\n\nimport pandas as pd\ndf = pd.DataFrame(iris.data,columns=iris.feature_names)\ndf['flower'] = iris.target\ndf['flower'] = df['flower'].apply(lambda x: iris.target_names[x])\ndf[47:150]\n".trim(),v="\nfrom sklearn.model_selection import GridSearchCV\n\nclf = GridSearchCV(svm.SVC(gamma='auto'), {'C': [1,10,20], 'kernel': ['rbf','linear']}, cv=5, return_train_score=False)\nclf.fit(iris.data, iris.target)\nclf.cv_results_\n\ndf = pd.DataFrame(clf.cv_results_)\ndf[['param_C','param_kernel','mean_test_score']]\n\nclf.best_params_\nclf.best_score_\n\ndir(clf)\n".trim(),y="\nfrom sklearn.model_selection import RandomizedSearchCV\nfrom sklearn import svm\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.linear_model import LogisticRegression\n\nrs = RandomizedSearchCV(svm.SVC(gamma='auto'), {'C': [1,10,20],'kernel': ['rbf','linear']}, \n    cv=5, return_train_score=False, n_iter=2)\n    \nrs.fit(iris.data, iris.target)\npd.DataFrame(rs.cv_results_)[['param_C','param_kernel','mean_test_score']]\n\n\n#How about different models with different hyperparameters?\n\nmodel_params = {\n    'svm': {\n        'model': svm.SVC(gamma='auto'),\n        'params' : {'C': [1,10,20],'kernel': ['rbf','linear']}  \n    },\n    'random_forest': {\n        'model': RandomForestClassifier(),\n        'params' : {'n_estimators': [1,5,10]}\n    },\n    'logistic_regression' : {\n        'model': LogisticRegression(solver='liblinear',multi_class='auto'),\n        'params': {'C': [1,5,10]}\n    }\n}\n\n\nscores = []\n\nfor model_name, mp in model_params.items():\n    clf =  GridSearchCV(mp['model'], mp['params'], cv=5, return_train_score=False)\n    clf.fit(iris.data, iris.target)\n    scores.append({'model': model_name,'best_score': clf.best_score_,'best_params': clf.best_params_})\n    \ndf = pd.DataFrame(scores,columns=['model','best_score','best_params'])\ndf\n".trim(),C="\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.3)\n\nmodel = svm.SVC(kernel='rbf',C=30,gamma='auto')\nmodel.fit(X_train,y_train)\nmodel.score(X_test, y_test)\n".trim(),k="\ncross_val_score(svm.SVC(kernel='linear',C=10,gamma='auto'),iris.data, iris.target, cv=5)\ncross_val_score(svm.SVC(kernel='rbf',C=10,gamma='auto'),iris.data, iris.target, cv=5)\ncross_val_score(svm.SVC(kernel='rbf',C=20,gamma='auto'),iris.data, iris.target, cv=5)\n\n\n#Above approach is tiresome and very manual. We can use for loop as an alternative.\nkernels = ['rbf', 'linear']\nC = [1,10,20]\navg_scores = {}\nfor kval in kernels:\n    for cval in C:\n        cv_scores = cross_val_score(svm.SVC(kernel=kval,C=cval,gamma='auto'),iris.data, iris.target, cv=5)\n        avg_scores[kval + '_' + str(cval)] = np.average(cv_scores)\n\navg_scores\n\n".trim(),N=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:2},c.a.createElement(p.a,{className:e.paper},c.a.createElement("h4",null,c.a.createElement(h.a,null)))),c.a.createElement(d.a,{item:!0,xs:10},c.a.createElement(p.a,{className:e.paper},c.a.createElement(g.a,null,c.a.createElement("h3",null,"Greedy Algorithms"),"Greedy algorithms aim to make the optimal choice at given moment. Each step it chooses the optimal choice, without knowing the future. It attempts to find the globally optimal way to solve the entire problem using this method.",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("ul",null,c.a.createElement("li",null,"Check which Model is best fit for given problem. So it's a Model selection technique. Also check which parameter good for model."),c.a.createElement("li",null,"Greedy algorithms are greedy. They do not look into the future to decide the global optimal solution. They are only concerned with the optimal solution locally. This means that the overall optimal solution may differ from the solution the algorithm chooses."),c.a.createElement("li",null,"Greedy algorithms don\u2019t guarantee solutions, but are very time efficient."),c.a.createElement("li",null,"Greedy algorithms are quick than ",c.a.createElement("b",null,"Divide & Conquer and Dynamic Programming"),".")),c.a.createElement("br",null),c.a.createElement("h3",null,"Finding best model and hyper parameter tunning using GridSearchCV"),"For iris flower dataset in sklearn library, we are going to find out best model and best hyper parameters using GridSearchCV.",c.a.createElement("div",{style:b},c.a.createElement(E.a,{code:_,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Approach 1"),"Use train_test_split and manually tune parameters by trial and error.",c.a.createElement("div",{style:b},c.a.createElement(E.a,{code:C,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Approach 2: Use K Fold Cross validation."),"Manually try suppling models with different parameters to cross_val_score function with 5 fold cross validation.",c.a.createElement("div",{style:b},c.a.createElement(E.a,{code:k,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Approach 3: Use GridSearchCV"),"GridSearchCV does exactly same thing as for loop above but in a single line of code.",c.a.createElement("div",{style:b},c.a.createElement(E.a,{code:v,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Use RandomizedSearchCV to reduce number of iterations and with random combination of parameters. This is useful when you have too many parameters to try and your training time is longer. It helps reduce the cost of computation"),c.a.createElement("div",{style:b},c.a.createElement(E.a,{code:y,language:"js",plugins:["line-numbers"]}))))))}}]),a}(o.Component);a.default=Object(f.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(N)}}]);
//# sourceMappingURL=185.60d73472.chunk.js.map