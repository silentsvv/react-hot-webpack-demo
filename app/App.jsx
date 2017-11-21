import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home.jsx';
import MyServer from './pages/Server/Server.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={Home}/>
        <Route path="/topics" component={MyServer}/>
      </div>
    </Router>
  }
}

export default App;