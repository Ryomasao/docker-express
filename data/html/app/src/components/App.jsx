import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import MemberPage from './member/MemberPage.jsx';

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={MemberPage} />
      </Switch>
    </div>
  </Router>
);

export default App;