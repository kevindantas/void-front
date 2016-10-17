import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import '../css/TeamSection.css';
// import TeamDec from '../TeamDec.svg';

class TeamSection extends Component {

	render() {
		return (
			<section className="team-section">
				<h1> Equipe </h1>
				
				<div>
				<GridList 
					rows={2}
					cols={7}
					padding={0}
					cellHeight={250}>
					{ /*this.renderTiles()*/ }
				</GridList>
				</div>
			</section>
		);
	}
}

export default TeamSection;