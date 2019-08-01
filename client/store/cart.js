import axios from 'axios'

//ACTION TYPES
const GET_CART = 'GET_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ADD_ITEM = 'ADD_ITEM'
const EMPTY_CART = 'EMPTY_CART'

//INITIAL STATE
// probs should be object
const defaultCart = []

//ACTION CREATORS
export const getCart = cart => ({type: GET_CART, cart})
export const emptyCart = () => ({type: EMPTY_CART, cart: []})
export const removeItem = id => ({type: REMOVE_ITEM, id})
export const addItem = item => ({type: ADD_ITEM, item})

//THUNK CREATORS
export const getCartThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/${id}/cart`)
    dispatch(getCart(data.items))
  } catch (error) {
    console.error(error)
  }
}
export const addItemThunk = (orderId, itemId) => async dispatch => {
  try {
    const data = await axios.put(`/api/orders`, {
      orderId: orderId,
      itemId: itemId
    })
    console.log(data)
    dispatch(addItem(data))
  } catch (error) {
    console.error(error)
  }
}
export const emptyCartThunk = id => async dispatch => {
  try {
    await axios.put('/checkout', id)
    dispatch(emptyCart())
  } catch (error) {
    console.error(error)
  }
}
//REDUCER
export const cartReducer = (cart = defaultCart, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case REMOVE_ITEM:
      for (let i = 0; i < cart.length; i++) {
        if (action.id === cart[i].id) return cart.splice(i, 1)
      }
      break
    case ADD_ITEM:
      return [...cart, action.item]
    case EMPTY_CART:
      return action.cart
    default:
      return cart
  }
}
