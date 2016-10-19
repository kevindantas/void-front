import * as ActionTypes from '../constants/ActionTypes.js'

export const receiveMembers = members => ({
	type: ActionTypes.FETCH_MEMBERS,
	members: members
})

/*
export const fetchMembers = () => dispatch => {
	
		dispatch(receiveMembers({}))
	
}*/