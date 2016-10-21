import axios from 'axios';
import * as ActionTypes from '../constants/ActionTypes'
import * as Endpoints from '../constants/Endpoints'

export const receiveMembers = members => ({
	type: ActionTypes.FETCH_MEMBERS,
	members: members
})

export const fetchMembers = form => dispatch => (
	axios.get(`${Endpoints.API_URL}/team`)
		.then(response => dispatch({
			type: 'FETCH_MEMBERS',
			payload: response.data
		}))
		.catch(e => dispatch({
			type: 'FETCH_MEMBERS_FAILED',
			payload: e
		}))
	)


/*
export const fetchMembers = () => dispatch => {
	
		dispatch(receiveMembers({}))
	
}*/