import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog';

// export  const Root = () => (
//   <Router>
//     <Route path="/" component={App} />
//   </Router>
// );

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about" component={About}>
            {/* <About /> */}
          </Route>
          <Route exact path="/blog" component={Blog}>
            {/* <Users /> */}
          </Route>
          <Route exact path="/" component={Home}>
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

serviceWorker.register();

export default App;

// const Routes = () => {
//   return (
//     <Router>
//       <NavigationBar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/home" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/gallery" component={Galllery} />
//         <Route path="/gallery2" component={Galllery2} />
//         <Route path="/gallery3" component={Galllery3} />
//         <Route path="/gallery4" component={Galllery4} />
//         <Route
//           path="/exampledynamiccolumns"
//           component={ExampleDynamicColumns}
//         />
//       </Switch>
//     </Router>
//   );
// };
// export default Routes;