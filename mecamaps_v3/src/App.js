import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import OptionProvider from "./Context/options";

import Main from './Pages/Main';
import Zero from './Pages/ZeroFloor';
import First from './Pages/FirstFloor';
import QR from './Pages/QrCode';

export default props => {
  return (
    <OptionProvider>
        <Router>
            <div>
                <Switch>
                    <Route path="/qrcode" exact component={QR}/>
                    <Route path="/zerofloor/qrcode" exact component={QR}/>
                    <Route path="/zerofloor/:actual?" exact component={Zero}/>
                    <Route path="/firstfloor" exact component={First}/>
                    <Route path="/:actual?" exact component={Main}/>
                </Switch>
            </div>
        </Router>
    </OptionProvider>
  );
}

