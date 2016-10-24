import axios from 'axios';
import * as Endpoints from '../constants/Endpoints'


export const fetchPhotos = form => dispatch => (
	axios.get(`${Endpoints.API_URL}/gallery`)
		.then(response => dispatch({
			type: 'FETCH_PHOTOS',
			payload: response.data
		}))
		.catch(e => dispatch({
			type: 'FETCH_PHOTOS_FAILED',
			payload: e
		}))
	);

let config = {
  headers: {
    Authorization: 'Bearer '+localStorage.getItem('void-token')
  }
}

export const createPhoto = data => dispatch => (
  axios.post(`${Endpoints.API_URL}/gallery`, data, config)
    .then(response => dispatch({
      type: 'CREATE_PHOTOS',
      payload: response.data
    }))
    .catch(e => dispatch({
      type: 'CREATE_PHOTOS_FAILED',
      payload: e
    }))
)



export const viewPhoto = id => dispatch => (
  axios.get(`${Endpoints.API_URL}/gallery/${id}`, config)
    .then(response => dispatch({
      type: 'VIEW_PHOTO',
      payload: response.data
    }))
    .catch(e => dispatch({
      type: 'VIEW_PHOTO_FAILED',
      payload: e
    }))
)

export const editPhoto = data => dispatch => (
  axios.put(`${Endpoints.API_URL}/gallery/${data.id}`, data, config)
    .then(response => dispatch({
      type: 'EDIT_PHOTO',
      payload: response.data
    }))
    .catch(e => dispatch({
      type: 'EDIT_PHOTO_FAILED',
      payload: e
    }))
)

export const deletePhoto = id => dispatch => (
  axios.delete(`${Endpoints.API_URL}/gallery/${id}`, config)
    .then(response => dispatch({
      type: 'DELETE_PHOTO',
      payload: id
    }))
    .catch(e => dispatch({
      type: 'DELETE_PHOTO_FAILED',
      payload: e
    }))
)


