export default function authReducer (state = {
	auth: null,
	loading: false,
	done: false,
	error: null
}, action) {
	console.log('auth reducer')
	switch (action.types) {
		case 'FETCH_AUTH':
			return {...state, loading: true};
		case 'FETCH_AUTH_DONE':
		console.log(action);
			return {...state, loading: false, done: true, auth: action.payload};
		case 'FETCH_AUTH_ERROR':
		console.log(123)
			return {...state, loading: false, done: true, error: action.payload};
		default: 
			return state;
	}
}

