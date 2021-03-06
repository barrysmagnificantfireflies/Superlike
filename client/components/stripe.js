import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class Stripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>Please Enter Your Credit Card Info Below!</h1>
          <Elements>
            <CheckoutForm
              total={this.props.total}
              checkout={this.props.checkout}
            />
          </Elements>
        </div>
      </StripeProvider>
    )
  }
}

export default Stripe
