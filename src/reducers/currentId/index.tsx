
import { CURRENT_ID } from "../../constants";

interface types {
	type: string;
	payload: number;
}

export default (state: Object = {}, { type, payload }: types) => {

	switch (type) {

		case CURRENT_ID:
			return payload


		default: return state
	}
}