import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import './App.css';
import Login from "./views/Page/Login";
import DefaultLayout from "./containers/DefaultLayout";
import Register from "./views/Page/Register";
import {fetchMyProfileWithLogin} from "./Redux/action/myprofileActions";
import { createHashHistory } from 'history'
const hist = createHashHistory()
class App extends Component {
    componentDidMount(){
        this.requestRedux()
    }
    requestRedux(){
        const token = sessionStorage.getItem('access_token')
        if(token != null) {
            this.props.dispatch(fetchMyProfileWithLogin(token))
        }else {
            hist.push('/Login')
        }
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" name="Login Page" component={Login}/>
                    <Route exact path="/Register" name="Register" component={Register}/>
                    <Route path="/" name="Home" component={DefaultLayout}/>
                </Switch>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        myprofile : state.myprofile
    }
}
export default connect(mapStateToProps)(App);
