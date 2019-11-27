import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import AuthView from "./components/auth";
import IndexView from "./components/index"
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
