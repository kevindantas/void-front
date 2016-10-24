import React, { Component } from 'react'
import { connect } from 'react-redux'

import  AddMember from '../components/members/AddMember'
import  DataTable from '../components/DataTable'
import * as membersActions from '../actions/membersActions'

class UsersList extends Component {
	state = {
		modalOpen: false
	}

	componentDidMount() {
		this.props.dispatch(membersActions.fetchMembers())
	}

	render() {


		return (
			<div>
				<h1>Usuários</h1>
				<DataTable
					headers={['Nome', 'Foto']}
					data={this.props.members} />

				<AddMember
					hasFeature={!this.props.members}
					open={this.state.modalOpen} />
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		loading: state.users,
		users: state.users
	}
}

export default connect(mapStateToProps)(UsersList);
