import { CREATE_TASK_LIST, ADD_TASK_TEXT, DELETE_TASK_TEXT, DELETE_TASK, EDIT_TASK, ADD_TASK } from "../../constants";
import { createTask } from '../../helpers'





interface tasks {
	type: string;
	payload: any;
}

export default (state: Array<{ id: number, text: Array<{ id: number }> }> = [], { type, payload }: tasks) => {

	switch (type) {

		case CREATE_TASK_LIST:
			return [...state, ...payload]


		case ADD_TASK:
			return state.map(item => item.id === payload.id ?
				createTask(item, item.text.concat([payload.text])) : item
			)


		case DELETE_TASK:
			console.log(payload);

			const deleteText = (text: Array<{ id: number }>) => text.filter(t => t.id !== payload.id
			)

			return state.map(item =>
				item.id === payload.idProject ?
					createTask(item, deleteText(item.text))
					: item
			)


		case EDIT_TASK:
			const EditedText = (text: Array<{ id: number }>) => text.map(t =>
				t.id === payload.id ? { id: t.id, text: payload.text } : t
			)

			return state.map(item =>
				item.id === payload.idProject ? createTask(item, EditedText(item.text)) : item
			)





		case DELETE_TASK_TEXT:
			return state.filter(tab => !tab.isOpen).map((item, index) => index === 0 ? createTask(item) :
				createTask(item))


		case ADD_TASK_TEXT:
			return state.map(item =>
				item.isOpen ? createTask(item) : item
			).concat(payload)





		default: return state
	}
}
