import tasks from '.'

import { ADD_TASK_TEXT, DELETE_TASK_TEXT, DELETE_TASK, EDIT_TASK, ADD_TASK, TOGGLE_TASK } from "../../constants";



describe('tasks', () => {


	const item1 = {
		id: 1,
		isOpen: false,
		text: []
	}

	const textItem1 = { id: 11, text: 'a' }
	const item2 = {
		id: 2,
		isOpen: true,
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
				isOpen: true,
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
				isOpen: true,
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
				isOpen: true,
				text: [{ id: 11, text: 'zzz', }]
			}
		])
	})

	it('delete all tasks in project', () => {
		expect(
			tasks(state, {
				type: DELETE_TASK_TEXT,
				payload: null
			})
		).toEqual([
			{
				id: 1,
				isOpen: true,
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
					isOpen: true,
					text: []
				}
			})
		).toEqual([
			item1,
			{
				id: 2,
				isOpen: false,
				text: [textItem1]
			},
			{
				id: 3,
				isOpen: true,
				text: []
			}
		])
	})


	it('toggle task', () => {
		expect(
			tasks(state, {
				type: TOGGLE_TASK,
				payload: 1
			})
		).toEqual([
			{
				id: 1,
				isOpen: true,
				text: []
			},
			{
				id: 2,
				isOpen: false,
				text: [textItem1]
			}
		])
	})


})