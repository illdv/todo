import {

    DELETE_TASK, EDIT_TASK, ADD_TASK, TOGGLE_TASK, CURRENT_ID, DELETE_TAB, ADD_TAB, FETCH_PROJECTS, EDIT_PROJECT
} from "../constants";

import { addId } from '../helpers'



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


export const deletedTask = (id: number, idProject: number) => ({
    type: DELETE_TASK,
    payload: { id, idProject }
})


export const toggleText = (idProject: number) => ({
    type: TOGGLE_TASK,
    payload: idProject
})


export const currentId = (id: number, mark?: string) => ({
    type: CURRENT_ID,
    payload: mark ? { [mark]: id } : {}
})




export const deleteTab = (id: number) => ({
    type: DELETE_TAB,
    payload: id
})


export const addTab = (text: string) => ({
    type: ADD_TAB,
    payload: text
})







