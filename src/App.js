import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DesignBuilder from './components/DesignBuilder';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <header>
            <h1>GFH Fast Track</h1>
          </header>
          <DesignBuilder />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
