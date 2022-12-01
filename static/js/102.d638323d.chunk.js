(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[102],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return _}));var a=t(45),r=t(28),l=t(136),s=t(137),i=t(139),o=t(0),c=t.n(o),u=t(138),m=t.n(u),_=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&m.a.highlightElement(t.ref.current)},t.ref=c.a.createRef(),t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return c.a.createElement("pre",{className:"code-prism"},c.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(c.a.Component))},141:function(e,n,t){},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),r=t.n(a),l=t(26),s=t(297),i=t(295),o=t(114),c=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=c();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/introAngular",className:e.line},"AI")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/tensorflow",className:e.line},"Tensorflow")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/tensors",className:e.line},"Tensorboards")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/angCompiler",className:e.line},"Compiler")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/neural",className:e.line},"NeuralKeras")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/activationFunctions",className:e.line},"activationFuncs")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/loss",className:e.line},"Loss")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/gradientNeural",className:e.line},"GradientNeural")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/stochastic",className:e.line},"Stochastic")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/benchmarking",className:e.line},"Benchmarking")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/customer",className:e.line},"Customer")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/regularizationDeep",className:e.line},"Regularization Deep")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/imbalanced",className:e.line},"Imbalanced")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/imbalanced2",className:e.line},"Imbalanced2")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/convolutionals",className:e.line},"Convolutionals")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/data_augmentation",className:e.line},"data Augmentation")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/transfer",className:e.line},"Transfer")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/word_embedding",className:e.line},"Embedding")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/datatypests",className:e.line},"Datatypes")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/typeScript_2",className:e.line},"TS Function")),r.a.createElement(s.a,null,r.a.createElement(l.b,{to:"/typeScript_4",className:e.line},"Type Assertion"))),r.a.createElement("div",null))}},462:function(e,n,t){"use strict";t.r(n);var a=t(45),r=t(28),l=t(136),s=t(137),i=t(139),o=t(0),c=t.n(o),u=t(138),m=t.n(u),_=t(120),d=t(57),p=t(296),f=t(5),g=(t(141),t(150)),h=t(140),y={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},E="\nimport pandas as pd\nfrom matplotlib import pyplot as plt\nimport numpy as np\n%matplotlib inline\nimport warnings\nwarnings.filterwarnings('ignore')\n\ndf = pd.read_csv(\"customer_churn.csv\")\n\ndf.Churn.value_counts()\n517400/ df.shape[0]\n".trim(),b="\ndf.drop('customerID',axis='columns',inplace=True)\ndf.TotalCharges.values\n\npd.to_numeric(df.TotalCharges,errors='coerce').isnull()\ndf[pd.to_numeric(df.TotalCharges,errors='coerce').isnull()]\n\ndf.iloc[488].TotalCharges\ndf[df.TotalCharges!=' '].shape\ndf1 = df[df.TotalCharges!=' ']\n\ndf1.TotalCharges = pd.to_numeric(df1.TotalCharges)\ndf1.TotalCharges.values\ndf1[df1.Churn=='No']\n".trim(),v="\ntenure_churn_no = df1[df1.Churn=='No'].tenure\ntenure_churn_yes = df1[df1.Churn=='Yes'].tenure\n\nplt.xlabel(\"tenure\")\nplt.ylabel(\"Number Of Customers\")\nplt.title(\"Customer Churn Prediction Visualiztion\")\n\nblood_sugar_men = [113, 85, 90, 150, 149, 88, 93, 115, 135, 80, 77, 82, 129]\nblood_sugar_women = [67, 98, 89, 120, 133, 150, 84, 69, 89, 79, 120, 112, 100]\n\nplt.hist([tenure_churn_yes, tenure_churn_no], rwidth=0.95, color=['green','red'],label=['Churn=Yes','Churn=No'])\nplt.legend()\n\n\nmc_churn_no = df1[df1.Churn=='No'].MonthlyCharges      \nmc_churn_yes = df1[df1.Churn=='Yes'].MonthlyCharges      \n\nplt.xlabel(\"Monthly Charges\")\nplt.ylabel(\"Number Of Customers\")\nplt.title(\"Customer Churn Prediction Visualiztion\")\n\nblood_sugar_men = [113, 85, 90, 150, 149, 88, 93, 115, 135, 80, 77, 82, 129]\nblood_sugar_women = [67, 98, 89, 120, 133, 150, 84, 69, 89, 79, 120, 112, 100]\n\nplt.hist([mc_churn_yes, mc_churn_no], rwidth=0.95, color=['green','red'],label=['Churn=Yes','Churn=No'])\nplt.legend()\n\ndef print_unique_col_values(df):                                                        #Many of the columns are yes, no.\n       for column in df:\n            if df[column].dtypes=='object':\n                print(f'{column}: {df[column].unique()}') \n                \nprint_unique_col_values(df1)\n".trim(),C="\ndf1.replace('No internet service','No',inplace=True)\ndf1.replace('No phone service','No',inplace=True)\n\nprint_unique_col_values(df1)\n\n#Convert Yes and No to 1 or 0.\nyes_no_columns = ['Partner','Dependents','PhoneService','MultipleLines','OnlineSecurity','OnlineBackup',\n                  'DeviceProtection','TechSupport','StreamingTV','StreamingMovies','PaperlessBilling','Churn']\nfor col in yes_no_columns:\n    df1[col].replace({'Yes': 1,'No': 0},inplace=True)\n    \n    \nfor col in df1:\n    print(f'{col}: {df1[col].unique()}') \n    \ndf1['gender'].replace({'Female':1,'Male':0},inplace=True)\ndf1.gender.unique()\n".trim(),X="\ndf2 = pd.get_dummies(data=df1, columns=['InternetService','Contract','PaymentMethod'])\ndf2.columns\n\ncols_to_scale = ['tenure','MonthlyCharges','TotalCharges']\n\nfrom sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\ndf2[cols_to_scale] = scaler.fit_transform(df2[cols_to_scale])\n\nfor col in df2:\n    print(f'{col}: {df2[col].unique()}')\n".trim(),N="\nX = df2.drop('Churn',axis='columns')\ny = testLabels = df2.Churn.astype(np.float32)\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=15, stratify=y)\n\ny_train.value_counts()\ny.value_counts()\n5163/1869\n\nX_train.shape\nlen(X_train.columns)\n".trim(),w='\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\ndef log_reg(X_train, y_train, X_test, y_test, weights):\n    if weights==-1:\n        model = LogisticRegression()\n    else:\n        model = LogisticRegression(class_weight={0:weights[0], 1:weights[1]})\n\n    model.fit(X_train, y_train)\n    acc = model.score(X_test, y_test)\n    print("Accuracy", acc)\n\n    y_pred = model.predict(X_test)\n    print("preds", y_pred[:5])\n\n    cl_rep = classification_report(y_test,y_pred)\n    print(cl_rep)\n    \nweights = -1                                                      # pass -1 to use Logistics Regression without weights.\nlog_reg(X_train, y_train, X_test, y_test, weights)\n\nweights = [1, 1.5]                                                # pass -1 to use Logistics Regression without weights.\nlog_reg(X_train, y_train, X_test, y_test, weights)\n'.trim(),T="\n# Method1: Undersampling\ncount_class_0, count_class_1 = df1.Churn.value_counts()\n\ndf_class_0 = df2[df2['Churn'] == 0]                               # Divide by class.\ndf_class_1 = df2[df2['Churn'] == 1]\n\n\n# Undersample 0-class and concat the DataFrames of both class.\ndf_class_0_under = df_class_0.sample(count_class_1)\ndf_test_under = pd.concat([df_class_0_under, df_class_1], axis=0)\n\nprint('Random under-sampling:')\nprint(df_test_under.Churn.value_counts())\n\nX = df_test_under.drop('Churn',axis='columns')\ny = df_test_under['Churn']\n\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=15, stratify=y)\n\n\ny_train.value_counts()                                                        # Number of classes in training Data.\n".trim(),j="\nweights = -1                                                    # pass -1 to use Logistics Regression without weights\nlog_reg(X_train, y_train, X_test, y_test, weights)\n\n\n# Method2: Oversampling\n# Oversample 1-class and concat the DataFrames of both classes\ndf_class_1_over = df_class_1.sample(count_class_0, replace=True)\ndf_test_over = pd.concat([df_class_0, df_class_1_over], axis=0)\n\nprint('Random over-sampling:', df_test_over.Churn.value_counts())\n\nX = df_test_over.drop('Churn',axis='columns')\ny = df_test_over['Churn']\n\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=15, stratify=y)\n\n\ny_train.value_counts()                                                        # Number of classes in training Data.\n".trim(),M="\nweights = -1                                                # pass -1 to use Logistics Regression without weights.\nlog_reg(X_train, y_train, X_test, y_test, weights)\n\n# Method3: SMOTE\nX = df2.drop('Churn',axis='columns')\ny = df2['Churn']\n\nfrom imblearn.over_sampling import SMOTE\nsmote = SMOTE(sampling_strategy='minority')\nX_sm, y_sm = smote.fit_sample(X, y)\n\ny_sm.value_counts()\n\n\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X_sm, y_sm, test_size=0.2, random_state=15, stratify=y_sm)\n\ny_train.value_counts()\n\n\n# Logistic Regression\nweights = -1                                                 # pass -1 to use Logistics Regression without weights.\nlog_reg(X_train, y_train, X_test, y_test, weights)\n\n\ndf2.Churn.value_counts()                                    # Method4: Use of Ensemble with undersampling.\n\nX = df2.drop('Churn',axis='columns')                        # Regain Original features and labels.\ny = df2['Churn']\n\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=15, stratify=y)\n\ny_train.value_counts()\nmodel = LogisticRegression()\n\ndf3 = X_train.copy()\ndf3['Churn'] = y_train\ndf3.head()\n\ndf3_class0 = df3[df3.Churn==0]\ndf3_class1 = df3[df3.Churn==1]\n\ndef get_train_batch(df_majority, df_minority, start, end):\n    df_train = pd.concat([df_majority[start:end], df_minority], axis=0)\n    X_train = df_train.drop('Churn', axis='columns')\n    y_train = df_train.Churn\n    return X_train, y_train    \n    \nX_train, y_train = get_train_batch(df3_class0, df3_class1, 0, 1495)\nmodel1 = LogisticRegression()\nmodel1.fit(X_train, y_train)\ny_pred1 = model1.predict(X_test)\n\nX_train, y_train = get_train_batch(df3_class0, df3_class1, 1495, 2990)\nmodel2 = LogisticRegression()\nmodel2.fit(X_train, y_train)\ny_pred2 = model2.predict(X_test)\n\nX_train, y_train = get_train_batch(df3_class0, df3_class1, 2990, 4130)\nmodel3 = LogisticRegression()\nmodel3.fit(X_train, y_train)\ny_pred3 = model3.predict(X_test)\n\nlen(y_pred1)\n\ny_pred_final = y_pred1.copy()\nfor i in range(len(y_pred1)):\n    n_ones = y_pred1[i] + y_pred2[i] + y_pred3[i]\n    if n_ones>1:\n        y_pred_final[i] = 1\n    else:\n        y_pred_final[i] = 0\n        \n        \ncl_rep = classification_report(y_test, y_pred_final)\nprint(cl_rep)\n".trim(),O=function(e){function n(){return Object(a.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(_.a,{container:!0},c.a.createElement(_.a,{item:!0,xs:2},c.a.createElement(d.a,{className:e.paper},c.a.createElement("h4",null,c.a.createElement(g.a,null)))),c.a.createElement(_.a,{item:!0,xs:10},c.a.createElement(d.a,{className:e.paper},c.a.createElement(p.a,null,c.a.createElement("h3",null,"Handle imbalanced data in churn prediction. Logistic Regression"),c.a.createElement("i",null,"Customer churn prediction is to measure why customers are leaving a business. Looking at customer churn in telecom business. We will build a deep learning model to predict the churn and use precision,recall, f1-score to measure performance of our model."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:E,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"First of all, drop customerID column as it is of no use"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:b,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Data Visualization"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:v,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Some of the columns have no internet service or no phone service, that can be replaced with a simple No."),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:C,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"One hot encoding for categorical columns"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:X,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Train test split"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:N,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Use logistic regression classifier"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:w,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Mitigating Skewdness of Data"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:T,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Applying Logistic Regression"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:j,language:"js",plugins:["line-numbers"]})),c.a.createElement("br",null),c.a.createElement("h3",null,"Logistic Regression"),c.a.createElement("div",{style:y},c.a.createElement(h.a,{code:M,language:"js",plugins:["line-numbers"]}))))))}}]),n}(o.Component);n.default=Object(f.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(O)}}]);
//# sourceMappingURL=102.d638323d.chunk.js.map