import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';


class AppNavBar extends Component {

  state = {
    open: false,
    mobile: window.innerWidth < 480
  };

	navBarItemsStyle = {
		marginTop: 8,
		color: '#fff'
	};


	navigation = [
    {
      label: 'Galeria',
      href: '/galeria',
      onlyLogged: false
    },
    {
      label: 'Equipe',
      href: '/equipe',
      onlyLogged: false
    },
    {
      label: 'Usuários',
      href: '/admin/usuarios',
      onlyLogged: true
    },
    {
      label: 'Login',
      href: '/auth',
      onlyLogged: false,
      onlyAnom: true
    },
    {
      label: 'Logout',
      href: '/auth',
      onlyLogged: true
    }
  ];

	navBarItems = (
		<nav>
      {
        this.navigation.map(item =>{
            if(item.onlyLogged && !this.props.token || item.onlyAnom && this.props.token)
              return;

            return <FlatButton
              key={item.label}
              style={this.navBarItemsStyle}
              label={item.label}
              href={item.href} />
          }
        )
      }
    </nav>
	);


  drawerItems = (
    <nav>
      {
        this.navigation.map(item => {
          if(item.onlyLogged && !this.props.token || item.onlyAnom && this.props.token)
            return;

            return <MenuItem key={item.label} onTouchTap={this.handleClose} href={item.href}>{item.label}</MenuItem>
          }
        )
      }
    </nav>
  );

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      this.setState({
        mobile: window.innerWidth < 480
      })
    })
  }


	render() {
    const titleStyle = {
      textAlign: 'left'
    };


		return (
		  <div>
        <AppBar
          title="Void"
          titleStyle={titleStyle}
          showMenuIconButton={this.state.mobile}
          onLeftIconButtonTouchTap={() => this.setState({open: true})}
          iconElementRight={this.state.mobile ? null :  this.navBarItems} />

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          {this.drawerItems}
        </Drawer>

      </div>
		)
	}
}

function mapStateToProps (state) {
  return {
    token: state.auth.token,
    user: state.auth.user
  }
}
export default connect(mapStateToProps)(AppNavBar);
