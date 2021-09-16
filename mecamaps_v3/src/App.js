import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Main from './Pages/Main';
import Zero from './Pages/ZeroFloor';
import First from './Pages/FirstFloor';

export default props => {
  return (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/zerofloor" component={Zero} />
                <Route path="/firstfloor" component={First} />
            </Switch>
        </div>
    </Router>
  );
}

