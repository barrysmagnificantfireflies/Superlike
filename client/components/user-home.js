import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  return (
    <div>
      <h3>Welcome {email ? email : 'Friend!!!'}</h3>
      <p>We are super like. We are great. We make profiles. We are fun.</p>
      <img src="https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2016/06/14672531046563.jpg" />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
