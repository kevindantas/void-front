import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as membersActions from '../actions/membersActions'
import  DataTable from '../components/DataTable'

class MembersList extends Component {
	componentDidMount() {
		this.props.dispatch(membersActions.fetchMembers())
	}

	render() {
		return (
			<div>
				<h1>Equipe</h1>
				<DataTable 
					headers={['Nome', 'Foto']}
					data={[{name: 'Kevin'}]} />
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		members: state.members
	}
}

export default connect(mapStateToProps)(MembersList);