import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from './../store/cart'

class Cart extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    const cart = this.props.cart
    return (
      <div>
        <h1>Hello</h1>
        {cart.length === 0 ? (
          'Cart is empty'
        ) : (
          <div>You have {cart.length} items in cart. </div>
        )}
        <ul>
          {cart.length &&
            cart.map(item => (
              <li key={item.id}>
                <button>X</button>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = () => {
  return dispatch => {
    return {
      getCart: () => dispatch(getCartThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
