import React, { Component } from 'react';
import Prism from "prismjs"
import { Grid, Paper, withStyles, List } from "@material-ui/core";

import '../styles.css'
import Sidebar from '../sidebar';
import PrismCode from '../prismCode';
import Pure from '../../../assets/pure.png';


const titles = { backgroundColor: '#F0F8FF', padding: '1px', fontSize: '16px' }

const redesign = {
  height: 350,
  width: 600
}

const styles = theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: "center"
  }
})

const childData = `
const App = () => {
  const [users, setUsers] = useState("");

  const handleText = (myData) => {
    setUsers(myData);
  };

  return (
    <div>
      {users}
      <Child refer={handleText} />
    </div>
  );
};

export default App;

const Child = (props) => {
  const data = useState("first");

  const changeText = () => {
    props.refer(data);
  };

  return (
    <div>
      <button onClick={changeText}>Click</button>
    </div>
  );
};`.trim();

const pureComps = `
const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];

const NotFound = () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <h1>
      Quote: <strong>{randomQuote}</strong>
    </h1>
  );
};

export default class Controll extends Component {
  state = { username: "foo" };

  componentDidMount() {
    setTimeout(() => this.setState({ username: "bar" }), 2000); // Simulate async ajax call
  }

  render() {
    return (
      <div>
        Welcome: {this.state.username}
        <NotFound />
      </div>
    );
  }
}
`.trim();

const pureComps2 = `
const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];

class NotFound extends React.PureComponent {
  render() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return (
      <h1>
        Quote: <strong>{randomQuote}</strong>
      </h1>
    );
  }
}

export default class Controll extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "foo" };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ username: "bar" }), 2000);
  }

  render() {
    return (
      <div>
        Welcome: {this.state.username}
        <NotFound />
      </div>
    );
  }
}
`.trim();

const PureComponents = `
//App.js
import Task from '../comp';

class App extends PureComponent {
state = {
     taskList: [
        { title: 'excercise'},
        { title: 'cooking'},
        { title: 'Reacting'},
     ]
  };

  componentDidMount() {
  setInterval(() => {
     this.setState({taskList: this.state.taskList});
  }, 1000);
}

render() {
  return (
      <div>
         {this.state.taskList.map((task, i) => {
            return (<Task
               key={i}
               title={task.title}
            />);
         })}
      </div>
    );
  }
}

export default App;


//text.js
class Task extends React.Component {
  render() {
     console.log('task added');
     return (
          <div>
            {this.props.title}
          </div>);
  }
}

export default Task;
`.trim();

const PureComponents5 = `
const App = () => {
  const [message, setMessage] = useState('Hello');
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setMessage('Updated Message');
  };

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  }

  console.log('ParentComponent re-rendered.');

  return (
    <div>
      <MessageComponent message={message} count={count} />
      <button onClick={handleButtonClick}>Message</button>
      <button onClick={handleCount}>Counts</button>
    </div>
  );
};


//
const MessageComponent = React.memo(({ message, count }) => {
  console.log('MessageComponent re-rendered.');

  return(
    <div>
      {message} - {count}
    </div>
  );
});
`.trim();

const shibling = `
const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);

  return { hasError, setHasError };
}


const ErrorBoundary = ({ children }) => {
  const { hasError, setHasError } = useErrorBoundary();

  if (hasError) {
    return <div>Something went wrong. Please try again.</div>;
  }

  return children;
}

const App = () => {
  const [count, setCount] = useState(0);
  const { hasError, setHasError } = useErrorBoundary();

  const handleButtonClick = () => {
    try {
      setCount((prevCount) => prevCount + 1);
      if (count === 3) {
        throw new Error('Error in event handler');
      }
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  };

  return (
    <div>
      {count}
      <ErrorBoundary>
        <button onClick={handleButtonClick}>Click Me</button>
        {hasError && <div>Something went wrong. Please try again.</div>}
      </ErrorBoundary>
    </div>
  );
}`.trim();

