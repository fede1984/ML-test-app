import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { ResultsScreen } from './components/results/ResultsScreen';
import { SearchBoxScreen } from './components/search/SearchBoxScreen';
import { DetailScreen } from './components/Detail/DetailScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div className="routerDiv">
                <Switch>
                    <Route exact path="/" component={SearchBoxScreen} />
                    <Route exact path="/items" component={ResultsScreen} />
                    <Route path="/items/:id" component={DetailScreen} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
