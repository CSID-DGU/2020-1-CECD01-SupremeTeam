import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Learn from './Learn/learn.js';
import Level from './Level/level.js';
import Problem from './Problem/problem.js'
import Talk from './Talk/talk.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Learn} />
        <Route path="/home" exact component={Learn} />
        <Route path="/home/problem" exact component={Problem} />
        <Route path="/home/level" exact component={Level} />
        <Route path="/home/talk" exact component={Talk} />
      </Switch>
    </Router>
  );
}

export default App;