(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[248],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(45),l=t(28),r=t(136),i=t(137),c=t(139),s=t(0),o=t.n(s),m=t(138),u=t.n(m),d=(t(59),function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(r.a)(this,Object(i.a)(n).call(this,e))).highlight=function(){t.ref&&t.ref.current&&u.a.highlightElement(t.ref.current)},t.ref=o.a.createRef(),t}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.props,n=e.code,t=(e.plugins,e.language);return o.a.createElement("pre",{className:"code-prism"},o.a.createElement("code",{ref:this.ref,className:"language-".concat(t)},n.trim()))}}]),n}(o.a.Component))},141:function(e,n,t){},147:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(0),l=t.n(a),r=t(26),i=t(297),c=t(295),s=t(114),o=Object(s.a)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(2)},line:{textDecoration:"none"}}}));function m(){var e=o();return l.a.createElement("div",{className:e.root},l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/introPython",className:e.line},"intro Python")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/tuples",className:e.line},"Tuples")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/stringPy",className:e.line},"Strings")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/iteratorsPy",className:e.line},"Iterators")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/json",className:e.line},"Json")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/mathematics",className:e.line},"Mathematics")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/oops_",className:e.line},"Oops")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/abstract",className:e.line},"Abstract")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/exceptionsPy",className:e.line},"ExceptionsHandling")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/pyIntro",className:e.line},"Pickle")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/threadings",className:e.line},"Thread")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/collections",className:e.line},"Collections")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/logging",className:e.line},"Logging")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/regex",className:e.line},"Regex")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/tkinter",className:e.line},"TKinter")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/logicalspy",className:e.line},"Logicals")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/pyLogic",className:e.line},"PyLogic")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/csv",className:e.line},"CsvPython")),l.a.createElement("br",null),"Flask",l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/conroutes",className:e.line},"routes")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/httpsMethods",className:e.line},"Https")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/flasksIn",className:e.line},"Interviews")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/flask_signUp",className:e.line},"Flask_signUp")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/get_search",className:e.line},"Get_Search")),l.a.createElement(i.a,null,l.a.createElement(r.b,{to:"/load_search",className:e.line},"Load_Search"))),l.a.createElement("div",null))}},405:function(e,n,t){"use strict";t.r(n);var a=t(45),l=t(28),r=t(136),i=t(137),c=t(139),s=t(0),o=t.n(s),m=t(138),u=t.n(m),d=t(120),f=t(57),p=t(296),h=t(5),E=(t(141),t(147)),b=t(140),g={backgroundColor:"#F0F8FF",padding:"1px",fontSize:"16px"},y="import pickle\nmylist = ['a', 'b', 'c', 'd']\nwith open('datafile.txt', 'wb') as fh:\n   pickle.dump(mylist, fh)\n   \n   \n#2\nimport pickle\ncars = ['A', 'B', 'C', 'D']\nfile = \"myCar.pkl\"\nfileobj = open(file, 'wb')\npickle.dump(cars, fileobj)\n\nfileobj.close()\n\n# Second Part\n\nfile = \"myCar.pkl\"\nfileobj = open(file,'rb')\nmycar = pickle.load(fileobj)\nprint(mycar)\nprint(type(mycar))\n".trim(),k="\nimport pickle\npickle_off = open (\"datafile.txt\", \"rb\")\nemp = pickle.load(pickle_off)\nprint(emp)\n\nO/P: ['a', 'b', 'c', 'd']".trim(),_='# monkeyy.py \nclass X: \n     def func(self): \n          print "func() is being called"\n\n          \nimport monkeyy \ndef monkey_f(self): \n     print "monkey_f() is being called"                                # replacing address of \u201cfunc\u201d with \u201cmonkey_f\u201d\n\nmonkeyy.X.func = monkey_f \nobj = monk.X()                                          # calling \u201cfunc\u201d whose address got replaced with \u201cmonkey_f()\u201d\n\nobj.func()\n'.trim(),v='\nclass Test:\n    def __init__(self,x):\n        self.a=x;\n    def get_data(self):\n        print("Some code to fetch data from database")\n    def f1(self):\n        self.get_data()\n    def f2(self):\n        self.get_data()\nt1=Test(5)\n# t1.f1()\n# t1.f2()\n\ndef new_get_data(self):\n    print("Some code to fetch data from test data")\nTest.get_data = new_get_data\nprint("After Monkey Patching")\nt1.f1()\nt1.f2()'.trim(),w="\ndef my_generator():\n        yield 1\n        yield 2\n        yield 3\n              \n\n#2\ndef evenNumbers(n):\n    i=1\n    while n:                                                      # Return keyword return value with control.\n        yield 2*i                                                 # Yield return value but function paouse not control.\n        i+=1\n        n-=1\n\nit=evenNumbers(10)\neven_list=[]\nwhile True:\n    try:\n        even_list.append(next(it))\n        # even_list += next(it)\n    except StopIteration:\n        break\nprint(even_list)\n".trim(),x="\ndef countdown(num):\n    print('Starting')\n    while num > 0:\n        yield num\n        num -= 1\n\ncd = countdown(3)                                                         # this will not print 'Starting'\nprint(next(cd))                                                           # this will print 'Starting' and the first value\n\nprint(next(cd))                                                           # will print the next values\nprint(next(cd))\nprint(next(cd))                                                           # this will raise a StopIteration\n".trim(),j='\n# without a generator\ndef firstn(n):\n    num, nums = 0, []\n    while num < n:\n        nums.append(num)\n        num += 1\n    return nums\n\nsum_of_first_n = sum(firstn(1000000))\nprint(sum_of_first_n)\nimport sys\nprint(sys.getsizeof(firstn(1000000)), "bytes")\n\n\n# with a generator\ndef firstn(n):\n    num = 0\n    while num < n:\n        yield num\n        num += 1\n\nsum_of_first_n = sum(firstn(1000000))\nprint(sum_of_first_n)\nimport sys\nprint(sys.getsizeof(firstn(1000000)), "bytes")\n'.trim(),N="\ndef fibonacci(limit):\n    a, b = 0, 1 \n    while a < limit:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci(30)\nprint(list(fib))                                                  # generator objects can be converted to a list\n".trim(),P="\nmygenerator = (i for i in range(1000) if i % 2 == 0)                # generator expression\nprint(sys.getsizeof(mygenerator))\n\nmylist = [i for i in range(1000) if i % 2 == 0]                     # list comprehension\nprint(sys.getsizeof(mylist))".trim(),S="\nclass firstn:\n    def __init__(self, n):\n        self.n = n\n        self.num = 0\n        \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.num < self.n:\n            cur = self.num\n            self.num += 1\n            return cur\n        else:\n            raise StopIteration()\n             \nfirstn_object = firstn(1000000)\nprint(sum(firstn_object))\n".trim(),I=function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){return u.a.highlightAll()}),0)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:2},o.a.createElement(f.a,{className:e.paper},o.a.createElement("h4",null,o.a.createElement(E.a,null)))),o.a.createElement(d.a,{item:!0,xs:10},o.a.createElement(f.a,{className:e.paper},o.a.createElement(p.a,null,o.a.createElement("h3",null,"Define pickling and unpickling."),"Pickling is the process of converting Python objects, such as lists, dicts, etc., into a character stream.",o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:y,language:"js",plugins:["line-numbers"]})),"In the above code, list \u2013 \u201cmylist\u201d contains four elements (\u2018a\u2019, \u2018b\u2019, \u2018c\u2019, \u2018d\u2019). We open the file in \u201cwb\u201d mode instead of \u201cw\u201d as all the operations are done using bytes in the current working directory. A new file named \u201cdatafile.txt\u201d is created, which converts the mylist data in the byte stream.",o.a.createElement("br",null),o.a.createElement("i",null,"The process of retrieving the original Python objects from the stored string representation, which is the reverse of the pickling process, is called unpickling."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:k,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"Pickle Exceptions"),o.a.createElement("br",null),"Some of the common exceptions raised while dealing with pickle module:",o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"Pickle.PicklingError: "),"If the pickle object doesn\u2019t support pickling, this exception is raised."),o.a.createElement("li",null,o.a.createElement("b",null,"Pickle.UnpicklingError: "),"In case the file contains bad/ corrupted data."),o.a.createElement("li",null,o.a.createElement("b",null,"EOFError: "),"In case the end of file is detected, this exception is raised.")),o.a.createElement("br",null),o.a.createElement("b",null,"Prons:"),o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,"Save complicated data."),o.a.createElement("li",null,"Easy to use, lighter and doesn\u2019t require several lines of code."),o.a.createElement("li",null,"The pickled file generated is not easily readable and thus provide some security.")),o.a.createElement("br",null),o.a.createElement("b",null,"Cons:"),o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,"Languages other than python may not able to reconstruct pickled python objects."),o.a.createElement("li",null,"Risk of unpickling data from malicious sources.")),o.a.createElement("br",null),o.a.createElement("h3",null,"Monkey patching"),"Change object behavior during run time.",o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,"Monkey patching is the process of modifications that are done to a class/ module during the runtime."),o.a.createElement("li",null,"This is done as Python supports changes in the behavior of the program while ssbeing executed.")),o.a.createElement("br",null),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:_,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:v,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"Generators"),o.a.createElement("ul",null,o.a.createElement("li",null,"Generators are functions that can be paused and resumed, returning an object that can be iterated over. "),o.a.createElement("li",null,"They are lazy and thus produce items one at a time and only when asked. Furthermore, we do not need to wait until all the elements have been generated before we start to use them."),o.a.createElement("li",null,"They are much more memory efficient when dealing with large datasets."),o.a.createElement("li",null,"A generator is defined like a normal function but use the yield statement instead of return.")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:w,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"Execution of a generator function"),"Calling the function does not execute it. Instead, the function returns a generator object which is used to control execution.",o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,"Generator objects execute when next() is called. When calling next() the first time, execution begins at the start of the function and continues until the first yield statement."),o.a.createElement("li",null,"Subsequent calls to next() continue from the yield statement (and loop around) until another yield is reached.")),o.a.createElement("br",null),"If yield is not called because of a condition or the end is reached, a StopIteration exception is raised.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:x,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"Generators save memory!"),o.a.createElement("ul",null,o.a.createElement("li",null,"Without a generator, the complete sequence has to be stored in a list."),o.a.createElement("li",null,"With a generator, no additional sequence is needed to store the numbers.")),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:j,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"Another example: Fibonacci numbers"),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:N,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"Generator expressions"),o.a.createElement("ul",null,o.a.createElement("li",null,"Like list, generators can be written in the same syntax except with parenthesis instead of square brackets."),o.a.createElement("li",null,"Generator expressions are slower than list because of the overhead of function calls.")),o.a.createElement("br",null),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:P,language:"js",plugins:["line-numbers"]})),o.a.createElement("br",null),o.a.createElement("h3",null,"Concept behind a generator"),"It has to implement ",o.a.createElement("b",null,"__iter__")," and ",o.a.createElement("b",null,"__next__")," to make it iterable, keep, and take care of a StopIteration.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:g},o.a.createElement(b.a,{code:S,language:"js",plugins:["line-numbers"]}))))))}}]),n}(s.Component);n.default=Object(h.a)((function(e){return{paper:{margin:e.spacing(1),padding:e.spacing(1)},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}))(I)}}]);
//# sourceMappingURL=248.fd5844a1.chunk.js.map