import { changeCurrentId } from '.'
import { CURRENT_ID } from "../constants";



describe('current id', () => {
  it('current id ', () => {
    const expectedAction = {
      type: CURRENT_ID,
      payload: {}
    }
    expect(changeCurrentId(1)).toEqual(expectedAction)
  })
  it('current id with mark ', () => {

    const expectedAction = {
      type: CURRENT_ID,
      payload: { actual: 1 }
    }
    expect(changeCurrentId(1, 'actual')).toEqual(expectedAction)
  })
})