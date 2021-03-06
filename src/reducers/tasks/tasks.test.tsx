import tasks from '.'

import { ADD_TASK_TEXT, DELETE_TASK_TEXT, DELETE_TASK, EDIT_TASK, ADD_TASK } from "../../constants";



describe('tasks', () => {


	const item1 = {
		id: 1,
		text: []
	}

	const textItem1 = { id: 11, text: 'a' }
	const item2 = {
		id: 2,
		text: [textItem1]
	}

	const state = [
		item1,
		item2
	]

	const textItem2 = { id: 22, text: 'b' }

	const payload = {
		id: 2,
		text: textItem2
	}



	it('add task', () => {
		expect(
			tasks(state, {
				type: ADD_TASK,
				payload
			})
		).toEqual([
			item1,
			{
				id: 2,
				text: [textItem1, textItem2]
			}
		])
	})

	it('delete task', () => {
		expect(
			tasks(state, {
				type: DELETE_TASK,
				payload: { id: 11, idProject: 2 }
			})
		).toEqual([
			item1,
			{
				id: 2,
				text: []
			}
		])
	})


	it('edit task', () => {
		expect(
			tasks(state, {
				type: EDIT_TASK,
				payload: { id: 11, text: 'zzz', idProject: 2 }
			})
		).toEqual([
			item1,
			{
				id: 2,
				text: [{ id: 11, text: 'zzz', }]
			}
		])
	})

	it('delete all tasks in project', () => {
		expect(
			tasks(state, {
				type: DELETE_TASK_TEXT,
				payload: { id: 2 }
			})
		).toEqual([
			{
				id: 1,
				text: []
			}
		])
	})

	it('add object task in project', () => {
		expect(
			tasks(state, {
				type: ADD_TASK_TEXT,
				payload: {
					id: 3,
					text: []
				}
			})
		).toEqual([
			item1,
			{
				id: 2,
				text: [textItem1]
			},
			{
				id: 3,
				text: []
			}
		])
	})

})