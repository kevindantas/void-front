export default function authReducer (state = {
	token: localStorage.getItem('void-token') ? localStorage.getItem('void-token') : null,
	user: localStorage.getItem('void-user') ? JSON.parse(localStorage.getItem('void-user')) : null,
	auth: null,
	loading: false,
	done: false,
	error: null
}, action) {
	switch (action.type) {
		case 'FETCH_AUTH':
			return {...state, loading: true};
		case 'FETCH_AUTH_DONE':
			return {...state, loading: false, done: true, token: action.payload.token, user: action.payload.user};
		case 'FETCH_AUTH_ERROR':
			return {...state, loading: false, done: true, error: action.payload};
		default:
			return state;
	}
}

