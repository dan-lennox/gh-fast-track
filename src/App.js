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
            <h2>GFH Fast Track</h2>
          </header>
          <DesignBuilder />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
