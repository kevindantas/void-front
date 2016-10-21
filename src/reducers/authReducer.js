export default function authReducer (state = {
	auth: null,
	loading: false,
	done: false,
	error: null
}, action) {
	switch (action.types) {
		case 'FETCH_AUTH':
			return {...state, loading: true};
		case 'FETCH_AUTH_DONE':
			return {...state, loading: false, done: true, auth: action.payload};
		case 'FETCH_AUTH_ERROR':
			return {...state, loading: false, done: true, error: action.payload};
		default: 
			return state;
	}
}

