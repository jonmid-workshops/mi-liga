import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Liga from './Components/liga/Liga';
import Calendario from './Components/calendario/Calendario';
import NotFound from './Components/common/not-found/NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Liga} />
            <Route path='/liga' component={Liga} />
            <Route path='/calendarios' component={Calendario} />
            <Route path='/calendario/:equipo' component={Calendario} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;