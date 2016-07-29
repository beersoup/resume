import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './head/header';
import Home from './home-page/home';
import Resume from './resume/resume';
import Portfolio from './portfolio/portfolio';

require('bootstrap-webpack');





export default () => {
    
return (
    <Router history={hashHistory}>
        <Route path='/' component={Header}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="resume" component={Resume}></Route>
            <Route path="portfolio" component={Portfolio}></Route>
        </Route>
    </Router>
    );
}

