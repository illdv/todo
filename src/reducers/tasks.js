import { CREATE_TASK_LIST, ADD_TASK_TEXT, DELETE_TASK_TEXT, DELETE_TASK, EDIT_TASK, ADD_TASK, TOGGLE_TASK } from "../constants";


const initialState = {}

const createObj = (item, bool, changeText) => {
	return { id: item.id, isOpen: bool, text: changeText ? changeText : item.text }
}

export default (state = initialState, { type, payload }) => {

	switch (type) {


		case CREATE_TASK_LIST:


			return [...state, ...payload]


		case ADD_TASK_TEXT:
			return state.map(item =>
				item.isOpen ? createObj(item, false) : item
			).concat(payload)


		case ADD_TASK:
			return state.map(item => item.id === payload.id ?
				createObj(item, true, item.text.concat([payload.text])) : item
			)


		case EDIT_TASK:
			const EditedText = (text) => text.map(t =>
				t.id === payload.id ? { id: t.id, text: payload.text } : t
			)

			return state.map(item =>
				item.id === payload.idProject ? createObj(item, true, EditedText(item.text)) : item
			)


		case DELETE_TASK:
			const deleteText = text => text.filter(t => t.id !== payload.id
			)

			return state.map(item =>
				item.id === payload.idProject ?
					createObj(item, true, deleteText(item.text))
					: item
			)


		case DELETE_TASK_TEXT:

			return state.filter(tab => !tab.isOpen).map((item, index) => index === 0 ? createObj(item, true) :
				createObj(item, false))


		case TOGGLE_TASK:
			return state.map(item =>
				payload === item.id ?
					createObj(item, true) :
					createObj(item, false)
			)


		default: return state
	}
}
