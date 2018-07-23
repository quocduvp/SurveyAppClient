import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import {store} from "./Redux/store";
import {BrowserRouter} from "react-router-dom";

/* eslint-disable */
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <App/>
            </MuiPickersUtilsProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
