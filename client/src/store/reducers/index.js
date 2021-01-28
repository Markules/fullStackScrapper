import { combineReducers } from 'redux';
import previewReducer from './preview';

export default combineReducers ({
 preview: previewReducer,
});