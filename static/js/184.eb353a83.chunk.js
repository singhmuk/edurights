(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[184],{140:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(45),l=a(28),r=a(136),i=a(137),c=a(139),s=a(0),m=a.n(s),o=a(138),u=a.n(o),d=(a(59),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).highlight=function(){a.ref&&a.ref.current&&u.a.highlightElement(a.ref.current)},a.ref=m.a.createRef(),a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,t=e.code,a=(e.plugins,e.language);return m.a.createElement("pre",{className:"code-prism"},m.a.createElement("code",{ref:this.ref,className:"language-".concat(a)},t.trim()))}}]),t}(m.a.Component))},141:function(e,t,a){},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),l=a.n(n),r=a(26),i=a(297),c=a(295),s=a(114),m=Object(s.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function o(){var e=m();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/infoMl",className:e.line},"InfoMl")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/gredient_decents",className:e.line},"Gredient Decents")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/training",className:e.line},"Traning")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/regularizations",className:e.line},"Regularizations")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/featuresEng",className:e.line},"FeaturesEng")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/adaboost",className:e.line},"Adaboots")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/greedSearch",className:e.line},"Greed Search")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/perceptron",className:e.line},"Perceptron")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/pcaPy",className:e.line},"PCA")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/leanearRegression",className:e.line},"Leanear Regression")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/logisticReg",className:e.line},"Logistic Regression")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/lda",className:e.line},"Lda")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/knn",className:e.line},"Knn")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/k_meanClustring",className:e.line},"K_Mean")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/naiveBar",className:e.line},"Naive Bayes")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/randomForest",className:e.line},"Random Forest")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/decisiontree",className:e.line},"Decision Tree")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/svmPy",className:e.line},"SVM")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/numpyPy",className:e.line},"Numpy")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/pandas",className:e.line},"Pandas")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/bagging",className:e.line},"Matplotlib")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/logisticRegrations",className:e.line},"Scikit Learn")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/regrations",className:e.line},"SciPy")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/libraries",className:e.line},"OpenCV")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/capture",className:e.line},"Capture")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/joinImages",className:e.line},"JoinImages")),l.a.createElement("br",null),"Deep Learning",l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/superwise",className:e.line},"Superwise"))),l.a.createElement("div",null))}},531:function(e,t,a){"use strict";a.r(t);var n=a(45),l=a(28),r=a(136),i=a(137),c=a(139),s=a(0),m=a.n(s),o=a(138),u=a.n(o),d=a(120),h=a(57),E=a(296),g=a(5),f=(a(141),a(146)),p=a(140),b={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},_="\nimport pandas as pd\n\ndf = pd.read_csv(\"heights.csv\")\n\nmin_thresold = df['height'].quantile(0.05)\nmax_thresold = df['height'].quantile(0.95)\nmin_thresold\nmax_thresold\n\ndf[df['height']<min_thresold]\ndf[df['height']>max_thresold]\n".trim(),v="\ndf[(df['height']<max_thresold) & (df['height']>min_thresold)]\ndf = pd.read_csv(\"bhp.csv\")\n\n\n#Explore samples that are above 99.90% and below 1% rank\nmin_thresold, max_thresold = df.price_per_sqft.quantile([0.001, 0.999])\nmin_thresold, max_thresold\n\ndf[df.price_per_sqft < min_thresold]\ndf[df.price_per_sqft > max_thresold]\n\ndf2 = df[(df.price_per_sqft<max_thresold) & (df.price_per_sqft>min_thresold)]\n".trim(),y="\nimport matplotlib\nfrom matplotlib import pyplot as plt\nfrom scipy.stats import norm\n%matplotlib inline\n\nmatplotlib.rcParams['figure.figsize'] = (10,6)\n\ndf = pd.read_csv(\"heights.csv\")\n\nplt.hist(df.height, bins=20, rwidth=0.8)\nplt.xlabel('Height (inches)')\nplt.ylabel('Count')\nplt.show()\n\n\n#Plot bell curve along with histogram for dataset\nplt.hist(df.height, bins=20, rwidth=0.8, density=True)\nplt.xlabel('Height (inches)')\nplt.ylabel('Count')\n\nrng = np.arange(df.height.min(), df.height.max(), 0.1)\nplt.plot(rng, norm.pdf(rng,df.height.mean(),df.height.std()))\n\n\ndf.height.mean()\ndf.height.std()\n\n#Outlier detection and removal using 3 standard deviation.\nupper_limit = df.height.mean() + 3*df.height.std()\n\nlower_limit = df.height.mean() -3*df.height.std()\n\ndf[(df.height>upper_limit) | (df.height<lower_limit)]\n".trim(),w="\ndf_no_outlier_std_dev = df[(df.height<upper_limit) & (df.height>lower_limit)]\n\ndf_no_outlier_std_dev.head()\ndf_no_outlier_std_dev.shape\n".trim(),N="\ndf['zscore'] = ( df.height - df.height.mean() ) / df.height.std()\n\n#first record with height 73.84, z score is 1.94. Means 73.84 is 1.94 standard deviation away from mean.\n(73.84-66.37)/3.84\n\n#Get data points that has z score higher than 3 or lower than -3. Another way of saying same thing is get data \n#points that are more than 3 standard deviation away.\ndf[df['zscore']>3]\n\ndf[df['zscore']<-3]\n\ndf[(df.zscore<-3) | (df.zscore>3)]                                                  #List of all outliers.\n".trim(),O="\ndf_no_outliers = df[(df.zscore>-3) & (df.zscore<3)]\n\ndf_no_outliers.head()\ndf_no_outliers.shape\n".trim(),D='\nimport pandas as pd\ndf = pd.read_csv("heights.csv")\n\n\n#Detect outliers using IQR\nQ1 = df.height.quantile(0.25)\nQ3 = df.height.quantile(0.75)\n\nIQR = Q3 - Q1\n\nlower_limit = Q1 - 1.5*IQR\nupper_limit = Q3 + 1.5*IQR\nlower_limit, upper_limit\n\ndf[(df.height<lower_limit)|(df.height>upper_limit)]                                 #Outliers\n\ndf_no_outlier = df[(df.height>lower_limit)&(df.height<upper_limit)]                 #Remove outliers\ndf_no_outlier\n'.trim(),j=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return m.a.createElement(d.a,{container:!0},m.a.createElement(d.a,{item:!0,xs:2},m.a.createElement(h.a,{className:e.paper},m.a.createElement("h4",null,m.a.createElement(f.a,null)))),m.a.createElement(d.a,{item:!0,xs:10},m.a.createElement(h.a,{className:e.paper},m.a.createElement(E.a,null,m.a.createElement("h3",null,"Feature engineering"),m.a.createElement("ul",null,m.a.createElement("li",null,"Feature engineering is the process of using domain knowledge of the data to create features that make ML algorithms work. If feature engineering is done correctly, it increases the predictive power of ML algorithms by creating features from raw data that help facilitate the ML process."),m.a.createElement("li",null,"Feature engineering creates the huge difference between a good model and a bad model.")),m.a.createElement("br",null),"Suppose, we are given a data \u201cflight date time vs status\u201d. Then, given the date-time data, we have to predict the status of the flight.",m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("table",null,m.a.createElement("tr",null,m.a.createElement("th",null,"S No."),m.a.createElement("th",null,"Date Time"),m.a.createElement("th",null,"Status")),m.a.createElement("tr",null,m.a.createElement("td",null,"0"),m.a.createElement("td",null,"2018-02-14 20:40"),m.a.createElement("td",null,"Delayed")),m.a.createElement("tr",null,m.a.createElement("td",null,"1"),m.a.createElement("td",null,"2018-02-15 10:30"),m.a.createElement("td",null,"On Time")),m.a.createElement("tr",null,m.a.createElement("td",null,"2"),m.a.createElement("td",null,"2018-02-14 07:40"),m.a.createElement("td",null,"On Time")),m.a.createElement("tr",null,m.a.createElement("td",null,"3"),m.a.createElement("td",null,"2018-02-15 18:10"),m.a.createElement("td",null,"Delayed")),m.a.createElement("tr",null,m.a.createElement("td",null,"4"),m.a.createElement("td",null,"2018-02-14 10:20"),m.a.createElement("td",null,"On Time"))),m.a.createElement("br",null),m.a.createElement("br",null),"As the status of the flight depends on the hour of the day, not on the date-time. We will create the new feature \u201cHour_Of_Day\u201d. Using the \u201cHour_Of_Day\u201d feature, the machine will learn better as this feature is directly related to the status of the flight.",m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("table",null,m.a.createElement("tr",null,m.a.createElement("th",null,"S No."),m.a.createElement("th",null,"Hour Of Day"),m.a.createElement("th",null,"Status")),m.a.createElement("tr",null,m.a.createElement("td",null,"0"),m.a.createElement("td",null,"20"),m.a.createElement("td",null,"Delayed")),m.a.createElement("tr",null,m.a.createElement("td",null,"1"),m.a.createElement("td",null,"10"),m.a.createElement("td",null,"On Time")),m.a.createElement("tr",null,m.a.createElement("td",null,"2"),m.a.createElement("td",null,"7"),m.a.createElement("td",null,"On Time")),m.a.createElement("tr",null,m.a.createElement("td",null,"3"),m.a.createElement("td",null,"18"),m.a.createElement("td",null,"Delayed")),m.a.createElement("tr",null,m.a.createElement("td",null,"4"),m.a.createElement("td",null,"10"),m.a.createElement("td",null,"On Time"))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("i",null,"Here, creating the new feature \u201cHour_Of_Day\u201d is the feature engineering."),m.a.createElement("br",null),m.a.createElement("h3",null,"Detect outliers using percentile"),m.a.createElement("div",{style:b},m.a.createElement(p.a,{code:_,language:"js",plugins:["line-numbers"]})),m.a.createElement("br",null),m.a.createElement("h3",null,"Remove outliers"),m.a.createElement("div",{style:b},m.a.createElement(p.a,{code:v,language:"js",plugins:["line-numbers"]})),m.a.createElement("br",null),m.a.createElement("h3",null,"Outlier detection and removal using z-score and standard deviation in python pandas"),"We are going to use heights dataset from kaggle.com. Dataset has heights and weights both but I have removed weights to make it simple.",m.a.createElement("div",{style:b},m.a.createElement(p.a,{code:y,language:"js",plugins:["line-numbers"]})),m.a.createElement("br",null),m.a.createElement("i",null,"Above the heights on higher end is ",m.a.createElement("b",null,"78 inch which is around 6 ft 6 inch (unusual height)"),". It is ok to remove those data points. Similarly on lower end it is ",m.a.createElement("b",null,"54 inch = 4 ft 6 inch"),". So it is safe to consider both of these cases as outliers"),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("h3",null,"Now remove these outliers and generate new dataframe"),m.a.createElement("div",{style:b},m.a.createElement(p.a,{code:w,language:"js",plugins:["line-numbers"]})),m.a.createElement("i",null,"Above shows original dataframe data 10000 data points. Out of that we removed 7 outliers (i.e. 10000-9993)."),m.a.createElement("br",null),m.a.createElement("h3",null,"Outlier detection and removal using Z Score"),m.a.createElement("ul",null,m.a.createElement("li",null,"Z score is a way to achieve same thing that we did above."),m.a.createElement("li",null,"Z score indicates how many standard deviation away a data point is."),m.a.createElement("li",null,"For example in our case mean is 66.37 and standard deviation is 3.84."),m.a.createElement("li",null,"If a value of a data point is 77.91 then Z score for that is 3 because it is 3 standard deviation away (77.91 = 66.37 + 3 * 3.84).")),m.a.createElement("br",null),m.a.createElement("div",{style:b},m.a.createElement(p.a,{code:N,language:"js",plugins:["line-numbers"]})),m.a.createElement("br",null),m.a.createElement("h3",null,"Remove the outliers and produce new dataframe"),m.a.createElement("div",{style:b},m.a.createElement(p.a,{code:O,language:"js",plugins:["line-numbers"]})),m.a.createElement("br",null),m.a.createElement("h3",null,"Outlier Detection and Removal Using IQR"),m.a.createElement("div",{style:b},m.a.createElement(p.a,{code:D,language:"js",plugins:["line-numbers"]}))))))}}]),t}(s.Component);t.default=Object(g.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(j)}}]);
//# sourceMappingURL=184.eb353a83.chunk.js.map