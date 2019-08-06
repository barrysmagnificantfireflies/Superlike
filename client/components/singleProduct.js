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
import {makeStyles} from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
// import Toastify from 'toastify-js'
// import Firework from './fireworks'
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
    // Toastify({
    //   text: 'Item Added to Cart',
    //   duration: 3000,
    //   backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
    //   className: 'info',
    //   gravity: "top",
    //   position: 'left'
    // }).showToast()
    console.log('singleproduct component', this.props.product)
    await this.props.addItem(
      this.props.userId,
      this.props.match.params.id,
      this.props.product.price
    )
  }

  render() {
    const product = this.props.product
    return (
      <div align="center">
        <Card>
          <CardActionArea>
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
              <Typography gutterBottom component="p" align="center">
                Price: $ {product && product.price}
              </Typography>
              <Button
                variant="contained"
                onClick={this.onClick}
                color="primary"
              >
                Primary
              </Button>
            </CardContent>
          </CardActionArea>
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
