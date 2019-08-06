import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  //const {email, imageUrl} = props
  return (
    <div style={{fontSize: '16px'}}>
      <img
        className="guy-catfishing"
        style={{
          position: 'absolute',
          width: '51.625em',
          height: '31.9375em',
          left: '0em',
          top: '35.5625em'
        }}
        src="https://www.didit.com/wp-content/uploads/2014/06/fishinsSM.jpg"
      />
      <div>
        <p
          style={{
            position: 'absolute',
            left: '323px',
            top: '483px',
            fontSize: '72px',
            lineHeight: '97px'
          }}
        >
          {`Be anyone you want ;)`}
        </p>
        <p
          style={{
            position: 'absolute',
            left: '323px',
            top: '600px',
            fontSize: '36px',
            lineHeight: '48px'
          }}
        >
          Just one click away
        </p>
      </div>
      {/* <p>
        Our goal is to make sure you find the person of your dreams without ever
        having to show who you really are! Super Like takes the hardest part of
        online dating - creating that eye catching profile - and delivers a
        custom and tailored product that fit your catfishing needs.
      </p> */}
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
