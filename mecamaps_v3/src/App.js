import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import OptionProvider from "./Context/options";

import Main from './Pages/Main';
import Zero from './Pages/ZeroFloor';
import First from './Pages/FirstFloor';

export default props => {
  return (
    <OptionProvider>
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/zerofloor" component={Zero} />
                    <Route path="/firstfloor" component={First} />
                </Switch>
            </div>
        </Router>
    </OptionProvider>
  );
}

