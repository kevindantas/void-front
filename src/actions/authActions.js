import Auth from '../api/Auth';

import * as types from '../constants/ActionTypes';

export const makeLogin = user => ({
	type: types.FETCH_AUTH,
	user: user
});

/*export const login = form => dispatch => (form) => {
	console.log(form);
	Auth.login(response => {
		console.log(response);
		dispatch(login())
	})
};
*/


/*
export const login = (form) => dispatch => 
	fetch('http://awefawef.com')
		.then(response => dispatch({ type: 'FETCH_AUTH_DONE', payload: response }))
    .catch(e => dispatch({ type: 'FETCH_AUTH_ERROR', payload: e }))
*/

export function login(form) {
	return fetch('http://fwaefawe.com/lista')
					.then(response => ({type: 'FETCH_AUTH_DONE', payload: response}))
					.catch(e => ({type: 'FETCH_AUTH_ERROR', payload: e}))
}

/*
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}*/
/*
export function login (form) {
  /*dispatch => fetch('http://fawefawe.com')
		.then(response => dispatch({type: 'FETCH_AUTH_DONE', payload: response}))
		.catch(e => dispatch({type: 'FETCH_AUTH_ERROR', payload: e}))*
		console.log(12312312312312)
	return function (dispatch) {
		console.log(this)
		return fetch('http://fawefawe.com')
			.then(response => dispatch({type: 'FETCH_AUTH_DONE', payload: response}))
			.catch(e => dispatch({type: 'FETCH_AUTH_ERROR', payload: e}))
	}
}
*/



/**
 * Equivalent ES5
 *
 * var login = function() {
 * 	return function dispatch() {
 * 		Auth.login(function (response) {
 * 			dispatch(login())
 * 		})
 * 	}
 * }
 *
 */
