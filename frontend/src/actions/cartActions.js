import axios from 'axios'
import * as actionType from './actionTypes'


//getState gets the entire state tree
export const addToCart = (id, qty) => async (dispatch, getState) => {

  const {data} = await axios.get(`/api/products/${id}`)
  
  dispatch({
    type: actionType.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  })
//get state returns js object, must be stringified to use it in local storage, will use JSON.parse to get info out of local storage and back into js

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)
} 