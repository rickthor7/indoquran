import { Action, StateModal } from '@/interfaces'
import ActionType from '../actionType'

const initState: StateModal = {
  isOpen: false,
  type: null,
  message: null,
}

const reducerModal = (
  state: StateModal = initState,
  action: Action
): StateModal => {
  switch (action.type) {
    case ActionType.LOADING_OPEN:
      return {
        isOpen: true,
        type: 'loading',
        message: action.payload.message,
      }
    case ActionType.UNSET_MODAL:
      return {
        ...state,
        isOpen: false,
        type: null,
      }
    default:
      return state
  }
}

export default reducerModal
