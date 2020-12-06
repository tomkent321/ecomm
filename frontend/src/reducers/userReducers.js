import * as actionType from '../actions/actionTypes'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_LOGIN_REQUEST:
      return { loading: true }
    case actionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case actionType.USER_LOGOUT:
      return { cart: {} }
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_REGISTER_REQUEST:
      return { loading: true }
    case actionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionType.USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case actionType.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case actionType.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userChangeSortOption = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_SORT_CHOICE:
      return { userSort: action.payload }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case actionType.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case actionType.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    case actionType.USER_UPDATE_PROFILE_RESET:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
