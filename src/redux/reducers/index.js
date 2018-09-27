import { combineReducers } from 'redux';
import authReducer from './reducer-auth'
import crudReducer from './reducer-crud'
import optionsReducer from './reducer-options'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * The entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
    auth: authReducer,
    crud: crudReducer,
    options: optionsReducer,
});

export default allReducers;