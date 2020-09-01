import {combineReducers} from 'redux'
import CourseReducer from '../Reducers/CourseReducer'
import UserReducer from './UserReducer'

export const rootReducers = combineReducers({
    //Noi chua reducers
    CourseReducer : CourseReducer,
    UserReducer : UserReducer
})