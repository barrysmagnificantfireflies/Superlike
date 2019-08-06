import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, imageUrl} = props
  return (
    <div align="center">
      <h1> Welcome to</h1>
      <img src="https://i.imgur.com/6NxxnDC.png" />
      <p style={{margin: 100, font: 24}}>
        Our goal is to make sure you find the person of your dreams without ever
        having to show who you really are! Super Like takes the hardest part of
        online dating - creating that eye catching profile - and delivers a
        custom and tailored product that fit your catfishing needs.
      </p>
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
