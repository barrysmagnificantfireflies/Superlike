import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export const Product = props => {
  return (
    <div>
      <Card
        style={{
          width: 400,
          margin: 50,
          background: '#BAC1B8',
          fontFamily: 'Helvetica Neue'
        }}
      >
        <CardMedia
          style={{height: 400, width: 400, align: 'center'}}
          image={props.product.imageUrl}
          title={props.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.product.name}
          </Typography>
          <Typography gutterBottom variant="headline" component="p">
            Price: $ {props.product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/products/${props.product.id}`}>
            <Button
              size="small"
              color="primary"
              href={`/products${props.product.id}`}
              target="_blank"
            >
              More Product Information
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}
