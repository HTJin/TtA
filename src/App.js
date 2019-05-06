import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import Main from './Menu/Main'
import Play from './Game/Play'

function App() {
  return (
    <div>
      <Route exact path='/' render={() => <Redirect to='/main' />} />
      <Route path='/main' component={Main} />
      <Route path='/play' component={Play} />
    </div>
  );
}

export default App;
