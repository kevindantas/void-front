import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import '../css/GallerySection.css';

class GallerySection extends Component {

	renderTiles() {
		const photos = [
		  {
		    img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
		    title: 'Breakfast',
		    author: 'jill111',
		    featured: true,
		  },
		  {
		    img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
		    title: 'Tasty burger',
		    author: 'pashminu',
		  },
		  {
		    img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
		    title: 'Camera',
		    author: 'Danson67',
		  },
		  {
		    img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
		    title: 'Morning',
		    author: 'fancycrave1',
		  },
		  {
		    img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
		    title: 'Hats',
		    author: 'Hans',
		  }]

		return photos.map(photo => (
			<GridTile 
	          	cols={photo.featured ? 3 : 2}
	          	rows={photo.featured ? 2 : 1}
				title={photo.title}
				key={photo.img} >
	          <img src={photo.img} />
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
				<div style={styles.root}>
				<GridList 
					style={styles.gridList}
					rows={2}
					cols={7}
					padding={0}
					cellHeight={250}>
					{ this.renderTiles() }
				</GridList>
				</div>
			</section>
		);
	}
}

export default GallerySection;