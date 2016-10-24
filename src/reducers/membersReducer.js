import * as Action from '../constants/ActionTypes';

export default function membersReduce (state = {
	members: [],
	loading: false,
	done: false,
  data: [],
	error: null
}, action) {

	switch(action.type) {
		case 'FETCH_MEMBERS':
			return {loading: false, data: action.payload}
		case 'FETCH_MEMBERS_ERROR':
			return {...state, loading: false, error: action.payload}
		case 'FETCH_MEMBERS_DONE':
			return {
				...state,
				loading: false,
				done: true,
				members: action.payload
		}
		case 'CREATE_MEMBERS':
			state.data = state.data.concat(action.payload);
			return {
				...state,
				member: {...state.member}
			}

		case 'DELETE_MEMBER':
			state.data = state.data.filter(record => record.id !== action.payload)
			return {
				...state,
				member: {...state.member}
			}
		default:
			return state;
	}
}
