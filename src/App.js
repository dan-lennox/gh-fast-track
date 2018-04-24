import React, { Component } from 'react';
import './App.css';

import DesignBuilder from './components/DesignBuilder';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>GFH Fast Track</h1>
        </header>
        <DesignBuilder />
      </div>
    );
  }
}

export default App;
