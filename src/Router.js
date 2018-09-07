import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Liga from './Components/liga/Liga';
import Calendario from './Components/calendario/Calendario';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Liga} />
            <Route path='/liga' component={Liga} />
            <Route path='/calendario' component={Calendario} />
        </Switch>
    </BrowserRouter>
)

export default Router;