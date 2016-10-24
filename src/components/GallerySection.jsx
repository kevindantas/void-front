import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import '../css/GallerySection.css';

class GallerySection extends Component {
	state = {
		width: window.innerWidth
	}

	componentDidMount() {
		window.onresize = () => {
			this.setState({width: window.innerWidth});
		}
	}


	renderTiles() {
		var { photos } = this.props;
		return photos.map(photo => (
			<GridTile
	          	cols={3}
	          	rows={1}
				title={photo.title}
				key={photo.picture} >
	          <img src={photo.picture} />
			</GridTile>
			))
	}


	render() {

		const styles = {
		  root: {
		    display: 'flex',
		    flexWrap: 'wrap',
		    justifyContent: 'space-around',
		  }
		}

		return (
			<section className="gallery-section">
				<h1> Galeria </h1>
				<div >
				<GridList
					rows={2}
					cols={9}
					padding={0}
					cellHeight={350}>
					{ this.renderTiles() }
				</GridList>
				</div>
			</section>
		);
	}
}

export default GallerySection;
