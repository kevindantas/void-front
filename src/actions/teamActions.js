import * as ActionTypes from '../constants/ActionTypes.js'

const receiveMembers = members => ({
	type: ActionTypes.FETCH_MEMBERS,
	members: members
})


export const fetchMembers = () => dispatch => {
	Members.getAll(members => {
		dispatch(receiveMembers(members))
	});
}