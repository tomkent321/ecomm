import axios from 'axios'
import * as actionType from './actionTypes.js'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.PRODUCT_LIST_REQUEST })
    const { data } = await axios.get('/api/products')

    dispatch({ type: actionType.PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actionType.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
