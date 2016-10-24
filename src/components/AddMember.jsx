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
		console.log(this)
	}


	/**
	 * Render component
	 * @return {DOM}
	 */
	render() {
		const modalAction = [
			<FlatButton label="Cancelar" onClick={this.handleClose} />,
			<RaisedButton label="Cadastrar" primary={true} onClick={this.handleSend} />
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


		const imageInputStyle = {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			width: '100%',
			opacity: 0,
			cursor: 'pointer',
		}


		return (
			<div>
				<DiscoveryFeature 
					text="Cadastre novos membros da equipe aqui"
					textStyle={{fontSize: 25}}
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
					<form name="newMember" ref="memberForm">
						<TextField 
							name="nome"
							fullWidth={true}
							floatingLabelText="Nome" />

						<TextField 
							name="fotoURL"
							fullWidth={true}
							hintText="Insira a URL da foto"
							onChange={this.handleChange}
							floatingLabelText="Foto" />

						<RaisedButton
							label="Escolha a imagem"
							labelPosition="before"
							containerElement="label">
							<input name="fotoFile" type="file" style={imageInputStyle} />
						</RaisedButton>

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