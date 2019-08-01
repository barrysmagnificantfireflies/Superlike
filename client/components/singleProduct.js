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
  onClick(event) {
    // someone else send this to  the cart
    event.preventDefault()
    console.log(this.props)
    //hardcoded
    this.props.addItem(1, this.props.match.params.id)
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
    product: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: id => dispatch(addItemThunk(id)),
    showProduct: id => dispatch(showProductThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
