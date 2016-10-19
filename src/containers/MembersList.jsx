import React, { Component } from 'react'
import { connect, bindActionCreators } from 'react-redux'
import { membersActions } from '../actions/membersActions'
import  DataTable from '../components/DataTable'

class MembersList extends Component {
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



function mapDispatchToProps (dispatch) {
	return bindActionCreators({membersActions: membersActions}, dispatch)
}


function mapStateToProps (state) {
	return {
		members: state.members
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);