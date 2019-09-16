import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout/layout';
import Home from './components/home/home';
import Why from './components/why/why';
import Programmes from './components/programmes/programmes';
import Story from './components/story/story';
import Gallery from './components/gallery/gallery';
import Partners from './components/partners/partners';
import Funding from './components/funding/funding';
import Quiz from './components/quiz/quiz';
import Apply from './components/apply/apply';


class Routes extends Component {
    render() {
        return(
            <Layout>
                <Switch>
                    <Route path="/why" component={Why}/>
                    <Route path="/programmes" component={Programmes}/>
                    <Route path="/story" component={Story}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/partners" component={Partners}/>
                    <Route path="/funding" component={Funding}/>
                    <Route path="/quiz" component={Quiz}/>
                    <Route path="/apply" component={Apply}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;