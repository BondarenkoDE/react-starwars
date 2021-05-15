import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Favorites } from './pages';

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/favorites" component={Favorites} exact />
    </div>
  );
}

export default App;
