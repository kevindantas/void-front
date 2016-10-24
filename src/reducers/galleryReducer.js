import * as Action from '../constants/ActionTypes';

export default function photosReduce (state = {
	photos: [],
	loading: false,
	done: false,
  	data: [],
	error: null
}, action) {

	switch(action.type) {
		case 'FETCH_PHOTOS':
			return {loading: false, data: action.payload}
		case 'FETCH_PHOTOS_ERROR':
			return {...state, loading: false, error: action.payload}
		case 'FETCH_PHOTOS_DONE':
			return {
				...state,
				loading: false,
				done: true,
				photos: action.payload
		}
		case 'CREATE_PHOTOS':
			state.data = state.data.concat(action.payload);
			return {
				...state,
				photo: {...state.photo}
			}
		case 'VIEW_PHOTO':
			state.photo = action.payload;
			return {
				...state,
				photo: {...state.photo}
			}

		case 'EDIT_PHOTO':
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
		case 'DELETE_PHOTO':
			state.data = state.data.filter(record => record.id !== action.payload)
			return {
				...state,
				photo: {...state.photo}
			}
		default:
			return state;
	}
}
