import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import AuthView from "./components/auth";
import IndexView from "./components/index"
import 'semantic-ui-css/semantic.min.css'
import AuthService from "./services/auth.service"
import store_auth from "./stores/store_auth";

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/login' component={AuthView}>
            </Route>
            <PrivateRoute path='/' component={IndexView}>

            </PrivateRoute>
        </Switch>
        </BrowserRouter>
    );
}

function PrivateRoute({component, ...rest}) {
    const isloggedin_ = store_auth.isLoggedIn

    return (
        <Route
            {...rest}
            render={({location}) =>
                isloggedin_ ? (
                    <Route component={component}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: location}
                    }}/>
                )
            }
        />
    )
}

export default App;
