import React from 'react'
import {connect} from 'react-redux'
import {addItemThunk} from './../store/cart'
import {showProductThunk} from './../store/productList'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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
    const product = this.props.product
    return (
      // <div>
      //   <h1>{product && product.name}</h1>
      //   <h3>{product && product.category}</h3>
      //   <img src={product && product.imageUrl} />
      //   <p> price = {product && product.price} </p>
      //   <p> {product && product.description} </p>
      //   <p>{product && product.quantity}</p>
      //   <button type="submit" onClick={this.onClick}>
      //     BUY IT NOW!
      //   </button>
      <div align="center">
        <Card>
          <CardMedia
            style={{height: 600, width: 600}}
            image={product && product.imageUrl}
            title={product && product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h1">
              {product && product.name}
            </Typography>
            <Typography gutterBottom component="p">
              {product && product.description}
            </Typography>
            <Typography gutterBottom component="p" align="left">
              Price: $ {product && product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <button type="submit" onClick={this.onClick}>
              BUY IT NOW!
            </button>
          </CardActions>
        </Card>
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
