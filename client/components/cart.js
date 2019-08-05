import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk, emptyCartThunk} from './../store/cart'

class Cart extends Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }
  componentDidMount() {
    this.props.getCart(this.props.userId)
  }
  onClick() {
    event.preventDefault()
    this.props.emptyCart(this.props.userId)
    this.props.getCart(this.props.userId)
    //alert('Checked Out')
    this.forceUpdate()
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
                    <button>X</button>
                  </li>
                  <p>
                    {item.orderItem && item.orderItem.quantity}X{item.price}
                  </p>
                </div>
              ))}
            </ul>
            <b>
              Total: ${cart.reduce(
                (a, b) => a + b.price * (b.orderItem && b.orderItem.quantity),
                0
              )}
            </b>
            <button type="submit" onClick={this.onClick}>
              CHECKOUT! : smiley face
            </button>
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
      emptyCart: id => dispatch(emptyCartThunk(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