const body = `
const AppHoc = (OriginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count+1);
    };

    return (
      <OriginalComponent count={count} incrementCount={incrementCount} />
    );
  };

  return NewComponent;
};

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>Click {count} times</button>
    </div>
  );
};

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onMouseOver={incrementCount}>Hover {count} times</button>
    </div>
  );
};

const ClickCounters = AppHoc(ClickCounter);
const HoverCounters = AppHoc(HoverCounter);

function App() {
  return (
    <div>
      <ClickCounters />
      <HoverCounters />
    </div>
  );
}`.trim()

  const ssr = `
  1. ReactDOM.render(<App />, document.getElementById('root'));
  
   replace with 
   
  ReactDOM.hydrate(<App />, document.getElementById('root'));
  
  
  2. npm install express
     npm install @babel/register @babel/preset-env @babel/preset-react ignore-styles
    
  3. Let’s create an entry point in server/index.js:
  require('ignore-styles')
  
  require('@babel/register')({
   ignore: [/(node_modules)/],
   presets: ['@babel/preset-env', '@babel/preset-react']
  })
  
  require('./server')
     
  4. Make Build and run with node
      npm run build
      node server/index.js
   
      
  //App.js
  function App() {
    return (
      <div>
        <h1>Server Side Rendering.</h1>
      </div>
    );
  }
  
  
  //server/server.js
  import path from 'path'
  import fs from 'fs'
  
  import express from 'express'
  import React from 'react'
  import ReactDOMServer from 'react-dom/server'
  // import { StaticRouter } from 'react-router-dom';
  
  import App from '../src/App'
  
  const PORT = 8080
  const app = express()
  
  const router = express.Router()
  
  
  app.get('/*', (req, res) => {
      const context = {};
      const app = ReactDOMServer.renderToString(
        // <StaticRouter location={req.url} context={context}>
          <App />
        // </StaticRouter>
      );
    
      const indexFile = path.resolve('./build/index.html');
      fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }
    
        return res.send(
          data.replace('<div id="root"></div>', '<div id="root">'$'{app}</div>')
        );
      });
    });
  
  
    
  router.use(
    express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
  )
  
  // tell the app to use the above rules
  app.use(router)
  
  app.use(express.static('./build'))
  app.listen(PORT, () => {
    console.log(SSR running on port '$'{PORT})
  })
  
  
  //index.js
  require('ignore-styles')
  
  require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
  })
  
  require('./server')
  `.trim();

class PureComp extends Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <h4><Sidebar /></h4>
          </Paper>
        </Grid>

        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <List>
            <h3>1. Call Child Data</h3>
              Snario in which we call state from child to parrent component.<br />
              <i>Here App.js is parent class, and child component (First.js) have state data that we call in App component.</i>
              <div style={titles}>
                <PrismCode
                  code={childData}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>2. Component</h3>
              <img src={Pure} alt="Pure" className="responsive" style={redesign} />
              <br />
              <p>
                we show a random quote from a list of quotes. The quote component will be a child of another stateful component.
              </p>
              <div style={titles}>
                <PrismCode
                  code={pureComps}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <i>
                If you run it you will see that as soon as the component is rendered it displays a random quote, but after username state changes, it displays another random quote! A functional stateless component will re render every time the state ofthe parent component changes. Due to the limitations of a functional component you cannot implement life cycle hooks like shouldComponentUpdateto make explicit checks for renders.
              </i>
              <br />
           
              <h3>3. Pure Component</h3>
              <b>Pure component solves this issue. Pure Component implements shouldComponentUpdate, out of the box.</b>
              <br />
              <div style={titles}>
                <PrismCode
                  code={pureComps2}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <i>
                Will notice that even though the state of the parent changes, the quote displayed, doesn’t change. Pure component also gives a more stable UI because it will only re render when a prop on which it depends will change.It is recommended by React team that you use PureComponent instead of manually implementing shouldComponentUpdate, because PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.
              </i>
              <br />

              <h3>4. How would you prevent a component from rendering</h3>
              Three Ways
              <br />
              <ul>
                <li><b>Pure Components: </b>Shallowly compares the old state & props with the new state & props.</li>
                <li><b>React.memo: </b></li>
                <li><b>Should Component Update: </b></li>
              </ul>
              <br />
              Most likely Pure Components will be sufficient enough. However in cases of props or state structures with deeply nested objects, values won’t be compared.
              using the shouldComponentUpdate life-cycle method which is invoked on state or prop changes before render is called.
              <br />
              <div style={titles}>
                <PrismCode
                  code={PureComponents5}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              
              <h3>5. Error Boundries</h3>
              <p>The componentDidCatch lifecycle method is not available in React, Achieve <b>componetDidCatch</b>
               error handling behavior using the useEffect and useState hooks.</p>
              <div style={titles}>
                <PrismCode
                  code={shibling}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>6. Higher Order Component</h3>
              <i>HOCs are the coined term for a custom Component that accepts dynamically provided children.</i>
              <div style={titles}>
                <PrismCode
                  code={body}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>5. SSR</h3>
              <div style={titles}>
                <PrismCode
                  code={ssr}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(PureComp));
