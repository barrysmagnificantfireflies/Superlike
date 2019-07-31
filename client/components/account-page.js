import {connect} from 'react-redux'
import {me} from './../store/user'
import React from 'react'
class AccountPage extends React.Component {
  componentDidMount() {
    this.props.getAll()
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.user.email}</h1>
        <img src={this.props.user.imageUrl} />
        <h2>Status : {this.props.user.isAdmin}</h2>
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
