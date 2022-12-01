(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[233],{140:function(e,n,a){"use strict";a.d(n,"a",(function(){return h}));var t=a(45),r=a(28),l=a(136),i=a(137),c=a(139),s=a(0),o=a.n(s),m=a(138),u=a.n(m),h=(a(59),function(e){function n(e){var a;return Object(t.a)(this,n),(a=Object(l.a)(this,Object(i.a)(n).call(this,e))).highlight=function(){a.ref&&a.ref.current&&u.a.highlightElement(a.ref.current)},a.ref=o.a.createRef(),a}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,a=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(a)},n.trim()))}}]),n}(o.a.Component))},141:function(e,n,a){},147:function(e,n,a){"use strict";a.d(n,"a",(function(){return m}));var t=a(0),r=a.n(t),l=a(26),i=a(297),c=a(295),s=a(114),o=Object(s.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=o();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/introPython",className:e.line},"intro Python")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/tuples",className:e.line},"Tuples")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/stringPy",className:e.line},"Strings")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/iteratorsPy",className:e.line},"Iterators")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/json",className:e.line},"Json")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/mathematics",className:e.line},"Mathematics")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/oops_",className:e.line},"Oops")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/abstract",className:e.line},"Abstract")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/exceptionsPy",className:e.line},"ExceptionsHandling")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/pyIntro",className:e.line},"Pickle")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/threadings",className:e.line},"Thread")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/collections",className:e.line},"Collections")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/logging",className:e.line},"Logging")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/regex",className:e.line},"Regex")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/tkinter",className:e.line},"TKinter")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/logicalspy",className:e.line},"Logicals")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/pyLogic",className:e.line},"PyLogic")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/csv",className:e.line},"CsvPython")),r.a.createElement("br",null),"Flask",r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/conroutes",className:e.line},"routes")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/httpsMethods",className:e.line},"Https")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/flasksIn",className:e.line},"Interviews")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/flask_signUp",className:e.line},"Flask_signUp")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/get_search",className:e.line},"Get_Search")),r.a.createElement(i.a,null,r.a.createElement(l.b,{to:"/load_search",className:e.line},"Load_Search"))),r.a.createElement("div",null))}},409:function(e,n,a){"use strict";a.r(n);var t=a(45),r=a(28),l=a(136),i=a(137),c=a(139),s=a(0),o=a.n(s),m=a(138),u=a.n(m),h=a(120),g=a(57),E=a(296),p=a(5),d=(a(141),a(147)),f=a(140),b={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},w="\nimport csv\n\nfilename = \"aapl.csv\"\n\nfields = []                                                       # initializing the titles and rows list\nrows = []\n\nwith open(filename, 'r') as csvfile:                              # reading csv file\n    csvreader = csv.reader(csvfile)                               # creating a csv reader object\n    fields = next(csvreader)                                      # extracting field names through first row\n    \n    for row in csvreader:                                         # extracting each data row one by one\n        rows.append(row)\n\n    print(\"Total no. of rows: %d\" % (csvreader.line_num))         # get total number of rows\n\n\nprint('Field names are:' + ', '.join(field for field in fields))                          \n\nprint('First 5 rows are:')\nfor row in rows[:5]:\n    for col in row:                                                                     # parsing each column of a row\n        print(\"%10s\" % col),\n".trim(),v="\nimport csv\n\n\nfields = ['Name', 'Branch', 'Year', 'CGPA']                            \n\nrows = [['Nikhil', 'COE', '2', '9.0'],                                  # data rows of csv file\n        ['Sanchit', 'COE', '2', '9.1'],\n        ['Aditya', 'IT', '2', '9.3'],\n        ['Sagar', 'SE', '1', '9.5'],\n        ['Prateek', 'MCE', '3', '7.8'],\n        ['Sahil', 'EP', '2', '9.1']]\n\nfilename = \"university_records.csv\"                                     # name of csv file\n\nwith open(filename, 'w') as csvfile:                                    \n    csvwriter = csv.writer(csvfile)                                     # creating a csv writer object\n    csvwriter.writerow(fields)                                          # writing the fields\n    csvwriter.writerows(rows)                                           # writing the data rows\n    ".trim(),y="\nimport csv\n\n\nmydict = [{'branch': 'COE', 'cgpa': '9.0', 'name': 'Nikhil', 'year': '2'},        # my data rows as dictionary objects\n          {'branch': 'COE', 'cgpa': '9.1', 'name': 'Sanchit', 'year': '2'},\n          {'branch': 'IT', 'cgpa': '9.3', 'name': 'Aditya', 'year': '2'},\n          {'branch': 'SE', 'cgpa': '9.5', 'name': 'Sagar', 'year': '1'},\n          {'branch': 'MCE', 'cgpa': '7.8', 'name': 'Prateek', 'year': '3'},\n          {'branch': 'EP', 'cgpa': '9.1', 'name': 'Sahil', 'year': '2'}]\n\nfields = ['name', 'branch', 'year', 'cgpa']\n\nfilename = \"university_records.csv\"\n\nwith open(filename, 'w') as csvfile:\n    writer = csv.DictWriter(csvfile, fieldnames=fields)\n    writer.writeheader()                                                            # writing headers (field names)\n    writer.writerows(mydict)                                                        # writing data rows\n    ".trim(),N='\n    def binary_search(arr, low, high, x):\n        if high >= low:                                                                    \n            mid = (high + low) // 2\n            \n            if arr[mid] == x:                                                # If element is present at the middle itself\n                return mid\n            elif arr[mid] > x:\n                return binary_search(arr, low, mid - 1, x)\n            else:\n                return binary_search(arr, mid + 1, high, x)\n        else:                                                                       # Element is not present in the array\n            return -1\n    \n            \n    # Test array\n    arr = [ 2, 3, 4, 10, 40 ]\n    x = 10\n    \n    result = binary_search(arr, 0, len(arr)-1, x)\n    if result != -1:\n        print("Element is present at index", str(result))\n    else:\n        print("Element is not present in array") '.trim(),k='\n    def partition(arr,low,high):\n        i = ( low-1 )                                                                         # index of smaller element\n        pivot = arr[high]                                                                     # pivot\n    \n        for j in range(low , high):\n            if   arr[j] <= pivot:\n                i = i+1\n                arr[i],arr[j] = arr[j],arr[i]\n    \n        arr[i+1],arr[high] = arr[high],arr[i+1]\n        return ( i+1 )\n    \n    \n    def quickSort(arr,low,high):                                  # Function to do Quick sort.\n        if low < high:\n            pi = partition(arr,low,high)                          # pi is partitioning index, arr[p] is now at right place\n                                                            # Separately sort elements before partition and after partition\n            quickSort(arr, low, pi-1)\n            quickSort(arr, pi+1, high)\n    \n    arr = [10, 7, 8, 9, 1, 5]\n    n = len(arr)\n    quickSort(arr,0,n-1)\n    print ("Sorted array is:")\n    for i in range(n):\n        print ("%d" %arr[i]), '.trim(),j=function(e){function n(){return Object(t.a)(this,n),Object(l.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(h.a,{container:!0},o.a.createElement(h.a,{item:!0,xs:2},o.a.createElement(g.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(d.a,null)))),o.a.createElement(h.a,{item:!0,xs:10},o.a.createElement(g.a,{className:e.paper},o.a.createElement(E.a,null,o.a.createElement("h3",null,"1. Reading a CSV file"),o.a.createElement("div",{style:b},o.a.createElement(f.a,{code:w,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"2. Writing to a CSV file"),o.a.createElement("div",{style:b},o.a.createElement(f.a,{code:v,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"3. Writing a dictionary to a CSV file"),o.a.createElement("div",{style:b},o.a.createElement(f.a,{code:y,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"Searching"),o.a.createElement("div",{style:b},o.a.createElement(f.a,{code:N,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"QuickSort"),o.a.createElement("b",null,"The main function that implements QuickSort "),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"arr[] :"),"Array to be sorted."),o.a.createElement("li",null,o.a.createElement("b",null,"low :"),"Starting index."),o.a.createElement("li",null,o.a.createElement("b",null,"high :"),"Ending index.")),o.a.createElement("div",{style:b},o.a.createElement(f.a,{code:k,language:"js",plugins:["line-numbers"]}))))))}}]),n}(s.Component);n.default=Object(p.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(j)}}]);
//# sourceMappingURL=233.f871d925.chunk.js.map