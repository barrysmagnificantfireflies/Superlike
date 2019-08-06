import {CardElement, injectStripe} from 'react-stripe-elements'
import React from 'react'
import Axios from 'axios'
class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {complete: false}
    this.submit = this.submit.bind(this)
  }
  async submit() {
    try {
      let {token} = await this.props.stripe.createToken({name: 'Name'})
      let response = Axios.post('/api/users/charge', {
        source: token.id,
        total: this.props.total
      })
      if (response.ok) this.setState({complete: true})
    } catch (error) {
      alert(
        'credit card information failed. To checkout without paying please click OK!'
      )
      console.log(this.props)
      this.setState({complete: true})
      // console.error(error)
    }
  }

  render() {
    if (this.state.complete) {
      this.props.checkout()
      return <h1>Purchase Complete</h1>
    }
    return (
      <div className="checkout">
        {console.log(this.props)}
        <p>Purchase Now</p>
        <CardElement />
        <p />
        <button onClick={this.submit}>Send</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
