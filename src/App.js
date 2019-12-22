import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import AuthView from "./components/auth";
import IndexView from "./components/index"
import 'semantic-ui-css/semantic.min.css'
import PrivateRoute from "./components/PrivateRoute"
//import AuthService from "./services/auth.service"
import EditView from "./components/edit";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path='/' component={IndexView}/>
                <Route path='/login' component={AuthView}/>
                <PrivateRoute path='/edit' component={EditView}/>

            </Switch>
        </BrowserRouter>
    );
}


export default App;
