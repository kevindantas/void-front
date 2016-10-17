import React, { Component } from 'react';

import Banner from './Banner';
import GallerySection from './GallerySection';
import TeamSection from './TeamSection';

class Home extends Component {
	render() {
		return (
			<div>
				<Banner />
				<GallerySection />
				<TeamSection />
			</div>
		);
	}
}

export default Home;