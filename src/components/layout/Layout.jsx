import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import AppNavBar from './components/AppNavBar';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppNavBar />

          <main>
            { this.props.children }
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
