import React from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';

import { About } from '../about/About';
import { Contact } from '../contact/Contact';
import { Join } from '../join/Join';
import { Team } from '../team/Team';
import { Events } from '../events/Events';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/join-us' component={Join}></Route>
            <Route exact path='/team' component={Team}></Route>
            <Route exact path='/events' component={Events}></Route>
        </Switch>
    );
}

export { Main };
