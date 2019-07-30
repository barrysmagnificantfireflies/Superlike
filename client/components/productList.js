import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getProductsThunk} from '../store/productList'
import {Product} from './components/product'

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <h1>List of Products</h1>
        {this.props.products.map(product => {
          return <Product key={product.id} product={product} />
        })}
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

export const ConnectedProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
