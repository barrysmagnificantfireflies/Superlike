import {connect} from 'react-redux'
import React from 'react'
import {updateUserThunk} from '../store/user'

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
        <form onSubmit={this.handleSubmit}>
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
