import React, { Component } from 'react';

import GallerySection from './GallerySection';
import TeamSection from './TeamSection';

class Home extends Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<h2>Welcome to React</h2>
				</div>

				<GallerySection />
				<TeamSection />
			</div>
		);
	}
}

export default Home;