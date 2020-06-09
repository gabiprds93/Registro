import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Registry from './Components/Registry'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/registro" component={Registry} />
          <Route path="/login" component={Login} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
