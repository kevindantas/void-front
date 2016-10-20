import * as Action from '../constants/ActionTypes';

export default function membersReduce (state = {
	members: null,
	loading: false,
	done: false,
	error: null
}, action) {

	switch(action.type) {
		case 'FETCH_MEMBERS':
			return {...state, loading: false}
		case 'FETCH_MEMBERS_ERROR':
			return {...state, loading: false, error: action.payload}
		case 'FETCH_MEMBERS_DONE': 
			return {
				...state, 
				loading: false, 
				done: true, 
				members: action.payload
		}
		case 'NEW_MEMBERS': 
			return {
				...state, 
				member: {...state.member}
			}
		default:
			return state;
	}
}