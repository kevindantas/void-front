import React, { Component } from 'react';
import { connect } from 'react-redux'

import Banner from '../components/Banner';
import GallerySection from '../components/GallerySection';
import TeamSection from '../components/TeamSection';
import * as membersActions from '../actions/membersActions'
import * as photosActions from '../actions/photosActions'

class Home extends Component {

	componentDidMount() {
		this.props.dispatch(membersActions.fetchMembers())
		this.props.dispatch(photosActions.fetchPhotos())
	}


	render() {
		return (
			<div>
				<Banner />
				<GallerySection photos={this.props.photos} />
				<TeamSection members={this.props.members}  />
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		loading: state.members.loading,
		photos: state.photos.data,
		members: state.members.data
	}
}

export default connect(mapStateToProps)(Home);
