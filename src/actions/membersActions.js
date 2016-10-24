import axios from 'axios';
import * as ActionTypes from '../constants/ActionTypes'
import * as Endpoints from '../constants/Endpoints'

export const receiveMembers = members => ({
	type: ActionTypes.FETCH_MEMBERS,
	members: members
})

export const fetchMembers = form => dispatch => (
	axios.get(`${Endpoints.API_URL}/team`)
		.then(response => dispatch({
			type: 'FETCH_MEMBERS',
			payload: response.data
		}))
		.catch(e => dispatch({
			type: 'FETCH_MEMBERS_FAILED',
			payload: e
		}))
	);

let config = {
  headers: {
    Authorization: 'Bearer '+localStorage.getItem('void-token')
  }
}

export const createMember = data => dispatch => (
  axios.post(`${Endpoints.API_URL}/team`, data, config)
    .then(response => dispatch({
      type: 'CREATE_MEMBERS',
      payload: response.data
    }))
    .catch(e => dispatch({
      type: 'CREATE_MEMBERS_FAILED',
      payload: e
    }))
)



export const viewMember = id => dispatch => (
  axios.get(`${Endpoints.API_URL}/team/${id}`, config)
    .then(response => dispatch({
      type: 'VIEW_MEMBER',
      payload: response.data
    }))
    .catch(e => dispatch({
      type: 'VIEW_MEMBER_FAILED',
      payload: e
    }))
)

export const editMember = data => dispatch => (
  axios.put(`${Endpoints.API_URL}/team/${data.id}`, data, config)
    .then(response => dispatch({
      type: 'EDIT_MEMBER',
      payload: response.data
    }))
    .catch(e => dispatch({
      type: 'EDIT_MEMBER_FAILED',
      payload: e
    }))
)

export const deleteMember = id => dispatch => (
  axios.delete(`${Endpoints.API_URL}/team/${id}`, config)
    .then(response => dispatch({
      type: 'DELETE_MEMBER',
      payload: id
    }))
    .catch(e => dispatch({
      type: 'DELETE_MEMBER_FAILED',
      payload: e
    }))
)


