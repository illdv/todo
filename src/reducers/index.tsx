import { combineReducers } from 'redux'
import projects from './projects/'
import tasks from './tasks/'
import currentId from './currentId/'


export default combineReducers({
    projects, tasks, currentId
})