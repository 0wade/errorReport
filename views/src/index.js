import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
