import React,  { Component } from 'react'

import  DataTable from './DataTable'
import RecordActions from '../RecordActions'

class TeamList extends Component {


	render() {
		return (
			<div>
				<h1>Equipe</h1>
				<DataTable 
					headers={['Nome', 'Foto']}
					data={[1,2,3,4,5,6]} />
			</div>
		);
	}
}

export default TeamList;