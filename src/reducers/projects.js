import { FETCH_TITLE_LIST, SUCCESS, ADD_TITLE_ITEM, DELETE_TITLE_ITEM, EDIT_TITLE_ITEM } from "../constants";


const initialState = {}

export default (state = initialState, { type, payload }) => {

  switch (type) {


    case FETCH_TITLE_LIST + SUCCESS:


      return [...state, ...payload]


    case ADD_TITLE_ITEM:
      return state.concat(payload)


    case DELETE_TITLE_ITEM:
      return state.filter(title => title.id !== payload)


    case EDIT_TITLE_ITEM:
      return state.map(item =>
        item.id === payload.id ? { id: item.id, name: payload.text, item: item.text } : item
      )


    default: return state
  }
}