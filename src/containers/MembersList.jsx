import React, { Component } from 'react'
import { connect } from 'react-redux'

import  AddMember from '../components/AddMember'
import  DataTable from '../components/DataTable'
import * as membersActions from '../actions/membersActions'

class MembersList extends Component {
	state = {
		modalOpen: false,
    members: []
	};

	componentDidMount() {
		this.props.dispatch(membersActions.fetchMembers())
	}


	handleCreate(data) {
    this.props.dispatch(membersActions.createMember(data));
    this.setState({
      members: this.state.members.concat(data)
    })
  }


  editAction(id) {
  	// this.props.dispatch(membersActions.Member(id))
  }

  deleteAction(id) {
  	this.props.dispatch(membersActions.deleteMember(id))
  }

	render() {


		return (
			<div>
				<h1>Equipe</h1>
				<DataTable
					headers={['Nome', 'email', 'Foto']}
		            editAction={this.editAction.bind(this)}
		            deleteAction={this.deleteAction.bind(this)}
					data={this.props.members} />

				<AddMember
          handleCreate={this.handleCreate.bind(this)}
					hasFeature={this.props.loading && this.props.members.length < 1}
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
