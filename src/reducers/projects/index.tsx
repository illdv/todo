import { FETCH_PROJECTS, SUCCESS, ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, TOGGLE_PROJECT } from "../../constants";
import { createProject } from '../../helpers'
import { Iproject, Iaction } from '../../types'




export default (state: Array<Iproject> = [], { type, payload }: Iaction) => {

  switch (type) {


    case FETCH_PROJECTS + SUCCESS:
      return state.concat(payload)


    case ADD_PROJECT:
      return state.map(item => createProject(item, false)
      ).concat(payload)


    case DELETE_PROJECT:
      return state.filter(title => !title.isOpen).map((item, index) => index === 0 ? createProject(item, true) : createProject(item, false))


    case EDIT_PROJECT:
      return state.map(item =>
        item.id === payload.id ? createProject(payload, true) : item
      )


    case TOGGLE_PROJECT:
      return state.map(item =>
        item.id === payload.id ?
          createProject(item, true) :
          createProject(item, false)
      )

    default: return state
  }
}