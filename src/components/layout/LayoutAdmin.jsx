import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';

//import '../../css/LayoutAdmin.css';
import NavBarAdmin from './NavBarAdmin';


class LayoutAdmin extends Component {
  render() {
    const wrapperStyle = {
      maxWidth: '90vw',
      margin: 'auto'
    }
    return (
      <MuiThemeProvider>
        <div className="LayoutAdmin">
          <NavBarAdmin />

          <main style={wrapperStyle}>
            { this.props.children }
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default LayoutAdmin;
