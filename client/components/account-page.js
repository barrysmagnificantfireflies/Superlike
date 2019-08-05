import {connect} from 'react-redux'
import {me} from './../store/user'
import React from 'react'
import EditAccountPage from './editAccountPage'

//material UI imports
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class AccountPage extends React.Component {
  componentDidMount() {
    this.props.getAll()
  }
  render() {
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              height={140}
              image={this.props.user.imageUrl}
              title="Profile Picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hello {this.props.user.email}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                If you would like to edit your profile information, please do so
                below:
              </Typography>
            </CardContent>
            <EditAccountPage
              email={this.props.user.email}
              imageUrl={this.props.user.imageUrl}
              id={this.props.user.id}
            />
          </CardActionArea>
        </Card>
      </div>
    )
  }
}
const mapStateToProps = function(state) {
  return {
    user: state.user
  }
}
const mapDispatchToProps = function() {
  return dispatch => {
    return {
      getAll: () => dispatch(me())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
