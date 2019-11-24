import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import AuthView from "./views/auth";
import IndexView from "./views/index"
import 'semantic-ui-css/semantic.min.css'

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/login'>
                <AuthView/>
            </Route>
            <Route path='/'>
                <IndexView/>
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default App;
