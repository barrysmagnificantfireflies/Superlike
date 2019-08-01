import React from 'react'
import {Link} from 'react-router-dom'

export const Product = props => {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
    </div>
  )
}
