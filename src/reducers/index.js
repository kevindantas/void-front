import authReducer from './authReducer';
import membersReducer from './membersReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	authReducer,
	membersReducer,
	routing: routerReducer
});