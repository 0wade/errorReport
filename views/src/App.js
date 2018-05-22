import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getchErrorReportData} from '@/store/action/index';
import Routes from './router/index';
import './App.css';

class App extends Component {
    render() {
        let {dispatch} = this.props;
        dispatch(getchErrorReportData({names: 'cjh'}));
        return (<div className="App">
            <Routes/>
        </div>);
    }
}

export default connect()(App);
