import React from 'react'
import {connect} from 'react-redux'
import {addItemThunk} from './../store/cart'
import {showProductThunk} from './../store/productList'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }
  componentDidMount() {
    this.props.showProduct(this.props.match.params.id)
  }
  async onClick(event) {
    // someone else send this to  the cart
    event.preventDefault()
    console.log('these are the props', this.props)
    await this.props.addItem(
      this.props.userId,
      this.props.match.params.id,
      this.props.product.price
    )
  }
  render() {
    console.log(this.props)
    const product = this.props.product
    return (
      <div>
        <h1>{product && product.name}</h1>
        <h3>{product && product.category}</h3>
        <img src={product && product.imageUrl} />
        <p> price = {product && product.price} </p>
        <p> {product && product.description} </p>
        <p>{product && product.quantity}</p>
        <button type="submit" onClick={this.onClick}>
          BUY IT NOW!
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    product: state.products,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (orderId, itemId, price) =>
      dispatch(addItemThunk(orderId, itemId, price)),
    showProduct: id => dispatch(showProductThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
