import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from './../store/cart'

class Cart extends Component {
  componentDidMount() {
    this.props.getCart(this.props.userId)
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
            {console.log('this is the cart:', cart)}
            <ul>
              {cart.map(item => (
                <div>
                  <li key={item.id}>
                    <b>{item.name}</b>
                    <button>X</button>
                  </li>
                  <p>
                    {item.quantity} x {item.price}
                  </p>
                </div>
              ))}
            </ul>
            <b>Total: ${cart.reduce((a, b) => a + b.price * b.quantity, 0)}</b>
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
      getCart: id => dispatch(getCartThunk(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
