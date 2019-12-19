import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom'
import './App.css';
import AuthView from "./components/auth";
import IndexView from "./components/index"
import 'semantic-ui-css/semantic.min.css'
import {inject, observer} from "mobx-react";
//import AuthService from "./services/auth.service"
import store_auth from "./stores/store_auth";
import EditView from "./components/edit";
import {decorate, observable} from "mobx";
import {TasksStore} from "./stores/tasks_store";

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/login' component={AuthView}/>

            <PrivateRoute path='/' component={IndexView}/>

            <PrivateRoute path='/edit' component={EditView}/>

        </Switch>
        </BrowserRouter>
    );
}

function  PrivateRoute({component, ...rest}) {
    const isloggedin_ = store_auth.isLoggedIn //observer чет так и не понял, куда на нее повешать, а вроде и не надо

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
