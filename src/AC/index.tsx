import {
    FETCH_TITLE_LIST, EDIT_TITLE_ITEM,
    DELETE_TASK, EDIT_TASK, ADD_TASK, TOGGLE_TASK, CURRENT_ID, DELETE_TAB, ADD_TAB,
} from "../constants";




const addId = (item: Array<string>, title: string) =>
    ({ id: Date.now() + Math.random(), [title ? 'name' : 'text']: item })





export const fetchTitlelist = () => ({
    type: FETCH_TITLE_LIST
})


export const editProjectName = (text: string, id: number) => ({
    type: EDIT_TITLE_ITEM,
    payload: { text, id }
})

export const editProjectText = (text: string, id: number, idProject: number) => ({
    type: EDIT_TASK,
    payload: { id, text, idProject }
})


export const addedProjectTask = (id: number, item: Array<string>) => ({
    type: ADD_TASK,
    payload: { id, text: addId(item, 'title') }
})


export const deletedTask = (id: number, idProject: number) => ({
    type: DELETE_TASK,
    payload: { id, idProject }
})


export const toggleText = (ProjectId: number) => ({
    type: TOGGLE_TASK,
    payload: ProjectId
})


export const currentId = (id = null, mark: string) => ({
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