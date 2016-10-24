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
		case 'VIEW_MEMBER':
			state.member = action.payload;
			return {
				...state,
				member: {...state.member}
			}

		case 'EDIT_MEMBER':
			state.data = state.data.map(record => {
				console.log(record.id)
				if(record.id === action.payload.id)
					return action.payload;
				return record
			})

			return {
				...state,
				data: state.data
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
