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
        {cart && cart.length === 0 ? (
          'Cart is empty'
        ) : (
          <div>
            <div>You have {cart && cart.length} items in cart. </div>
            <ul>
              {console.log(cart)}
              {cart &&
                cart.map(item => (
                  <li key={item.id}>
                    <button>X</button>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    userId: state.user.userId
  }
}

const mapDispatchToProps = () => {
  return dispatch => {
    return {
      getCart: () => dispatch(getCartThunk(1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
