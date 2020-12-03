import * as actionType from '../actions/actionTypes.js'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.ORDER_CREATE_REQUEST:
      return { loading: true }
    case actionType.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload }
    case actionType.ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
