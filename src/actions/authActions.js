import Auth from '../api/Auth';
import * as Endpoints from '../constants/Endpoints';
import axios from 'axios';

export const login = form => dispatch => {

    var body = {
      access_token: '7a7ZLZ2NqC1KHJGbxhHmzw4fT9xGLryn'
    };

		axios.post(Endpoints.API_URL+'/auth', body, {
			headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
				Authorization: `Basic ${btoa(form.email + ':' + form.password)}`,
			},
		})
		.then(response => {
      localStorage.setItem('void-token', JSON.stringify({token: response.token}));
      localStorage.setItem('void-user', JSON.stringify({user: response.user}));
      dispatch({type: 'FETCH_AUTH_DONE', payload: response.data})
		})
		.catch(e => dispatch({type: 'FETCH_AUTH_ERROR', payload: e.response}))
};
