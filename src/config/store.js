import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allReducers from '../redux/reducers'

let store = createStore(
    allReducers,
    applyMiddleware( thunk )
)

export default store