import * as actionType from '../actions/actionTypes'

export const cartReducer = (state = { cartItems: ['a', 'b', 'c'] }, action) => {
  switch (action.type) {
    case actionType.CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    case actionType.CART_REMOVE_ITEM:
      return { ...state }
    default:
      return state
  }
}
