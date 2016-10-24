import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import FAB from 'material-ui/FloatingActionButton'
import AddIcon from 'material-ui/svg-icons/content/add';

import DiscoveryFeature from '../DiscoveryFeature'


class AddMember extends Component {

	state = {
		modalOpen: false,
	    title: '',
	    image: null,
    error: true,
    imageName: ''
	};



	handleClose = () => {
		this.setState({
			modalOpen: false
		})
	};


	handleChange = (e) => {

    let file = e.target.files[0];

    var reader = new FileReader();

    reader.onload = (e) => {

      var dataURL = reader.result;
      this.setState({
        image: dataURL,
        imageName: file.name,
        error: false
      })
    };

    reader.readAsDataURL(file)
	};


	handleError = (e) => {
		this.setState({
			error: true
		})
	};

	handleSend = () => {
		var formData = {
      title: this.state.title,
      picture: this.state.image
    };

    this.setState({
      modalOpen: false
    });

    this.props.handleCreate(formData);
	};


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
		};


		var imgStyle = {
			maxWidth: '100%',
			minHeight: 10
		};


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
		};


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
					title="Cadastrar nova foto"
					actions={modalAction}>
					<form name="newMember">
						<TextField
							name="nome"
			                onChange={(e) => this.setState({title: e.target.value})}
			                value={this.state.title}
							fullWidth={true}
							floatingLabelText="Título" />

         

						<TextField
							name="fotoURL"
							fullWidth={true}
              				disabled={true}
							hintText="Insira a URL da foto"
              				value={this.state.imageName}
							floatingLabelText="Foto" />

						<RaisedButton
							label="Escolha a imagem"
							labelPosition="before"
							containerElement="label">
							<input name="fotoFile" type="file" style={imageInputStyle} onChange={this.handleChange} accept="image/*"/>
            </RaisedButton>

						<img
							style={imgStyle}
							alt="Preview image"
							src={this.state.image}
							onError={this.handleError} />
					</form>
				</Dialog>
			</div>
		);
	}
}

export default AddMember;
