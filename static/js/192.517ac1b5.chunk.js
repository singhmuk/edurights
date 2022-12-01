(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[192],{140:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(45),l=a(28),r=a(136),s=a(137),i=a(139),o=a(0),c=a.n(o),m=a(138),u=a.n(m),d=(a(59),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).highlight=function(){a.ref&&a.ref.current&&u.a.highlightElement(a.ref.current)},a.ref=c.a.createRef(),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,t=e.code,a=(e.plugins,e.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(a)},t.trim()))}}]),t}(c.a.Component))},141:function(e,t,a){},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),l=a.n(n),r=a(26),s=a(297),i=a(295),o=a(114),c=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=c();return l.a.createElement("div",{className:e.root},l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/infoMl",className:e.line},"InfoMl")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/gredient_decents",className:e.line},"Gredient Decents")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/training",className:e.line},"Traning")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/regularizations",className:e.line},"Regularizations")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/featuresEng",className:e.line},"FeaturesEng")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/adaboost",className:e.line},"Adaboots")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/greedSearch",className:e.line},"Greed Search")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/perceptron",className:e.line},"Perceptron")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/pcaPy",className:e.line},"PCA")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/leanearRegression",className:e.line},"Leanear Regression")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/logisticReg",className:e.line},"Logistic Regression")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/lda",className:e.line},"Lda")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/knn",className:e.line},"Knn")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/k_meanClustring",className:e.line},"K_Mean")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/naiveBar",className:e.line},"Naive Bayes")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/randomForest",className:e.line},"Random Forest")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/decisiontree",className:e.line},"Decision Tree")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/svmPy",className:e.line},"SVM")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/numpyPy",className:e.line},"Numpy")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/pandas",className:e.line},"Pandas")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/bagging",className:e.line},"Matplotlib")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/logisticRegrations",className:e.line},"Scikit Learn")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/regrations",className:e.line},"SciPy")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/libraries",className:e.line},"OpenCV")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/capture",className:e.line},"Capture")),l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/joinImages",className:e.line},"JoinImages")),l.a.createElement("br",null),"Deep Learning",l.a.createElement(s.a,null,l.a.createElement(r.b,{to:"/superwise",className:e.line},"Superwise"))),l.a.createElement("div",null))}},521:function(e,t,a){"use strict";a.r(t);var n=a(45),l=a(28),r=a(136),s=a(137),i=a(139),o=a(0),c=a.n(o),m=a(138),u=a.n(m),d=a(120),p=a(57),f=a(296),h=a(5),E=(a(141),a(146)),g=a(140),b={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},_="\nimport pandas as pd\nimport seaborn as sn\nfrom sklearn.datasets import load_digits\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import confusion_matrix \nimport matplotlib.pyplot as plt\n%matplotlib inline\n\ndigits = load_digits()\ndir(digits)\n\nplt.gray() \nfor i in range(4):\n    plt.matshow(digits.images[i]) \n    \ndf = pd.DataFrame(digits.data)\ndf['target'] = digits.target\n\nX = df.drop('target',axis='columns')\ny = df.target\n\nX_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2)\nmodel = RandomForestClassifier(n_estimators=20)\nmodel.fit(X_train, y_train)\nmodel.score(X_test, y_test)\n\ny_predicted = model.predict(X_test)\ncm = confusion_matrix(y_test, y_predicted)\n\nplt.figure(figsize=(10,7))\nsn.heatmap(cm, annot=True)\n\nplt.xlabel('Predicted')\nplt.ylabel('Truth')\n".trim(),y="\nimport numpy as np\nfrom collections import Counter\nfrom .decision_tree import DecisionTree\n\n\ndef bootstrap_sample(X, y):\n    n_samples = X.shape[0]\n    idxs = np.random.choice(n_samples, n_samples, replace=True)\n    return X[idxs], y[idxs]\n\n\ndef most_common_label(y):\n    counter = Counter(y)\n    most_common = counter.most_common(1)[0][0]\n    return most_common\n\n\nclass RandomForest:\n    def __init__(self, n_trees=10, min_samples_split=2, max_depth=100, n_feats=None):\n        self.n_trees = n_trees\n        self.min_samples_split = min_samples_split\n        self.max_depth = max_depth\n        self.n_feats = n_feats\n        self.trees = []\n\n    def fit(self, X, y):\n        self.trees = []\n        for _ in range(self.n_trees):\n            tree = DecisionTree(\n                min_samples_split=self.min_samples_split,\n                max_depth=self.max_depth,\n                n_feats=self.n_feats,\n            )\n            X_samp, y_samp = bootstrap_sample(X, y)\n            tree.fit(X_samp, y_samp)\n            self.trees.append(tree)\n\n    def predict(self, X):\n        tree_preds = np.array([tree.predict(X) for tree in self.trees])\n        tree_preds = np.swapaxes(tree_preds, 0, 1)\n        y_pred = [most_common_label(tree_pred) for tree_pred in tree_preds]\n        return np.array(y_pred)\n".trim(),v='\nif __name__ == "__main__":\n    from sklearn import datasets\n    from sklearn.model_selection import train_test_split\n\n    def accuracy(y_true, y_pred):\n        accuracy = np.sum(y_true == y_pred) / len(y_true)\n        return accuracy\n\n    data = datasets.load_breast_cancer()\n    X = data.data\n    y = data.target\n\n    X_train, X_test, y_train, y_test = train_test_split(\n        X, y, test_size=0.2, random_state=1234\n    )\n\n    clf = RandomForest(n_trees=3, max_depth=10)\n\n    clf.fit(X_train, y_train)\n    y_pred = clf.predict(X_test)\n    acc = accuracy(y_test, y_pred)\n\n    print("Accuracy:", acc)\n'.trim(),w=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:2},c.a.createElement(p.a,{className:e.paper},c.a.createElement("h4",null,c.a.createElement(E.a,null)))),c.a.createElement(d.a,{item:!0,xs:10},c.a.createElement(p.a,{className:e.paper},c.a.createElement(f.a,null,c.a.createElement("h3",null,"Random Forest (supervised learning algorithm)"),"Random forest is used for both classification as well as regression. But however, it is mainly used for classification problems. As we know that a forest is made up of trees and more trees means more robust forest. Similarly, random forest algorithm creates decision trees on data samples and then gets the prediction from each of them and finally selects the best solution by means of voting. It is an ensemble method which is better than a single decision tree because it reduces the over-fitting by averaging the result. Working of Random Forest Algorithm.",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("ul",null,c.a.createElement("li",null,"1. Start with the selection of random samples from a given dataset. "),c.a.createElement("li",null,"2. This algorithm will construct a decision tree for every sample. Then it will get the prediction result from every decision tree."),c.a.createElement("li",null,"3. Voting will be performed for every predicted result."),c.a.createElement("li",null,"4. At last, select the most voted prediction result as the final prediction result.")),c.a.createElement("br",null),c.a.createElement("b",null,"Pros: "),c.a.createElement("ul",null,c.a.createElement("li",null,"It overcomes the problem of overfitting by averaging or combining the results of different decision trees."),c.a.createElement("li",null,"Work well for a large range of data items than a single decision tree does. Random forest has less variance then single decision tree."),c.a.createElement("li",null,"Very flexible and possess very high accuracy."),c.a.createElement("li",null,"Scaling of data does not require in random forest algorithm. It maintains good accuracy even after providing data without scaling."),c.a.createElement("li",null,"Maintains good accuracy even a large proportion of the data is missing."),c.a.createElement("li",null)),c.a.createElement("br",null),c.a.createElement("b",null,"Cons: "),c.a.createElement("ul",null,c.a.createElement("li",null,"Complexity is the main disadvantage of Random forest algorithms."),c.a.createElement("li",null,"Construction of Random forests are much harder and time-consuming than decision trees. More computational resources are required to implement Random Forest algorithm."),c.a.createElement("li",null,"It is less intuitive in case when we have a large collection of decision trees. The prediction process using random forests is very time-consuming in comparison with other algorithms.")),c.a.createElement("br",null),c.a.createElement("h3",null,"Random Forest(Supervised)"),"Used widely in Classification and Regression problems.It builds decision trees on different samples and takes their majority vote for classification and average in case of regression.",c.a.createElement("br",null),c.a.createElement("br",null),"One of the most important features of the Random Forest Algorithm is that it can handle the data set containing continuous variables in regression and categorical variables in classification(better results).             for classification problems.",c.a.createElement("br",null),c.a.createElement("br",null),"A student named X wants to choose a course after his 10+2, and he is confused about the choice of course based on his skill set. So he decides to consult various people like his cousins, teachers, parents, degree students, and working people. He asks them varied questions like why he should choose, job opportunities with that course, course fee, etc. Finally, after consulting various people about the course he decides to take the course suggested by most of the people.",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"Ensemble uses two types of methods: "),c.a.createElement("ul",null,c.a.createElement("li",null,"Bagging (Parallel), Random forest works on the Bagging principle."),c.a.createElement("li",null,"Boosting (Sequential)")),c.a.createElement("br",null),c.a.createElement("b",null,"Steps involved in random forest algorithm:"),c.a.createElement("ul",null,c.a.createElement("li",null,"n number of random records are taken from the data set having k number of records."),c.a.createElement("li",null,"Individual decision trees are constructed for each sample."),c.a.createElement("li",null,"Each decision tree will generate an output."),c.a.createElement("li",null,"Final output is considered based on Majority Voting or Averaging for Classification and regression respectively.")),c.a.createElement("br",null),c.a.createElement("b",null,"Important Features of Random Forest: "),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"Diversity: "),"Not all attributes/variables/features are considered while making an individual tree, each tree is different."),c.a.createElement("li",null,c.a.createElement("b",null,"Immune to the curse of dimensionality: "),"Since each tree does not consider all the features, the feature space is reduced."),c.a.createElement("li",null,c.a.createElement("b",null,"Parallelization: "),"Each tree is created independently out of different data and attributes. This means that we can make full use of the CPU to build random forests."),c.a.createElement("li",null,c.a.createElement("b",null,"Train-Test split: ")),c.a.createElement("li",null,c.a.createElement("b",null,"Stability: "),"Stability arises because the result is based on majority voting/ averaging.")),c.a.createElement("br",null),c.a.createElement("b",null,"Difference Between Decision Tree & Random Forest"),c.a.createElement("br",null),"Random forest is a collection of decision trees.",c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Decision trees"),c.a.createElement("th",null,"Random Forest")),c.a.createElement("tr",null,c.a.createElement("td",null,"Normally suffer from the problem of overfitting if it\u2019s allowed to grow without any control."),c.a.createElement("td",null,"Created from subsets of data and the final output is based on average or majority ranking and hence the problem of overfitting is taken care of.")),c.a.createElement("tr",null,c.a.createElement("td",null,"A single decision tree is faster in computation."),c.a.createElement("td",null,"Comparatively slower.")),c.a.createElement("tr",null,c.a.createElement("td",null,"When a data set with features is taken as input by a decision tree it will formulate some set of rules to do prediction."),c.a.createElement("td",null,"Randomly selects observations, builds a decision tree and the average result is taken. It doesn\u2019t use any set of formulas."))),c.a.createElement("br",null),c.a.createElement("i",null,"Thus random forests are much more successful than decision trees only if the trees are diverse and acceptable."),c.a.createElement("br",null),c.a.createElement("h3",null,"Important Hyperparameters"),"Hyperparameters are used in random forests to either enhance the performance and predictive power of models or to make the model faster.",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"n_estimators: "),"number of trees the algorithm builds before averaging the predictions."),c.a.createElement("li",null,c.a.createElement("b",null,"max_features: "),"max. number of features random forest considers splitting a node."),c.a.createElement("li",null,c.a.createElement("b",null,"mini_sample_leaf: "),"determines the min. number of leaves required to split an internal node.")),c.a.createElement("br",null),c.a.createElement("b",null,"Following hyperparameters increases the speed: "),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"n_jobs: ")," It tells the engine how many processors it is allowed to use. If the value is 1, it can use only one processor but if the value is -1 there is no limit."),c.a.createElement("li",null,c.a.createElement("b",null,"random_state: "),"Controls randomness of the sample. The model will always produce the same results if it has a definite value of random state and if it has been given the same hyperparameters and the same training data."),c.a.createElement("li",null,c.a.createElement("b",null,"oob_score : "),"OOB means out of the bag. It is a random forest cross-validation method. In this one-third of the sample is not used to train the data instead used to evaluate its performance. These samples are called out of bag samples.")),c.a.createElement("br",null),c.a.createElement("b",null,"Advantages:"),c.a.createElement("ul",null,c.a.createElement("li",null,"It can be used in classification and regression problems."),c.a.createElement("li",null,"It solves the problem of overfitting as output is based on majority voting or averaging."),c.a.createElement("li",null,"It performs well even if the data contains null/missing values."),c.a.createElement("li",null,"Each decision tree created is independent of the other thus it shows the property of parallelization."),c.a.createElement("li",null,"It is highly stable as the average answers given by a large number of trees are taken."),c.a.createElement("li",null,"It maintains diversity as all the attributes are not considered while making each decision tree though it is not true in all cases."),c.a.createElement("li",null,"It is immune to the curse of dimensionality. Since each tree does not consider all the attributes, feature space is reduced."),c.a.createElement("li",null,"We don\u2019t have to segregate data into train and test as there will always be 30% of the data which is not seen by the decision tree made out of bootstrap.")),c.a.createElement("br",null),c.a.createElement("b",null,"Disadvantages:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Random forest is highly complex when compared to decision trees where decisions can be made by following the path of the tree."),c.a.createElement("li",null,"Training time is more compared to other models due to its complexity. Whenever it has to make a prediction each decision tree has to generate output for the given input data.")),c.a.createElement("br",null),c.a.createElement("h3",null,"Example"),c.a.createElement("b",null,"Digits dataset from sklearn"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{style:b},c.a.createElement(g.a,{code:_,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Random Forest 2"),c.a.createElement("div",{style:b},c.a.createElement(g.a,{code:y,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Testing"),c.a.createElement("div",{style:b},c.a.createElement(g.a,{code:v,language:"js",plugins:["line-numbers"]}))))))}}]),t}(o.Component);t.default=Object(h.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(w)}}]);
//# sourceMappingURL=192.517ac1b5.chunk.js.map