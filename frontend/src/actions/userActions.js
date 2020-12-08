import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import * as actionType from './actionTypes.js'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    dispatch({
      type: actionType.USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: actionType.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('cartItems')
  localStorage.removeItem('shippingAddress')
  localStorage.removeItem('paymentMethod')
  dispatch({ type: actionType.USER_LOGOUT })
  dispatch({ type: actionType.USER_DETAILS_RESET })
  dispatch({ type: actionType.ORDER_LIST_MY_RESET })
  document.location.href = '/login'
}

export const userChangeSortOption = (selectedKey) => async (dispatch) => {
  dispatch({
    type: actionType.USER_SORT_CHOICE,
    payload: selectedKey,
  })
}

// export const logout = () => (dispatch) => {
//   localStorage.removeItem('userInfo')
//   localStorage.removeItem('cartItems')
//   localStorage.removeItem('shippingAddress')
//   localStorage.removeItem('paymentMethod')
//   dispatch({ type: USER_LOGOUT })
//   dispatch({ type: USER_DETAILS_RESET })
//   dispatch({ type: ORDER_LIST_MY_RESET })
//   dispatch({ type: USER_LIST_RESET })
//   document.location.href = '/login'
// }

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch({
      type: actionType.USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: actionType.USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: actionType.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionType.USER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(
      `/api/users/${id}`,

      config
    )

    dispatch({
      type: actionType.USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionType.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionType.USER_UPDATE_PROFILE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/profile`, user, config)

    dispatch({
      type: actionType.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionType.USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionType.USER_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    
    const { data } = await axios.get(`/api/users`, config)

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    dispatch({
      type: actionType.USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionType.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
