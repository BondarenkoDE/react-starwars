import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Favorites } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="separator"></div>
      <Route path="/" component={Home} exact />
      <Route path="/favorites" component={Favorites} exact />
    </div>
  );
}

export default App;
