import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import './assets/styles.css'
import store from './redux/store'
import Registry from './Pages/Registry'
import Login from './Pages/Login'
import Account from './Pages/Account';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Registry} />
          <Route path="/login" component={Login} />
          <Route path="/account" component={Account} />
        </Switch>
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
