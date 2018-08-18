import { CREATE_TASK_LIST, ADD_TASK_TEXT, DELETE_TASK_TEXT, DELETE_TASK, EDIT_TASK, ADD_TASK, TOGGLE_TASK } from "../../constants";
import { createObj } from '../../helpers'





interface tasks {
	type: string;
	payload: any;
}

export default (state: Array<{ id: number, isOpen: boolean, text: Array<{ id: number }> }> = [], { type, payload }: tasks) => {

	switch (type) {

		case CREATE_TASK_LIST:
			return [...state, ...payload]


		case ADD_TASK:
			return state.map(item => item.id === payload.id ?
				createObj(item, true, item.text.concat([payload.text])) : item
			)


		case DELETE_TASK:
			const deleteText = (text: Array<{ id: number }>) => text.filter(t => t.id !== payload.id
			)

			return state.map(item =>
				item.id === payload.idProject ?
					createObj(item, true, deleteText(item.text))
					: item
			)


		case EDIT_TASK:
			const EditedText = (text: Array<{ id: number }>) => text.map(t =>
				t.id === payload.id ? { id: t.id, text: payload.text } : t
			)

			return state.map(item =>
				item.id === payload.idProject ? createObj(item, true, EditedText(item.text)) : item
			)





		case DELETE_TASK_TEXT:
			return state.filter(tab => !tab.isOpen).map((item, index) => index === 0 ? createObj(item, true) :
				createObj(item, false))


		case ADD_TASK_TEXT:
			return state.map(item =>
				item.isOpen ? createObj(item, false) : item
			).concat(payload)


		case TOGGLE_TASK:
			return state.map(item =>
				payload === item.id ?
					createObj(item, true) :
					createObj(item, false)
			)


		default: return state
	}
}
