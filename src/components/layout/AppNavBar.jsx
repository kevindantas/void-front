import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class AppNavBar extends Component {


	navBarItemsStyle = {
		marginTop: 8,
		color: '#fff'
	};

	navBarItems = (
		<nav>
			<FlatButton style={this.navBarItemsStyle} label="Galeria" href="/galeria" />
			<FlatButton style={this.navBarItemsStyle} label="Equipe" href="/equipe" />
			<FlatButton style={this.navBarItemsStyle} label="Login" href="/auth" />
		</nav>
	);


	render() {
    const titleStyle = {
      textAlign: 'left'
    };


		return (
			<AppBar
				title="Void"
				titleStyle={titleStyle}
				showMenuIconButton={false}
				iconElementRight={this.navBarItems} />
		)
	}
}

export default AppNavBar;
