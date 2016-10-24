import React, { Component } from 'react'
import { connect } from 'react-redux'

import  AddMember from '../components/AddMember'
import  DataTable from '../components/DataTable'
import * as membersActions from '../actions/membersActions'

class MembersList extends Component {
	state = {
		modalOpen: false
	}

	componentDidMount() {
		this.props.dispatch(membersActions.fetchMembers())
	}


	handleCreate(data) {
    this.props.dispatch(membersActions.createMember(data));
  }

	render() {


		return (
			<div>
				<h1>Equipe</h1>
				<DataTable
					headers={['Nome', 'Foto']}
					data={this.props.members} />

				<AddMember
          handleCreate={this.handleCreate.bind(this)}
					hasFeature={this.props.members && this.props.members.length < 1}
					open={this.state.modalOpen} />
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		loading: state.members.loading,
		members: state.members.data
	}
}

export default connect(mapStateToProps)(MembersList);
