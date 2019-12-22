import store_auth from "../stores/store_auth";
import React from "react";
import {Redirect, Route} from 'react-router-dom'
import {observer} from "mobx-react";

function PrivateRoute({component, ...rest}) {
    let isloggedin_ = store_auth.isLoggedIn

    return (
        <Route
            {...rest}
            render={({location}) =>
                isloggedin_ ? (
                    <Route component={component}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        // state: {from: location}
                    }}/>
                )
            }
        />
    )
}

export default observer(PrivateRoute)