import {combineReducers} from 'redux'
import CourseReducer from '../Reducers/CourseReducer'
import UserReducer from './UserReducer'

export const rootReducers = combineReducers({
    CourseReducer : CourseReducer,
    UserReducer : UserReducer
})