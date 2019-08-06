import {connect} from 'react-redux'
import React from 'react'
import {updateUserThunk} from '../store/user'

//material ui imports
import clsx from 'clsx'
import {makeStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class EditAccountPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      email: this.props.email,
      imageUrl: this.props.imageUrl
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    this.props.updateUserThunk(this.state)
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <button type="submit">Submit Changes</button>
        </form> */}
        <form
          onSubmit={this.handleSubmit}
          style={{display: 'flex', flexWrap: 'wrap'}}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="email"
            id="outlined-name"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="imageUrl"
            id="outlined-name"
            label="Image URL"
            value={this.state.imageUrl}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Changes
          </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserThunk: user => dispatch(updateUserThunk(user))
  }
}

export default connect(null, mapDispatchToProps)(EditAccountPage)
