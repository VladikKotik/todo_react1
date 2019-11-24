import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import AuthView from "./views/auth";
import IndexView from "./views/index"
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
      <React.Fragment>
          <BrowserRouter>
        <Route path='/login'>
          <AuthView/>
        </Route>
        <Route path='/'>
          <IndexView/>
        </Route>
          </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
