(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[17],{140:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(45),l=a(28),r=a(136),i=a(137),c=a(139),o=a(0),s=a.n(o),u=a(138),m=a.n(u),p=(a(59),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).highlight=function(){a.ref&&a.ref.current&&m.a.highlightElement(a.ref.current)},a.ref=s.a.createRef(),a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,t=e.code,a=(e.plugins,e.language);return s.a.createElement("pre",{className:"code-prism"},s.a.createElement("code",{ref:this.ref,className:"language-".concat(a)},t.trim()))}}]),t}(s.a.Component))},141:function(e,t,a){},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),l=a.n(n),r=a(26),i=a(297),c=a(295),o=a(114),s=Object(o.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function u(){var e=s();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/introAngular",className:e.line},"AI")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/tensorflow",className:e.line},"Tensorflow")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/tensors",className:e.line},"Tensorboards")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/angCompiler",className:e.line},"Compiler")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/neural",className:e.line},"NeuralKeras")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/activationFunctions",className:e.line},"activationFuncs")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/loss",className:e.line},"Loss")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/gradientNeural",className:e.line},"GradientNeural")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/stochastic",className:e.line},"Stochastic")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/benchmarking",className:e.line},"Benchmarking")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/customer",className:e.line},"Customer")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/regularizationDeep",className:e.line},"Regularization Deep")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/imbalanced",className:e.line},"Imbalanced")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/imbalanced2",className:e.line},"Imbalanced2")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/convolutionals",className:e.line},"Convolutionals")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/data_augmentation",className:e.line},"data Augmentation")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/transfer",className:e.line},"Transfer")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/word_embedding",className:e.line},"Embedding")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/datatypests",className:e.line},"Datatypes")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/typeScript_2",className:e.line},"TS Function")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/typeScript_4",className:e.line},"Type Assertion"))),l.a.createElement("div",null))}},203:function(e,t,a){e.exports=a.p+"static/media/predicted.f903542c.png"},204:function(e,t,a){e.exports=a.p+"static/media/logsvalues.5f46f99a.PNG"},205:function(e,t,a){e.exports=a.p+"static/media/binarycross.717c40c7.PNG"},455:function(e,t,a){"use strict";a.r(t);var n=a(45),l=a(28),r=a(136),i=a(137),c=a(139),o=a(0),s=a.n(o),u=a(138),m=a.n(u),p=a(120),d=a(57),b=a(296),E=a(5),h=(a(141),a(150)),g=a(140),y=a(203),f=a.n(y),_=a(204),v=a.n(_),w=a(205),N=a.n(w),x={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},j={height:200,width:500},A='\ny_predicted = np.array([1,1,0,0,1])\ny_true = np.array([0.30,0.7,1,0,0.5])\n\ndef mae(y_predicted, y_true):\n    total_error = 0\n    for yp, yt in zip(y_predicted, y_true):\n        total_error += abs(yp - yt)\n        \n    print("Total error is:",total_error)\n    mae = total_error/len(y_predicted)\n    print("Mean absolute error is:",mae)\n    return mae\n    \nmae(y_predicted, y_true)\n'.trim(),T="\nnp.abs(y_predicted-y_true)\nnp.mean(np.abs(y_predicted-y_true))\n\ndef mae_np(y_predicted, y_true):\n    return np.mean(np.abs(y_predicted-y_true))\n    \nmae_np(y_predicted, y_true)\n".trim(),C="\nnp.log([0])\nepsilon = 1e-15\nnp.log([1e-15])\n\ny_predicted\ny_predicted_new = [max(i,epsilon) for i in y_predicted]\ny_predicted_new\n\n1-epsilon\ny_predicted_new = [min(i,1-epsilon) for i in y_predicted_new]\ny_predicted_new\n\ny_predicted_new = np.array(y_predicted_new)\nnp.log(y_predicted_new)\n\n-np.mean(y_true*np.log(y_predicted_new)+(1-y_true)*np.log(1-y_predicted_new))\n\ndef log_loss(y_true, y_predicted):\n    y_predicted_new = [max(i,epsilon) for i in y_predicted]\n    y_predicted_new = [min(i,1-epsilon) for i in y_predicted_new]\n    y_predicted_new = np.array(y_predicted_new)\n    return -np.mean(y_true*np.log(y_predicted_new)+(1-y_true)*np.log(1-y_predicted_new))\n    \nlog_loss(y_true, y_predicted)\n".trim(),O="\nrevenue = np.array([[180,200,220],[24,36,40],[12,18,20]])\nexpenses = np.array([[80,90,100],[10,16,20],[8,10,10]])\n\nprofit=revenue - expenses\nprofit\n".trim(),I="\nprice_per_unit = np.array([1000,400,1200])\nunits = np.array([[30,40,50],[5,10,15],[2,5,7]])\n\nprice_per_unit * units\n\nnp.dot(price_per_unit,units)\n".trim(),M=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout((function(){return m.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return s.a.createElement(p.a,{container:!0},s.a.createElement(p.a,{item:!0,xs:2},s.a.createElement(d.a,{className:e.paper},s.a.createElement("h4",null,s.a.createElement(h.a,null)))),s.a.createElement(p.a,{item:!0,xs:10},s.a.createElement(d.a,{className:e.paper},s.a.createElement(b.a,null,s.a.createElement("h3",null,"Loss or Cost Function"),s.a.createElement("b",null,"Tensorflow loss value:"),s.a.createElement("ul",null,s.a.createElement("li",null,"sparse_categorical_cross entropy"),s.a.createElement("li",null,"binary_cross entropy"),s.a.createElement("li",null,"categorical_cross entropy"),s.a.createElement("li",null,"mean_absolute_error"),s.a.createElement("li",null,"mean_squared_error")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Most common loss functions for Machine Learning Regression:"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("b",null,"Absolute Error(AE): "),"Refers to the magnitude of difference between the prediction of an observation and the true value of that observation."),s.a.createElement("li",null,s.a.createElement("b",null,"Mean Absolute Error (MEA): "),"sum of Absolute Error / Total Number of Observation"),s.a.createElement("ul",null,s.a.createElement("li",null,"The MEA is an average of the all absolute errors.")),s.a.createElement("br",null),s.a.createElement("li",null,s.a.createElement("b",null,"Mean Squared Error (MSE): "),"Take the difference between our model\u2019s predictions and the ground truth, square it, and average it out across the whole dataset."),s.a.createElement("ul",null,s.a.createElement("li",null,"=((AE)2 + (AE)2 + ... +(AE)2) / Total Number of Observation"))),s.a.createElement("br",null),s.a.createElement("i",null,"Implement Mean Absolute Error."),s.a.createElement("br",null),s.a.createElement("div",{style:x},s.a.createElement(g.a,{code:A,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Implement same thing using numpy in much easier way"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{style:x},s.a.createElement(g.a,{code:T,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("b",null,"Loss Function: "),"A function that associates a cost with a decision."),s.a.createElement("li",null,s.a.createElement("b",null,"Ex. "),"Suppose a person moving from source to destinatios, Which have routes A, B and C with cost 10, 15 and 20 respectively."),s.a.createElement("br",null),s.a.createElement("li",null,s.a.createElement("b",null,"Log Loss/ Binary Cross Entropy: ")),s.a.createElement("li",null,s.a.createElement("b",null,"Entropy: "),"Means randomness in our observations."),s.a.createElement("li",null,"Binary cross entropy compares each of the predicted probabilities to actual class output which can be either 0 or 1. It then calculates the score that penalizes the probabilities based on the distance from the expected value. That means how close or far from the actual value."),s.a.createElement("li",null,s.a.createElement("b",null,"Binary Cross Entropy is the negative average of the log of corrected predicted probabilities."))),s.a.createElement("br",null),s.a.createElement("b",null,"Predicted Probabilities: "),"Output given by the model that tells, the probability object belongs to class 1.",s.a.createElement("br",null),s.a.createElement("img",{src:f.a,alt:"Theata",className:"responsive2",style:j}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Corrected Probabilities: "),"probability that a particular observation belongs to its original class.  As shown in the above image, ID6 originally belongs to class 1 hence its predicted probability and corrected probability is the same i.e 0.94.",s.a.createElement("br",null),s.a.createElement("br",null),"On the other hand, the observation ID8  is from class 0. In this case, the predicted probability i.e the chances that ID8 belongs to class 1 is 0.56 whereas, the corrected probability means the chances that ID8 belongs to class 0 is ( 1-predicted_probability) is 0.44. In the same way, corrected probabilities of all the instances will be calculated.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Log(Corrected probabilities): "),"Now we will calculate the log value for each of the corrected probabilities. The reason behind using the log value is, the log value offers less penalty for small differences between predicted probability and corrected probability. when the difference is large the penalty will be higher.",s.a.createElement("br",null),s.a.createElement("img",{src:v.a,alt:"Theata",className:"responsive2",style:j}),s.a.createElement("br",null),"Here we have calculated log values for all the corrected probabilities. Since all the corrected probabilities lie between 0 and 1, all the log values are negative.",s.a.createElement("br",null),s.a.createElement("br",null),"In order to compensate for this negative value, we will use a negative average of the values.",s.a.createElement("br",null),s.a.createElement("img",{src:N.a,alt:"Theata",className:"responsive2",style:j}),s.a.createElement("br",null),"The value of the negative average of corrected probabilities we calculate 0.214 which is our Log loss/ Binary cross-entropy for this example.",s.a.createElement("h3",null,"Implement Log Loss or Binary Cross Entropy"),s.a.createElement("div",{style:x},s.a.createElement(g.a,{code:C,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null),s.a.createElement("div",{style:x},s.a.createElement(g.a,{code:A,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"Matrix Math"),s.a.createElement("b",null,"Calculate profit/ loss from revenue and expenses."),s.a.createElement("div",{style:x},s.a.createElement(g.a,{code:O,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("h3",null,"Calculate total sales from units and price per unit using matrix multiplication"),s.a.createElement("div",{style:x},s.a.createElement(g.a,{code:I,language:"js",plugins:["line-numbers"]})),s.a.createElement("br",null),s.a.createElement("i",null,"In above case numpy is using broadcasting so it expands price_per_unit array from 1 row, 3 columns to 3 row and 3 columns. Correct way to do matrix multiplication is to use dot product as above.")))))}}]),t}(o.Component);t.default=Object(E.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(M)}}]);
//# sourceMappingURL=17.bf83de74.chunk.js.map