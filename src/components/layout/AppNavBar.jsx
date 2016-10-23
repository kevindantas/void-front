import React, { Component } from 'react';
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
      logged: false
    },
    {
      label: 'Equipe',
      href: '/equipe',
      logged: false
    },
    {
      label: 'Login',
      href: '/auth',
      logged: false
    }
  ];

	navBarItems = (
		<nav>
      {
        this.navigation.map(item =>
          (
          <FlatButton
            key={item.label}
            style={this.navBarItemsStyle}
            label={item.label}
            href={item.href} />)
          )
      }
    </nav>
	);


  drawerItems = (
    <nav>
      {
        this.navigation.map(item =>
          (
            <MenuItem key={item.label} onTouchTap={this.handleClose} href={item.href}>{item.label}</MenuItem>
          )
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

    console.log(this.state.mobile);

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

export default AppNavBar;
