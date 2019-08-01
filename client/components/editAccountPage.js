import {connect} from 'react-redux'
import React from 'react'
import axios from 'axios'

export class EditAccountPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.email,
      imageUrl: this.props.imageUrl
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const res = await axios.put(`/api/users/${this.props.id}`, {
      email: event.target.email.value,
      imageUrl: event.target.imageUrl.value
    })
    this.setState(res.data)
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
            name="imageURL"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <button type="submit">Submit Changes</button>
        </form>
      </div>
    )
  }
}
