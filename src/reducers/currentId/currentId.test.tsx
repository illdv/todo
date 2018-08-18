import currentId from '.'
import { CURRENT_ID } from '../../constants'

describe('current id', () => {


	it('should handle currentId', () => {
		expect(
			currentId({}, {
				type: CURRENT_ID,
				payload: 1
			})
		).toEqual(1)
	})
})