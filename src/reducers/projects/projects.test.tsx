import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, TOGGLE_PROJECT } from "../../constants";
import projects from '.'


describe('projects', () => {

	const item1 = { id: 1, isOpen: true, name: 'a' };
	const item2 = { id: 2, isOpen: false, name: 'b' }

	const state = [item1, item2]
	const item3 = { id: 3, isOpen: true, name: 'a' }

	it('add title item', () => {
		expect(
			projects(state, {
				type: ADD_PROJECT,
				payload: item3
			})
		).toEqual([{ id: 1, isOpen: false, name: 'a' }, item2, item3])
	})


	it('delete title item', () => {
		expect(
			projects(state, {
				type: DELETE_PROJECT,
				payload: { id: 1 }
			})
		).toEqual([{ id: 2, isOpen: true, name: 'b' }])
	})

	it('edit title item', () => {
		expect(
			projects(state, {
				type: EDIT_PROJECT,
				payload: { id: 1, isOpen: true, name: 'c' }
			})
		).toEqual([{ id: 1, isOpen: true, name: 'c' }, item2])
	})

	it('toggle project', () => {
		expect(
			projects(state, {
				type: TOGGLE_PROJECT,
				payload: { id: 2 }
			})
		).toEqual([
			{ id: 1, isOpen: false, name: 'a' },
			{ id: 2, isOpen: true, name: 'b' },
		])
	})

})