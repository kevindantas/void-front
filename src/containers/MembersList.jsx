import React, { Component } from 'react'
import { connect } from 'react-redux'
import FAB from 'material-ui/FloatingActionButton'
import AddIcon from 'material-ui/svg-icons/content/add';

import * as membersActions from '../actions/membersActions'
import  DataTable from '../components/DataTable'
import DiscoveryFeature from '../components/DiscoveryFeature'

class MembersList extends Component {
	state = {
		modalOpen: false
	}

	componentDidMount() {
		this.props.dispatch(membersActions.fetchMembers())
	}

	render() {
		const fabStyle = {
			position: 'fixed',
			bottom: '5%',
			right: '5%'
		}

		console.log(this.state.modalOpen)
		return (
			<div>
				<h1>Equipe</h1>
				<DataTable 
					headers={['Nome', 'Foto']}
					data={this.props.members} />
				<DiscoveryFeature 
					open={this.props.members && this.props.members.length < 1}>
					<FAB style={fabStyle} onClick={() => this.setState({ modalOpen: true })}>
						<AddIcon color="#ffffff" /> 
					</FAB>
				</DiscoveryFeature>
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