import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '@/page/Home'
import SiderBar from '@/page/SiderBar/index'
import Report from '@/page/Report/index'

class Routes extends Component {
    render() {
        return (<Router>
            <div className="container">
                <SiderBar></SiderBar>
                <Route exact path="/" component={Home}/>
                <Route path="/report/:show" component={Report}/>
            </div>
        </Router>);
    }
}

export default Routes
