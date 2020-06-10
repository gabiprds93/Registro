import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import Registry from './Pages/Registry'
// import Login from './Pages/Login'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/registro" component={Registry} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
