import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <AppBar position="static" style={{background: '#90C0AC'}}>
      {isLoggedIn ? (
        <Toolbar>
          <img
            src="https://i.imgur.com/6NxxnDC.png"
            align="center"
            style={{width: 150, height: 100}}
          />
          <Typography variant="button">
            <div align="right">
              {/* The navbar will show these links after you log in */}
              <Link to="/home" style={{padding: 15, color: 'black'}}>
                {' '}
                Home
              </Link>
              <Link to="/products" style={{padding: 15, color: 'black'}}>
                Products
              </Link>
              <Link to="/account" style={{padding: 15, color: 'black'}}>
                Account
              </Link>
              <Link to="/cart" style={{padding: 15, color: 'black'}}>
                Cart
              </Link>
              <Link to="/reviews" style={{padding: 15, color: 'black'}}>
                Reviews
              </Link>
              <a
                href="#"
                onClick={handleClick}
                style={{padding: 15, color: 'black'}}
              >
                Logout
              </a>
            </div>
          </Typography>
        </Toolbar>
      ) : (
        <Toolbar>
          <Typography variant="button">
            {/* The navbar will show these links before you log in */}
            <Link to="/home" style={{padding: 15}}>
              Home
            </Link>
            <Link to="/products" style={{padding: 15}}>
              Products
            </Link>
            <Link to="/cart" style={{padding: 15}}>
              Cart
            </Link>
            <Link to="/reviews" style={{padding: 15}}>
              Reviews
            </Link>
            <Link to="/login" style={{padding: 15}}>
              Login
            </Link>
            <Link to="/signup" style={{padding: 15}}>
              Sign Up
            </Link>
          </Typography>
        </Toolbar>
      )}
    </AppBar>
    <hr />
  </div>
)
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
