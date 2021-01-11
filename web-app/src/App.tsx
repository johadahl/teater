import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './Home';
import Swipe from './Swipe';
import Match from './Match';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/match" component={Match} />
        <Route exact path="/:roomId" component={Swipe} />
      </Switch>
    </Router>
  );
}

export default App;
