import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Menu from '../Menu';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        {/* <Route path="/" exact component={} /> */}
      </Router>
    </div>
  );
}

export default App;
