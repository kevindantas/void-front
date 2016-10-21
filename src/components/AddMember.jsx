import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import FAB from 'material-ui/FloatingActionButton'
import AddIcon from 'material-ui/svg-icons/content/add';

import DiscoveryFeature from '../components/DiscoveryFeature'


class AddMember extends Component {

	state = {
		modalOpen: false,
		preview: null,
		error: true
	}



	handleClose = () => {
		this.setState({
			modalOpen: false
		})
	}


	handleChange = (e) => {
		this.setState({
			preview: e.target.value,
			error: false
		})
	}


	handleError = (e) => {
		this.setState({
			error: true
		})
	}

	handleSend = () => {

	}


	/**
	 * Render component
	 * @return {DOM}
	 */
	render() {
		const modalAction = [
			<FlatButton label="Cancelar" onClick={this.handleClose} />,
			<RaisedButton label="Cadastrar" primary={true} />
		];

		const fabStyle = {
			position: 'fixed',
			bottom: '5%',
			right: '5%'
		}


		var imgStyle = {
			maxWidth: '100%',
			minHeight: 10
		}
		if(this.state.error) {
			imgStyle = {
				maxWidth: '100%',
				opacity: 0,
				display: 'none'
			}
		}



		return (
			<div>
				<DiscoveryFeature 
					open={this.props.hasFeature}>
					<FAB style={fabStyle} onClick={() => this.setState({ modalOpen: true })}>
						<AddIcon color="#ffffff" /> 
					</FAB>
				</DiscoveryFeature>

				<Dialog
					open={this.state.modalOpen}
					onRequestClose={this.handleClose}
					title="Cadastrar novo membro"
					actions={modalAction}>
					<form>
						<TextField 
							name="nome"
							fullWidth={true}
							floatingLabelText="Nome" />

						<TextField 
							name="foto"
							fullWidth={true}
							hintText="Insira a URL da foto"
							onChange={this.handleChange}
							floatingLabelText="Foto" />
						
						<img 
							style={imgStyle}  
							alt="Preview image" 
							src={this.state.preview} 
							onError={this.handleError} />
					</form>
				</Dialog>
			</div>
		);
	}
}

export default AddMember;