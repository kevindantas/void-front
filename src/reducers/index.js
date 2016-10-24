import authReducer from './authReducer';
import membersReducer from './membersReducer';
import galleryReducer from './galleryReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	auth: authReducer,
	members: membersReducer,
	photos: galleryReducer,
	routing: routerReducer
});