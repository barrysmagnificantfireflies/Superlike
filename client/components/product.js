import React from 'react'
import {Link} from 'react-router-dom'

export const Product = props => {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>
        <h1>{props.product.name} </h1>
        <img src={props.product.imageUrl} />
        <h3>Price: {props.product.price} </h3>
        <h3>Quantity: {props.product.quantity} </h3>
      </Link>
    </div>
  )
}
