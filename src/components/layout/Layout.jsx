import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';

import '../../css/App.css';
import AppNavBar from './AppNavBar';

@connect(store => ({
  user: store.user
}))
class App extends Component {
  render() {
    console.log(this.props.user);

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
