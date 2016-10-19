import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AuthActions from '../actions/authActions';


import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Auth extends Component {
	state = {
		valid: true,
		errors: {}
	}



	/**
	 * Validate form
	 * @return {bool} If the form is valid
	 */
	validateForm() {
		let keys = Object.keys(this.refs);
		let isValid = true;

		for (let i = keys.length - 1; i >= 0; i--) {
			let key = keys[i];
			if(this.refs[key] instanceof TextField) {
				delete this.state.errors[key];
				let input = this.refs[key].input;
				if(!input.validity.valid) {
					this.state.errors[key] = true
					isValid = false;
				}
			}
		}

		this.setState({
			errors: this.state.errors,
			valid: isValid
		})


		return isValid;
	}



	/**
	 * Handle submit and validate form
	 * @param  {Event} e Triggered event
	 * @return {[type]}   [description]
	 */
	handleSubmit = (e) => {
		e.preventDefault();

		if(!this.validateForm()) return false;

		var loginData = {
			email: this.refs.email.getValue(),
			password: this.refs.senha.getValue()
		}



		AuthActions.makeLogin(loginData);

		// AuthActions.login(loginData)
		// this.props.dispatch(AuthActions.makeLogin(loginData))
	}


	/**
	 * Render component
	 */
	render() {
		const styles = {
			wrapper: {
				width: '100vw',
				height: '100vh',
				background: '#445963'
			},
			Card: {
				width: 500,
				height: 350,
				marginTop: -150,
				marginLeft: -250,
				position: 'absolute',
				top: '30%',
				left: '50%',
			},
			CardActions: {
				textAlign: 'center'
			}
		}

		return (
			<MuiThemeProvider>
				<div style={styles.wrapper}>
					<Card style={styles.Card}>
						<CardTitle title="Login"/>
						<CardText>
							<form action="#" onSubmit={this.handleSubmit} noValidate>
								<TextField 
									ref="email"
									required
									fullWidth={true} 
									floatingLabelText="Email" 
									errorText={this.state.errors.email ? 'Email obrigatório' : ''} 
									type="email" />

								<TextField 
									ref="senha"
									required
									fullWidth={true} 
									floatingLabelText="Senha" 
									errorText={this.state.errors.senha ? 'Senha obrigatória' : ''} 
									type="password" />

								<CardActions style={styles.CardActions}>
									<RaisedButton type="submit" label="Login" primary={true} />
								</CardActions>
							</form>
						</CardText>
					</Card>
				</div>
			</MuiThemeProvider>
		);
	}
}