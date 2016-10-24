import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import '../../css/LayoutAdmin.css';
import AppNavBar from './AppNavBar';


class LayoutAdmin extends Component {
  render() {
    const wrapperStyle = {
      maxWidth: '90vw',
      margin: 'auto'
    }
    return (
      <MuiThemeProvider>
        <div className="LayoutAdmin">
          <AppNavBar />

          <main style={wrapperStyle}>
            { this.props.children }
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default LayoutAdmin;
