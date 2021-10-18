import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import ChickenDetail from '../chicken-detail';
import MyCoop from '../my-coop';
import RacingPending from '../racing-pending';
import RacingResult from '../racing-result';
import Results from '../results';
import ScheduledRaces from '../scheduled-races';

function AppRoute() {
    return (
        <Switch>
            <Route exact path="/chicken-detail" component={ChickenDetail} />
            <Route exact path="/my-coop" component={MyCoop} />
            <Route exact path="/racing/pending" component={RacingPending} />
            <Route exact path="/racing/result" component={RacingResult} />
            <Route exact path="/result" component={Results} />
            <Route exact path="/scheduled/races" component={ScheduledRaces} />
            <Route path="/" component={Home} />
        </Switch>
    );
}

export default AppRoute;
