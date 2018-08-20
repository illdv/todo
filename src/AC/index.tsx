import {
    DELETE_TASK, EDIT_TASK, ADD_TASK, TOGGLE_PROJECT, CURRENT_ID, DELETE_TAB, ADD_TAB, FETCH_PROJECTS, EDIT_PROJECT
} from "../constants";
import { randomId } from '../helpers'

const addId = (item: Array<string> | string) =>
    ({ id: randomId(), text: item })


export const fetchTitlelist = () => ({
    type: FETCH_PROJECTS
})


export const editProjectName = (name: string, id: number) => ({
    type: EDIT_PROJECT,
    payload: { id, name }
})


export const editProjectText = (text: string, id: number, idProject: number) => ({
    type: EDIT_TASK,
    payload: { id, text, idProject }
})


export const addedProjectTask = (id: number, item: Array<string>) => ({
    type: ADD_TASK,
    payload: { id, text: addId(item) }
})


export const deleteTask = (id: number, idProject: number) => {

    return {
        type: DELETE_TASK,
        payload: { id, idProject }
    }
}


export const toggleText = (idProject: number) => ({
    type: TOGGLE_PROJECT,
    payload: { id: idProject }
})


export const changeCurrentId = (id: number, mark?: string) => ({
    type: CURRENT_ID,
    payload: mark ? { [mark]: id } : {}
})




export const deleteTab = (id: number) => ({
    type: DELETE_TAB,
    payload: id
})


export const addTab = (name: string) => ({
    type: ADD_TAB,
    payload: name
})







