import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getProductsThunk} from '../store/productList'
import {Product} from './product'
import Grid from '@material-ui/core/Grid'

class ProductList extends Component {
  componentDidMount() {
    console.log('here')
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <h1 align="center">List of Products</h1>
        <Grid container spacing={24} style={{padding: 24}}>
          {console.log(this.props.products)}
          {Array.isArray(this.props.products) &&
            this.props.products.map(product => (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <Product key={product.id} product={product} />
              </Grid>
            ))}
        </Grid>
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
