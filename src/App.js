import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Registry from './Pages/Registry'
// import Login from './Pages/Login'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/registro" component={Registry} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
