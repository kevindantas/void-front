import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import '../../css/LayoutAdmin.css';
import AppNavBar from './AppNavBar';


class LayoutAdmin extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentWillMount() {
    var token = localStorage.getItem('void-token');
    var user  = localStorage.getItem('void-user');

    if (token)
      token = JSON.stringify(token);

    if (user)
      token = JSON.stringify(user);

    if(!token && !user)
      this.context.router.push('/auth')
  }



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
