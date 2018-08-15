
import { CURRENT_ID } from "../constants";


const initialState = {}

export default (state = initialState, { type, payload }) => {

	switch (type) {

		case CURRENT_ID:
			return payload


		default: return state
	}
}