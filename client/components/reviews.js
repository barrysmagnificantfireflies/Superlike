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
          Hear from satisifed customers!
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
              image="http://www.eurogeosurveys.org/wp-content/uploads/2014/02/default_profile_pic.jpg"
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="h2"
              >
                - Molly
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
              image="http://www.eurogeosurveys.org/wp-content/uploads/2014/02/default_profile_pic.jpg"
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="h2"
              >
                - Sagar
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="headline"
                component="p"
              >
                " I'm great but I could be better.<br />
                And I am with the help of Super Like! "
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              style={{height: 300, width: 300}}
              image="https://files.slack.com/files-pri/T024FPYBQ-FL7LUU17B/image_from_ios.jpg"
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
              image="http://www.eurogeosurveys.org/wp-content/uploads/2014/02/default_profile_pic.jpg"
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
