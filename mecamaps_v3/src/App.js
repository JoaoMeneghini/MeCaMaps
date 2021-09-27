import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
                    <Route path="/main/:actual" component={Main}/>
                    <Route path="/zerofloor" exact component={Zero}/>
                    <Route path="/firstfloor" exact component={First}/>
                </Switch>
            </div>
        </Router>
    </OptionProvider>
  );
}

