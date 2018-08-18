import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from "../../constants";
import projects from '.'


describe('projects', () => {

	const state = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
	const item = [{ id: 3, name: 'c' }]

	it('add title item', () => {
		expect(
			projects(state, {
				type: ADD_PROJECT,
				payload: item
			})
		).toEqual([...state, ...item])
	})


	it('delete title item', () => {
		expect(
			projects(state, {
				type: DELETE_PROJECT,
				payload: 2
			})
		).toEqual([{ id: 1, name: 'a' }])
	})

	it('edit title item', () => {
		expect(
			projects(state, {
				type: EDIT_PROJECT,
				payload: { id: 2, name: 'c' }
			})
		).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'c' }])
	})

	// it('toggle project', () => {
	// 	expect(
	// 		projects(state, {
	// 			type: TOGGLE_PROJECT,
	// 			payload: 1
	// 		})
	// 	).toEqual([
	// 		{
	// 			id: 1,
	// 			isOpen: true,
	// 			text: []
	// 		},
	// 		{
	// 			// id: 2,
	// 			// isOpen: false,
	// 			// text: [textItem1]
	// 		}
	// 	])
	// })

})