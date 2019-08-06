import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk, emptyCartThunk, removeItemThunk} from './../store/cart'
import {getProductsThunk} from '../store/productList'
import Stripe from './stripe'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.checkout = this.checkout.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }
  componentDidMount() {
    this.props.getCart(this.props.userId)
  }
  checkout() {
    event.preventDefault()
    this.props.emptyCart(this.props.userId)
    this.props.getCart(this.props.userId)

    //alert('Checked Out')
  }

  removeItem(itemId) {
    this.props.removeItem(this.props.userId, itemId)
  }

  render() {
    const cart = this.props.cart
    return (
      <div>
        <h1>Hello</h1>
        {cart.length === 0 ? (
          'Cart is empty'
        ) : (
          <div>
            <div>You have {cart.length} items in cart. </div>
            <ul>
              {cart.map(item => (
                <div>
                  <li key={item.id}>
                    <b>{item.name}</b>
                    <button onClick={() => this.removeItem(item.id)}>
                      Remove Item!
                    </button>
                  </li>
                  <p>
                    {item.orderItem && item.orderItem.quantity} X {item.price}
                  </p>
                </div>
              ))}
            </ul>
            <b>
              Total: ${cart.reduce(
                (a, b) => a + b.price * (b.orderItem && b.orderItem.quantity),
                0
              )}
              <Stripe
                total={cart.reduce(
                  (a, b) => a + b.price * (b.orderItem && b.orderItem.quantity),
                  0
                )}
              >
                {' '}
              </Stripe>
            </b>
            <button type="submit" onClick={this.checkout}>
              CHECKOUT! : smiley face
            </button>
            <div />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    userId: state.user.id
  }
}

const mapDispatchToProps = () => {
  return dispatch => {
    return {
      getCart: id => dispatch(getCartThunk(id)),
      emptyCart: id => dispatch(emptyCartThunk(id)),
      removeItem: (userId, itemId) => dispatch(removeItemThunk(userId, itemId)),
      getProducts: () => dispatch(getProductsThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
