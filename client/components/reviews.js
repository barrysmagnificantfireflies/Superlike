import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {flexbox} from '@material-ui/system'

export default class Reviews extends Component {
  render() {
    return (
      <div>
        <h1 align="center" style={{fontSize: '72px'}}>
          Hear from satisfed customers!
        </h1>
        <Grid
          align="center"
          container
          spacing={24}
          style={{
            padding: 30,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Card>
            <CardMedia
              style={{height: 300, width: 300}}
              image="https://i.imgur.com/Y0PM0Am.jpg"
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="h2"
              >
                - John
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="p"
              >
                " Blew my expectations away! "
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              style={{height: 300, width: 300}}
              image="https://i.imgur.com/Ki4a5jf.jpg"
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="h2"
              >
                - Ben
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="p"
              >
                " Super Like changed my life!!! "
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              style={{height: 300, width: 300}}
              image="https://i.imgur.com/I1KPnLi.jpg"
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="h2"
              >
                - Danny
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="p"
              >
                " Boy were they surprised. 10/10 <br />would purchase again. "
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              style={{height: 300, width: 300}}
              image="https://i.imgur.com/baGz208.jpg"
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="h2"
              >
                - Barry
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="p"
              >
                " I'm a die hard Mets fan, but with <br /> Super Like I'm a
                Yankee fan and <br /> it's amazing. "
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              style={{height: 300, width: 300}}
              image="https://i.imgur.com/ZKwzs3u.jpg"
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="h2"
              >
                - Lonny
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="p"
              >
                " Super Like lets me live like I'm young again! "
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    )
  }
}
