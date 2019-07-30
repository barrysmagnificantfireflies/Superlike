import axios from 'axios'

//ACTION TYPES
const GET_CART = 'GET_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ADD_ITEM = 'ADD_ITEM'

//INITIAL STATE
const defaultCart = []

//ACTION CREATORS
const getCart = cart => ({type: GET_CART, cart})
export const removeItem = id => ({type: REMOVE_ITEM, id})
export const addItem = item => ({type: ADD_ITEM, item})

//THUNK CREATORS
export const getCartThunk = id => async dispatch => {
  try {
    const res = await axios.get(`/api/orders/${id}`)
    dispatch(getCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

//REDUCER
export default function(cart = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case REMOVE_ITEM:
      for (let i = 0; i < cart.length; i++) {
        if (action.id === cart[i].id) return cart.splice(i, 1)
      }
    case ADD_ITEM:
      return cart.push(action.item)
    default:
      return cart
  }
}