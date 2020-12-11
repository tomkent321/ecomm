import * as actionType from '../actions/actionTypes.js'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case actionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case actionType.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case actionType.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case actionType.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case actionType.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.PRODUCT_DELETE_REQUEST:
      return { loading: true }
    case actionType.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case actionType.PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case actionType.PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case actionType.PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case actionType.PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case actionType.PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case actionType.PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case actionType.PRODUCT_UPDATE_RESET:
      return { product: {} }
    default:
      return state
  }
}
