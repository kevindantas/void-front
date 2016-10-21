import Auth from '../api/Auth';
import * as types from '../constants/ActionTypes';
import * as auth from '../constants/ActionTypes';
import * as Endpoints from '../constants/Endpoints';


export const login = (form, dispatch) => {console.log(form, dispatch); return dispatch => {
		console.log(123123123);
		return fetch(Endpoints.API_URL+'/auth', {
			method: 'POST',
			headers: {
			    'Accept': 'application/json',
	    		'Content-Type': 'application/json',
				Authorization: `Basic ${btoa(form.email + ':' + form.password)}`,
			},
			body: JSON.stringify({
				access_token: '7a7ZLZ2NqC1KHJGbxhHmzw4fT9xGLryn'
			})
		})
		.then(response => ({type: 'FETCH_AUTH_DONE', payload: response}))
		.catch(e => ({type: 'FETCH_AUTH_ERROR', payload: e}))
}}

// Pure function
export const makeLogin = (auth) => {
	console.log(auth)
	return {
		type: 'AUTH_FETCH',
		payload: auth
	}
}