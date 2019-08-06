import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk, emptyCartThunk, removeItemThunk} from './../store/cart'
import {getProductsThunk} from '../store/productList'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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
      <Card
        style={{
          width: 2000,
          height: 5000,
          background: '#B2919C',
          align: 'center'
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {cart.length === 0 ? (
              'Cart is empty'
            ) : (
              <div>
                <div>You have {cart.length} items in cart. </div>

                {cart.map(item => (
                  <div
                    style={{
                      width: 400,
                      height: 600,
                      border: 'black solid',
                      margin: 50
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      style={{width: 400, height: 400}}
                    />
                    <p>{item.name}</p>
                    <p>
                      <button onClick={this.removeItem(item.id)} align="right">
                        Remove Item
                      </button>
                    </p>
                    <p>
                      {item.orderItem && item.orderItem.quantity} x ${
                        item.price
                      }
                    </p>
                  </div>
                ))}

                <b>
                  Total: ${cart.reduce(
                    (a, b) =>
                      a + b.price * (b.orderItem && b.orderItem.quantity),
                    0
                  )}
                  {'              '}
                </b>
                <button
                  type="submit"
                  onClick={this.checkout}
                  style={{color: '#355451'}}
                >
                  CHECKOUT!
                </button>
              </div>
            )}
          </Typography>
        </CardContent>
      </Card>
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
