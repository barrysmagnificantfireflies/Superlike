import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getProductsThunk} from '../store/productList'
import {Product} from './product'

class ProductList extends Component {
  componentDidMount() {
    console.log('here')
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <h1>List of Products</h1>
        {console.log(this.props.products)}
        {Array.isArray(this.props.products) &&
          this.props.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProductsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
