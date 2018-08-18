import { FETCH_PROJECTS, SUCCESS, ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, TOGGLE_PROJECT } from "../../constants";
import { createProject } from '../../helpers'
interface types {
  type: string;
  payload: any
}


export default (state: Array<any> = [], { type, payload }: types) => {

  switch (type) {


    case FETCH_PROJECTS + SUCCESS:


      return [...state, ...payload]


    case ADD_PROJECT:

      return state.map(item => createProject(item, false)
      ).concat(payload)


    case DELETE_PROJECT:
      return state.filter((title: { id: number }) => title.id !== payload)


    case EDIT_PROJECT:
      return state.map((item: { id: number }) =>
        item.id === payload.id ? { id: item.id, name: payload.name } : item
      )


    case TOGGLE_PROJECT:
      return state.map(item =>
        item.id === payload ?
          createProject(item, true) :
          createProject(item, false)
      )

    default: return state
  }
}