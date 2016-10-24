import React, { Component } from 'react'
import { connect } from 'react-redux'

import  AddPhoto from '../components/gallery/AddPhoto'
import  EditPhoto from '../components/gallery/EditPhoto'
import  DataTable from '../components/DataTable'
import * as photosActions from '../actions/photosActions'

class PhotosList extends Component {
	state = {
		modalOpen: false,
    	photos: []
	};

	componentDidMount() {
		this.props.dispatch(photosActions.fetchPhotos())
	}


	handleCreate(data) {
    this.props.dispatch(photosActions.createPhoto(data));
    this.setState({
      photos: this.state.photos.concat(data)
    })
  }


  viewAction(id) {
  	this.setState({
  		modalOpen: true,
  		id: id
  	})
  	this.props.dispatch(photosActions.viewPhoto(id))
  }

  editAction(id) {
  	this.props.dispatch(photosActions.editPhoto(id))
  	this.setState({
  		modalOpen: false,
  		id: id
  	})
  }

  deleteAction(id) {
  	this.props.dispatch(photosActions.deletePhoto(id))
  }

	render() {


		return (
			<div>
				<h1>Galeria</h1>
				<DataTable
					headers={['Usuário', 'Nome da foto', 'Foto']}
		            editAction={this.viewAction.bind(this)}
		            deleteAction={this.deleteAction.bind(this)}
					data={this.props.photos} />

				<AddPhoto
          			handleCreate={this.handleCreate.bind(this)}
					hasFeature={this.props.loading && this.props.photos.length < 1} />

				<EditPhoto
					handleClose={() => this.setState({modalOpen: false})}
					dispatch={this.props.dispatch}
					photo={this.props.photo}
          			handleEdit={this.editAction.bind(this)}
          			id={this.state.id}
					open={this.state.modalOpen} />
			</div>
		);
	}
}


function mapStateToProps (state) {

	return {
		loading: state.photos.loading,
		photos: state.photos.data,
		photo: state.photos.photo
	}
}

export default connect(mapStateToProps)(PhotosList);
