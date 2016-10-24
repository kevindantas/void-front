import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import '../css/TeamSection.css';
// import TeamDec from '../TeamDec.svg';

class TeamSection extends Component {

	renderTiles() {
		return this.props.members.map(member => (
			<GridTile
	          	cols={member.featured ? 1 : 1}
	          	rows={member.featured ? 1 : 1}
				title={member.name}
				key={member.id} >
	          <img src={member.picture} />
			</GridTile>
			))
	}

	render() {
		const style = {
			marginLeft: 90
		}
		return (
			<section className="team-section">
				<h1> Equipe </h1>
				
				<div>
				<GridList 
					style={style}
					rows={1}
					cols={5}
					padding={0}
					cellHeight={250}>
					{ this.renderTiles() }
				</GridList>
				</div>
			</section>
		);
	}
}

export default TeamSection;